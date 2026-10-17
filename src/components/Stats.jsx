import { useEffect, useRef, useState } from "react";
import { STATS } from "../data/profile";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return undefined;
    let start = null;
    let frame;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);
  return value;
}

function StatItem({ item, active }) {
  const { t } = useLanguage();
  const n = useCountUp(item.value, active);
  return (
    <div className="stat-card">
      <p className="stat-card__value">
        {n}
        <span>{item.suffix}</span>
      </p>
      <p className="stat-card__label">{t(item.key)}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref} aria-label="Statistiques">
      <div className="container">
        <Reveal className="stats__grid">
          {STATS.map((item) => (
            <StatItem key={item.key} item={item} active={active} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
