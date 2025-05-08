import { useState } from "react";
import { motion } from "framer-motion";
import { Building, MapPin, ArrowRight, CheckCircle, Filter } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

// Mock property data
const propertyData = [
  {
    id: "p1",
    location: "Pune, Maharashtra",
    size: "3.5 acres",
    projectType: "Residential",
    verified: true,
    budget: 8, // in Lakh
    description: "Flat land suitable for residential development with good connectivity to major highways.",
  },
  {
    id: "p2",
    location: "Bengaluru, Karnataka",
    size: "2.2 acres",
    projectType: "Mixed Use",
    verified: true,
    budget: 15,
    description: "Prime location in tech corridor suitable for mixed-use development with residential and commercial components.",
  },
  {
    id: "p3",
    location: "Gurugram, Haryana",
    size: "1.8 acres",
    projectType: "Commercial",
    verified: true,
    budget: 22,
    description: "Commercial land in developing area, close to upcoming metro station and business district.",
  },
  {
    id: "p4",
    location: "Hyderabad, Telangana",
    size: "4.2 acres",
    projectType: "Residential",
    verified: false,
    budget: 28,
    description: "Large parcel suitable for premium housing development in emerging suburb with growth potential.",
  },
  {
    id: "p5",
    location: "Mumbai, Maharashtra",
    size: "0.8 acres",
    projectType: "Commercial",
    verified: true,
    budget: 35,
    description: "Rare opportunity for commercial development in established business area with high foot traffic.",
  },
  {
    id: "p6",
    location: "Chennai, Tamil Nadu",
    size: "3.0 acres",
    projectType: "Mixed Use",
    verified: true,
    budget: 45,
    description: "Waterfront property suitable for hospitality or mixed-use development with residential component.",
  },
];

const budgetRanges = [
  { label: "All", value: "all" },
  { label: "0–10L", value: "0-10" },
  { label: "10–20L", value: "10-20" },
  { label: "20–30L", value: "20-30" },
  { label: "30L+", value: "30+" },
];

