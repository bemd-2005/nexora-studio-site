import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function NotFound() {
  return (
    <PageTransition>
      <PageHeader title="Cette page n’existe pas." lead="Le lien est peut-être incorrect, ou la page a changé d’adresse." />
      <section className="section section-tight">
        <div className="wrap">
          <Link to="/" className="btn">
            Retour à l’accueil
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
