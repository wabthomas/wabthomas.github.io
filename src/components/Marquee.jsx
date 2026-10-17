import { Fragment } from "react";

const ITEMS = [
  "Développement Web",
  "Marketing Digital",
  "Création de Contenu",
  "Blogging",
  "Accessibilité",
  "SEO",
  "TypeScript",
  "Innovation en RDC",
];

function Group() {
  return (
    <div className="marquee__group">
      {ITEMS.map((item) => (
        <Fragment key={item}>
          <span>{item}</span>
          <i>✦</i>
        </Fragment>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <Group />
        <Group />
      </div>
    </div>
  );
}
