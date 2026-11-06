import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Logo from "./Logo.jsx";
import Background from "./Background.jsx";
import Cursor from "./Cursor.jsx";
import Footer from "./Footer.jsx";
import { NAV } from "../data/content.js";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("nx-theme", next);
    } catch (e) {
      /* stockage indisponible : le thème reste valable pour la session */
    }
  };

  return (
    <>
      <a className="skip" href="#main">
        Aller au contenu
      </a>
      <Background />
      <Cursor />
      <motion.div className="progress" style={{ scaleX: progress }} />

      <header className="nav">
        <Link to="/" className="nav-logo" aria-label="Nexora Studio, accueil">
          <Logo />
        </Link>
        <nav className="nav-links" aria-label="Navigation principale">
          {NAV.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => "nav-link" + (isActive ? " is-active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre"}
          >
            {theme === "dark" ? "☾" : "☀"}
          </button>
          <Link to="/contact" className="btn btn-sm">
            Parler d’un projet
          </Link>
          <button
            type="button"
            className="burger"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ y: 36, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.5 }}
              >
                <Link to={l.to} className="menu-link">
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div id="main">{children}</div>
      <Footer />
    </>
  );
}
