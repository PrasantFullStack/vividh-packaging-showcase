import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Users, Star, Handshake } from 'lucide-react';

const Clients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Client logos - using placeholder company names since we don't have actual logos
  const clients = [
    'Hindustan Unilever', 'ITC Limited', 'Nestle India', 'Tata Consumer Products',
    'Britannia Industries', 'Godrej Consumer', 'Dabur India', 'Marico Limited',
    'Asian Paints', 'Berger Paints', 'JSW Steel', 'Ultratech Cement',
    'Hero MotoCorp', 'Bajaj Auto', 'TVS Motors', 'Mahindra Group',
    'Reliance Industries', 'Adani Group', 'Wipro Limited', 'Infosys Technologies'
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Manufacturing Director, ABC Industries',
      text: 'Vividh Corrugators has been our trusted packaging partner for over 8 years. Their consistent quality and timely delivery have been crucial to our operations.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      company: 'Supply Chain Manager, XYZ Foods',
      text: 'The custom packaging solutions provided by Vividh perfectly protect our products during transit. Their team understands our requirements perfectly.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      company: 'Operations Head, PQR Electronics',
      text: 'Outstanding service and quality! The free samples helped us make the right choice, and their production capacity meets all our demands.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Proud Clientele
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading companies across diverse industries for reliable, 
            high-quality packaging solutions that protect and enhance their products.
          </p>
        </div>

        {/* Client Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in">
          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <h3 className="text-lg font-semibold mb-2">Happy Clients</h3>
              <p className="text-muted-foreground text-sm">Across various industries</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <h3 className="text-lg font-semibold mb-2">Satisfaction Rate</h3>
              <p className="text-muted-foreground text-sm">Client retention score</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <h3 className="text-lg font-semibold mb-2">Years Partnership</h3>
              <p className="text-muted-foreground text-sm">Average client relationship</p>
            </CardContent>
          </Card>
        </div>

        {/* Client Logos Carousel */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Trusted by Industry Leaders
          </h3>
          <Card className="shadow-corporate p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {clients.slice(0, 15).map((client, index) => (
                <div 
                  key={client} 
                  className="bg-gradient-card p-4 rounded-lg border flex items-center justify-center hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-bold text-lg">
                        {client.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">
                      {client}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Testimonials Slider */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            What Our Clients Say
          </h3>
          
          <Card className="max-w-4xl mx-auto shadow-corporate">
            <CardContent className="p-8">
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <button 
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6 text-primary" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentSlide ? 'bg-primary' : 'bg-primary/20'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6 text-primary" />
                  </button>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-muted-foreground mb-6 italic">
                    "{testimonials[currentSlide].text}"
                  </blockquote>
                  
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentSlide].company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="max-w-3xl mx-auto bg-gradient-primary text-white shadow-corporate">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold mb-4">
                Join Our Growing Family of Satisfied Clients
              </h3>
              <p className="text-white/90 text-lg mb-8">
                Experience the same level of quality and service that has earned us the trust 
                of leading companies across multiple industries.
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg hover-lift transition-all"
              >
                Become Our Partner
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Clients;