import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/LandingPage/HeroSection";
import Certificates from "@/LandingPage/Certificates";
import Services from "@/LandingPage/Services";
import GlobalImpact from "@/LandingPage/GlobalImpact";
import Industries from "@/LandingPage/Industries"; // New Import
import ContactSection from "@/LandingPage/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <Certificates />
        <Services />
        <GlobalImpact />
        <Industries /> {/* Added here */}
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}