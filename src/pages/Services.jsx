import PageTransition from "../components/PageTransition.jsx";
import PageHeader from "../components/PageHeader.jsx";
import ServiceIndex from "../components/ServiceIndex.jsx";
import CTA from "../components/CTA.jsx";
import { AUDIENCES } from "../data/content.js";

export default function Services() {
  return (
    <PageTransition>
      <PageHeader
        title="Tout ce qu’il faut pour moderniser votre façon de travailler."
        lead="Passez sur un service pour voir le problème qu’il résout et ce que nous construisons concrètement."
      />

      <section className="section section-tight">
        <div className="wrap">
          <ServiceIndex />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">Pour qui nous travaillons.</h2>
          <div className="cols">
            {AUDIENCES.map((a) => (
              <div className="col" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}
