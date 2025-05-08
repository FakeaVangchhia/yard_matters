import { 
  FileCheck,
  Users,
  Building,
  Shield,
  FileText
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    name: "List Your Property",
    description: "Share only general location and basic details. Your personal information remains private until you approve a collaboration.",
    icon: Building,
  },
  {
    name: "Mediated Introductions",
    description: "Developers express interest through our platform. We verify their credentials before sharing any proposals with you.",
    icon: Users,
  },
  {
    name: "Secure Documentation",
    description: "All documents are encrypted and verified by our team, ensuring complete security and authenticity.",
    icon: Shield,
  },
  {
    name: "Collaboration Structure",
    description: "Our templates help structure fair, balanced agreements that protect the interests of both landowners and developers.",
    icon: FileText,
  },
  {
    name: "Safe Progression",
    description: "Track progress through our platform with milestone verification and secure document sharing as the collaboration advances.",
    icon: FileCheck,
  },
];

const WorkflowSection = () => {
  return (
    <motion.div
      className="relative bg-background py-24 sm:py-32 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Low-opacity background image */}
      <img
        src="/framework-bg.jpg"
        alt="Framework background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Secure Collaboration Framework
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our platform facilitates safe connections between landowners and developers with privacy and security at every step.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="flex flex-col bg-background rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:bg-muted/20"
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-foreground">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span>{index + 1}. {feature.name}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkflowSection;
