
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "5 Key Legal Aspects of Land Development Collaborations",
    excerpt: "Understanding the legal framework for successful land development collaborations in India's evolving real estate market.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    author: "Priya Mehta",
    date: "May 5, 2023",
    category: "Legal"
  },
  {
    id: 2,
    title: "Why Privacy Matters in Real Estate Collaborations",
    excerpt: "Protecting your interests while fostering productive partnerships in today's competitive property market.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    author: "Aditya Sharma",
    date: "June 12, 2023",
    category: "Privacy"
  },
  {
    id: 3,
    title: "The Future of Urban Development in India's Tier 2 Cities",
    excerpt: "Emerging opportunities for landowners and developers in rapidly growing urban centers across India.",
    image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=800&q=80",
    author: "Rahul Kapoor",
    date: "July 23, 2023",
    category: "Market Trends"
  },
  {
    id: 4,
    title: "Negotiation Strategies for Landowners",
    excerpt: "How to maximize value and protect your interests when partnering with developers for land collaboration.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80",
    author: "Aisha Khan",
    date: "August 8, 2023",
    category: "Strategy"
  },
  {
    id: 5,
    title: "Sustainable Development Practices in Modern Real Estate",
    excerpt: "Incorporating eco-friendly approaches to land development that benefit communities and the environment.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
    author: "Vikram Patel",
    date: "September 15, 2023",
    category: "Sustainability"
  },
  {
    id: 6,
    title: "Understanding Revenue Sharing Models in Property Development",
    excerpt: "A comprehensive guide to various collaboration structures for landowners and developers.",
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&w=800&q=80",
    author: "Neha Gupta",
    date: "October 3, 2023",
    category: "Finance"
  }
];

const categories = [
  "All Categories",
  "Legal",
  "Privacy",
  "Market Trends",
  "Strategy",
  "Sustainability",
  "Finance"
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
                YardMatters Blog
              </motion.h1>
              <motion.p 
                className="text-lg mb-8 text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Insights, tips, and trends for secure property collaborations in India's real estate market.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Search and filter */}
        <section className="py-10 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer ${
                      selectedCategory === category 
                        ? "bg-[#14532d] hover:bg-[#14532d]/90" 
                        : "hover:bg-[#14532d]/10"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog posts */}
        <section className="py-16 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-4">No articles found</h3>
                <p className="text-gray-700 mb-8">Try adjusting your search or filter criteria</p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All Categories");
                  }}
                  variant="outline"
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </div>
                      <CardContent className="p-6">
                        <Badge className="mb-4 bg-[#14532d]/10 text-[#14532d] hover:bg-[#14532d]/20">
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-700 mb-6 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User size={14} className="mr-1" />
                            <span className="mr-4">{post.author}</span>
                            <Calendar size={14} className="mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <Button variant="ghost" className="p-0 h-auto text-[#14532d] hover:text-[#14532d]/80">
                            Read More <ArrowRight size={14} className="ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="bg-gradient-to-br from-[#14532d] to-[#1a6937] text-white overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-white/80 mb-6">
                      Get the latest insights on real estate collaboration, privacy protection, and market trends delivered straight to your inbox.
                    </p>
                    <form className="space-y-4">
                      <Input 
                        placeholder="Your email address" 
                        className="bg-white/20 border-white/30 placeholder:text-white/60 text-white"
                      />
                      <Button className="w-full bg-white text-[#14532d] hover:bg-white/90">
                        Subscribe Now
                      </Button>
                    </form>
                  </div>
                  <div className="hidden md:block">
                    <div className="relative">
                      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full"></div>
                      <div className="absolute -left-20 -top-20 w-40 h-40 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
