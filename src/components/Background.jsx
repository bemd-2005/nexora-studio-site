import { useEffect, useRef } from "react";

// Grille de routes sur laquelle circulent des paquets de données.
// Elle rappelle le thème du studio : des flux qui s'organisent.
export default function Background() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cell = 72;
    const colors = ["#ff00c8", "#00ffcc"];
    let w = 0;
    let h = 0;
    let raf = 0;
    let packets = [];
    const mouse = { x: -999, y: -999 };

    const spawn = () => {
      const horiz = Math.random() < 0.5;
      const cols = Math.ceil(w / cell);
      const rows = Math.ceil(h / cell);
      return {
        horiz,
        line: Math.floor(Math.random() * (horiz ? rows : cols)) * cell,
        pos: Math.random() * (horiz ? w : h),
        speed: (0.35 + Math.random() * 0.9) * (Math.random() < 0.5 ? 1 : -1),
        len: 40 + Math.random() * 90,
        color: colors[Math.random() < 0.55 ? 0 : 1],
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(8, Math.min(Math.round((w * h) / 60000), 26));
      packets = Array.from({ length: count }, spawn);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(46,46,94,.45)";
      ctx.beginPath();
      for (let x = 0; x <= w; x += cell) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, h);
      }
      for (let y = 0; y <= h; y += cell) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(w, y + 0.5);
      }
      ctx.stroke();

      for (let x = 0; x <= w; x += cell) {
        for (let y = 0; y <= h; y += cell) {
          const d = Math.hypot(x - mouse.x, y - mouse.y);
          if (d < 170) {
            ctx.fillStyle = `rgba(0,255,204,${(1 - d / 170) * 0.9})`;
            ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
          }
        }
      }

      for (const p of packets) {
        if (!reduce) p.pos += p.speed;
        const lim = p.horiz ? w : h;
        if (p.pos > lim + p.len || p.pos < -p.len) {
          const fresh = spawn();
          Object.assign(p, fresh);
          p.pos = p.speed > 0 ? -p.len : lim + p.len;
        }
        const tail = p.pos - Math.sign(p.speed) * p.len;
        const x0 = p.horiz ? tail : p.line;
        const y0 = p.horiz ? p.line : tail;
        const x1 = p.horiz ? p.pos : p.line;
        const y1 = p.horiz ? p.line : p.pos;
        const g = ctx.createLinearGradient(x0, y0, x1, y1);
        g.addColorStop(0, "rgba(0,0,0,0)");
        g.addColorStop(1, p.color);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x0 + 0.5, y0 + 0.5);
        ctx.lineTo(x1 + 0.5, y1 + 0.5);
        ctx.stroke();
        ctx.fillStyle = p.color;
        ctx.fillRect(x1 - 1.5, y1 - 1.5, 3, 3);
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <canvas ref={ref} className="bg" aria-hidden="true" />
      <div className="bg-veil" aria-hidden="true" />
    </>
  );
}
