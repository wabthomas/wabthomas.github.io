import { useLanguage } from "../context/LanguageContext";
import { IconBlog, IconGithub, IconX } from "./Icons";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#accueil" className="nav__logo">
          <span className="nav__logo-badge">WT</span>
          <span className="nav__logo-name">
            Thomas<span className="accent">.</span>
          </span>
        </a>
        <p className="footer__copy">
          © {year} Thomas Zawadi · WabCompany LTD · {t("footer.made")}{" "}
          <span className="heart">❤️</span> {t("footer.in")}
        </p>
        <div className="footer__socials">
          <a href="https://github.com/wabthomas" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <IconGithub size={18} />
          </a>
          <a href="https://twitter.com/thomaszawadi01" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
            <IconX size={16} />
          </a>
          <a href="https://wab-infos.com" target="_blank" rel="noopener noreferrer" aria-label="Blog">
            <IconBlog size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
