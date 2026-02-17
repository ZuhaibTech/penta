import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CloudHero from "@/CloudSolutions/CloudHero";
import CloudFeatures from "@/CloudSolutions/CloudFeatures";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <CloudHero />
        <CloudFeatures />
      </main>
      <Footer />
    </>
  );
}