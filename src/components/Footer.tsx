
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const licensedStates = [
    "Colorado", "Illinois", "Indiana", "Michigan", "Maine", "Minnesota", "Wisconsin"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/c8902c12-8420-4005-8cfd-f9a343563d56.png" 
              alt="InfraTech Global Solutions" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Professional civil engineering design consultancy specializing in photovoltaic solar 
              installations from conceptual design to construction support.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Solar Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Solar Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">info@infratechgs.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-blue-400" />
                <span className="text-gray-300">123 Engineering Plaza<br />Suite 100<br />City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Licensed States */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">PE LICENSED STATES</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {licensedStates.map((state, index) => (
                <span key={index} className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                  {state}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 InfraTech Global Solutions LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
