import { CONFIG } from "../config.js";
import { useLang } from "../i18n.jsx";
import { mapsUrl } from "../utils.js";
import Reveal from "./Reveal.jsx";
import QRCode from "./QRCode.jsx";
import CalendarButton from "./CalendarButton.jsx";
import ScrollDown from "./ScrollDown.jsx";
function EventCard({ ev }) {
  const { t, tr } = useLang();
  const url = mapsUrl(ev.mapQuery);
  const when = new Date(ev.start).toLocaleString(t("locale"), { dateStyle: "long", timeStyle: "short", timeZone: "Asia/Kolkata" });
  return (
    <Reveal className="ev">
      <h3>{tr(ev.name)}</h3>
      <div className="when">{when}</div>
      <div>{tr(ev.place)}<br /><span className="muted">{tr(ev.note)}</span></div>
      <div className="qr">
        <QRCode text={url} label={`${tr(ev.name)} – ${t("scanHint")}`} />
        <div>
          <small>{t("scanHint")}</small>
          <div className="row">
            <a className="btn" href={url} target="_blank" rel="noopener">{t("openMaps")}</a>
            <CalendarButton event={ev} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Events() {
  const { t } = useLang();
  return (
    <section id="venues">
      <h2>{t("whereTitle")}</h2>
      <p className="lead">{t("whereLead")}</p>
      <div className="events">{CONFIG.events.map((ev) => <EventCard ev={ev} key={ev.id} />)}</div>
      <ScrollDown to="footer" />
    </section>
  );
}
