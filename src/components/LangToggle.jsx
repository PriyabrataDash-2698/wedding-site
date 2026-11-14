import { LANGS, useLang } from "../i18n.jsx";

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="seg" role="group" aria-label="Language">
      {LANGS.map(([code, label]) => (
        <button key={code} aria-pressed={lang === code} onClick={() => setLang(code)}>{label}</button>
      ))}
    </div>
  );
}
