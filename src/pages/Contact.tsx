
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "Our team will get back to you within 24 hours.",
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-[#14532d] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Get In Touch
              </motion.h1>
              <motion.p 
                className="text-lg mb-8 text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Have questions about our platform or services? Our team is ready to assist you.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Contact information and form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-[#14532d] mb-6">Contact Information</h2>
                <p className="text-gray-700 mb-8">
                  Our team is available to answer your questions and provide support. Reach out to us through any of the following channels.
                </p>
                
                <div className="space-y-6">
                  <Card className="border-none shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="p-2 bg-[#14532d]/10 rounded-full">
                        <MapPin className="text-[#14532d] h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Office Address</h3>
                        <p className="text-gray-700">
                          Level 8, Vibgyor Towers, G Block BKC<br />
                          Mumbai, Maharashtra 400098
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="p-2 bg-[#14532d]/10 rounded-full">
                        <Phone className="text-[#14532d] h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-gray-700">+91 22 4890 1234</p>
                        <p className="text-gray-700">+91 98765 43210 (Support)</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="p-2 bg-[#14532d]/10 rounded-full">
                        <Mail className="text-[#14532d] h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-700">contact@yardmatters.in</p>
                        <p className="text-gray-700">support@yardmatters.in</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-none shadow-sm">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div className="p-2 bg-[#14532d]/10 rounded-full">
                        <Clock className="text-[#14532d] h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border shadow-md">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-[#14532d] mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input id="fullName" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="your.email@example.com" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Your phone number" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="How can we help you?" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Type your message here..." 
                          rows={5}
                          required 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-[#14532d] hover:bg-[#14532d]/90">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Map section */}
        <section className="py-16 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#14532d] mb-4">Visit Our Office</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Located in the heart of Mumbai's Bandra Kurla Complex, our office is easily accessible by public transportation.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                title="YardMatters Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1681021782185!2d72.86781957622928!3d19.06386978208839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8776aa6d9fd%3A0xbc2ea000c02e5217!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704921843404!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
