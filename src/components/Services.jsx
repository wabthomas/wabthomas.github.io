import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import { IconMonitor, IconPen, IconSendPlain, IconSettings } from "./Icons";

export default function Services() {
  const { t } = useLanguage();

  const items = [
    {
      icon: <IconMonitor />,
      title: "services.s1t",
      desc: "services.s1d",
      list: ["services.s1l1", "services.s1l2", "services.s1l3"],
    },
    {
      icon: <IconSendPlain size={24} />,
      title: "services.s2t",
      desc: "services.s2d",
      list: ["services.s2l1", "services.s2l2", "services.s2l3"],
    },
    {
      icon: <IconPen size={24} />,
      title: "services.s3t",
      desc: "services.s3d",
      list: ["services.s3l1", "services.s3l2", "services.s3l3"],
    },
    {
      icon: <IconSettings />,
      title: "services.s4t",
      desc: "services.s4d",
      list: ["services.s4l1", "services.s4l2", "services.s4l3"],
    },
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal as="header" className="section__head">
          <p className="section__eyebrow">{t("services.eyebrow")}</p>
          <h2 className="section__title">{t("services.title")}</h2>
          <p className="section__sub">{t("services.sub")}</p>
        </Reveal>

        <div className="services__grid">
          {items.map((item) => (
            <Reveal as="article" className="service-card" key={item.title}>
              <div className="service-card__icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3>{t(item.title)}</h3>
              <p>{t(item.desc)}</p>
              <ul className="service-card__list">
                {item.list.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
