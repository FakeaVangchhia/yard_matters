
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Award, Users, Leaf, Building, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-[#14532d] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Our Mission and Vision
              </motion.h1>
              <motion.p 
                className="text-lg mb-8 text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                YardMatters is revolutionizing how landowners and developers collaborate by providing a secure, privacy-first platform that protects both parties while enabling productive partnerships.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Our story section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#14532d] mb-6">Our Story</h2>
                <p className="text-gray-700 mb-6">
                  Founded in 2019, YardMatters was born out of a simple observation: landowners with valuable properties and developers with innovative ideas often struggled to find each other and collaborate safely.
                </p>
                <p className="text-gray-700 mb-6">
                  Our founders, with decades of combined experience in real estate and technology, created a platform where privacy, security, and trust serve as the foundation for successful real estate collaborations across India.
                </p>
                <p className="text-gray-700 mb-6">
                  Today, YardMatters has facilitated over 200 successful collaborations, representing more than ₹500 crores in development value, while maintaining our core commitment to privacy and security.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#14532d]/10 rounded-full -z-10 transform translate-x-1/4 -translate-y-1/4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
                  alt="YardMatters office in Mumbai" 
                  className="w-full rounded-lg shadow-xl" 
                />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#14532d]/10 rounded-full -z-10 transform -translate-x-1/4 translate-y-1/4"></div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Values section */}
        <section className="py-20 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#14532d] mb-4">Our Core Values</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                These principles guide everything we do at YardMatters, from platform development to customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-t-4 border-t-[#14532d] h-full">
                  <CardContent className="pt-6">
                    <Shield className="text-[#14532d] mb-4 h-10 w-10" />
                    <h3 className="text-xl font-bold mb-2">Privacy First</h3>
                    <p className="text-gray-700">
                      We protect your sensitive information and only share what's necessary, when necessary, with explicit consent.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-t-4 border-t-[#14532d] h-full">
                  <CardContent className="pt-6">
                    <Award className="text-[#14532d] mb-4 h-10 w-10" />
                    <h3 className="text-xl font-bold mb-2">Excellence</h3>
                    <p className="text-gray-700">
                      We strive for excellence in every aspect of our platform, ensuring the highest quality service for all users.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="border-t-4 border-t-[#14532d] h-full">
                  <CardContent className="pt-6">
                    <Users className="text-[#14532d] mb-4 h-10 w-10" />
                    <h3 className="text-xl font-bold mb-2">Trust</h3>
                    <p className="text-gray-700">
                      Building trust through transparency, verification, and consistent reliability forms the foundation of our service.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="border-t-4 border-t-[#14532d] h-full">
                  <CardContent className="pt-6">
                    <Building className="text-[#14532d] mb-4 h-10 w-10" />
                    <h3 className="text-xl font-bold mb-2">Innovation</h3>
                    <p className="text-gray-700">
                      We continuously innovate to improve the collaboration experience while maintaining privacy and security.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-t-4 border-t-[#14532d] h-full">
                  <CardContent className="pt-6">
                    <Leaf className="text-[#14532d] mb-4 h-10 w-10" />
                    <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                    <p className="text-gray-700">
                      We encourage and support sustainable development practices through our platform and partnerships.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-t-4 border-t-[#14532d] h-full">
                  <CardContent className="pt-6">
                    <BookOpen className="text-[#14532d] mb-4 h-10 w-10" />
                    <h3 className="text-xl font-bold mb-2">Integrity</h3>
                    <p className="text-gray-700">
                      We operate with transparency and honesty in all our dealings, maintaining the highest ethical standards.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#14532d] mb-4">Leadership Team</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Meet the experts guiding YardMatters toward continued excellence and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Aditya Sharma",
                  title: "CEO & Co-Founder",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                },
                {
                  name: "Priya Mehta",
                  title: "CTO & Co-Founder",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                },
                {
                  name: "Rahul Kapoor",
                  title: "Chief Legal Officer",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
                },
                {
                  name: "Aisha Khan",
                  title: "Chief Marketing Officer",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
                },
              ].map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-[#14532d]/20">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-[#14532d]">{person.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-[#14532d] py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Experience the YardMatters Difference?
            </motion.h2>
            <motion.p 
              className="text-white/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join our growing community of landowners and developers who are changing the way real estate development happens in India.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="bg-white text-[#14532d] hover:bg-white/90">
                <Link to="/register">Get Started Today</Link>
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

export default About;
