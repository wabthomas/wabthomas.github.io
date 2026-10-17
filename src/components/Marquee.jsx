import { Fragment } from "react";
import { TECH_STACK } from "../data/profile";

function Group() {
  return (
    <div className="marquee__group">
      {TECH_STACK.map((item) => (
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
