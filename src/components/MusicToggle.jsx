import { useRef, useState } from "react";
import { useLang } from "../i18n.jsx";

// Browsers block autoplay, so music starts only when a guest taps the button.
// Add your file at public/music.mp3. If it is missing, the button hides itself.
export default function MusicToggle() {
  const { t } = useLang();
  const audio = useRef(null);
  const [on, setOn] = useState(false);
  const [missing, setMissing] = useState(false);

  const toggle = () => {
    const a = audio.current;
    if (on) { a.pause(); setOn(false); }
    else a.play().then(() => setOn(true)).catch(() => setMissing(true));
  };

  return (
    <>
      <audio ref={audio} src={import.meta.env.BASE_URL + "music.mp3"} loop preload="none" onError={() => setMissing(true)} />
      {!missing && (
        <button className={"music" + (on ? " playing" : "")} onClick={toggle} aria-pressed={on} aria-label={t(on ? "musicOff" : "musicOn")}>
          <span /><span /><span />
        </button>
      )}
    </>
  );
}
