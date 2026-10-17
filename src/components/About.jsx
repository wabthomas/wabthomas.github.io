import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLanguage();

  const facts = [
    { label: t("about.role"), value: t("about.roleVal") },
    { label: t("about.loc"), value: t("about.locVal") },
    { label: t("about.langs"), value: t("about.langsVal") },
    { label: t("about.edu"), value: t("about.eduVal") },
  ];

  return (
    <section className="section" id="apropos">
      <div className="container">
        <Reveal as="header" className="section__head">
          <p className="section__eyebrow">{t("about.eyebrow")}</p>
          <h2 className="section__title">{t("about.title")}</h2>
        </Reveal>

        <div className="about__grid about__grid--pro">
          <Reveal className="about__text">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </Reveal>

          <Reveal className="about__facts">
            {facts.map((f) => (
              <div className="fact-row" key={f.label}>
                <span>{f.label}</span>
                <strong>{f.value}</strong>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
