import { ArrowRight, CheckCircle, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            28 Years of Trust in
            <span className="block text-primary-light">Packaging Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Leading manufacturer of corrugated packaging solutions since 1994. 
            Serving industries with premium quality boxes and custom packaging.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center animate-scale-in">
              <Award className="h-12 w-12 mb-2 text-primary-light" />
              <div className="text-3xl font-bold">28+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="flex flex-col items-center animate-scale-in">
              <CheckCircle className="h-12 w-12 mb-2 text-primary-light" />
              <div className="text-3xl font-bold">200</div>
              <div className="text-white/80">Tons Monthly</div>
            </div>
            <div className="flex flex-col items-center animate-scale-in">
              <Users className="h-12 w-12 mb-2 text-primary-light" />
              <div className="text-3xl font-bold">500+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg hover-lift"
            >
              Get Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#products')}
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
            >
              View Products
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/70 mb-4">Trusted by leading companies across industries</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-sm font-medium">UP Star Corrugator Award Winner 2012</div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="text-sm font-medium">ISO Certified Quality</div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="text-sm font-medium">Eco-Friendly Practices</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;