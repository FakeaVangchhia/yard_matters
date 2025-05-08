
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const awards = [
  {
    name: "MSME Innovation Award",
    year: "2024",
    logo: "/trust-logos/msme-award.svg" 
  },
  {
    name: "Top Real Estate Startup",
    year: "2023",
    logo: "/trust-logos/realestate-award.svg"
  },
  {
    name: "ISO 27001 Certified",
    year: "2024",
    logo: "/trust-logos/iso-certified.svg"
  },
  {
    name: "Featured in Inc42",
    year: "2023",
    logo: "/trust-logos/inc42.svg"
  },
  {
    name: "ET Real Estate Excellence",
    year: "2023",
    logo: "/trust-logos/et-realestate.svg"
  }
];

const TrustSignalsSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-2xl font-semibold text-center text-foreground mb-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            YardMatters is recognized for its commitment to security, privacy, and innovation
            in facilitating safe real estate collaborations.
          </p>
        </div>
        
        <div className="flex gap-8 items-center justify-center mt-10 overflow-x-auto pb-4 scrollbar-none">
          {awards.map((award, index) => (
            <div 
              key={index}
              className={cn(
                "flex flex-col items-center justify-center min-w-[180px] p-5",
                "transition-all duration-300 hover:scale-105"
              )}
            >
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                <div className="w-16 h-16 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                  {/* Placeholder for logo - in production, use actual logo */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                    <span className="text-brand-600 font-bold text-xs">{award.name.substring(0, 2)}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-center">{award.name}</p>
              <p className="text-xs text-muted-foreground">{award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;
