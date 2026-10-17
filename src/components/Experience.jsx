import { EDUCATION, EXPERIENCE } from "../data/profile";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section className="section section--alt" id="parcours">
      <div className="container">
        <Reveal as="header" className="section__head">
          <p className="section__eyebrow">{t("exp.eyebrow")}</p>
          <h2 className="section__title">{t("exp.title")}</h2>
          <p className="section__sub">{t("exp.sub")}</p>
        </Reveal>

        <div className="timeline">
          {EXPERIENCE.map((job) => (
            <Reveal as="article" className="timeline__item" key={job.roleKey}>
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__meta">
                  <span className="pill pill--live">{t(job.periodKey)}</span>
                  <span className="timeline__place">{t(job.placeKey)}</span>
                </div>
                <h3 className="timeline__role">{t(job.roleKey)}</h3>
                <p className="timeline__org">{job.org}</p>
                <ul className="timeline__list">
                  {job.bulletsKey.map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
                <div className="tags">
                  {job.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="edu-block">
          <p className="section__eyebrow">{t("edu.eyebrow")}</p>
          <div className="edu-grid">
            {EDUCATION.map((ed) => (
              <article className="edu-card" key={ed.titleKey}>
                <h3>{t(ed.titleKey)}</h3>
                <p>{ed.school}</p>
                <span>{ed.period}</span>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
