import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Highlights from "@/components/Highlights";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import CampusSection from "@/components/CampusSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Highlights />
      <AboutSection />
      <ProgramsSection />
      <CampusSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
