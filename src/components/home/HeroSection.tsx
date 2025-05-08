import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lawn.jpg" 
          alt="Lawn background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Tagline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connect Your Land with Opportunity
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-lg sm:text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We help landowners across India list, showcase, and sell their property to verified buyers — securely and transparently.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-white/10 text-white font-semibold px-8 py-6 text-lg rounded-lg border border-white/20 shadow-md backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <Link to="/list-property"> List Your Land</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-white/10 text-white font-semibold px-8 py-6 text-lg rounded-lg border border-white/20 shadow-md backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <Link to="/properties"> Browse Listings</Link>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
          >
            <ArrowDown className="h-8 w-8 text-white animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
