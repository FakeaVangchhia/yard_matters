
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FileCheck, Handshake, UserCheck, Building, FileText, Shield, Scale, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
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
                Our Services
              </motion.h1>
              <motion.p 
                className="text-lg mb-8 text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                YardMatters offers comprehensive services designed to facilitate secure, efficient property collaborations between landowners and developers.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Service categories tabs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="landowners" className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 w-full max-w-md">
                  <TabsTrigger value="landowners">For Landowners</TabsTrigger>
                  <TabsTrigger value="developers">For Developers</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="landowners">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#14532d] mb-4">Landowner Services</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                      Maximize the potential of your land with our comprehensive services designed specifically for landowners.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        title: "Private Property Listing",
                        description: "List your property securely with controlled information visibility to attract qualified developers.",
                        icon: Building,
                        popular: true
                      },
                      {
                        title: "Document Verification",
                        description: "Our experts verify your property documents to ensure legal compliance and attract serious inquiries.",
                        icon: FileCheck
                      },
                      {
                        title: "Developer Screening",
                        description: "Access only verified developers with proven track records and relevant experience.",
                        icon: UserCheck
                      },
                      {
                        title: "Proposal Review",
                        description: "Receive professional analysis of development proposals to make informed decisions.",
                        icon: FileText
                      },
                      {
                        title: "Mediated Communication",
                        description: "Communicate safely with interested developers through our secure platform.",
                        icon: MessageSquare
                      },
                      {
                        title: "Collaboration Structuring",
                        description: "Expert guidance on creating balanced, fair collaboration structures that protect your interests.",
                        icon: Handshake
                      }
                    ].map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className={`h-full relative ${service.popular ? 'border-[#14532d]' : ''}`}>
                          {service.popular && (
                            <div className="absolute -top-3 -right-3">
                              <Badge className="bg-[#14532d]">Most Popular</Badge>
                            </div>
                          )}
                          <CardContent className="pt-6">
                            <div className="p-3 bg-[#14532d]/10 rounded-full w-fit mb-4">
                              <service.icon className="h-6 w-6 text-[#14532d]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-700 mb-4">{service.description}</p>
                            <Button variant="ghost" className="text-[#14532d] hover:text-[#14532d] hover:bg-[#14532d]/10 p-0 h-auto">
                              Learn more
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-12 text-center">
                    <Button asChild size="lg" className="bg-[#14532d] hover:bg-[#14532d]/90">
                      <Link to="/list-property">List Your Property</Link>
                    </Button>
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="developers">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#14532d] mb-4">Developer Services</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                      Find the perfect properties and create successful collaborations with our specialized services for developers.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        title: "Verified Property Access",
                        description: "Browse pre-verified properties with confirmed legal status and development potential.",
                        icon: Building,
                        popular: true
                      },
                      {
                        title: "Custom Property Alerts",
                        description: "Receive notifications when properties matching your specific criteria are listed.",
                        icon: FileCheck
                      },
                      {
                        title: "Proposal Submission",
                        description: "Submit professional proposals directly to interested landowners through our secure platform.",
                        icon: FileText
                      },
                      {
                        title: "Legal Framework Support",
                        description: "Access templates and guidance for creating legally sound collaboration agreements.",
                        icon: Scale
                      },
                      {
                        title: "Privacy Protection",
                        description: "Maintain confidentiality of your business model and financial details during negotiations.",
                        icon: Shield
                      },
                      {
                        title: "Negotiation Assistance",
                        description: "Get expert support during the negotiation process to create balanced agreements.",
                        icon: Handshake
                      }
                    ].map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className={`h-full relative ${service.popular ? 'border-[#14532d]' : ''}`}>
                          {service.popular && (
                            <div className="absolute -top-3 -right-3">
                              <Badge className="bg-[#14532d]">Most Popular</Badge>
                            </div>
                          )}
                          <CardContent className="pt-6">
                            <div className="p-3 bg-[#14532d]/10 rounded-full w-fit mb-4">
                              <service.icon className="h-6 w-6 text-[#14532d]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-700 mb-4">{service.description}</p>
                            <Button variant="ghost" className="text-[#14532d] hover:text-[#14532d] hover:bg-[#14532d]/10 p-0 h-auto">
                              Learn more
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-12 text-center">
                    <Button asChild size="lg" className="bg-[#14532d] hover:bg-[#14532d]/90">
                      <Link to="/properties">Explore Properties</Link>
                    </Button>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Pricing plans */}
        <section className="py-16 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#14532d] mb-4">Pricing Plans</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Flexible options designed to meet the needs of both landowners and developers of all sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border shadow-sm h-full">
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold text-gray-500">Basic</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">₹0</span>
                        <span className="text-gray-500 ml-1">/month</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>1 property listing</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Basic property verification</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Limited proposal submissions</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Email support</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full">Get Started</Button>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Premium Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 border-[#14532d] shadow-lg h-full relative">
                  <div className="absolute top-0 left-0 right-0 transform -translate-y-1/2">
                    <Badge className="bg-[#14532d] mx-auto block w-fit px-3 py-1">Most Popular</Badge>
                  </div>
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold text-[#14532d]">Premium</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">₹2,499</span>
                        <span className="text-gray-500 ml-1">/month</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>5 property listings</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Advanced verification & featured placement</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Unlimited proposal submissions</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Priority customer support</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Legal document templates</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-[#14532d] hover:bg-[#14532d]/90">Choose Plan</Button>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Enterprise Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border shadow-sm h-full">
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold text-gray-500">Enterprise</h3>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">₹7,999</span>
                        <span className="text-gray-500 ml-1">/month</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Unlimited property listings</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Premium verification & featured placement</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Dedicated account manager</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Custom legal assistance</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>API access & white label options</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full">Contact Sales</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#14532d] mb-4">Client Success Stories</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Hear from landowners and developers who have successfully collaborated through YardMatters.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "YardMatters helped me find the perfect developer for my family's 4-acre property. The privacy protection allowed me to explore options without revealing our identity until we were ready.",
                  name: "Rajiv Malhotra",
                  role: "Landowner, Pune",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                },
                {
                  quote: "As a developer, finding suitable land with clear ownership is always challenging. YardMatters' verification process saved us months of due diligence and legal complications.",
                  name: "Anika Singh",
                  role: "CEO, Horizon Developers",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
                },
                {
                  quote: "The structured collaboration templates provided by YardMatters helped us create a balanced agreement that has led to a successful township project now in its second phase.",
                  name: "Vikram Patel",
                  role: "Managing Director, Green Space Builders",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-6">
                        <svg className="h-8 w-8 text-[#14532d]/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-12 h-12 rounded-full object-cover" 
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
              Ready to Experience Our Services?
            </motion.h2>
            <motion.p 
              className="text-white/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Create your account today or contact our team to learn which services best fit your needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="bg-white text-[#14532d] hover:bg-white/90">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
