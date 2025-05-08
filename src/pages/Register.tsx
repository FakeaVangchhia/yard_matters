
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building, UserPlus, Shield } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const landowmerFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  city: z.string().min(2, {
    message: "City is required.",
  }),
  landSize: z.string().min(1, {
    message: "Land size is required.",
  }),
  ownershipStatus: z.string().min(1, {
    message: "Please select ownership status.",
  }),
  developmentIntent: z.string().min(1, {
    message: "Please select preferred development.",
  }),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
  agreePrivacy: z.boolean().refine(val => val === true, {
    message: "You must agree to be contacted only via YardMatters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const developerFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  companyName: z.string().min(2, {
    message: "Company name is required.",
  }),
  regionsOfInterest: z.string().min(1, {
    message: "Please select at least one region.",
  }),
  developmentType: z.string().min(1, {
    message: "Please select development type.",
  }),
  budgetRange: z.string().min(1, {
    message: "Please select budget range.",
  }),
  startTimeline: z.string().min(1, {
    message: "Please select a timeline.",
  }),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
  agreePrivacy: z.boolean().refine(val => val === true, {
    message: "You must agree to submit proposals through YardMatters only.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const Register = () => {
  const [activeTab, setActiveTab] = useState("landowner");

  const landowmerForm = useForm<z.infer<typeof landowmerFormSchema>>({
    resolver: zodResolver(landowmerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      landSize: "",
      ownershipStatus: "",
      developmentIntent: "",
      agreeTerms: false,
      agreePrivacy: false,
      password: "",
    },
  });

  const developerForm = useForm<z.infer<typeof developerFormSchema>>({
    resolver: zodResolver(developerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      regionsOfInterest: "",
      developmentType: "",
      budgetRange: "",
      startTimeline: "",
      agreeTerms: false,
      agreePrivacy: false,
      password: "",
    },
  });

  const onLandownerSubmit = (values: z.infer<typeof landowmerFormSchema>) => {
    console.log(values);
    toast.success("Registration submitted! Check your email to verify your account.", {
      description: "We'll review your information and get back to you soon.",
      duration: 5000,
    });
  };

  const onDeveloperSubmit = (values: z.infer<typeof developerFormSchema>) => {
    console.log(values);
    toast.success("Developer registration successful! Check your email to verify your account.", {
      description: "Our team will review your profile and grant you access to available properties.",
      duration: 5000,
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/30">
        <div className="container max-w-6xl py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
              Join YardMatters
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Register to securely connect with verified partners for your land development projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card className="mx-auto max-w-4xl">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary-foreground flex items-center justify-center">
                  <Shield className="h-6 w-6 text-[#14532d]" />
                </div>
                <CardTitle className="text-2xl">Create Your Secure Account</CardTitle>
                <CardDescription>
                  Select your account type to get started with YardMatters
                </CardDescription>
              </CardHeader>

              <CardContent className="px-6 pt-2 pb-8">
                <Tabs defaultValue="landowner" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="landowner" className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      <span>Landowner</span>
                    </TabsTrigger>
                    <TabsTrigger value="developer" className="flex items-center gap-2">
                      <UserPlus className="h-4 w-4" />
                      <span>Developer/Investor</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="landowner">
                    <Form {...landowmerForm}>
                      <form onSubmit={landowmerForm.handleSubmit(onLandownerSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={landowmerForm.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your full name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={landowmerForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="your.email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={landowmerForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="Your phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={landowmerForm.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                  <Input type="password" placeholder="Create a password" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={landowmerForm.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City/District</FormLabel>
                                <FormControl>
                                  <Input placeholder="City or district name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={landowmerForm.control}
                            name="landSize"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Land Size (acres or sq. ft.)</FormLabel>
                                <FormControl>
                                  <Input placeholder="Approximate land size" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={landowmerForm.control}
                            name="ownershipStatus"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Ownership Status</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select your ownership status" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="sole-owner">Sole Owner</SelectItem>
                                    <SelectItem value="joint-owner">Joint Owner</SelectItem>
                                    <SelectItem value="power-of-attorney">Power of Attorney Holder</SelectItem>
                                    <SelectItem value="other">Other (Specify Later)</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={landowmerForm.control}
                            name="developmentIntent"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Preferred Development</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select preferred development" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="residential">Residential</SelectItem>
                                    <SelectItem value="commercial">Commercial</SelectItem>
                                    <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                                    <SelectItem value="industrial">Industrial</SelectItem>
                                    <SelectItem value="open">Open to Suggestions</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="space-y-3 pt-3">
                          <FormField
                            control={landowmerForm.control}
                            name="agreeTerms"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox 
                                    checked={field.value} 
                                    onCheckedChange={field.onChange} 
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel className="text-sm font-normal">
                                    I agree to the <Link to="/terms" className="text-brand-600 hover:underline">terms and conditions</Link>
                                  </FormLabel>
                                  <FormMessage />
                                </div>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={landowmerForm.control}
                            name="agreePrivacy"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox 
                                    checked={field.value} 
                                    onCheckedChange={field.onChange} 
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel className="text-sm font-normal">
                                    I agree to be contacted only via YardMatters and understand that my contact details will remain private
                                  </FormLabel>
                                  <FormMessage />
                                </div>
                              </FormItem>
                            )}
                          />
                        </div>

                        <Button type="submit" className="w-full bg-[#14532d] hover:bg-[#14532d]/90">
                          Create Landowner Account
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>

                  <TabsContent value="developer">
                    <Form {...developerForm}>
                      <form onSubmit={developerForm.handleSubmit(onDeveloperSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={developerForm.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your full name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={developerForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="your.email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={developerForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="Your phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={developerForm.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                  <Input type="password" placeholder="Create a password" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={developerForm.control}
                            name="companyName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your company name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={developerForm.control}
                            name="regionsOfInterest"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Regions of Interest</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select region of interest" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="north">North India</SelectItem>
                                    <SelectItem value="south">South India</SelectItem>
                                    <SelectItem value="east">East India</SelectItem>
                                    <SelectItem value="west">West India</SelectItem>
                                    <SelectItem value="central">Central India</SelectItem>
                                    <SelectItem value="nationwide">Nationwide</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={developerForm.control}
                            name="developmentType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Development Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select development type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="residential">Residential</SelectItem>
                                    <SelectItem value="commercial">Commercial</SelectItem>
                                    <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                                    <SelectItem value="industrial">Industrial</SelectItem>
                                    <SelectItem value="hospitality">Hospitality</SelectItem>
                                    <SelectItem value="retail">Retail</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={developerForm.control}
                            name="budgetRange"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Budget Range</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select budget range" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="upto-1cr">Up to 1 Crore</SelectItem>
                                    <SelectItem value="1-5cr">1-5 Crores</SelectItem>
                                    <SelectItem value="5-10cr">5-10 Crores</SelectItem>
                                    <SelectItem value="10-50cr">10-50 Crores</SelectItem>
                                    <SelectItem value="50cr-plus">50+ Crores</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={developerForm.control}
                            name="startTimeline"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Timeline to Start</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select timeline" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="immediate">Immediate</SelectItem>
                                    <SelectItem value="1-3-months">1-3 Months</SelectItem>
                                    <SelectItem value="3-6-months">3-6 Months</SelectItem>
                                    <SelectItem value="6-12-months">6-12 Months</SelectItem>
                                    <SelectItem value="1-year-plus">1+ Year</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="space-y-3 pt-3">
                          <FormField
                            control={developerForm.control}
                            name="agreeTerms"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox 
                                    checked={field.value} 
                                    onCheckedChange={field.onChange} 
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel className="text-sm font-normal">
                                    I agree to the <Link to="/terms" className="text-brand-600 hover:underline">terms and conditions</Link>
                                  </FormLabel>
                                  <FormMessage />
                                </div>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={developerForm.control}
                            name="agreePrivacy"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox 
                                    checked={field.value} 
                                    onCheckedChange={field.onChange} 
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel className="text-sm font-normal">
                                    I agree to submit proposals through YardMatters only and understand that direct contact with landowners is prohibited
                                  </FormLabel>
                                  <FormMessage />
                                </div>
                              </FormItem>
                            )}
                          />
                        </div>

                        <Button type="submit" className="w-full bg-[#14532d] hover:bg-[#14532d]/90">
                          Create Developer Account
                        </Button>
                      </form>
                    </Form>
                  </TabsContent>
                </Tabs>
              </CardContent>
              
              <CardFooter className="flex justify-center border-t p-6">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-brand-600 hover:underline">
                    Sign in
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
