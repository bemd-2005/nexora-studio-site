import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { METHOD } from "../data/content.js";

function Step({ step, index }) {
  const ref = useRef(null);
  const on = useInView(ref, { margin: "-42% 0px -42% 0px" });
  return (
    <li ref={ref} className={"pl-step" + (on ? " is-on" : "")}>
      <span className="pl-num">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
        <ul className="chips">
          {step.outputs.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

// La méthode est une vraie séquence : le fil se remplit au défilement.
export default function Pipeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end 0.6"] });
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="pl" ref={ref}>
      <div className="pl-line">
        <motion.div className="pl-fill" style={{ scaleY: fill }} />
      </div>
      <ol>
        {METHOD.map((s, i) => (
          <Step key={s.id} step={s} index={i} />
        ))}
      </ol>
    </div>
  );
}
