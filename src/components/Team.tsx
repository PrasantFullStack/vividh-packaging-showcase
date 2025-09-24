import { User, Users2, Award, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const directors = [
    {
      name: 'Nitika Pundirr',
      position: 'Managing Director',
      experience: '25+ Years',
      specialization: 'Strategic Planning & Client Relations',
      description: 'Visionary leader driving the company\'s growth and innovation in packaging solutions.',
    },
    {
      name: 'Aakshay Pundirr',
      position: 'Executive Director',
      experience: '15+ Years',
      specialization: 'Operations & Technology',
      description: 'Technology enthusiast focused on modernizing production processes and quality standards.',
    },
  ];

  const departments = [
    {
      icon: Briefcase,
      title: 'Production Managers',
      count: '8',
      description: 'Experienced professionals overseeing manufacturing operations and quality control',
    },
    {
      icon: Users2,
      title: 'Technical Team',
      count: '15',
      description: 'Skilled technicians and engineers ensuring optimal machine performance',
    },
    {
      icon: User,
      title: 'Quality Control',
      count: '6',
      description: 'Dedicated team conducting rigorous testing and quality assurance',
    },
    {
      icon: Award,
      title: 'Sales & Support',
      count: '10',
      description: 'Customer-focused professionals providing excellent service and support',
    },
  ];

  return (
    <section id="team" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated professionals who make Vividh Corrugators a leader in 
            packaging excellence through their expertise, commitment, and innovation.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-in">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {directors.map((director, index) => (
              <Card 
                key={director.name} 
                className="shadow-corporate hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {director.name}
                  </h4>
                  <p className="text-primary font-semibold mb-2">
                    {director.position}
                  </p>
                  <div className="flex justify-center items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <span className="bg-primary/10 px-3 py-1 rounded-full">
                      {director.experience}
                    </span>
                    <span>{director.specialization}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {director.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Departments */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-in">
            Our Workforce
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <Card 
                key={dept.title} 
                className="text-center shadow-corporate hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <dept.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {dept.count}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {dept.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {dept.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in">
          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <h3 className="text-xl font-semibold mb-2">Team Members</h3>
              <p className="text-muted-foreground">Dedicated professionals</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <h3 className="text-xl font-semibold mb-2">Average Experience</h3>
              <p className="text-muted-foreground">Years in the industry</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-muted-foreground">Customer service</p>
            </CardContent>
          </Card>
        </div>

        {/* Company Culture */}
        <div className="animate-fade-in">
          <Card className="max-w-4xl mx-auto bg-gradient-primary text-white shadow-corporate">
            <CardContent className="p-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  Our Company Culture
                </h3>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  At Vividh Corrugators, we believe that our greatest asset is our people. 
                  We foster a culture of innovation, excellence, and continuous learning.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Excellence</h4>
                  <p className="text-white/80 text-sm">Striving for the highest standards in everything we do</p>
                </div>

                <div className="text-center">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users2 className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Teamwork</h4>
                  <p className="text-white/80 text-sm">Collaborative approach to achieving common goals</p>
                </div>

                <div className="text-center">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                  <p className="text-white/80 text-sm">Continuous improvement and embracing new technologies</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg hover-lift transition-all"
                >
                  Join Our Team
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;