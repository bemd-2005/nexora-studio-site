// Coordonnées et réglages du site. Tout ce qui est modifiable est ici.
export const SITE = {
  name: "Nexora Studio",
  signature: ["Concevoir", "Développer", "Transformer"],
  // Numéros au format international (indicatif Cameroun +237). Vérifie-les.
  whatsapp: "237650494076",
  whatsappDisplay: "650 49 40 76",
  phone: "237659958241",
  phoneDisplay: "659 95 82 41",
  // À COMPLÉTER : laisse vide pour masquer la ligne sur le site.
  email: "21nexorastudio@gmail.com",
  city: "Douala",
};

export const waLink = (text = "") =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const telLink = `tel:+${SITE.phone}`;
