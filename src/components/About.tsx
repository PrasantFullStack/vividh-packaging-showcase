import { Calendar, TrendingUp, Award, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const timeline = [
    {
      year: '1994',
      title: 'Company Established',
      description: 'Founded Vividh Corrugators with a vision to provide quality packaging solutions',
      icon: Calendar,
    },
    {
      year: '2004',
      title: 'Added Vacuum Forming',
      description: 'Expanded capabilities with vacuum forming technology for diverse packaging needs',
      icon: TrendingUp,
    },
    {
      year: '2012',
      title: 'UP Star Corrugator Award',
      description: 'Recognized for excellence in corrugated packaging manufacturing',
      icon: Award,
    },
    {
      year: '2014',
      title: '5 Ply Production Line',
      description: 'Introduced advanced 5-ply corrugated manufacturing for heavy-duty packaging',
      icon: TrendingUp,
    },
    {
      year: '2025',
      title: '28 Years of Excellence',
      description: 'Continuing our commitment to innovation and sustainable packaging solutions',  
      icon: Leaf,
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three decades of innovation, growth, and commitment to delivering exceptional 
            packaging solutions that protect and enhance your products.
          </p>
        </div>

        {/* Company Vision */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <Card className="bg-gradient-card shadow-corporate hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Vividh Corrugators, we envision becoming the most trusted name in packaging solutions, 
                setting industry standards through innovation, quality, and environmental responsibility. 
                Our commitment extends beyond manufacturing – we partner with our clients to protect their 
                products and enhance their brand value through superior packaging that speaks of reliability and excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-primary"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content Card */}
                <div className="flex-1 md:w-1/2">
                  <Card className={`shadow-corporate hover-lift ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{item.year}</div>
                          <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>

                {/* Spacer for odd items */}
                <div className="hidden md:block flex-1 md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Recognition</h3>
              <p className="text-muted-foreground">UP Star Corrugator Award winner and ISO certified processes</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Growth</h3>
              <p className="text-muted-foreground">₹8 Crore annual turnover with consistent expansion</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-muted-foreground">Sustainable practices and environmentally conscious manufacturing</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;