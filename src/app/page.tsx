import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyNow from "@/components/WhyNow";
import OfferSection from "@/components/OfferSection";
import HowWeWork from "@/components/HowWeWork";
import Results from "@/components/Results";
import PlatformDemo from "@/components/PlatformDemo";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main">
      <Header />
      <Hero />
      <WhyNow />
      <OfferSection />
      <HowWeWork />
      <Results />
      <PlatformDemo />
      <Resources />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}