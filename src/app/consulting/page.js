import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultingHero from "@/ConsultingAndtraining/ConsultingHero";
import ConsultingDetails from "@/ConsultingAndtraining/ConsultingDetails";
import WebOurServices from "@/WebDevelopment/WebOurServices";

export default function Page() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Navbar />
      <main>
        <ConsultingHero />
        <ConsultingDetails />
        <WebOurServices/>
      </main>
      <Footer />
    </div>
  );
}