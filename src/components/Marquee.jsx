import { Fragment } from "react";
import { Link } from "react-router-dom";
import { TECHNOLOGIES } from "../data/tech";
import { TechIcon } from "./TechIcons";

const ITEMS = Object.values(TECHNOLOGIES);

function Group() {
  return (
    <div className="marquee__group">
      {ITEMS.map((tech) => (
        <Fragment key={tech.slug}>
          <Link to={`/tech/${tech.slug}`} className="marquee__tech">
            <span className="marquee__tech-icon" style={{ color: tech.color }}>
              <TechIcon name={tech.icon} size={16} />
            </span>
            {tech.name}
          </Link>
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
