"use client";
import { createElement, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { showcaseSlides } from "./showcaseSlides";
import styles from "./Hero.module.css";

type Texture = object;
type ScreenMaterial = { name: string; pbrMetallicRoughness: { baseColorTexture: { setTexture(texture: Texture): void } } };
interface Viewer extends HTMLElement {
  model?: { materials: ScreenMaterial[] };
  createTexture(url: string): Promise<Texture>;
  jumpCameraToGoal(): void;
  getCameraOrbit(): { theta: number; phi: number };
}
type Pose = { theta: number; phi: number };
let viewerModule: Promise<void> | undefined;
function loadViewer() {
  if (!viewerModule) viewerModule = new Promise<void>((resolve, reject) => {
    if (customElements.get("model-viewer")) { resolve(); return; }
    const script = document.createElement("script");
    script.type = "module"; script.src = "/showcase/vendor/model-viewer.min.js";
    script.onload = () => { customElements.whenDefined("model-viewer").then(() => resolve()); };
    script.onerror = () => { script.remove(); viewerModule = undefined; reject(new Error("3D unavailable")); };
    document.head.appendChild(script);
  });
  return viewerModule;
}

export default function PhoneShowcase({ selected, running, reduced, replay, onInteraction }: {
  selected: number; running: boolean; reduced: boolean; replay: number; onInteraction(): void;
}) {
  const viewer = useRef<Viewer | null>(null);
  const textures = useRef(new Map<number, Promise<Texture>>());
  const frame = useRef(0), motionRevision = useRef(0);
  const introduced = useRef(false), lastReplay = useRef(replay);
  const [loaded, setLoaded] = useState(false), [ready, setReady] = useState(false);
  useEffect(() => {
    const element = viewer.current!, cache = textures.current;
    let active = true;
    const load = () => { if (active) setLoaded(true); };
    const error = () => { if (active) { setLoaded(false); setReady(false); } };
    element.addEventListener("load", load); element.addEventListener("error", error);
    loadViewer().then(() => { if (element.model) load(); }).catch(error);
    return () => {
      active = false;
      element.removeEventListener("load", load); element.removeEventListener("error", error);
      cancelAnimationFrame(frame.current); cache.clear();
    };
  }, []);
  // Camera frames do not trigger React/page rerenders.
  useEffect(() => {
    if (!loaded) return;
    const element = viewer.current!;
    const material = element.model?.materials.find(item => item.name === "ApollosScreen");
    if (!material) return;
    let active = true;
    const motionTicket = ++motionRevision.current;
    cancelAnimationFrame(frame.current);
    const orbit = (pose: Pose) => {
      element.setAttribute("camera-orbit", pose.theta + "deg " + pose.phi + "deg 105%");
      element.jumpCameraToGoal();
    };
    async function textureFor() {
      if (!textures.current.has(selected)) textures.current.set(selected, (async () => {
        const img = new window.Image(); img.src = showcaseSlides[selected].src; await img.decode();
        const canvas = document.createElement("canvas"); canvas.width = 1024; canvas.height = 2178;
        const ctx = canvas.getContext("2d"); if (!ctx) throw new Error("Screen unavailable");
        ctx.fillStyle = "#faf7ef"; ctx.fillRect(0, 0, canvas.width, canvas.height);
        const scale = Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
        ctx.drawImage(img, (canvas.width - img.naturalWidth * scale) / 2, (canvas.height - img.naturalHeight * scale) / 2, img.naturalWidth * scale, img.naturalHeight * scale);
        const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, "image/png"));
        if (!blob) throw new Error("Screen unavailable");
        const url = URL.createObjectURL(blob);
        try { return await element.createTexture(url); } finally { URL.revokeObjectURL(url); }
      })());
      return textures.current.get(selected)!;
    }
    textureFor().then(texture => {
      if (!active) return;
      material.pbrMetallicRoughness.baseColorTexture.setTexture(texture); setReady(true);
      const entrance = !introduced.current || lastReplay.current !== replay;
      introduced.current = true; lastReplay.current = replay;
      const rest = { theta: selected % 2 ? 12 : -12, phi: 88 };
      // A pause while decoding cancels pending animation, not just the current frame.
      if (motionTicket !== motionRevision.current || document.hidden) return;
      if (reduced) { orbit({ theta: 0, phi: 90 }); return; }
      const camera = element.getCameraOrbit();
      const from = entrance ? { theta: -68, phi: 78 } : { theta: camera.theta * 180 / Math.PI, phi: camera.phi * 180 / Math.PI };
      const points = entrance ? [from, rest] : [from, { theta: selected % 2 ? 34 : -34, phi: 80 }, rest];
      const start = performance.now(), duration = entrance ? 2200 : 1450;
      element.dataset.motion = "animating";
      const tick = (now: number) => {
        if (!active || motionTicket !== motionRevision.current || document.hidden) return;
        const progress = Math.max(0, Math.min((now - start) / duration, 1));
        const segment = Math.min(Math.floor(progress * (points.length - 1)), points.length - 2);
        const t = progress === 1 ? 1 : progress * (points.length - 1) - segment;
        const ease = t * t * (3 - 2 * t), a = points[segment], b = points[segment + 1];
        orbit({ theta: a.theta + (b.theta - a.theta) * ease, phi: a.phi + (b.phi - a.phi) * ease });
        if (progress < 1) frame.current = requestAnimationFrame(tick);
        else element.dataset.motion = "resting";
      };
      frame.current = requestAnimationFrame(tick);
    }).catch(() => { if (active) { textures.current.delete(selected); setReady(false); } });
    return () => { active = false; cancelAnimationFrame(frame.current); };
  }, [selected, loaded, reduced, replay]);
  useEffect(() => {
    if (!running) {
      motionRevision.current++; cancelAnimationFrame(frame.current);
      if (viewer.current) viewer.current.dataset.motion = "paused";
    }
  }, [running]);
  const pause = () => {
    motionRevision.current++; cancelAnimationFrame(frame.current);
    if (viewer.current) viewer.current.dataset.motion = "paused";
    onInteraction();
  };
  const slide = showcaseSlides[selected];
  return (
    <div id="phone-screen" role="tabpanel" aria-labelledby={"feature-" + selected} className={styles.stage} tabIndex={0} onFocus={pause}>
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.fallback} style={{ visibility: ready ? "hidden" : "visible" }} aria-hidden={ready}>
        <Image src={slide.src} alt={slide.alt} fill priority={selected === 0} sizes="(max-width: 760px) 256px, 358px" className={styles.screenshot} />
      </div>
      {createElement("model-viewer", {
        ref: viewer, src: "/showcase/assets/apollos-phone.glb", alt: "3D iPhone: " + slide.alt,
        class: [styles.model, ready ? styles.ready : "", running && !reduced ? styles.floating : ""].join(" "),
        "camera-controls": "", "disable-zoom": "", "disable-pan": "", "touch-action": "pan-y",
        "camera-orbit": "-68deg 78deg 105%", "min-camera-orbit": "-180deg 60deg 105%",
        "max-camera-orbit": "180deg 115deg 105%", "field-of-view": "25deg",
        "shadow-intensity": "0.55", "shadow-softness": "1", exposure: "1",
        "interaction-prompt": "none", loading: "eager", reveal: "auto", "aria-hidden": !ready, onPointerDown: pause,
      })}
    </div>
  );
}
