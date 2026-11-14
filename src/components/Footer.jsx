import { CONFIG } from "../config.js";
import { useLang } from "../i18n.jsx";
import Reveal from "./Reveal.jsx";

export default function Footer() {
  const { t, lang } = useLang();
  const [g, b] = CONFIG.names[lang];
  return (
    <footer>
      <Reveal><h2>{t("withLove")}</h2><p>{g} & {b} {t("and")}</p></Reveal>
    </footer>
  );
}
