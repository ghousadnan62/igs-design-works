
import { CheckCircle, FileText, Users, Clock, Shield, Calculator, Sun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const detailedServices = [
    {
      title: "Existing Conditions Plan",
      description: "Comprehensive survey and documentation of current site conditions for solar development"
    },
    {
      title: "Solar Array Site Plan", 
      description: "Overall solar project layout showing proposed PV array placement and infrastructure"
    },
    {
      title: "Grading, Drainage and Erosion Control Plan",
      description: "Detailed earthwork and water management solutions for solar installations"
    },
    {
      title: "Solar Access Road Plan & Profile Sheet",
      description: "Complete roadway design for solar farm access with elevations and cross-sections"
    },
    {
      title: "Erosion Control Notes and Details",
      description: "Environmental protection measures specific to solar construction"
    },
    {
      title: "Solar Site Landscape Plans",
      description: "Site beautification and environmental enhancement designs for solar facilities"
    }
  ];

  const consultingServices = [
    {
      icon: Users,
      title: "Solar Project Meetings",
      description: "Routinely scheduled solar project coordination and progress meetings"
    },
    {
      icon: FileText,
      title: "Solar Submittal Review",
      description: "Solar equipment and installation submittal review and approval processes"
    },
    {
      icon: Clock,
      title: "Solar RFI Support",
      description: "Rapid response to solar construction Requests for Information"
    },
    {
      icon: Calculator,
      title: "Solar Value Engineering",
      description: "Cost optimization for solar projects while maintaining design integrity"
    },
    {
      icon: Shield,
      title: "PE Certification",
      description: "Professional Engineer sealed drawings in licensed states only"
    },
    {
      icon: CheckCircle,
      title: "Solar Permitting Support",
      description: "AHJ comment incorporation and solar permitting process support"
    }
  ];

  const licensedStates = [
    "Colorado", "Illinois", "Indiana", "Michigan", "Maine", "Minnesota", "Wisconsin"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Sun className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solar Engineering Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive civil engineering solutions for photovoltaic solar projects from concept to construction
            </p>
          </div>
        </div>
      </section>

      {/* PE Licensed States Notice */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Engineer Services Available In:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {licensedStates.map((state, index) => (
                <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-sm font-semibold text-blue-600">{state}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              PE-sealed drawings and certifications are only available in states where our engineers are licensed. 
              Design services without PE sealing are available nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Solar Design Package */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solar Project Design Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete engineered drawing packages for photovoltaic solar installations, suitable for submission to permitting 
              authorities, procurement and takeoff, and construction.
            </p>
          </div>

          {/* Process Steps */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    30%
                  </div>
                  <CardTitle className="text-xl">Solar Conceptual Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Initial planning phase creating conceptual layouts of proposed solar arrays, 
                    utilities, and access roads for PV installations.
                  </p>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Existing Conditions Plan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Solar Array Site Plan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Solar Site Stormwater Modeling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center h-full">
                <CardHeader>
                  <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    90%
                  </div>
                  <CardTitle className="text-xl">Solar Detailed Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Comprehensive design development with substantial detailing of 
                    solar site grading and access road layouts for PV installations.
                  </p>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Cover Page & Solar Notes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Solar Drainage & Erosion Control</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Solar Access Road Plans & Profiles</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center h-full">
                <CardHeader>
                  <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    100%
                  </div>
                  <CardTitle className="text-xl">Solar Construction Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Final construction-ready drawings for solar installations with all necessary information 
                    for permits and solar construction.
                  </p>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">PE Sealed Drawings*</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Solar Permit Ready Documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Complete Solar Calculations</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">*Available in licensed states only</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Detailed Service List */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Complete Solar Drawing Package Includes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detailedServices.map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solar Consulting Services */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solar Project Consulting Support
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive consulting services provided on a Time and Expense basis 
              to support your solar project from design through construction completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <Card key={index} className="bg-white bg-opacity-10 border-white border-opacity-20 text-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-blue-100 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold mb-4">Additional Solar Services Include:</h3>
            <ul className="text-blue-100 space-y-2 max-w-2xl mx-auto">
              <li>• As-Recorded solar installation drawings preparation</li>
              <li>• Solar construction administration support</li>
              <li>• Solar regulatory compliance assistance</li>
              <li>• Solar project closeout documentation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process and Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solar Project Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach ensuring quality solar project deliverables and client satisfaction
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Solar Site Consultation</h3>
                <p className="text-gray-600 text-sm">Solar project requirements and site assessment</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Solar Design Development</h3>
                <p className="text-gray-600 text-sm">Progressive solar design phases with client review</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Solar Documentation</h3>
                <p className="text-gray-600 text-sm">PE sealed drawings and solar permit submission</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Solar Construction Support</h3>
                <p className="text-gray-600 text-sm">Solar installation assistance and project closeout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Discuss Your Solar Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team to learn how we can support your photovoltaic solar development needs.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
