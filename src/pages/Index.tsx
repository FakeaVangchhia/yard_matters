import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import CTASection from "@/components/home/CTASection";
import TrustSignalsSection from "@/components/home/TrustSignalsSection";
import FaqSection from "@/components/home/FaqSection";
import PrivacySection from "@/components/home/PrivacySection";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        
        <div>
          <TrustSignalsSection />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#14532d]/5 to-[#14532d]/10 pointer-events-none"></div>
          <WorkflowSection />
        </div>
        
        <div>
          <PrivacySection />
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#14532d]/5 to-[#14532d]/10 pointer-events-none"></div>
          <FaqSection />
        </div>
        
        <div>
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
