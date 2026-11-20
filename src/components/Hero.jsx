import { CONFIG } from "../config.js";
import { useLang } from "../i18n.jsx";
import Countdown from "./Countdown.jsx";
import ScrollDown from "./ScrollDown.jsx";
// Split by grapheme so Hindi and Kannada letters with matras stay intact.
const split = (text, lang) =>
  Array.from(new Intl.Segmenter(lang, { granularity: "grapheme" }).segment(text), (s) => s.segment);

function Letters({ text, delay = 0 }) {
  const { lang } = useLang();
  return split(text, lang).map((ch, i) => (
    <span className="ch" style={{ animationDelay: `${delay + i * 0.06}s` }} key={lang + i}>{ch}</span>
  ));
}

export default function Hero() {
  const { t, tr, lang } = useLang();
  const [groom, bride] = CONFIG.names[lang];
  const date = new Date(CONFIG.date).toLocaleDateString(t("locale"), { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });
  return (
    
    <header className="hero">
      <ScrollDown to="venues" className="in-hero" />
      <div className="ring a" /><div className="ring b" />
      <div style={{ position: "relative" }}>
        <h1 key={lang}>
          <Letters text={groom} />
          <span className="amp"><Letters text="&" delay={0.5} /></span>
          <Letters text={bride} delay={0.7} />
        </h1>
        <p className="sub">{t("tagline")}<br />{date}</p>
        <Countdown />
      </div>
    </header>
  );
}
