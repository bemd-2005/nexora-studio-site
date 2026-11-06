import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;
    document.documentElement.classList.add("has-cursor");
    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    const over = (e) => {
      const hit = e.target.closest && e.target.closest("a, button, [data-cursor]");
      if (ring.current) ring.current.classList.toggle("is-active", !!hit);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    loop();
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
