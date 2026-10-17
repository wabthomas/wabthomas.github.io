import { PROJECTS } from "../data/profile";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import { IconExternal } from "./Icons";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section className="section" id="projets">
      <div className="container">
        <Reveal as="header" className="section__head">
          <p className="section__eyebrow">{t("projects.eyebrow")}</p>
          <h2 className="section__title">{t("projects.title")}</h2>
          <p className="section__sub">{t("projects.sub")}</p>
        </Reveal>

        <div className="projects__grid projects__grid--3">
          {PROJECTS.map((p) => (
            <Reveal as="article" className="project-card" key={p.title}>
              <div className={`project-card__cover project-card__cover--${p.cover}`}>
                <span className="project-card__emoji">{p.emoji}</span>
              </div>
              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className={`pill ${p.status === "live" ? "pill--live" : "pill--wip"}`}>
                    {t(p.status === "live" ? "projects.live" : "projects.wip")}
                  </span>
                  {p.tags.slice(0, 2).map((tag) => (
                    <span className="pill" key={tag}>{tag}</span>
                  ))}
                </div>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{t(p.descKey)}</p>
                {p.links.length > 0 && (
                  <div className="project-card__links">
                    {p.links.map((link) => (
                      <a
                        key={link.href + link.labelKey}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-link${link.muted ? " text-link--muted" : ""}`}
                      >
                        <span>{t(link.labelKey)}</span>
                        <IconExternal />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
