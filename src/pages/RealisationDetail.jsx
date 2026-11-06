import { Link, useParams } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import SplitWords from "../components/SplitWords.jsx";
import ProjectVisual from "../components/ProjectVisual.jsx";
import Status from "../components/Status.jsx";
import CTA from "../components/CTA.jsx";
import NotFound from "./NotFound.jsx";
import { useProject, useProjects } from "../lib/api.js";

export default function RealisationDetail() {
  const { slug } = useParams();
  const { project: p } = useProject(slug);
  const { projects } = useProjects();

  if (!p) return <NotFound />;

  const index = projects.findIndex((x) => x.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <PageTransition>
      <section className="phead" style={{ "--hue": p.hue }}>
        <div className="wrap">
          <Link to="/realisations" className="textlink back">
            Toutes les réalisations
          </Link>
          <SplitWords as="h1" className="display" text={p.name} />
          <p className="lead">{p.pitch}</p>
        </div>
      </section>

      <section className="section section-tight" style={{ "--hue": p.hue }}>
        <div className="wrap detail">
          <div>
            <p className="detail-desc">{p.description}</p>

            {p.features.length > 0 && (
              <>
                <h2 className="h3">Ce que fait l’outil</h2>
                <ul className="feat">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </>
            )}

            {p.items && (
              <>
                <h2 className="h3">Sites livrés</h2>
                <ul className="feat">
                  {p.items.map((it) => (
                    <li key={it.name}>
                      <strong>{it.name}</strong>
                      <span className="feat-sub">{it.text}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="detail-aside">
            <div className="detail-vis">
              <ProjectVisual slug={p.slug} />
            </div>
            <dl className="meta">
              <div>
                <dt>État</dt>
                <dd>
                  <Status tone={p.tone}>{p.status}</Status>
                </dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{p.kind}</dd>
              </div>
              <div>
                <dt>Domaine</dt>
                <dd>{p.sector}</dd>
              </div>
              {p.client && (
                <div>
                  <dt>Client</dt>
                  <dd>{p.client}</dd>
                </div>
              )}
            </dl>
            <ul className="chips">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap">
          <Link to={`/realisations/${next.slug}`} className="nextwork" style={{ "--hue": next.hue }} data-cursor>
            <span className="nextwork-label">Réalisation suivante</span>
            <span className="nextwork-name">{next.name}</span>
          </Link>
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}
