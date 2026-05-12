import AlertBanner from "./components/AlertBanner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProgramsGrid from "./components/ProgramsGrid";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <AlertBanner />
      <Header />
      <main>
        <Hero />
        <ProgramsGrid />
        <WhyUs />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
