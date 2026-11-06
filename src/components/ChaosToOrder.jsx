import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Le moment mémorable du site : le désordre d'une entreprise qui travaille
// avec des fichiers éparpillés se range en système.
const ITEMS = [
  { bad: "Excel_final_v7.xlsx", good: "Données centralisées", x: 2, y: 8, r: -6 },
  { bad: "« tu as le fichier ? »", good: "Accès partagé par rôle", x: 38, y: 2, r: 5 },
  { bad: "stock_FINAL2(1).xls", good: "Stock en temps réel", x: 10, y: 30, r: 4 },
  { bad: "facture_?.pdf", good: "Facturation automatique", x: 34, y: 26, r: -4 },
  { bad: "1 seul ordinateur", good: "Accessible partout", x: 0, y: 52, r: -3 },
  { bad: "saisie en double", good: "Saisie unique", x: 36, y: 50, r: 6 },
  { bad: "relances à la main", good: "Relances automatiques", x: 8, y: 74, r: 5 },
  { bad: "erreur de calcul", good: "Calculs fiabilisés", x: 40, y: 72, r: -5 },
];

export default function ChaosToOrder() {
  const [ordered, setOrdered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOrdered(true), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="c2o">
      <div className="c2o-bar">
        <span>Une entreprise, avant et après</span>
        <div className="c2o-toggle" role="group" aria-label="État de l’entreprise">
          <button type="button" className={!ordered ? "on" : ""} aria-pressed={!ordered} onClick={() => setOrdered(false)}>
            Désordre
          </button>
          <button type="button" className={ordered ? "on" : ""} aria-pressed={ordered} onClick={() => setOrdered(true)}>
            Système
          </button>
        </div>
      </div>

      <div className="c2o-stage">
        {ITEMS.map((it, i) => (
          <motion.div
            key={it.bad}
            className={"c2o-item " + (ordered ? "is-ok" : "is-bad")}
            animate={
              ordered
                ? { left: "0%", top: `${i * 12.5}%`, rotate: 0, width: "100%" }
                : { left: `${it.x}%`, top: `${it.y}%`, rotate: it.r, width: "58%" }
            }
            transition={{ type: "spring", stiffness: 90, damping: 16, delay: i * 0.04 }}
          >
            <span className="dot" />
            <span className="txt">{ordered ? it.good : it.bad}</span>
            <span className="tag">{ordered ? "ok" : "!"}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
