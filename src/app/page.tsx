import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionWhyNow from "@/components/SectionWhyNow";
import FeaturePillars from "@/components/FeaturePillars";
import OnboardingWizard from "@/components/OnboardingWizard";
import SeeItInAction from "@/components/SeeItInAction";
import KPIAnalytics from "@/components/KPIAnalytics";
import ConsultingSupport from "@/components/ConsultingSupport";
import SecurityTrust from "@/components/SecurityTrust";
import RoadmapTransparency from "@/components/RoadmapTransparency";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
        <main id="main">
          <Header />
          <Hero />
          <SectionWhyNow />
          <FeaturePillars />
      <OnboardingWizard />
      <SeeItInAction />
      <KPIAnalytics />
      <ConsultingSupport />
      <SecurityTrust />
      {/* <RoadmapTransparency /> */}
      <Contact />
      <Footer />
    </main>
  );
}