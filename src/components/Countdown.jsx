import { useEffect, useState } from "react";
import { CONFIG } from "../config.js";
import { useLang } from "../i18n.jsx";

const UNITS = [["days", 86400000], ["hours", 3600000], ["minutes", 60000], ["seconds", 1000]];

export default function Countdown() {
  const { t } = useLang();
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  let left = Math.max(0, new Date(CONFIG.date).getTime() - now);
  return (
    <div className="count">
      {UNITS.map(([key, ms]) => {
        const v = Math.floor(left / ms);
        left -= v * ms;
        return <div key={key}><b>{String(v).padStart(2, "0")}</b><span>{t(key)}</span></div>;
      })}
    </div>
  );
}
