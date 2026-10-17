import { Link } from "react-router-dom";
import { SKILL_GROUPS } from "../data/profile";
import { techSlugFromName, getTech } from "../data/tech";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import { IconCloud, IconCode, IconMobile, IconPen, IconServer, IconUsers } from "./Icons";
import { TechIcon } from "./TechIcons";

const ICONS = {
  code: IconCode,
  server: IconServer,
  mobile: IconMobile,
  cloud: IconCloud,
  pen: IconPen,
  users: IconUsers,
};

function SkillTag({ tag }) {
  const slug = techSlugFromName(tag);
  const tech = getTech(slug);
  if (!tech) {
    return <span className="tag">{tag}</span>;
  }
  return (
    <Link to={`/tech/${tech.slug}`} className="tag tag--link">
      <span className="tag__icon" style={{ color: tech.color }}>
        <TechIcon name={tech.icon} size={14} />
      </span>
      {tech.name}
    </Link>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section" id="competences">
      <div className="container">
        <Reveal as="header" className="section__head">
          <p className="section__eyebrow">{t("skills.eyebrow")}</p>
          <h2 className="section__title">{t("skills.title")}</h2>
          <p className="section__sub">{t("skills.sub")}</p>
        </Reveal>

        <div className="skills-grid">
          {SKILL_GROUPS.map((g) => {
            const Icon = ICONS[g.icon];
            return (
              <Reveal as="article" className="skill-card" key={g.titleKey}>
                <div className="skill-card__icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3>{t(g.titleKey)}</h3>
                <p>{t(g.descKey)}</p>
                <div className="tags">
                  {g.tags.map((tag) => (
                    <SkillTag key={tag} tag={tag} />
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
