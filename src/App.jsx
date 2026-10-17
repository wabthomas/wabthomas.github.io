import { useCallback, useEffect, useState } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import TechDetail from "./components/TechDetail";
import Home from "./pages/Home";
import { IconUp } from "./components/Icons";

function ScrollManager({ showBackTop, setShowBackTop, setScrolled, setProgress, setActiveId }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
    } else if (location.pathname.startsWith("/tech/")) {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
  }, [location]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setShowBackTop(y > 600);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);

      let current = "accueil";
      document.querySelectorAll("main section[id]").forEach((sec) => {
        if (sec.getBoundingClientRect().top <= 140) current = sec.id;
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [setActiveId, setProgress, setScrolled, setShowBackTop, location.pathname]);

  return null;
}

function Shell() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);
  const [activeId, setActiveId] = useState("accueil");
  const [toast, setToast] = useState({ visible: false, message: "" });
  const location = useLocation();
  const isTechPage = location.pathname.startsWith("/tech/");

  const showToast = useCallback((message) => {
    setToast({ visible: true, message });
    const timer = setTimeout(() => setToast({ visible: false, message: "" }), 4200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollManager
        showBackTop={showBackTop}
        setShowBackTop={setShowBackTop}
        setScrolled={setScrolled}
        setProgress={setProgress}
        setActiveId={setActiveId}
      />

      <div className="scroll-progress" aria-hidden="true">
        <span id="scrollBar" style={{ width: `${progress}%` }} />
      </div>

      <Nav scrolled={scrolled} activeId={isTechPage ? "" : activeId} />

      <main>
        <Routes>
          <Route path="/" element={<Home showToast={showToast} />} />
          <Route path="/tech/:slug" element={<TechDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      <button
        type="button"
        className={`back-top${showBackTop ? " is-visible" : ""}`}
        aria-label="Retour en haut"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IconUp />
      </button>

      <div
        className={`toast${toast.visible ? " is-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast.message}
      </div>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Shell />
      </HashRouter>
    </LanguageProvider>
  );
}
