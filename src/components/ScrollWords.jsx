import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Word({ word, range, progress }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return <motion.span style={{ opacity }}>{word} </motion.span>;
}

// Le texte s'allume mot à mot au fil du défilement.
export default function ScrollWords({ text }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className="scrollwords">
      {words.map((w, i) => (
        <Word key={i} word={w} range={[i / words.length, (i + 1) / words.length]} progress={scrollYProgress} />
      ))}
    </p>
  );
}
