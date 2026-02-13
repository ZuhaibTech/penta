import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/About/AboutHero";
import WhoWeAre from "@/About/WhoWeAre";
import MissionVision from "@/About/MissionVision";
import NumbersMatter from "@/About/NumbersMatter";
import OurApproach from "@/About/OurApproach";
import ExpertiseSnapshot from "@/About/ExpertiseSnapshot";
import WhyChooseUs from "@/About/WhyChooseUs";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <AboutHero />
        
        {/* Sections wrapped in slate background where appropriate for visual separation */}
        <div className="bg-slate-50">
           <WhoWeAre />
        </div>
        
        <MissionVision />
        
        <div className="bg-slate-50">
          <NumbersMatter />
        </div>
        
        <OurApproach />
        
        <div className="bg-slate-50">
           <ExpertiseSnapshot />
        </div>
        
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}