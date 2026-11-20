import { CONFIG } from "../config.js";
import { useLang } from "../i18n.jsx";
import Reveal from "./Reveal.jsx";
import ScrollDown from "./ScrollDown.jsx";
export default function Timeline() {
  const { t, tr } = useLang();
  return (
    <section id="schedule">
      <h2>{t("scheduleTitle")}</h2>
      <p className="lead">{t("scheduleLead")}</p>
      <ol className="tl">
        {CONFIG.schedule.map((s, i) => (
          <li key={i}>
            <Reveal>
              <time>{new Date(s.at).toLocaleTimeString(t("locale"), { timeStyle: "short", timeZone: "Asia/Kolkata" })}</time>
              <span>{tr(s.title)}</span>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
