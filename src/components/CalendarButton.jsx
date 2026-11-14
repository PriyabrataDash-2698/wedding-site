import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n.jsx";
import { downloadIcs, googleCalUrl } from "../utils.js";

export default function CalendarButton({ event }) {
  const { t, tr } = useLang();
  const [open, setOpen] = useState(false);
  const box = useRef(null);
  const title = tr(event.name), place = tr(event.place);

  useEffect(() => {
    const close = (e) => { if (!box.current?.contains(e.target)) setOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div className="cal" ref={box}>
      <button className="btn ghost" aria-expanded={open} onClick={() => setOpen(!open)}>{t("addCal")}</button>
      <div className={"menu" + (open ? " on" : "")}>
        <a href={googleCalUrl(event, title, place)} target="_blank" rel="noopener">{t("google")}</a>
        <button onClick={() => { downloadIcs(event, title, place); setOpen(false); }}>{t("ics")}</button>
      </div>
    </div>
  );
}
