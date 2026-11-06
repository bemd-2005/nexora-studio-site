import { useState } from "react";
import PageTransition from "../components/PageTransition.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { SERVICES } from "../data/content.js";
import { SITE, waLink, telLink } from "../config.js";
import { submitLead } from "../lib/api.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", need: "", message: "" });
  const [sentLink, setSentLink] = useState("");

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const text =
      `Bonjour Nexora Studio,\n` +
      `Je m’appelle ${form.name}${form.company ? ` (${form.company})` : ""}.\n` +
      `Besoin : ${form.need || "à préciser"}.\n\n${form.message}`;
    const link = waLink(text);
    window.open(link, "_blank", "noopener");
    submitLead({ ...form, at: new Date().toISOString() });
    setSentLink(link);
  };

  return (
    <PageTransition>
      <PageHeader
        title="Parlons de votre projet."
        lead="Décrivez votre besoin en quelques lignes. Votre message est préparé sur WhatsApp, prêt à être envoyé."
      />

      <section className="section section-tight">
        <div className="wrap contact-grid">
          <div className="contact-info">
            <h2 className="h3">Nous joindre directement</h2>
            <ul>
              <li>
                <span>WhatsApp</span>
                <a href={waLink()} target="_blank" rel="noreferrer">
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <span>Appel</span>
                <a href={telLink}>{SITE.phoneDisplay}</a>
              </li>
              {SITE.email && (
                <li>
                  <span>E-mail</span>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </li>
              )}
              {SITE.city && (
                <li>
                  <span>Ville</span>
                  <b>{SITE.city}</b>
                </li>
              )}
            </ul>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <label className="field">
              <span>Votre nom</span>
              <input value={form.name} onChange={set("name")} required autoComplete="name" />
            </label>
            <label className="field">
              <span>Entreprise ou organisation (facultatif)</span>
              <input value={form.company} onChange={set("company")} autoComplete="organization" />
            </label>
            <label className="field">
              <span>Votre besoin</span>
              <select value={form.need} onChange={set("need")} required>
                <option value="">Choisir…</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Autre ou je ne sais pas encore">Autre ou je ne sais pas encore</option>
              </select>
            </label>
            <label className="field">
              <span>Décrivez votre projet</span>
              <textarea value={form.message} onChange={set("message")} required />
            </label>

            <button type="submit" className="btn">
              Préparer mon message WhatsApp
            </button>

            {sentLink && (
              <p className="form-ok" role="status">
                Votre message est prêt sur WhatsApp. S’il ne s’est pas ouvert,{" "}
                <a href={sentLink} target="_blank" rel="noreferrer" className="textlink">
                  ouvrez-le ici
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </section>
    </PageTransition>
  );
}
