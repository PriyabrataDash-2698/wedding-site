import { useEffect, useRef, useState } from "react";
import { CONFIG } from "../config.js";
import { useLang } from "../i18n.jsx";

const base = import.meta.env.BASE_URL;

function Tile({ p }) {
  const { tr } = useLang();
  return p.src
    ? <img src={base + p.src} alt={tr(p.cap)} loading="lazy" />
    : <div className="ph" style={{ background: `linear-gradient(150deg,${p.c[0]},${p.c[1]})` }} />;
}

export default function Gallery() {
  const { t, tr } = useLang();
  const rail = useRef(null);
  const [open, setOpen] = useState(null);

  // 3D tilt + scale of cards based on distance from the centre of the rail.
  useEffect(() => {
    const el = rail.current;
    let raf;
    const tick = () => {
      const mid = el.getBoundingClientRect().left + el.clientWidth / 2;
      el.querySelectorAll(".card").forEach((c) => {
        const r = c.getBoundingClientRect();
        const d = (r.left + r.width / 2 - mid) / el.clientWidth;
        const a = Math.min(Math.abs(d), 1);
        c.style.transform = `rotateY(${-d * 28}deg) scale(${1 - a * 0.12})`;
        c.style.opacity = 1 - a * 0.35;
      });
    };
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); };
    on();
    el.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { cancelAnimationFrame(raf); el.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);

  useEffect(() => {
    const k = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  const p = open !== null ? CONFIG.photos[open] : null;
  return (
    <section className="gal" id="gallery">
      <h2>{t("momentsTitle")}</h2>
      <p className="lead">{t("momentsLead")}</p>
      <div className="rail" ref={rail}>
        {CONFIG.photos.map((ph, i) => (
          <button className="card" key={i} onClick={() => setOpen(i)} aria-label={`${t("openPhoto")}: ${tr(ph.cap)}`}>
            <Tile p={ph} />
            <span className="cap">{tr(ph.cap)}</span>
          </button>
        ))}
      </div>
      <div className={"lb" + (p ? " on" : "")} onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-hidden={!p}>
        <button className="x" aria-label={t("closePhoto")} onClick={() => setOpen(null)}>×</button>
        {p && (
          <div className="big" onClick={(e) => e.stopPropagation()}>
            <Tile p={p} />
            <span className="cap">{tr(p.cap)}</span>
          </div>
        )}
      </div>
    </section>
  );
}