const Properties = () => {
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [showInterestDialog, setShowInterestDialog] = useState(false);
  const [filters, setFilters] = useState({
    projectType: "all",
    verified: false,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [budgetFilter, setBudgetFilter] = useState("all");

  // Form state for interest dialog
  const [interestForm, setInterestForm] = useState({
    budget: "",
    proposal: "",
    timeline: "",
  });

  const handleInterestSubmit = () => {
    toast.success("Interest submitted successfully!", {
      description: "Our team will review your request and contact you shortly.",
    });
    setShowInterestDialog(false);
    
    // Reset form
    setInterestForm({
      budget: "",
      proposal: "",
      timeline: "",
    });
  };

  const filteredProperties = propertyData.filter((property) => {
    const matchesSearch = property.location.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          property.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filters.projectType === "all" || 
                        property.projectType.toLowerCase() === filters.projectType.toLowerCase();
    
    const matchesVerified = !filters.verified || property.verified;
    
    let matchesBudget = true;
    if (budgetFilter !== "all") {
      if (budgetFilter === "0-10") matchesBudget = property.budget >= 0 && property.budget <= 10;
      else if (budgetFilter === "10-20") matchesBudget = property.budget > 10 && property.budget <= 20;
      else if (budgetFilter === "20-30") matchesBudget = property.budget > 20 && property.budget <= 30;
      else if (budgetFilter === "30+") matchesBudget = property.budget > 30;
    }
    
    return matchesSearch && matchesType && matchesVerified && matchesBudget;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/30">
        <div className="container max-w-7xl py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Verified Property Opportunities
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              Browse secure, pre-verified land listings from owners looking to collaborate with developers. 
              All listings have been reviewed by our team for authenticity.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative w-full md:max-w-md">
              <Input
                placeholder="Search by location or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10"
              />
            </div>
            {/* Budget Filter Bar */}
            <div className="flex items-center gap-2 overflow-x-auto py-2">
              {budgetRanges.map((range) => (
                <Button
                  key={range.value}
                  variant={budgetFilter === range.value ? "default" : "outline"}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${budgetFilter === range.value ? 'bg-gradient-to-r from-[#A8FF78] to-[#43C97F] text-[#14532d] shadow' : 'border-[#A8FF78] text-[#14532d] hover:bg-[#A8FF78]/20'}`}
                  onClick={() => setBudgetFilter(range.value)}
                >
                  {range.label}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="md:hidden flex-1">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-between" 
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <span className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                  </span>
                  {(filters.projectType !== "all" || filters.verified) && (
                    <Badge variant="secondary" className="ml-2">Active</Badge>
                  )}
                </Button>
              </div>
              <div className={`md:flex gap-4 ${showFilters ? 'flex flex-col sm:flex-row' : 'hidden'}`}>
                <Select 
                  value={filters.projectType} 
                  onValueChange={(value) => setFilters({...filters, projectType: value})}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Project Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="mixed use">Mixed Use</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="verified"
                    checked={filters.verified}
                    onCheckedChange={(checked) => 
                      setFilters({...filters, verified: checked as boolean})
                    }
                  />
                  <label
                    htmlFor="verified"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Verified Only
                  </label>
                </div>
              </div>
            </div>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="text-center py-16">
              <Building className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No properties found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to see more results.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setFilters({ projectType: "all", verified: false });
                }}
                className="mt-4"
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredProperties.map((property) => (
                <motion.div
                  key={property.id}
                  variants={item}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 border border-[#A8FF78]/40 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="h-6 w-6 text-[#43C97F]" />
                    <span className="text-lg font-bold text-[#14532d]">{property.location}</span>
                    {property.verified && <CheckCircle className="h-5 w-5 text-[#43C97F] ml-2" />}
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-[#14532d]/80">
                    <span className="bg-[#A8FF78]/30 text-[#14532d] px-2 py-1 rounded">{property.size}</span>
                    <span className="bg-[#A8FF78]/30 text-[#14532d] px-2 py-1 rounded">{property.projectType}</span>
                    <span className="bg-[#A8FF78]/30 text-[#14532d] px-2 py-1 rounded">Budget: ₹{property.budget}L</span>
                  </div>
                  <p className="text-[#14532d] mt-2 flex-1">{property.description}</p>
                  <Button
                    variant="default"
                    className="mt-4 w-full rounded-full font-semibold bg-gradient-to-r from-[#A8FF78] to-[#43C97F] text-[#14532d] hover:from-[#43C97F] hover:to-[#A8FF78] border-none"
                    onClick={() => setSelectedProperty(property.id)}
                  >
                    View Details
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </main>

      <Dialog open={showInterestDialog} onOpenChange={setShowInterestDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Express Interest</DialogTitle>
            <DialogDescription>
              Submit your proposal for this property. Our team will review it and mediate communication with the landowner.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Budget Range</label>
              <Select 
                value={interestForm.budget} 
                onValueChange={(value) => setInterestForm({...interestForm, budget: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upto-1cr">Up to 1 Crore</SelectItem>
                  <SelectItem value="1-5cr">1-5 Crores</SelectItem>
                  <SelectItem value="5-10cr">5-10 Crores</SelectItem>
                  <SelectItem value="10-50cr">10-50 Crores</SelectItem>
                  <SelectItem value="50cr-plus">50+ Crores</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Timeline to Start</label>
              <Select 
                value={interestForm.timeline} 
                onValueChange={(value) => setInterestForm({...interestForm, timeline: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate</SelectItem>
                  <SelectItem value="1-3-months">1-3 Months</SelectItem>
                  <SelectItem value="3-6-months">3-6 Months</SelectItem>
                  <SelectItem value="6-12-months">6-12 Months</SelectItem>
                  <SelectItem value="1-year-plus">1+ Year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Brief Proposal</label>
              <Textarea
                placeholder="Describe your development vision for this property..."
                value={interestForm.proposal}
                onChange={(e) => setInterestForm({...interestForm, proposal: e.target.value})}
                rows={4}
              />
              <p className="text-xs text-muted-foreground">
                No direct contact information will be shared with the landowner at this stage.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowInterestDialog(false)}>Cancel</Button>
            <Button 
              onClick={handleInterestSubmit}
              className="bg-[#14532d] hover:bg-[#14532d]/90"
              disabled={!interestForm.budget || !interestForm.timeline || !interestForm.proposal}
            >
              Submit Interest
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Properties;
