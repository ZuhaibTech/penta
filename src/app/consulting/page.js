import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultingComingSoon from "@/ConsultingAndtraining/ConsultingComingSoon";

export default function Page() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        {/* This connects to your src/ConsultingAndtraining logic */}
        <ConsultingComingSoon />
      </main>
      <Footer />
    </div>
  );
}