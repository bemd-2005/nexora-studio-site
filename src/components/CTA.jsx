import { Link } from "react-router-dom";
import { waLink } from "../config.js";

export default function CTA({ title = "Un processus à simplifier ? Parlons-en." }) {
  return (
    <section className="section cta">
      <div className="wrap">
        <h2 className="cta-title">{title}</h2>
        <div className="cta-actions">
          <Link to="/contact" className="btn">
            Décrire mon projet
          </Link>
          <a
            className="btn btn-ghost"
            href={waLink("Bonjour Nexora Studio, j’aimerais vous parler d’un projet.")}
            target="_blank"
            rel="noreferrer"
          >
            Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
