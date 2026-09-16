"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import PhoneShowcase from "./PhoneShowcase";
import { showcaseSlides } from "./showcaseSlides";
import styles from "./Hero.module.css";

export default function Hero() {
  const [selected, setSelected] = useState(0);
  const [running, setRunning] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [replay, setReplay] = useState(0);
  const [announcement, setAnnouncement] = useState("");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const stop = useCallback(() => setRunning(false), []);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches); setRunning(!media.matches);
    const change = () => { setReduced(media.matches); stop(); };
    const visibility = () => { if (document.hidden) stop(); };
    media.addEventListener("change", change);
    document.addEventListener("visibilitychange", visibility);
    return () => { media.removeEventListener("change", change); document.removeEventListener("visibilitychange", visibility); };
  }, [stop]);
  useEffect(() => {
    if (!running || reduced) return;
    const timer = setTimeout(() => {
      if (selected === showcaseSlides.length - 1) { setSelected(0); stop(); }
      else setSelected(selected + 1);
    }, 7000);
    return () => clearTimeout(timer);
  }, [selected, running, reduced, replay, stop]);
  const select = (index: number) => {
    stop(); const next = (index + showcaseSlides.length) % showcaseSlides.length;
    setSelected(next); setAnnouncement(showcaseSlides[next].label + " screenshot selected.");
  };
  return (
    <section id="showcase" className={styles.showcase} aria-labelledby="headline">
      <div className={styles.hero}>
        <div className={styles.story}>
          <h1 id="headline">Make room<br /><span>for the Word.</span></h1>
          <p className={styles.intro}>Read. Listen. Reflect. A closer look at Apollos Bible.</p>
          <div className={styles.actions}>
            <button className={styles.primary} onClick={() => select(selected + 1)}>Explore the app <ArrowRight aria-hidden="true" /></button>
            <button className={styles.toggle} aria-label={reduced ? "Show next screenshot without animation" : running ? "Pause automatic screenshot tour" : "Play automatic screenshot tour"}
              onClick={() => {
                if (reduced) select(selected + 1);
                else if (running) stop();
                else { setSelected(0); setReplay(value => value + 1); setRunning(true); }
              }}>{reduced ? "Next screen" : running ? "Pause tour" : "Play tour"}</button>
          </div>
          <div className={styles.captions}>
            {showcaseSlides.map((slide, index) => (
              <div key={slide.label} className={styles.caption} hidden={selected !== index}>
                <h2>{slide.heading}</h2><p>{slide.description}</p><p className={styles.note}>{slide.note}</p>
              </div>
            ))}
          </div>
        </div>
        <PhoneShowcase selected={selected} running={running} reduced={reduced} replay={replay} onInteraction={stop} />
        <div className={styles.rail} role="tablist" aria-label="Explore Apollos screenshots">
          {showcaseSlides.map((slide, index) => (
            <button key={slide.label} ref={element => { tabs.current[index] = element; }}
              id={"feature-" + index} role="tab" aria-selected={selected === index}
              aria-controls="phone-screen" tabIndex={selected === index ? 0 : -1}
              onClick={() => select(index)} onKeyDown={event => {
                if (event.ctrlKey || event.metaKey || event.altKey) return;
                const next = event.key === "ArrowRight" ? (index + 1) % showcaseSlides.length
                  : event.key === "ArrowLeft" ? (index + showcaseSlides.length - 1) % showcaseSlides.length
                  : event.key === "Home" ? 0 : event.key === "End" ? showcaseSlides.length - 1 : null;
                if (next !== null) { event.preventDefault(); select(next); tabs.current[next]?.focus(); }
              }}>{slide.label}</button>
          ))}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">{announcement}</p>
    </section>
  );
}
