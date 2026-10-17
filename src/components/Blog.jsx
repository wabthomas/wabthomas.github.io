import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import { IconExternal } from "./Icons";

export default function Blog() {
  const { t } = useLanguage();

  return (
    <section className="section section--alt" id="blog">
      <div className="container">
        <Reveal className="blog-band">
          <div className="blog-band__content">
            <p className="section__eyebrow">{t("blog.eyebrow")}</p>
            <h2 className="section__title">{t("blog.title")}</h2>
            <p className="blog-band__text">{t("blog.text")}</p>
            <div className="tags tags--lg">
              <span className="tag">Tech</span>
              <span className="tag">RDC</span>
              <span className="tag">{t("blog.tag3")}</span>
              <span className="tag">{t("blog.tag4")}</span>
            </div>
            <a href="https://wab-infos.com" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <span>{t("blog.cta")}</span>
              <IconExternal size={18} />
            </a>
          </div>
          <div className="blog-band__visual" aria-hidden="true">
            <div className="blog-band__card">
              <span className="blog-band__card-emoji">✍️</span>
              <span className="blog-band__card-label">wab-infos.com</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
