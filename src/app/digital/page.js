import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalHero from "@/DigitalMarketing/DigitalHero";
import DigitalServices from "@/DigitalMarketing/DigitalServices";
import WebContactSection from "@/WebDevelopment/WebOurServices";

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        {/* Section 1: Hero */}
        <DigitalHero />
        
        {/* Section 2: Overview & Services list */}
        <DigitalServices />
        
        {/* Section 3: Shared Contact Section */}
        <WebContactSection />
      </main>
      <Footer />
    </div>
  );
}