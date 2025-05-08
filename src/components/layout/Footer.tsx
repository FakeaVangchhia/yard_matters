
import { Link } from "react-router-dom";
import { Shield, Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-[#14532d]" />
              <h3 className="font-bold text-xl text-[#14532d]">YardMatters</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              India's premier platform facilitating safe, secure property collaborations with privacy as our highest priority. We connect landowners with qualified developers for mutually beneficial partnerships.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-[#14532d] transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#14532d] transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#14532d] transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#14532d] transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#14532d]">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/properties" className="text-muted-foreground hover:text-[#14532d] transition-colors">Properties</Link></li>
              <li><Link to="/proposals" className="text-muted-foreground hover:text-[#14532d] transition-colors">Proposals</Link></li>
              <li><Link to="/templates" className="text-muted-foreground hover:text-[#14532d] transition-colors">Collaboration Templates</Link></li>
              <li><Link to="/calculator" className="text-muted-foreground hover:text-[#14532d] transition-colors">Calculators</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#14532d]">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-[#14532d] transition-colors">How It Works</Link></li>
              <li><Link to="/for-landowners" className="text-muted-foreground hover:text-[#14532d] transition-colors">For Landowners</Link></li>
              <li><Link to="/for-developers" className="text-muted-foreground hover:text-[#14532d] transition-colors">For Developers</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-[#14532d] transition-colors">Blog</Link></li>
              <li><Link to="/faqs" className="text-muted-foreground hover:text-[#14532d] transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[#14532d]">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-[#14532d] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-[#14532d] transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-[#14532d] transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-[#14532d] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-[#14532d] transition-colors">Terms of Service</Link></li>
              <li><Link to="/report-issue" className="text-muted-foreground hover:text-[#14532d] transition-colors">Report Misuse</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-[#14532d]" />
                <p className="text-muted-foreground">
                  Level 8, Vibgyor Towers, G Block BKC, Mumbai, Maharashtra 400098
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-[#14532d]" />
                <p className="text-muted-foreground">+91 22 4890 1234</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-[#14532d]" />
                <p className="text-muted-foreground">contact@yardmatters.in</p>
              </div>
            </div>
            
            <div className="md:text-right space-y-3">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} YardMatters. All rights reserved.
              </p>
              <div className="flex md:justify-end items-center gap-4">
                <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
                <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
                <Link to="/cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </div>
              <div className="flex md:justify-end items-center gap-x-2">
                <p className="text-xs text-muted-foreground">Built with ❤️ in India</p>
                <div className="border-l pl-2 text-xs text-muted-foreground">
                  ISO 27001 Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
