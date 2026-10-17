import { Link } from "react-router-dom";
import { HERO_CHIPS } from "../data/profile";
import { TECHNOLOGIES } from "../data/tech";
import { useLanguage } from "../context/LanguageContext";
import SocialLinks from "./SocialLinks";
import { TechIcon } from "./TechIcons";
import { IconArrow, IconCloud, IconMobile, IconReact } from "./Icons";

const CHIP_ICONS = {
  react: IconReact,
  mobile: IconMobile,
  cloud: IconCloud,
};

export default function Hero() {
  const { t } = useLanguage();
  const techs = Object.values(TECHNOLOGIES);

  return (
    <section className="hero" id="accueil">
      <div className="hero__mesh" aria-hidden="true">
        <svg className="hero__constellation" viewBox="0 0 800 600" fill="none">
          <g stroke="currentColor" strokeWidth="0.6" opacity="0.35">
            <line x1="80" y1="120" x2="220" y2="80" />
            <line x1="220" y1="80" x2="340" y2="160" />
            <line x1="340" y1="160" x2="480" y2="100" />
            <line x1="480" y1="100" x2="620" y2="180" />
            <line x1="620" y1="180" x2="720" y2="90" />
            <line x1="120" y1="300" x2="280" y2="260" />
            <line x1="280" y1="260" x2="400" y2="340" />
            <line x1="400" y1="340" x2="560" y2="280" />
            <line x1="560" y1="280" x2="680" y2="360" />
            <line x1="200" y1="460" x2="360" y2="420" />
            <line x1="360" y1="420" x2="520" y2="480" />
            <line x1="520" y1="480" x2="660" y2="420" />
          </g>
          <g fill="currentColor">
            {[
              [80, 120], [220, 80], [340, 160], [480, 100], [620, 180], [720, 90],
              [120, 300], [280, 260], [400, 340], [560, 280], [680, 360],
              [200, 460], [360, 420], [520, 480], [660, 420],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 3.2 : 2} className="hero__node" style={{ animationDelay: `${i * 0.25}s` }} />
            ))}
          </g>
        </svg>
        <span className="orb orb--1" />
        <span className="orb orb--2" />
      </div>

      <div className="container hero__layout">
        <div className="hero__portrait-block">
          <div className="hero__ring-wrap">
            <div className="hero__ring" aria-hidden="true" />
            <div className="hero__ring hero__ring--spin" aria-hidden="true" />
            <img
              src="/portrait.png"
              alt="Thomas Zawadi"
              className="hero__avatar"
              width="280"
              height="280"
              loading="eager"
            />
            {HERO_CHIPS.map((chip, i) => {
              const Icon = CHIP_ICONS[chip.icon];
              return (
                <div key={chip.title} className={`hero__float hero__float--${i + 1}`}>
                  <span className="hero__float-icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <div>
                    <strong>{chip.title}</strong>
                    <span>{t(chip.subKey)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="hero__status">
            <span className="pulse-dot" aria-hidden="true" />
            <span>{t("hero.eyebrow")}</span>
          </p>
        </div>

        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__hello">{t("hero.title1")}</span>
            <span className="hero__name">{t("hero.name")}</span>
          </h1>
          <p className="hero__tagline">{t("hero.tagline")}</p>
          <p className="hero__sub">{t("hero.sub")}</p>

          <div className="hero__cta">
            <a href="#projets" className="btn btn--primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
            }}>
              <span>{t("hero.cta1")}</span>
              <IconArrow />
            </a>
            <a href="#contact" className="btn btn--ghost" onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}>
              {t("hero.cta2")}
            </a>
          </div>

          <SocialLinks />
        </div>
      </div>

      <div className="hero__tech">
        <div className="container">
          <p className="hero__tech-label">{t("hero.techLabel")}</p>
          <div className="hero__tech-row">
            {techs.map((tech) => (
              <Link
                key={tech.slug}
                to={`/tech/${tech.slug}`}
                className="hero__tech-pill hero__tech-pill--link"
                style={{ "--tech-color": tech.color }}
              >
                <span className="hero__tech-icon" style={{ color: tech.color }}>
                  <TechIcon name={tech.icon} size={18} />
                </span>
                <span>{tech.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
