import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";

const NavLink = ({ to, children, isMobile = false, onClick = () => {} }: { 
  to: string; 
  children: React.ReactNode; 
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`
        ${isMobile 
          ? "text-foreground font-medium px-4 py-2 hover:bg-muted rounded-md"
          : "text-sm font-medium transition-colors relative group"
        }
        ${isActive ? "text-[#14532d]" : "hover:text-[#14532d]"}
      `}
      onClick={onClick}
    >
      {children}
      {!isMobile && (
        <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#14532d] transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
      )}
    </Link>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? "bg-background/95 border-b shadow-sm" : "bg-background/80 backdrop-blur-sm"
    }`}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo on far left */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-[#14532d]" />
              <span className="text-2xl font-bold tracking-tight text-[#14532d]">YardMatters</span>
            </div>
          </Link>
        </div>
        {/* Centered nav links */}
        <nav className="hidden md:flex gap-6 flex-1 justify-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/properties">Properties</NavLink>
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        {/* Auth buttons on far right */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild className="text-[#14532d] hover:text-[#14532d]/90 hover:bg-[#14532d]/10">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild className="bg-[#14532d] hover:bg-[#14532d]/90">
            <Link to="/register">Get Started</Link>
          </Button>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container py-4 flex flex-col gap-2">
            <NavLink to="/" isMobile={true} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            <NavLink to="/properties" isMobile={true} onClick={() => setIsMobileMenuOpen(false)}>Properties</NavLink>
            <NavLink to="/how-it-works" isMobile={true} onClick={() => setIsMobileMenuOpen(false)}>How It Works</NavLink>
            <NavLink to="/services" isMobile={true} onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
            <NavLink to="/about" isMobile={true} onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>
            <NavLink to="/blog" isMobile={true} onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
            <NavLink to="/privacy" isMobile={true} onClick={() => setIsMobileMenuOpen(false)}>Privacy</NavLink>
            <NavLink to="/contact" isMobile={true} onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
            
            <div className="border-t pt-4 mt-2 flex flex-col gap-3">
              <Button variant="outline" asChild className="justify-center">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
              </Button>
              <Button asChild className="justify-center bg-[#14532d] hover:bg-[#14532d]/90">
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
