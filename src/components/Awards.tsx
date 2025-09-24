import { Award, Star, Medal, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: 'UP Star Corrugator Award 2012',
      description: 'Recognized as the leading corrugated packaging manufacturer in Uttar Pradesh for excellence in quality and innovation.',
      year: '2012',
      category: 'Industry Excellence',
    },
    {
      icon: Medal,
      title: 'ISO Quality Certification',
      description: 'Certified for maintaining international quality standards in manufacturing processes and product quality.',
      year: '2015',
      category: 'Quality Standards',
    },
    {
      icon: Star,
      title: 'Export Excellence Award',
      description: 'Acknowledged for outstanding contribution to export growth and maintaining quality in international markets.',
      year: '2018',
      category: 'Export Achievement',
    },
    {
      icon: Award,
      title: 'Green Manufacturing Award',
      description: 'Honored for implementing eco-friendly manufacturing practices and sustainable packaging solutions.',
      year: '2020',
      category: 'Environmental Excellence',
    },
  ];

  return (
    <section id="awards" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and 
            government bodies, validating our position as a trusted packaging partner.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {awards.map((award, index) => (
            <Card 
              key={award.title} 
              className="shadow-corporate hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                    <award.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {award.year}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {award.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {award.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 animate-fade-in">
          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Major Awards</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">28</div>
              <div className="text-sm text-muted-foreground">Years Excellence</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Satisfied Clients</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Quality Standard</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Award Spotlight */}
        <div className="animate-fade-in">
          <Card className="max-w-4xl mx-auto bg-gradient-primary text-white shadow-corporate">
            <CardContent className="p-12 text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                UP Star Corrugator Award Winner 2012
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                This prestigious recognition from the Uttar Pradesh government acknowledges our 
                outstanding contribution to the corrugated packaging industry and our commitment 
                to maintaining the highest standards of quality and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg hover-lift transition-all"
                >
                  Our Journey
                </button>
                <button 
                  onClick={() => document.querySelector('#quality')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                >
                  Quality Standards
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Awards;