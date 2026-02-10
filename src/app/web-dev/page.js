import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebHero from "@/WebDevelopment/WebHero";
import WebServiceDetails from "@/WebDevelopment/WebServiceDetails";
import WebContactSection from "@/WebDevelopment/WebOurServices";

export default function Page() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <WebHero />
        <WebServiceDetails />
        <WebContactSection />
      </main>
      <Footer />
    </div>
  );
}