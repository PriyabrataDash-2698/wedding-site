import { useEffect, useState } from "react";
import { useLang } from "../i18n.jsx";

export default function ScrollTop() {
  const { t } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const check = () =>
      setShow(window.scrollY > 300 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 240);
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => { window.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
  }, []);

  return (
    <button
      className={"totop" + (show ? " on" : "")}
      aria-label={t("scrollTop")}
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}