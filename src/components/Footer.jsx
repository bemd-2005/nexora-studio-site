import { Link } from "react-router-dom";
import { NAV, SERVICES } from "../data/content.js";
import { SITE, waLink, telLink } from "../config.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-pitch">Un processus à simplifier ? Parlons-en.</p>
        <a
          className="btn"
          href={waLink("Bonjour Nexora Studio, j’aimerais vous parler d’un projet.")}
          target="_blank"
          rel="noreferrer"
        >
          Écrire sur WhatsApp
        </a>
      </div>

      <div className="footer-grid">
        <div>
          <h4>Navigation</h4>
          {NAV.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
        </div>
        <div>
          <h4>Services</h4>
          {SERVICES.slice(0, 5).map((s) => (
            <Link key={s.id} to="/services">
              {s.title}
            </Link>
          ))}
        </div>
        <div>
          <h4>Contact</h4>
          <a href={waLink()} target="_blank" rel="noreferrer">
            WhatsApp : {SITE.whatsappDisplay}
          </a>
          <a href={telLink}>Appel : {SITE.phoneDisplay}</a>
          {SITE.email && <a href={`mailto:${SITE.email}`}>{SITE.email}</a>}
          {SITE.city && <span className="footer-city">{SITE.city}</span>}
        </div>
      </div>

      <div className="footer-word" aria-hidden="true">
        Nexora
      </div>

      <div className="footer-base">
        <span>© {new Date().getFullYear()} Nexora Studio</span>
        <span>Concevoir. Développer. Transformer.</span>
      </div>
    </footer>
  );
}
