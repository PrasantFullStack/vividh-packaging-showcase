import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Quality', href: '#quality' },
    { name: 'Awards', href: '#awards' },
    { name: 'Clients', href: '#clients' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    'Regular Slotted Cartons',
    'Lock Bottom Boxes',
    'Telescope Boxes',
    'Folder Boxes',
    'Corrugated Trays',
    'Mono Cartons',
    'Custom Packaging',
    'Vacuum Forming'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Vividh Corrugators</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Leading manufacturer of corrugated packaging solutions since 1994. 
              Trusted by 500+ clients for quality, reliability, and innovation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-light" />
                <span className="text-sm">Roorkee, Uttarakhand, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-light" />
                <span className="text-sm">+91-9837-043334</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-light" />
                <span className="text-sm">info@vividhcorrugators.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-light transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-primary-foreground/80 text-sm">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Highlights */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Why Choose Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>✓ 28+ Years of Experience</li>
              <li>✓ UP Star Corrugator Award Winner</li>
              <li>✓ 200 Tons Monthly Capacity</li>
              <li>✓ ISO Certified Quality</li>
              <li>✓ Eco-friendly Practices</li>
              <li>✓ Custom Solutions Available</li>
              <li>✓ Free Sample Prototypes</li>
              <li>✓ 24/7 Customer Support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media & Bottom Bar */}
      <div className="border-t border-primary-light/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Social Media */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-sm font-medium">Follow Us:</span>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-primary-light/10 p-2 rounded-full hover:bg-primary-light/20 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-primary-light/10 p-2 rounded-full hover:bg-primary-light/20 transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-primary-light/10 p-2 rounded-full hover:bg-primary-light/20 transition-colors"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-primary-light/10 p-2 rounded-full hover:bg-primary-light/20 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-primary-foreground/80">
                © 2025 Vividh Corrugators Pvt. Ltd. All rights reserved.
              </p>
              <p className="text-xs text-primary-foreground/60 mt-1">
                Designed with excellence for packaging solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-20 right-6 bg-primary-light hover:bg-primary-light/90 text-primary p-3 rounded-full shadow-lg hover-lift transition-all z-40"
        aria-label="Back to top"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;