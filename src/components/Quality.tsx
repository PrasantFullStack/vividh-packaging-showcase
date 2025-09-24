import { TestTube, Shield, Gauge, Target, Zap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import qualityLab from '@/assets/quality-lab.jpg';

const Quality = () => {
  const tests = [
    {
      icon: TestTube,
      title: 'Drop Test',
      description: 'Simulates shipping conditions to ensure package integrity during transport',
    },
    {
      icon: Shield,
      title: 'Burst Strength',
      description: 'Measures resistance to bursting force for structural integrity',
    },
    {
      icon: Gauge,
      title: 'Abrasion Test',
      description: 'Tests surface durability and resistance to wear and tear',
    },
    {
      icon: Target,
      title: 'Compression Test',
      description: 'Evaluates stackability and load-bearing capacity',
    },
    {
      icon: Zap,
      title: 'Puncture Test',
      description: 'Assesses resistance to sharp objects and impacts',
    },
  ];

  const machines = [
    { name: 'Corrugating Machine', capacity: '1.8m Width', year: '2014' },
    { name: '5 Ply Production Line', capacity: '200 Tons/Month', year: '2014' },
    { name: 'Flexo Printing Machine', capacity: '4 Color', year: '2010' },
    { name: 'Die Cutting Machine', capacity: 'Semi-Auto', year: '2008' },
    { name: 'Stitching Machine', capacity: 'Automatic', year: '2012' },
    { name: 'Vacuum Forming Unit', capacity: 'Custom Sizes', year: '2004' },
  ];

  return (
    <section id="quality" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Production & Quality
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art manufacturing facilities combined with rigorous quality testing 
            ensure every product meets the highest industry standards.
          </p>
        </div>

        {/* Production Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in">
          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">200</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tons Monthly</h3>
              <p className="text-muted-foreground">Production Capacity</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">₹8</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Crore Turnover</h3>
              <p className="text-muted-foreground">Annual Revenue</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-corporate hover-lift">
            <CardContent className="p-8">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ISO Certified</h3>
              <p className="text-muted-foreground">Quality Standards</p>
            </CardContent>
          </Card>
        </div>

        {/* Quality Lab Image */}
        <div className="mb-16 animate-fade-in">
          <div className="relative rounded-2xl overflow-hidden shadow-corporate">
            <img 
              src={qualityLab} 
              alt="Quality Testing Laboratory" 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Advanced Testing</h3>
                <p className="text-xl">Quality Assurance Laboratory</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testing Facilities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-in">
            Testing Facilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tests.map((test, index) => (
              <Card 
                key={test.title} 
                className="shadow-corporate hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <test.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {test.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {test.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Machine List */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Production Equipment
          </h3>
          <Card className="shadow-corporate">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/5 border-b">
                      <th className="text-left py-4 px-6 font-semibold text-foreground">Equipment</th>
                      <th className="text-left py-4 px-6 font-semibold text-foreground">Capacity/Specs</th>
                      <th className="text-left py-4 px-6 font-semibold text-foreground">Year Installed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {machines.map((machine, index) => (
                      <tr key={machine.name} className="border-b hover:bg-secondary/30 transition-colors">
                        <td className="py-4 px-6 font-medium text-foreground">{machine.name}</td>
                        <td className="py-4 px-6 text-muted-foreground">{machine.capacity}</td>
                        <td className="py-4 px-6 text-muted-foreground">{machine.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quality Commitment */}
        <div className="mt-16 animate-fade-in">
          <Card className="max-w-4xl mx-auto bg-gradient-primary text-white shadow-corporate">
            <CardContent className="p-10 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Quality is Our Commitment
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Every product undergoes comprehensive testing to ensure it meets our stringent quality standards 
                and exceeds your expectations for performance and reliability.
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg hover-lift transition-all"
              >
                Request Quality Certificate
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Quality;