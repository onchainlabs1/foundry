import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyNow from "@/components/WhyNow";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Proof from "@/components/Proof";
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
      <Services />
      <HowWeWork />
      <Proof />
      <Resources />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}