import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import { IconExternal } from "./Icons";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section className="section section--alt" id="projets">
      <div className="container">
        <Reveal as="header" className="section__head">
          <p className="section__eyebrow">{t("projects.eyebrow")}</p>
          <h2 className="section__title">{t("projects.title")}</h2>
          <p className="section__sub">{t("projects.sub")}</p>
        </Reveal>

        <div className="projects__grid">
          <Reveal as="article" className="project-card">
            <div className="project-card__cover project-card__cover--1">
              <span className="project-card__emoji">📰</span>
            </div>
            <div className="project-card__body">
              <div className="project-card__meta">
                <span className="pill pill--live">{t("projects.live")}</span>
                <span className="pill">TypeScript</span>
              </div>
              <h3 className="project-card__title">Wab Infos</h3>
              <p className="project-card__desc">{t("projects.p1d")}</p>
              <div className="project-card__links">
                <a href="https://wab-infos.com" target="_blank" rel="noopener noreferrer" className="text-link">
                  <span>{t("projects.visit")}</span>
                  <IconExternal />
                </a>
                <a href="https://github.com/wabthomas/wab-infos" target="_blank" rel="noopener noreferrer" className="text-link text-link--muted">
                  <span>{t("projects.code")}</span>
                  <IconExternal />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal as="article" className="project-card">
            <div className="project-card__cover project-card__cover--2">
              <span className="project-card__emoji">♿</span>
            </div>
            <div className="project-card__body">
              <div className="project-card__meta">
                <span className="pill pill--wip">{t("projects.wip")}</span>
                <span className="pill">{t("projects.pillImpact")}</span>
              </div>
              <h3 className="project-card__title">adiong</h3>
              <p className="project-card__desc">{t("projects.p2d")}</p>
              <div className="project-card__links">
                <a href="https://github.com/wabthomas/adiong" target="_blank" rel="noopener noreferrer" className="text-link">
                  <span>{t("projects.code")}</span>
                  <IconExternal />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal as="article" className="project-card">
            <div className="project-card__cover project-card__cover--3">
              <span className="project-card__emoji">⚙️</span>
            </div>
            <div className="project-card__body">
              <div className="project-card__meta">
                <span className="pill">{t("projects.pillSoftware")}</span>
                <span className="pill">Open Source</span>
              </div>
              <h3 className="project-card__title">{t("projects.p3t")}</h3>
              <p className="project-card__desc">{t("projects.p3d")}</p>
              <div className="project-card__links">
                <a href="https://github.com/wabthomas?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-link">
                  <span>{t("projects.seeAll")}</span>
                  <IconExternal />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
