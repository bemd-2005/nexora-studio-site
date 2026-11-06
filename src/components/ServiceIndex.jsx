import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES } from "../data/content.js";

function Detail({ s }) {
  return (
    <div className="sidx-detail">
      <h4>Le problème</h4>
      <p>{s.problem}</p>
      <h4>Ce que nous construisons</h4>
      <p>{s.solution}</p>
      <ul className="chips">
        {s.outputs.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ServiceIndex() {
  const [active, setActive] = useState(0);

  return (
    <div className="sidx">
      <ul className="sidx-list">
        {SERVICES.map((s, i) => (
          <li key={s.id}>
            <button
              type="button"
              className={"sidx-row" + (i === active ? " is-active" : "")}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-expanded={i === active}
              data-cursor
            >
              <span className="sidx-t">{s.title}</span>
              <span className="sidx-tag">{s.short}</span>
            </button>
            <div className="sidx-inline">{i === active && <Detail s={s} />}</div>
          </li>
        ))}
      </ul>

      <aside className="sidx-panel" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.22 }}
          >
            <p className="sidx-panel-title">{SERVICES[active].title}</p>
            <Detail s={SERVICES[active]} />
          </motion.div>
        </AnimatePresence>
      </aside>
    </div>
  );
}
