import { useState } from 'react';
import { MapPin, Calendar, Users, Award, Sun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import LogoProcessor from '@/components/LogoProcessor';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showLogoProcessor, setShowLogoProcessor] = useState(false);

  const projects = [
    {
      id: 1,
      title: "150MW Solar Farm Infrastructure Development",
      category: "utility-solar",
      location: "Illinois, USA",
      year: "2023",
      description: "Complete civil engineering design for a 150MW utility-scale solar installation including access roads, drainage systems, and electrical infrastructure.",
      scope: ["Solar Array Layout", "Site Grading", "Drainage Systems", "Access Roads", "Electrical Infrastructure"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Community Solar Garden Development",
      category: "community-solar",
      location: "Minnesota, USA",
      year: "2023",
      description: "Community solar project with comprehensive site design including stormwater management, fire access roads, and utility interconnection.",
      scope: ["Solar Site Design", "Fire Access Design", "Stormwater Management", "Utility Infrastructure", "Erosion Control"],
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Agrivoltaic Solar Installation",
      category: "agrivoltaic",
      location: "Maine, USA",
      year: "2022",
      description: "Innovative dual-use solar installation combining agriculture with renewable energy generation on working farmland.",
      scope: ["Agrivoltaic Design", "Utility Planning", "Agricultural Integration", "Water Management", "Landscape Design"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Commercial Solar Farm Array",
      category: "commercial-solar",
      location: "Illinois, USA",
      year: "2022",
      description: "Large-scale commercial solar farm installation with structural analysis, electrical design, and interconnection planning.",
      scope: ["Solar Farm Analysis", "Structural Engineering", "Electrical Design", "Code Compliance", "Interconnection"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Solar Farm Access Infrastructure",
      category: "utility-solar",
      location: "Minnesota, USA",
      year: "2023",
      description: "Heavy-duty access road design for solar installation and maintenance, including culvert design and soil stabilization.",
      scope: ["Heavy Load Roads", "Solar Access Design", "Culvert Systems", "Soil Stabilization", "Environmental Protection"],
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Solar Garden Redevelopment",
      category: "community-solar",
      location: "Maine, USA",
      year: "2021",
      description: "Solar garden site development including specialized foundations, environmental controls, and site restoration.",
      scope: ["Solar Garden Design", "Solar Site Design", "Environmental Controls", "Access Systems", "Site Restoration"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Solar Projects' },
    { id: 'utility-solar', name: 'Utility-Scale Solar' },
    { id: 'community-solar', name: 'Community Solar' },
    { id: 'commercial-solar', name: 'Commercial Solar' },
    { id: 'agrivoltaic', name: 'Agrivoltaic' },
    { id: 'brownfield-solar', name: 'Brownfield Solar' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { icon: Sun, number: "100+", label: "Solar Projects Completed" },
    { icon: Users, number: "50+", label: "Satisfied Solar Clients" },
    { icon: MapPin, number: "3", label: "Licensed States" },
    { icon: Calendar, number: "15+", label: "Years Solar Experience" }
  ];

  const licensedStates = [
    "Illinois", "Maine", "Minnesota"
  ];

  if (showLogoProcessor) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Button 
            onClick={() => setShowLogoProcessor(false)}
            variant="outline"
            className="mb-4"
          >
            ← Back to Portfolio
          </Button>
        </div>
        <LogoProcessor />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Sun className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solar Project Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Showcasing successful photovoltaic solar projects across diverse applications
            </p>
            <Button 
              onClick={() => setShowLogoProcessor(true)}
              variant="outline"
              className="mt-4 text-white border-white hover:bg-white hover:text-blue-600"
            >
              Logo Background Removal Tool
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensed States Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              PE-Sealed Solar Projects Available In:
            </h2>
            <div className="flex justify-center gap-4">
              {licensedStates.map((state, index) => (
                <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-sm font-semibold text-blue-600">{state}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`${
                  activeFilter === category.id 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 bg-gray-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={project.status === 'Completed' ? 'bg-green-600' : 'bg-orange-600'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-gray-900">Project Scope:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.scope.map((item, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No solar projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Solar Capabilities Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solar Project Capabilities
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From concept to completion, we deliver comprehensive solar engineering solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-4">
                <h3 className="text-2xl font-bold mb-2">Solar Site Planning</h3>
                <p className="text-blue-100 text-sm">Comprehensive solar site analysis and optimal PV array layout design</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-4">
                <h3 className="text-2xl font-bold mb-2">Solar Infrastructure</h3>
                <p className="text-blue-100 text-sm">Electrical utility coordination and solar infrastructure integration</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-4">
                <h3 className="text-2xl font-bold mb-2">Solar Environmental</h3>
                <p className="text-blue-100 text-sm">Solar site stormwater management and erosion control</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-4">
                <h3 className="text-2xl font-bold mb-2">Solar Compliance</h3>
                <p className="text-blue-100 text-sm">Solar regulatory compliance and permitting support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Next Solar Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven solar track record can benefit your renewable energy development.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="/contact">Contact Us Today</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
