import { motion } from "framer-motion";

// Titre dont les mots montent un à un : le moment d'entrée de la page.
export default function SplitWords({ text, as: Tag = "h1", className = "", delay = 0 }) {
  return (
    <Tag className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span className="sw" key={i} aria-hidden="true">
          <motion.span
            className="sw-in"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>{" "}
        </span>
      ))}
    </Tag>
  );
}
