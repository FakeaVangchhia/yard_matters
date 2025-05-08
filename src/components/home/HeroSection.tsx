
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#14532d] to-[#1e3a29]">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-36">
        <div className="px-6 lg:px-0">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-white/20">
                  Secure Collaboration Platform
                </div>
              </motion.div>
              <motion.h1 
                className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Connecting Land with Capital — Safely & Legally
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                YardMatters helps landowners and developers collaborate securely, without sharing contact details or sensitive information directly.
              </motion.p>
              <motion.div 
                className="mt-10 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Button asChild size="lg" className="rounded-md bg-white text-[#14532d] hover:bg-white/90">
                  <Link to="/list-property">List My Land</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-md bg-white text-[#14532d] hover:bg-white/90">
                  <Link to="/properties" className="flex items-center gap-2">
                    Explore Projects <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div 
                className="mt-10 grid grid-cols-1 gap-y-4 gap-x-8 text-sm sm:grid-cols-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center gap-x-2 text-white">
                  <CheckIcon className="h-5 w-5 flex-none text-white" />
                  Privacy Protected
                </div>
                <div className="flex items-center gap-x-2 text-white">
                  <CheckIcon className="h-5 w-5 flex-none text-white" />
                  Verified Partners
                </div>
                <div className="flex items-center gap-x-2 text-white">
                  <CheckIcon className="h-5 w-5 flex-none text-white" />
                  Secure Documents
                </div>
                <div className="flex items-center gap-x-2 text-white">
                  <CheckIcon className="h-5 w-5 flex-none text-white" />
                  Mediated Collaboration
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-full relative">
          <motion.div 
            className="overflow-hidden shadow-xl rounded-lg bg-gradient-to-br from-[#14532d]/10 to-[#14532d]/30 p-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=2000&q=80" 
                alt="Taj Mahal with beautiful landscape view" 
                className="w-full object-cover h-[400px]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000e6] to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-medium text-sm">Secure collaboration platform for prime Indian real estate development</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
