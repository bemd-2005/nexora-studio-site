import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import SplitWords from "../components/SplitWords.jsx";
import ChaosToOrder from "../components/ChaosToOrder.jsx";
import ScrollWords from "../components/ScrollWords.jsx";
import ServiceIndex from "../components/ServiceIndex.jsx";
import WorksList from "../components/WorksList.jsx";
import CTA from "../components/CTA.jsx";
import { METHOD } from "../data/content.js";
import { useProjects } from "../lib/api.js";

const CAPS = [
  "Logiciels sur mesure",
  "ERP et CRM",
  "Applications web et mobile",
  "Tableaux de bord",
  "Automatisation",
  "Intelligence artificielle",
  "Numérisation des données",
  "Maintenance et support",
];

function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {CAPS.map((c) => (
          <span key={c}>{c}</span>
        ))}
        {CAPS.map((c) => (
          <span key={c + "-bis"}>{c}</span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { projects } = useProjects();

  return (
    <PageTransition>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <SplitWords as="h1" className="display" text="Nous transformons le désordre en système." delay={0.1} />
            <p className="lead hero-lead">
              Nexora Studio conçoit des logiciels, des applications et des plateformes sur mesure, pour que votre
              entreprise travaille plus simplement, plus vite et sans erreurs.
            </p>
            <div className="hero-cta">
              <Link className="btn" to="/contact">
                Parler d’un projet
              </Link>
              <Link className="btn btn-ghost" to="/realisations">
                Voir nos réalisations
              </Link>
            </div>
          </div>
          <ChaosToOrder />
        </div>
      </section>

      <Marquee />

      <section className="section">
        <div className="wrap">
          <ScrollWords text="Beaucoup d’entreprises travaillent encore avec des outils d’hier : des fichiers Excel partout, des documents éparpillés dans WhatsApp, des informations à chercher pendant des heures, des erreurs de saisie, une activité qui repose sur un seul ordinateur. Nous construisons ce qui manque entre ce que vos outils permettent et la façon dont vous travaillez." />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">Dix compétences pour un même objectif : simplifier.</h2>
          <ServiceIndex />
          <p className="section-link">
            <Link to="/services" className="textlink">
              Voir les services en détail
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">Ce que nous avons déjà construit.</h2>
          <WorksList projects={projects.slice(0, 4)} />
          <p className="section-link">
            <Link to="/realisations" className="textlink">
              Toutes les réalisations
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2">Une méthode en cinq étapes, de l’écoute à l’évolution.</h2>
          <ol className="strip">
            {METHOD.map((m, i) => (
              <li key={m.id}>
                <Link to="/methode" data-cursor>
                  <span className="strip-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="strip-t">{m.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}
