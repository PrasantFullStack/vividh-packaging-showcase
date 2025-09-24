import { Package, TestTube, Ruler, Leaf, Clock, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyUs = () => {
  const features = [
    {
      icon: Package,
      title: 'Ready-made & Customized Packaging',
      description: 'From standard boxes to bespoke solutions tailored to your specific product requirements and branding needs.',
    },
    {
      icon: TestTube,
      title: 'Free Sample Prototype',
      description: 'Test our quality before you commit. We provide complimentary samples to ensure perfect fit and finish.',
    },
    {
      icon: Settings,
      title: 'Instant Dry Laminated Boards',
      description: 'Quick turnaround with our advanced dry lamination technology for superior finish and durability.',
    },
    {
      icon: Ruler,
      title: 'Accurate Measurements',
      description: 'Precision engineering ensures perfect dimensions and consistent quality across all your packaging orders.',
    },
    {
      icon: Leaf,
      title: 'Eco-friendly Focus',
      description: 'Sustainable materials and processes that reduce environmental impact while maintaining superior quality.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Reliable production schedules and logistics ensure your packaging arrives exactly when you need it.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three decades of experience backed by cutting-edge technology, unwavering quality standards, 
            and a commitment to your success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="shadow-corporate hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="max-w-4xl mx-auto bg-gradient-primary text-white shadow-corporate">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Experience Excellence?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who trust Vividh Corrugators for their packaging needs. 
                Let's discuss how we can enhance your product protection and presentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
                >
                  Get Free Sample
                </button>
                <button 
                  onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                >
                  View Products
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;