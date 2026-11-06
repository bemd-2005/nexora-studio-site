import PageTransition from "../components/PageTransition.jsx";
import PageHeader from "../components/PageHeader.jsx";
import CTA from "../components/CTA.jsx";
import { MISSION, PRINCIPLES } from "../data/content.js";
import { SITE } from "../config.js";

export default function APropos() {
  return (
    <PageTransition>
      <PageHeader
        title="Des outils qui travaillent pour l’entreprise, pas contre elle."
        lead="Nexora Studio est un studio de transformation digitale. Nous concevons des outils numériques sur mesure pour aider les entreprises à travailler plus simplement et à moderniser leurs processus."
      />

      <section className="section section-tight">
        <div className="wrap">
          <h2 className="h2">Notre mission.</h2>
          <ol className="mission">
            {MISSION.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap sig">
          {SITE.signature.map((w) => (
            <span key={w}>{w}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">Ce qui nous guide.</h2>
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
