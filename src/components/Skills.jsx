import { SKILL_GROUPS } from "../data/profile";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import { IconCloud, IconCode, IconMobile, IconPen, IconServer, IconUsers } from "./Icons";

const ICONS = {
  code: IconCode,
  server: IconServer,
  mobile: IconMobile,
  cloud: IconCloud,
  pen: IconPen,
  users: IconUsers,
};

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
                    <span className="tag" key={tag}>{tag}</span>
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
