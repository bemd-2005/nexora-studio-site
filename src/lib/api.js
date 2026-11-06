// Couche d'accès aux données.
// Aujourd'hui : données locales (src/data/content.js).
// Avec le back-office : remplacer le contenu de ces fonctions par des appels
// Firestore / API, sans toucher aux pages.
import { useState } from "react";
import { PROJECTS } from "../data/content.js";

export function useProjects() {
  const [projects] = useState(PROJECTS);
  return { projects, loading: false };
}

export function useProject(slug) {
  const { projects, loading } = useProjects();
  return { project: projects.find((p) => p.slug === slug) || null, loading };
}

// Appelée à l'envoi du formulaire de contact.
// Avec le back-office : enregistrer la demande (collection "leads").
export async function submitLead(lead) {
  console.info("[lead]", lead);
  return { ok: true };
}
