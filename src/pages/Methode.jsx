import PageTransition from "../components/PageTransition.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Pipeline from "../components/Pipeline.jsx";
import CTA from "../components/CTA.jsx";
import { PRINCIPLES } from "../data/content.js";

export default function Methode() {
  return (
    <PageTransition>
      <PageHeader
        title="De l’écoute à l’évolution, un cadre clair."
        lead="Chaque projet suit les mêmes étapes, pour que vous sachiez toujours où nous en sommes."
      />

      <section className="section section-tight">
        <div className="wrap">
          <Pipeline />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">Pourquoi travailler avec Nexora Studio.</h2>
          <ul className="principles">
            {PRINCIPLES.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}
