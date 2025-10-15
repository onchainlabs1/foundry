"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyNow from "@/components/WhyNow";
import OfferSection from "@/components/OfferSection";
import HowWeWork from "@/components/HowWeWork";
import Results from "@/components/Results";
import PlatformPreview from "@/components/PlatformPreview";
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
      <PlatformPreview />
      <Resources />
      <Suspense fallback={<div>Loading contact form...</div>}>
        <Contact />
      </Suspense>
      <FAQ />
      <Footer />
    </main>
  );
}