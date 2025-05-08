
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building, Upload, Shield, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const formSchema = z.object({
  city: z.string().min(2, {
    message: "City is required.",
  }),
  district: z.string().min(2, {
    message: "District is required.",
  }),
  state: z.string().min(2, {
    message: "State is required.",
  }),
  landSize: z.string().min(1, {
    message: "Land size is required.",
  }),
  landSizeUnit: z.string().min(1, {
    message: "Please select a unit.",
  }),
  ownershipStatus: z.string().min(1, {
    message: "Please select ownership status.",
  }),
  developmentIntent: z.string().min(1, {
    message: "Please select preferred development.",
  }),
  description: z.string().optional(),
  nearbyLandmarks: z.string().optional(),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
  agreePrivacy: z.boolean().refine(val => val === true, {
    message: "You must agree to be contacted only via YardMatters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ListProperty = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: "",
      district: "",
      state: "",
      landSize: "",
      landSizeUnit: "acres",
      ownershipStatus: "",
      developmentIntent: "",
      description: "",
      nearbyLandmarks: "",
      agreeTerms: false,
      agreePrivacy: false,
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Property listed successfully!", {
        description: "Our team will review your listing and get back to you soon.",
      });
    }, 1500);
  };

  const stepItems = [
    { title: "Location" },
    { title: "Details" },
    { title: "Review" },
  ];

  const nextStep = () => {
    if (step === 1) {
      form.trigger(["city", "district", "state"]);
      if (form.formState.errors.city || form.formState.errors.district || form.formState.errors.state) {
        return;
      }
    } else if (step === 2) {
      form.trigger(["landSize", "landSizeUnit", "ownershipStatus", "developmentIntent"]);
      if (
        form.formState.errors.landSize || 
        form.formState.errors.landSizeUnit || 
        form.formState.errors.ownershipStatus || 
        form.formState.errors.developmentIntent
      ) {
        return;
      }
    }
    
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 bg-muted/30 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="container max-w-lg text-center py-16"
          >
            <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-green-100 mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Property Listed Successfully!
            </h1>
            <p className="text-muted-foreground mb-6">
              Thank you for listing your property with YardMatters. Our team will review your submission and get back to you within 24-48 hours. You'll receive an email confirmation shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#14532d] hover:bg-[#14532d]/90">
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/30">
        <div className="container max-w-3xl py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
              List Your Property
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Share basic details about your land. We'll keep your information secure and only share it with verified developers if you approve.
            </p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="flex space-x-12 relative">
              {stepItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`step-item ${idx + 1 === step ? "active" : ""} ${idx + 1 < step ? "complete" : ""}`}
                >
                  <div className="step">{idx + 1 < step ? <CheckCircle2 className="h-5 w-5" /> : idx + 1}</div>
                  <p className="text-xs mt-2">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Card className="mb-8">
                <CardContent className="pt-6">
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-2 mb-6">
                        <Shield className="h-5 w-5 text-[#14532d]" />
                        <h2 className="text-xl font-semibold">Location Information</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter city name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="district"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>District</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter district name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter state" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="nearbyLandmarks"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nearby Landmarks (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Notable landmarks near the property" {...field} />
                              </FormControl>
                              <FormDescription>
                                This helps developers understand the location better.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex justify-center p-4 bg-[#14532d]/5 rounded-lg">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center gap-2 text-sm">
                                <Shield className="h-4 w-4 text-[#14532d]" />
                                <span className="text-[#14532d] font-medium">Your exact address is kept private</span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs text-xs">
                                We only share general location information with developers. Your specific address and contact details remain hidden until you approve a collaboration.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-2 mb-6">
                        <Building className="h-5 w-5 text-[#14532d]" />
                        <h2 className="text-xl font-semibold">Property Details</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex gap-4">
                          <FormField
                            control={form.control}
                            name="landSize"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormLabel>Land Size</FormLabel>
                                <FormControl>
                                  <Input type="text" placeholder="e.g. 2.5" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="landSizeUnit"
                            render={({ field }) => (
                              <FormItem className="w-28">
                                <FormLabel>Unit</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Unit" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="acres">Acres</SelectItem>
                                    <SelectItem value="hectares">Hectares</SelectItem>
                                    <SelectItem value="sqft">Sq. ft.</SelectItem>
                                    <SelectItem value="sqm">Sq. m.</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="ownershipStatus"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ownership Status</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select ownership status" />
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
                          control={form.control}
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

                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Property Description (Optional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Describe your property, its potential, current condition, etc."
                                  className="resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Add any details that might be relevant to potential developers.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium flex items-center gap-2 mb-3">
                          <Upload className="h-4 w-4" />
                          Documents (Optional)
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          You can upload property documents now or later. These will only be shared with verified developers after your approval.
                        </p>
                        <Button variant="outline" type="button">Upload Documents</Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-2 mb-6">
                        <Shield className="h-5 w-5 text-[#14532d]" />
                        <h2 className="text-xl font-semibold">Review & Submit</h2>
                      </div>

                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                            <p>{form.getValues("city")}, {form.getValues("district")}, {form.getValues("state")}</p>
                          </div>
                          
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Land Size</h3>
                            <p>{form.getValues("landSize")} {form.getValues("landSizeUnit")}</p>
                          </div>
                          
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Ownership Status</h3>
                            <p className="capitalize">
                              {form.getValues("ownershipStatus").replace(/-/g, ' ')}
                            </p>
                          </div>
                          
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Preferred Development</h3>
                            <p className="capitalize">
                              {form.getValues("developmentIntent").replace(/-/g, ' ')}
                            </p>
                          </div>
                          
                          {form.getValues("nearbyLandmarks") && (
                            <div className="md:col-span-2">
                              <h3 className="text-sm font-medium text-muted-foreground">Nearby Landmarks</h3>
                              <p>{form.getValues("nearbyLandmarks")}</p>
                            </div>
                          )}
                          
                          {form.getValues("description") && (
                            <div className="md:col-span-2">
                              <h3 className="text-sm font-medium text-muted-foreground">Description</h3>
                              <p>{form.getValues("description")}</p>
                            </div>
                          )}
                        </div>

                        <div className="border-t pt-6 space-y-4">
                          <FormField
                            control={form.control}
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
                                    I agree to the <Link to="/terms" className="text-brand-600 hover:underline">terms and conditions</Link> and confirm that I have the right to list this property.
                                  </FormLabel>
                                  <FormMessage />
                                </div>
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
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
                                    I agree to be contacted only via YardMatters and understand that my contact details will remain private until I approve a collaboration.
                                  </FormLabel>
                                  <FormMessage />
                                </div>
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>

              <div className="flex justify-between">
                {step > 1 ? (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Previous
                  </Button>
                ) : (
                  <div></div> // Empty div to maintain the flex spacing
                )}

                {step < 3 ? (
                  <Button type="button" onClick={nextStep} className="bg-[#14532d] hover:bg-[#14532d]/90">
                    Next
                  </Button>
                ) : (
                  <Button 
                    type="submit"
                    className="bg-[#14532d] hover:bg-[#14532d]/90"
                    disabled={isSubmitting || !form.formState.isValid}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Property"}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListProperty;
