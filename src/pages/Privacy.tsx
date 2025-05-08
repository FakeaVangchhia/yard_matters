
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Lock, Eye, FileCheck, Settings, Database } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
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
                Privacy & Security
              </motion.h1>
              <motion.p 
                className="text-lg mb-8 text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                At YardMatters, your privacy and security are our highest priorities. 
                Learn how we protect your information and maintain confidentiality throughout the collaboration process.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Privacy principles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#14532d] mb-4">Our Privacy Principles</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                These core principles guide our approach to privacy and security across our platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Data Minimization",
                  description: "We collect only the information necessary for the platform to function and facilitate collaborations.",
                  icon: Database
                },
                {
                  title: "Controlled Access",
                  description: "Your information is only shared with verified users who have expressed specific interest in collaboration.",
                  icon: Lock
                },
                {
                  title: "Transparent Practices",
                  description: "We clearly communicate what information is shared, when, and with whom throughout the process.",
                  icon: Eye
                },
                {
                  title: "User Consent",
                  description: "You maintain control over your information and must provide explicit consent before sensitive details are shared.",
                  icon: FileCheck
                },
                {
                  title: "Enterprise-Grade Security",
                  description: "We implement robust security measures to protect your data from unauthorized access or breaches.",
                  icon: Shield
                },
                {
                  title: "Privacy Controls",
                  description: "Our platform includes intuitive controls to manage your privacy settings and information sharing.",
                  icon: Settings
                }
              ].map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                >
                  <div className="p-3 bg-[#14532d]/10 rounded-full w-fit mb-4">
                    <principle.icon className="h-6 w-6 text-[#14532d]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                  <p className="text-gray-700">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Privacy Policy */}
        <section className="py-16 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#14532d] mb-8">Privacy Policy</h2>
                
                <div className="space-y-8">
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">1. Information We Collect</h3>
                    <p className="text-gray-700 mb-4">
                      We collect information that is necessary to provide our services and facilitate secure property collaborations:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Account information (name, email, phone number)</li>
                      <li>Property details (general location, size, development potential)</li>
                      <li>Identity verification documents</li>
                      <li>Collaboration preferences and requirements</li>
                      <li>Communication records within our platform</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">2. How We Use Your Information</h3>
                    <p className="text-gray-700 mb-4">
                      Your information is used solely for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Facilitating property listings and discovery</li>
                      <li>Verifying user identities and property ownership</li>
                      <li>Enabling secure communication between interested parties</li>
                      <li>Processing collaboration proposals and agreements</li>
                      <li>Improving our platform and services</li>
                      <li>Complying with legal obligations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">3. Information Sharing</h3>
                    <p className="text-gray-700 mb-4">
                      We are extremely selective about when and how your information is shared:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Property listings show only general location and non-identifying details</li>
                      <li>Contact information is never publicly displayed</li>
                      <li>Detailed information is shared only after mutual interest is confirmed</li>
                      <li>Personal details are shared progressively as the collaboration advances</li>
                      <li>We never sell your personal information to third parties</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">4. Security Measures</h3>
                    <p className="text-gray-700 mb-4">
                      We employ industry-leading security practices to protect your information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>End-to-end encryption for all sensitive data</li>
                      <li>Multi-factor authentication for account access</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Secure data centers with physical and technical safeguards</li>
                      <li>Employee access controls and training</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">5. Your Privacy Rights</h3>
                    <p className="text-gray-700 mb-4">
                      You maintain control over your personal information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Access and review your personal information</li>
                      <li>Request corrections to inaccurate data</li>
                      <li>Control your privacy settings and sharing preferences</li>
                      <li>Request deletion of your data (subject to legal requirements)</li>
                      <li>Opt out of marketing communications</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">6. Data Retention</h3>
                    <p className="text-gray-700 mb-4">
                      We retain your information only as long as necessary:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Account information is kept while your account is active</li>
                      <li>Communication records are retained for legal compliance purposes</li>
                      <li>Inactive accounts and related data are regularly reviewed for deletion</li>
                      <li>You can request earlier deletion of certain information</li>
                    </ul>
                  </div>
                </div>
                
                <Separator className="my-12" />
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Contact Our Privacy Team</h3>
                  <p className="text-gray-700 mb-4">
                    If you have questions or concerns about our privacy practices, please contact our dedicated privacy team at:
                  </p>
                  <p className="text-[#14532d] font-medium">privacy@yardmatters.in</p>
                  <p className="text-gray-700 mt-4">
                    For formal privacy requests or concerns, you can also write to:
                  </p>
                  <p className="text-gray-700 mt-2">
                    Privacy Officer<br />
                    YardMatters Technologies Pvt. Ltd.<br />
                    Level 8, Vibgyor Towers<br />
                    G Block BKC, Mumbai 400098
                  </p>
                </div>
                
                <div className="mt-12 text-sm text-gray-500">
                  <p>Last updated: January 10, 2023</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
