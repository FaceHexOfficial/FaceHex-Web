import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import Download from "./components/Download";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import LegalDisclaimer from "./pages/LegalDisclaimer";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Screenshots />
      <Download />
      <Socials />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/privacy"
          element={<Privacy />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

        <Route
          path="/legal-disclaimer"
          element={<LegalDisclaimer />}
        />

      </Routes>
    </BrowserRouter>
  );
}