import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/Contactus/ContactHero";
import ContactVideo from "@/Contactus/ContactVideo"; // New Split Component
import ContactDetails from "@/Contactus/ContactDetails"; // New Split Component

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        {/* Section 1: Text & Form */}
        <ContactHero />
        
        {/* Section 2: Earth Video Section */}
        <ContactVideo />
        
        {/* Section 3: Contact Info Cards */}
        <ContactDetails />
      </main>
      <Footer />
    </div>
  );
}