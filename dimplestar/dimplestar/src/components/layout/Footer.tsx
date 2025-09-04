import { Link } from "react-router-dom";
import { Bus, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bus className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-bold">Dimple Star</h3>
                <p className="text-sm opacity-90">Transport</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Providing reliable and comfortable bus transportation services 
              across Metro Manila and Mindoro Province since 1993.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link to="/routes" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Routes & Schedules
              </Link>
              <Link to="/terminals" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Terminals
              </Link>
              <Link to="/book" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Book Now
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+63 02 985 1451</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+63 908 926 9163</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@dimplestar.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <p>Block 1 lot 10, southpoint Subd</p>
                  <p>Brgy Banay-Banay, Cabuyao, Laguna</p>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Operating Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>24/7 Service</span>
              </div>
              <p className="text-sm opacity-90">
                Daily trips from 4:00 AM to 10:00 PM
              </p>
              <p className="text-sm opacity-90">
                Customer service available 24 hours
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2024 Dimple Star Transport. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}