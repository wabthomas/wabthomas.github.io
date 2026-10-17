import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const LINKS = [
  { id: "accueil", key: "nav.home" },
  { id: "apropos", key: "nav.about" },
  { id: "competences", key: "nav.skills" },
  { id: "projets", key: "nav.projects" },
  { id: "parcours", key: "nav.experience" },
  { id: "services", key: "nav.services" },
  { id: "contact", key: "nav.contact", cta: true },
];

export default function Nav({ scrolled, activeId }) {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const goSection = (id) => {
    closeMenu();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={`nav__backdrop${menuOpen ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <header className={`nav${scrolled ? " is-scrolled" : ""}`} id="nav">
        <div className="container nav__inner">
          <Link
            to="/"
            className="nav__logo"
            aria-label="Thomas Zawadi — accueil"
            onClick={() => {
              closeMenu();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src="/portrait.png" alt="" className="nav__avatar" width="36" height="36" />
            <span className="nav__logo-name">
              Thomas<span className="accent">.</span>
            </span>
          </Link>

          <nav
            className={`nav__menu${menuOpen ? " is-open" : ""}`}
            id="navMenu"
            aria-label="Navigation principale"
          >
            {LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                className={`nav__link${link.cta ? " nav__link--cta" : ""}${
                  activeId === link.id ? " is-active" : ""
                }`}
                onClick={() => goSection(link.id)}
              >
                {t(link.key)}
              </button>
            ))}
          </nav>

          <div className="nav__actions">
            <div className="lang-switch" role="group" aria-label="Langue / Language">
              {["fr", "en"].map((code) => (
                <button
                  key={code}
                  type="button"
                  className={`lang-switch__btn${lang === code ? " is-active" : ""}`}
                  aria-pressed={lang === code}
                  onClick={() => setLang(code)}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              className={`nav__burger${menuOpen ? " is-open" : ""}`}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="navMenu"
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
