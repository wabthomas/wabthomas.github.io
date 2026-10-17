import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import { IconCode, IconPen, IconPlusCircle, IconSendPlain } from "./Icons";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="section" id="apropos">
      <div className="container">
        <Reveal as="header" className="section__head">
          <p className="section__eyebrow">{t("about.eyebrow")}</p>
          <h2 className="section__title">{t("about.title")}</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__text">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>

            <div className="skills">
              <div className="skill-group">
                <h3 className="skill-group__title">{t("about.skill1t")}</h3>
                <div className="tags">
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">TypeScript</span>
                </div>
              </div>
              <div className="skill-group">
                <h3 className="skill-group__title">{t("about.skill2t")}</h3>
                <div className="tags">
                  <span className="tag">API</span>
                  <span className="tag">Bases de données</span>
                  <span className="tag">Logique serveur</span>
                </div>
              </div>
              <div className="skill-group">
                <h3 className="skill-group__title">{t("about.skill3t")}</h3>
                <div className="tags">
                  <span className="tag">Blogging</span>
                  <span className="tag">SEO</span>
                  <span className="tag">Réseaux sociaux</span>
                  <span className="tag">Stratégie éditoriale</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="about__cards">
            <article className="mini-card">
              <div className="mini-card__icon" aria-hidden="true"><IconCode /></div>
              <h3>{t("about.card1t")}</h3>
              <p>{t("about.card1d")}</p>
            </article>
            <article className="mini-card">
              <div className="mini-card__icon" aria-hidden="true"><IconPen /></div>
              <h3>{t("about.card2t")}</h3>
              <p>{t("about.card2d")}</p>
            </article>
            <article className="mini-card">
              <div className="mini-card__icon" aria-hidden="true"><IconSendPlain /></div>
              <h3>{t("about.card3t")}</h3>
              <p>{t("about.card3d")}</p>
            </article>
            <article className="mini-card">
              <div className="mini-card__icon" aria-hidden="true"><IconPlusCircle /></div>
              <h3>{t("about.card4t")}</h3>
              <p>{t("about.card4d")}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
