import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link to="/" className="nav__logo">
          <img src="/portrait.png" alt="" className="nav__avatar" width="36" height="36" />
          <span className="nav__logo-name">
            Thomas<span className="accent">.</span>
          </span>
        </Link>
        <p className="footer__copy">
          © {year} Thomas Zawadi · WAB · {t("footer.made")}{" "}
          <span className="heart">❤️</span> {t("footer.in")}
        </p>
        <SocialLinks className="footer__socials" btnClass="" />
      </div>
    </footer>
  );
}
