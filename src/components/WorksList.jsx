import { Link } from "react-router-dom";
import ProjectVisual from "./ProjectVisual.jsx";
import Status from "./Status.jsx";

export default function WorksList({ projects }) {
  return (
    <ul className="works">
      {projects.map((p) => (
        <li key={p.slug}>
          <Link to={`/realisations/${p.slug}`} className="work" style={{ "--hue": p.hue }} data-cursor>
            <div className="work-main">
              <h3 className="work-name">{p.name}</h3>
              <p className="work-pitch">{p.pitch}</p>
              <ul className="chips">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="work-meta">
              <Status tone={p.tone}>{p.status}</Status>
              <span>{p.kind}</span>
              {p.client && <span>Client : {p.client}</span>}
            </div>
            <div className="work-vis">
              <ProjectVisual slug={p.slug} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
