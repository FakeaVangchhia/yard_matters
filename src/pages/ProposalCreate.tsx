
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StepIndicator from "@/components/workflow/StepIndicator";

const formSchema = z.object({
  developmentType: z.string({
    required_error: "Please select a development type",
  }),
  revenueSharePercentage: z.number().min(1).max(99),
  constructedAreaPercentage: z.number().min(1).max(99),
  shareType: z.enum(["revenue", "area"], {
    required_error: "Please select a share type",
  }),
  projectTimeline: z.string({
    required_error: "Please select an estimated timeline",
  }),
  advancePayment: z.string().optional(),
  requiredApprovals: z.string().min(1, {
    message: "Please list the required approvals",
  }),
  exitClauses: z.string().min(1, {
    message: "Please specify exit clauses",
  }),
  additionalNotes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ProposalCreate = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Basic Info", "Share Terms", "Timeline & Approvals", "Review"];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      developmentType: "",
      revenueSharePercentage: 50,
      constructedAreaPercentage: 50,
      shareType: "revenue",
      projectTimeline: "",
      advancePayment: "",
      requiredApprovals: "",
      exitClauses: "",
      additionalNotes: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast({
      title: "Proposal Created",
      description: "Your proposal has been created successfully.",
    });
    console.log(data);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container max-w-4xl py-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Create a Proposal</h1>
          <p className="text-muted-foreground mt-2">
            Structure your development proposal with clear terms and conditions.
          </p>
        </div>
        
        <StepIndicator steps={steps} currentStep={currentStep} />
        
        <div className="bg-white border rounded-lg shadow-sm p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {currentStep === 0 && (
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="developmentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Development Type</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select development type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="mixed">Mixed-use</SelectItem>
                            <SelectItem value="industrial">Industrial</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="shareType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Share Type</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="revenue" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Revenue Share
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="area" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Constructed Area Share
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.watch("shareType") === "revenue" && (
                    <FormField
                      control={form.control}
                      name="revenueSharePercentage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Revenue Share Percentage: {field.value}%
                          </FormLabel>
                          <FormControl>
                            <Slider
                              min={1}
                              max={99}
                              step={1}
                              defaultValue={[field.value]}
                              onValueChange={(vals) => field.onChange(vals[0])}
                              className="py-4"
                            />
                          </FormControl>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Landowner: {field.value}%</span>
                            <span>Developer: {100 - field.value}%</span>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {form.watch("shareType") === "area" && (
                    <FormField
                      control={form.control}
                      name="constructedAreaPercentage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Constructed Area Share Percentage: {field.value}%
                          </FormLabel>
                          <FormControl>
                            <Slider
                              min={1}
                              max={99}
                              step={1}
                              defaultValue={[field.value]}
                              onValueChange={(vals) => field.onChange(vals[0])}
                              className="py-4"
                            />
                          </FormControl>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Landowner: {field.value}%</span>
                            <span>Developer: {100 - field.value}%</span>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="advancePayment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Advance Payment (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., ₹50,00,000 upfront"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="projectTimeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estimated Timeline</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select project timeline" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="6-12">6-12 months</SelectItem>
                            <SelectItem value="12-18">12-18 months</SelectItem>
                            <SelectItem value="18-24">18-24 months</SelectItem>
                            <SelectItem value="24-36">24-36 months</SelectItem>
                            <SelectItem value="36+">36+ months</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="requiredApprovals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Required Approvals</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="List all required approvals (e.g., Building Plan Approval, Environmental Clearance)"
                            {...field}
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="exitClauses"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Exit Clauses</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Specify conditions under which either party can exit the agreement"
                            {...field}
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="font-medium text-lg">Proposal Summary</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Development Type</h4>
                      <p className="mt-1">{form.getValues("developmentType")}</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Share Terms</h4>
                      <p className="mt-1">
                        {form.getValues("shareType") === "revenue" 
                          ? `Revenue Share: ${form.getValues("revenueSharePercentage")}% (Landowner) / ${100 - form.getValues("revenueSharePercentage")}% (Developer)` 
                          : `Constructed Area Share: ${form.getValues("constructedAreaPercentage")}% (Landowner) / ${100 - form.getValues("constructedAreaPercentage")}% (Developer)`
                        }
                      </p>
                      {form.getValues("advancePayment") && (
                        <p className="mt-1">Advance Payment: {form.getValues("advancePayment")}</p>
                      )}
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Timeline & Approvals</h4>
                      <p className="mt-1">Project Timeline: {form.getValues("projectTimeline")} months</p>
                      <p className="mt-1">Required Approvals:</p>
                      <p className="mt-1 text-sm">{form.getValues("requiredApprovals")}</p>
                      <p className="mt-3">Exit Clauses:</p>
                      <p className="mt-1 text-sm">{form.getValues("exitClauses")}</p>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="additionalNotes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Notes (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Add any additional information or notes for this proposal"
                              {...field}
                              rows={3}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
                
                {currentStep < steps.length - 1 ? (
                  <Button type="button" onClick={handleNext}>
                    Next
                  </Button>
                ) : (
                  <Button type="submit">
                    Submit Proposal
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

export default ProposalCreate;
