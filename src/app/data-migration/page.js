import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MigrationHero from "@/DataMigration/MigrationHero";
import MigrationServices from "@/DataMigration/MigrationServices";
import WebContactSection from "@/WebDevelopment/WebOurServices";

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        {/* Section 1: Hero with Video */}
        <MigrationHero />
        
        {/* Section 2: Migration Process & Services */}
        <MigrationServices />
        
        {/* Section 3: Shared Contact Section */}
        <WebContactSection />
      </main>
      <Footer />
    </div>
  );
}