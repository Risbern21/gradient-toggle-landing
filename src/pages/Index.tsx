import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero transition-all duration-1000 ease-in-out">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Index;
