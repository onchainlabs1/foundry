import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturePillars from "@/components/FeaturePillars";
import OnboardingWizard from "@/components/OnboardingWizard";
import SeeItInAction from "@/components/SeeItInAction";
import KPIAnalytics from "@/components/KPIAnalytics";
import SecurityTrust from "@/components/SecurityTrust";
import RoadmapTransparency from "@/components/RoadmapTransparency";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main">
      <Header />
      <Hero />
      <FeaturePillars />
      <OnboardingWizard />
      <SeeItInAction />
      <KPIAnalytics />
      <SecurityTrust />
      <RoadmapTransparency />
      <Contact />
      <Footer />
    </main>
  );
}