import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import { IconExternal } from "./Icons";

export default function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section className="section" id="projets">
      <div className="container">
        <Reveal as="header" className="section__head">
          <p className="section__eyebrow">{t("projects.eyebrow")}</p>
          <h2 className="section__title">{t("projects.title")}</h2>
          <p className="section__sub">{t("projects.sub")}</p>
        </Reveal>

        <div className="projects__grid projects__grid--3">
          {PROJECTS.map((p) => {
            const copy = p[lang] || p.fr;
            return (
              <Reveal as="article" className="project-card" key={p.slug}>
                <Link to={`/project/${p.slug}`} className="project-card__hit">
                  <div className={`project-card__cover project-card__cover--${p.cover}${p.image ? " project-card__cover--photo" : ""}`}>
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="project-card__img"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="project-card__emoji">{p.emoji}</span>
                    )}
                  </div>
                </Link>
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span className={`pill ${p.status === "live" ? "pill--live" : "pill--wip"}`}>
                      {t(p.status === "live" ? "projects.live" : "projects.wip")}
                    </span>
                    {p.tags.slice(0, 2).map((tag) => (
                      <span className="pill" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3 className="project-card__title">
                    <Link to={`/project/${p.slug}`}>{p.title}</Link>
                  </h3>
                  <p className="project-card__desc">{copy.summary}</p>
                  <div className="project-card__links">
                    <Link to={`/project/${p.slug}`} className="text-link">
                      <span>{t("projects.details")}</span>
                      <IconExternal />
                    </Link>
                    {p.links.slice(0, 1).map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link text-link--muted"
                      >
                        <span>{t(link.labelKey)}</span>
                        <IconExternal />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
