import { useLang } from "../i18n.jsx";

export default function ScrollDown({ to, className = "" }) {
  const { t } = useLang();
  return (
    <button
      className={"down " + className}
      aria-label={t("scrollDown")}
      onClick={() => document.getElementById(to)?.scrollIntoView({ behavior: "smooth" })}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}