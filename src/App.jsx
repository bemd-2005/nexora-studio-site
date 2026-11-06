import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Methode from "./pages/Methode.jsx";
import Realisations from "./pages/Realisations.jsx";
import RealisationDetail from "./pages/RealisationDetail.jsx";
import APropos from "./pages/APropos.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const location = useLocation();
  return (
    <Layout>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/methode" element={<Methode />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/realisations/:slug" element={<RealisationDetail />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
