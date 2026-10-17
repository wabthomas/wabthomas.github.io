import { Link, useParams } from "react-router-dom";
import { getTech } from "../data/tech";
import { useLanguage } from "../context/LanguageContext";
import { TechIcon } from "./TechIcons";
import { IconArrow } from "./Icons";

export default function TechDetail() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const tech = getTech(slug);

  if (!tech) {
    return (
      <section className="section tech-page">
        <div className="container">
          <p className="tech-page__missing">
            {lang === "fr" ? "Technologie introuvable." : "Technology not found."}
          </p>
          <Link to="/" className="btn btn--ghost">
            ← {lang === "fr" ? "Retour" : "Back"}
          </Link>
        </div>
      </section>
    );
  }

  const copy = tech[lang] || tech.fr;

  return (
    <section className="section tech-page">
      <div className="container tech-page__inner">
        <Link to="/" className="tech-page__back">
          ← {lang === "fr" ? "Retour au portfolio" : "Back to portfolio"}
        </Link>

        <header className="tech-page__head">
          <div
            className="tech-page__icon"
            style={{ color: tech.color, boxShadow: `0 12px 32px ${tech.color}33` }}
          >
            <TechIcon name={tech.icon} size={36} />
          </div>
          <div>
            <p className="section__eyebrow">{lang === "fr" ? "Technologie" : "Technology"}</p>
            <h1 className="tech-page__title">{tech.name}</h1>
            <p className="tech-page__tagline">{copy.tagline}</p>
          </div>
        </header>

        <p className="tech-page__body">{copy.body}</p>

        <div className="tech-page__block">
          <h2>{lang === "fr" ? "Utilisée sur" : "Used on"}</h2>
          <div className="tags tags--lg">
            {copy.uses.map((u) => (
              <span className="tag" key={u}>{u}</span>
            ))}
          </div>
        </div>

        <div className="tech-page__actions">
          <a
            href={tech.official}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <span>{lang === "fr" ? "Site officiel" : "Official site"}</span>
            <IconArrow />
          </a>
          <Link
            to="/"
            className="btn btn--ghost"
            onClick={() => {
              setTimeout(() => {
                document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
              }, 80);
            }}
          >
            {t("nav.projects")}
          </Link>
        </div>
      </div>
    </section>
  );
}
