import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Building, Handshake, Users, FileText, Eye, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const processSteps = [
    {
      title: "Property Listing",
      description: "Landowners list their properties on our platform with sufficient details while maintaining privacy. No exact location or contact information is shared publicly.",
      icon: Building,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Verification Process",
      description: "Our team verifies property documentation and ownership details before the listing goes live on the platform.",
      icon: CheckCircle,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Developer Interest",
      description: "Qualified developers browse verified properties and can express interest in properties that match their criteria.",
      icon: Eye,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Secure Communication",
      description: "Initial interactions are mediated through our platform, protecting privacy while facilitating meaningful discussion.",
      icon: Lock,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Collaboration Proposal",
      description: "Developers submit formal collaboration proposals through our platform with terms and conditions.",
      icon: FileText,
      color: "bg-pink-50 text-pink-600"
    },
    {
      title: "Agreement Facilitation",
      description: "Our team assists in facilitating the final agreement between parties with proper legal documentation.",
      icon: Handshake,
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-[#14532d] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10"
              >
                <Shield className="h-8 w-8 text-white" />
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                How YardMatters Works
              </motion.h1>
              <motion.p 
                className="text-lg mb-8 text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Our platform facilitates secure, private collaboration between landowners and developers. 
                Learn how we've streamlined the process while protecting everyone's interests.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Process steps */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#14532d] mb-4">Our Process</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                From listing to final agreement, our seamless process ensures security and efficiency at every step.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Neon animated timeline */}
              <div className="neon-timeline hidden md:block">
                <div className="neon-flow"></div>
              </div>
              {/* Connecting line (fallback for mobile) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#14532d]/20 z-0 hidden md:block"></div>
              
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative z-10 mb-8 md:flex ${index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="hidden md:block flex-1"></div>
                  
                  <div className={`md:absolute left-1/2 top-0 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#14532d] text-white mx-auto md:mx-0 mb-4 md:mb-0 z-20`}>
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1">
                    <Card className={`border-none shadow-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                          <step.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits section */}
        <section className="py-20 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#14532d] mb-4">Why Choose YardMatters</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Our platform offers unique benefits that make property collaboration safer and more efficient.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Privacy Protection",
                  description: "Your personal details and property information are only shared with verified parties who have expressed serious interest.",
                  icon: Lock,
                },
                {
                  title: "Verified Partners",
                  description: "All users on our platform undergo a thorough verification process to ensure legitimacy and trustworthiness.",
                  icon: CheckCircle,
                },
                {
                  title: "Legal Compliance",
                  description: "Our process ensures all collaborations follow applicable real estate laws and regulations in India.",
                  icon: FileText,
                },
                {
                  title: "Mediated Communication",
                  description: "Initial discussions are facilitated through our platform, reducing risk and protecting both parties.",
                  icon: Users,
                },
                {
                  title: "Documentation Support",
                  description: "We provide templates and guidance for collaboration agreements tailored to your specific needs.",
                  icon: FileText,
                },
                {
                  title: "End-to-End Support",
                  description: "Our team is available throughout the entire process to answer questions and provide guidance.",
                  icon: Shield,
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-full border-none hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-[#14532d]/10 flex items-center justify-center mb-4">
                        <benefit.icon className="h-6 w-6 text-[#14532d]" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-[#14532d]">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Collaboration Journey?
            </motion.h2>
            <motion.p 
              className="text-white/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join our platform and experience a secure, privacy-focused approach to land development collaborations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="bg-white text-[#14532d] hover:bg-white/90">
                <Link to="/register">Create an Account</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;

<style>
{`
  .neon-timeline {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 100%;
    background: rgba(20, 83, 45, 0.2);
    z-index: 0;
    border-radius: 3px;
    overflow: hidden;
  }
  .neon-flow {
    position: absolute;
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(180deg, #00ffb3 0%, #00e0ff 100%);
    filter: blur(6px) brightness(1.5);
    border-radius: 3px;
    animation: neonMove 2.5s linear infinite;
  }
  @keyframes neonMove {
    0% { top: 0; opacity: 0.7; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { top: 100%; opacity: 0.7; }
  }
`}
</style>
