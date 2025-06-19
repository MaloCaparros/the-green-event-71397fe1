
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#06b14a] to-[#048a3a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/lovable-uploads/12288fd2-4768-452b-bd95-48049d8fde59.png"
                alt="The Green Event"
                className="h-12 w-12"
              />
              <span className="text-2xl font-bold">The Green Event</span>
            </div>
            <p className="text-green-100 text-lg leading-relaxed mb-6">
              Créateur d'événements éco-responsables et de festivals engagés. 
              Nous organisons des expériences musicales uniques qui respectent notre planète.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#f8efc8] transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#f8efc8] transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#f8efc8] transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/green-fest" className="text-green-100 hover:text-white transition-colors duration-300">The Green Fest</Link></li>
              <li><Link to="/events-bar" className="text-green-100 hover:text-white transition-colors duration-300">Événements Bar</Link></li>
              <li><Link to="/green-outside" className="text-green-100 hover:text-white transition-colors duration-300">The Green Outside</Link></li>
              <li><Link to="/lineup" className="text-green-100 hover:text-white transition-colors duration-300">Line-up</Link></li>
              <li><Link to="/merch" className="text-green-100 hover:text-white transition-colors duration-300">Merch</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-200" />
                <span className="text-green-100">hello@thegreenevent.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-200" />
                <span className="text-green-100">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-200" />
                <span className="text-green-100">Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-400 mt-8 pt-8 text-center">
          <p className="text-green-100">
            © 2024 The Green Event. Tous droits réservés. Créé avec ❤️ pour une planète plus verte.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
