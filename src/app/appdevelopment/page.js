import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// This imports from your logic folder
import AppComingSoon from "@/AppDevelopment/AppComingSoon";

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        {/* Component clears the Navbar with its own padding */}
        <AppComingSoon />
      </main>
      <Footer />
    </div>
  );
}