import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AlertBanner from "../components/AlertBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Hero from "../components/Hero";
import ProgramsGrid from "../components/ProgramsGrid";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";

import ProgramPage from "../pages/ProgramPage";

function HomePage() {
  return (
    <main>
      <Hero />
      <ProgramsGrid />
      <WhyUs />
      <Testimonials />
      <CTABanner />
    </main>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AlertBanner />
      <Header />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* PROGRAMAS */}
        <Route
          path="/programa/:slug"
          element={<ProgramPage />}
        />

        {/* RUTAS DEL MENÚ */}
        <Route
          path="/grados"
          element={<HomePage />}
        />

        <Route
          path="/masteres"
          element={<HomePage />}
        />

        <Route
          path="/fp-a-distancia"
          element={<HomePage />}
        />

        <Route
          path="/oferta-academica"
          element={<HomePage />}
        />

        <Route
          path="/admision"
          element={<HomePage />}
        />

        <Route
          path="/becas"
          element={<HomePage />}
        />

        <Route
          path="/utamed"
          element={<HomePage />}
        />

        {/* CUALQUIER OTRA RUTA */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}