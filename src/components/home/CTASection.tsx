
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="bg-[#14532d] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0M0 0L40 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8" />
              <span>Ready to collaborate safely?</span>
            </div>
            <span className="text-2xl mt-2 sm:mt-0 font-medium text-white/90">
              Join YardMatters today.
            </span>
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            We've helped facilitate over 200 successful land development collaborations with full privacy protection and legal compliance.
          </p>
        </motion.div>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-y-4 gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Button asChild size="lg" variant="secondary" className="rounded-md px-8 w-full sm:w-auto bg-white text-[#14532d] hover:bg-white/90 font-medium">
            <Link to="/register">Get Started</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="rounded-md px-8 text-white border-white hover:bg-white/10 w-full sm:w-auto relative overflow-hidden group"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Contact Us <MessageSquare className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CTASection;
