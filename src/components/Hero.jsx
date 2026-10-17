import { useLanguage } from "../context/LanguageContext";
import { IconArrow, IconBlog, IconGithub, IconX } from "./Icons";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="accueil">
      <div className="hero__orbs" aria-hidden="true">
        <span className="orb orb--1" />
        <span className="orb orb--2" />
        <span className="orb orb--3" />
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="pulse-dot" aria-hidden="true" />
            <span>{t("hero.eyebrow")}</span>
          </p>
          <h1 className="hero__title">
            <span>{t("hero.title1")}</span>
            <span className="hero__name">
              Thomas Zawadi<span className="accent">.</span>
            </span>
            <span className="hero__tagline">{t("hero.tagline")}</span>
          </h1>
          <p className="hero__sub">{t("hero.sub")}</p>

          <div className="hero__cta">
            <a href="#projets" className="btn btn--primary">
              <span>{t("hero.cta1")}</span>
              <IconArrow />
            </a>
            <a href="#contact" className="btn btn--ghost">
              {t("hero.cta2")}
            </a>
          </div>

          <div className="hero__socials">
            <a href="https://github.com/wabthomas" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
              <IconGithub />
            </a>
            <a href="https://twitter.com/thomaszawadi01" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="X / Twitter">
              <IconX />
            </a>
            <a href="https://wab-infos.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Blog wab-infos.com">
              <IconBlog />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__portrait-wrap">
            <div className="hero__portrait-glow" aria-hidden="true" />
            <img
              src="/portrait.jpg"
              alt="Portrait de Thomas Zawadi"
              className="hero__portrait"
              width="320"
              height="320"
              loading="eager"
            />
            <div className="hero__badge hero__badge--top">
              <span className="hero__badge-icon">🚀</span>
              <span>{t("hero.badge1")}</span>
            </div>
            <div className="hero__badge hero__badge--bottom">
              <span className="hero__badge-icon">📍</span>
              <span>Goma, RDC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
