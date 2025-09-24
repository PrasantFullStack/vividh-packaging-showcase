import { Package, Box, Layers, FolderOpen, Grid3x3, Archive, Gift, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import productsHero from '@/assets/products-hero.jpg';

const Products = () => {
  const products = [
    {
      icon: Box,
      title: 'Regular Slotted/Universal Cartons',
      description: 'Standard RSC boxes perfect for shipping and storage, available in various sizes and strengths.',
    },
    {
      icon: Package,
      title: 'Lock Bottom Box',
      description: 'Self-locking bottom design for easy assembly and secure packaging of retail products.',
    },
    {
      icon: Layers,
      title: 'Telescope Box',
      description: 'Two-piece design with separate lid and base for premium product presentation.',
    },
    {
      icon: FolderOpen,
      title: 'Folder Box',
      description: 'Single piece folding cartons ideal for lightweight products and retail packaging.',
    },
    {
      icon: Grid3x3,
      title: 'Partitions/Dividers',
      description: 'Custom internal dividers and partitions for fragile items and multi-product packaging.',
    },
    {
      icon: Archive,
      title: 'Corrugated Trays',
      description: 'Open-top trays for easy access and display of products, perfect for retail environments.',
    },
    {
      icon: Gift,
      title: 'Mono Cartons',
      description: 'Single-wall cartons for lightweight products with excellent printing capabilities.',
    },
    {
      icon: Zap,
      title: 'Blister & Vacuum Packaging',
      description: 'Specialized forming techniques for custom-shaped products and protective packaging.',
    },
  ];

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of corrugated packaging solutions designed to protect, 
            preserve, and present your products with professional excellence.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 animate-fade-in">
          <div className="relative rounded-2xl overflow-hidden shadow-corporate">
            <img 
              src={productsHero} 
              alt="Vividh Corrugators Product Range" 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Premium Quality</h3>
                <p className="text-xl">Packaging Solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.title} 
              className="shadow-corporate hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3-7</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ply Options</h3>
              <p className="text-muted-foreground">From lightweight 3-ply to heavy-duty 7-ply corrugated solutions</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">100%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-muted-foreground">Tailored dimensions, printing, and designs for your specific needs</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">24h</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Samples</h3>
              <p className="text-muted-foreground">Rapid prototyping and sample delivery for faster decision making</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="max-w-3xl mx-auto bg-gradient-card shadow-corporate">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need Custom Packaging Solutions?
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Our team of experts will work with you to design and manufacture 
                the perfect packaging solution for your specific requirements.
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover-lift transition-all"
              >
                Request Custom Quote
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;