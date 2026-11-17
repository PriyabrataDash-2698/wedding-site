import Hero from "./components/Hero.jsx";
import Events from "./components/Events.jsx";
import Timeline from "./components/Timeline.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import LangToggle from "./components/LangToggle.jsx";
import MusicToggle from "./components/MusicToggle.jsx";

export default function App() {
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
        {/* <Gallery /> */}
        <Footer />
      </main>
    </>
  );
}
