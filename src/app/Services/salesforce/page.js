import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SalesforceHero from "@/Services/SalesforceConsulting";
import SalesforceOverview from "@/Services/SalesforceOverview";
import GlobalServicesGrid from "@/Services/GlobalServicesGrid";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <SalesforceHero />
        <div className="bg-slate-50">
           <SalesforceOverview />
        </div>
        <GlobalServicesGrid />
      </main>
      <Footer />
    </>
  );
}