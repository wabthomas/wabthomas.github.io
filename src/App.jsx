import { useCallback, useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { IconUp } from "./components/Icons";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);
  const [activeId, setActiveId] = useState("accueil");
  const [toast, setToast] = useState({ visible: false, message: "" });

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
  }, []);

  const showToast = useCallback((message) => {
    setToast({ visible: true, message });
    const timer = setTimeout(() => setToast({ visible: false, message: "" }), 4200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span id="scrollBar" style={{ width: `${progress}%` }} />
      </div>

      <Nav scrolled={scrolled} activeId={activeId} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Services />
        <Blog />
        <Contact showToast={showToast} />
      </main>

      <Footer />

      <button
        type="button"
        className={`back-top${showBackTop ? " is-visible" : ""}`}
        id="backTop"
        aria-label="Retour en haut"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IconUp />
      </button>

      <div
        className={`toast${toast.visible ? " is-visible" : ""}`}
        id="toast"
        role="status"
        aria-live="polite"
      >
        {toast.message}
      </div>
    </>
  );
}
