import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const LINKS = [
  { href: "#accueil", key: "nav.home" },
  { href: "#apropos", key: "nav.about" },
  { href: "#projets", key: "nav.projects" },
  { href: "#services", key: "nav.services" },
  { href: "#blog", key: "nav.blog" },
  { href: "#contact", key: "nav.contact", cta: true },
];

export default function Nav({ scrolled, activeId }) {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <>
      <div
        className={`nav__backdrop${menuOpen ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <header className={`nav${scrolled ? " is-scrolled" : ""}`} id="nav">
        <div className="container nav__inner">
          <a href="#accueil" className="nav__logo" aria-label="Thomas Zawadi — accueil" onClick={closeMenu}>
            <span className="nav__logo-badge">WT</span>
            <span className="nav__logo-name">
              Thomas<span className="accent">.</span>
            </span>
          </a>

          <nav
            className={`nav__menu${menuOpen ? " is-open" : ""}`}
            id="navMenu"
            aria-label="Navigation principale"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav__link${link.cta ? " nav__link--cta" : ""}${
                  activeId === link.href.slice(1) ? " is-active" : ""
                }`}
                onClick={closeMenu}
              >
                {t(link.key)}
              </a>
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
              id="navBurger"
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
