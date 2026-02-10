"use client";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import AboutHero from "./AboutHero";
import WhoWeAre from "./WhoWeAre";
import MissionVision from "./MissionVision";
import WhyChooseUs from "./WhyChooseUs";
import ExpertiseSnapshot from "./ExpertiseSnapshot";
import NumbersMatter from "./NumbersMatter";
import OurApproach from "./OurApproach";
import CTASection from "./CTASection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <WhyChooseUs />
      <ExpertiseSnapshot />
      <NumbersMatter />
      <OurApproach />
      <CTASection />
      <Footer />
    </main>
  );
}