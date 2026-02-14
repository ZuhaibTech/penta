import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/Contactus/Contact";
import ScheduleBox from "@/Contactus/ScheduleBox";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Your existing contact form */}
        <Contact />
        
        {/* Your new map section with the animated consultation box */}
        <ScheduleBox />
      </main>
      <Footer />
    </>
  );
}