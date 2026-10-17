import { Link, useParams } from "react-router-dom";
import { getProject } from "../data/projects";
import { techSlugFromName, getTech } from "../data/tech";
import { useLanguage } from "../context/LanguageContext";
import { TechIcon } from "./TechIcons";
import { IconArrow, IconExternal } from "./Icons";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const project = getProject(slug);

  if (!project) {
    return (
      <section className="section tech-page">
        <div className="container">
          <p className="tech-page__missing">
            {lang === "fr" ? "Projet introuvable." : "Project not found."}
          </p>
          <Link to="/" className="btn btn--ghost">
            ← {lang === "fr" ? "Retour" : "Back"}
          </Link>
        </div>
      </section>
    );
  }

  const copy = project[lang] || project.fr;

  return (
    <section className="section tech-page">
      <div className="container tech-page__inner">
        <Link to="/" className="tech-page__back" onClick={() => {
          setTimeout(() => document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" }), 80);
        }}>
          ← {lang === "fr" ? "Retour aux projets" : "Back to projects"}
        </Link>

        <header className="tech-page__head">
          <div className={`project-detail__cover project-card__cover--${project.cover}${project.image ? " project-detail__cover--photo" : ""}`}>
            {project.image ? (
              <img src={project.image} alt="" className="project-detail__img" />
            ) : (
              <span className="project-card__emoji">{project.emoji}</span>
            )}
          </div>
          <div>
            <p className="section__eyebrow">
              {project.status === "live" ? t("projects.live") : t("projects.wip")}
            </p>
            <h1 className="tech-page__title">{project.title}</h1>
            <p className="tech-page__tagline">{copy.summary}</p>
          </div>
        </header>

        <p className="tech-page__body">{copy.body}</p>

        <div className="tech-page__block">
          <h2>{lang === "fr" ? "Points clés" : "Highlights"}</h2>
          <ul className="timeline__list">
            {copy.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="tech-page__block">
          <h2>{lang === "fr" ? "Stack" : "Stack"}</h2>
          <div className="tags tags--lg">
            {project.tags.map((tag) => {
              const tech = getTech(techSlugFromName(tag));
              if (tech) {
                return (
                  <Link key={tag} to={`/tech/${tech.slug}`} className="tag tag--link">
                    <span className="tag__icon" style={{ color: tech.color }}>
                      <TechIcon name={tech.icon} size={14} />
                    </span>
                    {tech.name}
                  </Link>
                );
              }
              return <span className="tag" key={tag}>{tag}</span>;
            })}
          </div>
        </div>

        <div className="tech-page__actions">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${link.muted ? "btn--ghost" : "btn--primary"}`}
            >
              <span>{t(link.labelKey)}</span>
              <IconExternal size={18} />
            </a>
          ))}
          <Link to="/" className="btn btn--ghost">
            <span>{lang === "fr" ? "Portfolio" : "Portfolio"}</span>
            <IconArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
