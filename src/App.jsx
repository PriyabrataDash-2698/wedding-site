import Hero from "./components/Hero.jsx";
import Events from "./components/Events.jsx";
import Timeline from "./components/Timeline.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import LangToggle from "./components/LangToggle.jsx";
import MusicToggle from "./components/MusicToggle.jsx";
import { useEffect } from "react";
import ScrollTop from "./components/ScrollTop.jsx";

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    let last = window.scrollY, ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (Math.abs(y - last) > 6) {
          root.dataset.dir = y < last && y > 80 ? "up" : "down";
          last = y;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
   <>
      <div className="controls">
        <MusicToggle />
        <LangToggle />
      </div>
      <main>
        <Hero />
        <Events />
        <Timeline />
        <Footer />
      </main>
      <ScrollTop />
    </>
  );
}
