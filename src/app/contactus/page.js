import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/Contactus/Contact"; // Points to src/Contactus/Contact.js

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Contact />
      </main>
      <Footer />
    </>
  );
}