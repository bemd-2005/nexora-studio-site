import { useState } from "react";
import PageTransition from "../components/PageTransition.jsx";
import PageHeader from "../components/PageHeader.jsx";
import WorksList from "../components/WorksList.jsx";
import CTA from "../components/CTA.jsx";
import { useProjects } from "../lib/api.js";

const FILTERS = [
  { key: "all", label: "Tout" },
  { key: "app", label: "Applications" },
  { key: "logiciel", label: "Logiciels" },
  { key: "plateforme", label: "Plateformes" },
  { key: "site", label: "Sites web" },
];

export default function Realisations() {
  const { projects } = useProjects();
  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <PageTransition>
      <PageHeader
        title="Des outils construits pour de vrais usages."
        lead="Applications, logiciels, plateformes et sites : certains sont déjà en service, d’autres sont en cours de développement."
      />

      <section className="section section-tight">
        <div className="wrap">
          <div className="filters" role="group" aria-label="Filtrer les réalisations">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                className={"filter" + (filter === f.key ? " is-on" : "")}
                aria-pressed={filter === f.key}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <WorksList key={filter} projects={shown} />
          <p className="note">D’autres projets sont en préparation.</p>
        </div>
      </section>

      <CTA title="Votre projet pourrait être le prochain." />
    </PageTransition>
  );
}
