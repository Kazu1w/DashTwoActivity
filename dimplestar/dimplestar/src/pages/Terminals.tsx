import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const terminals = [
  {
    name: "Espana Terminal",
    address: "336 B. S21 Antipolo St, Sampaloc, Manila, 1008 Metro Manila",
    contact: "+63 02 985 1451 / +63 908 926 9163",
    rating: "3.4",
    reviews: "45 reviews",
    description: "Main terminal in Manila with easy access to universities and business districts.",
    amenities: ["Waiting Area", "Restroom", "Security", "Parking"]
  },
  {
    name: "San Jose Terminal", 
    address: "San Jose, Occidental Mindoro",
    contact: "+63 908 926 9163",
    rating: "4.2",
    reviews: "78 reviews", 
    description: "Primary destination terminal serving Occidental Mindoro province.",
    amenities: ["Waiting Area", "Restroom", "Food Court", "ATM", "Parking"]
  },
  {
    name: "Alabang Terminal",
    address: "Alabang, Muntinlupa City, Metro Manila", 
    contact: "+63 02 985 1451",
    rating: "4.0",
    reviews: "52 reviews",
    description: "Strategic location in South Metro Manila with mall access.",
    amenities: ["Waiting Area", "Restroom", "Security", "Mall Access"]
  },
  {
    name: "Cubao Terminal",
    address: "Ali Mall, Cubao, Quezon City, Metro Manila",
    contact: "+63 02 985 1451", 
    rating: "3.8",
    reviews: "63 reviews",
    description: "Convenient terminal located at Ali Mall with shopping and dining options.",
    amenities: ["Waiting Area", "Restroom", "Shopping", "Food Court"]
  },
  {
    name: "Pasay Terminal",
    address: "Pasay City, Metro Manila",
    contact: "+63 02 985 1451",
    rating: "3.9", 
    reviews: "41 reviews",
    description: "Easy access terminal near airport and entertainment districts.",
    amenities: ["Waiting Area", "Restroom", "Security", "Airport Access"]
  },
  {
    name: "San Lazaro Terminal", 
    address: "San Lazaro, Manila, Metro Manila",
    contact: "+63 02 985 1451",
    rating: "3.7",
    reviews: "38 reviews",
    description: "Historic terminal location with good transport connections.",
    amenities: ["Waiting Area", "Restroom", "Security", "Transport Hub"]
  }
];

export default function Terminals() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-transport-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Terminals</h1>
            <p className="text-xl opacity-90">
              Convenient locations across Metro Manila and Mindoro Province
            </p>
          </div>
        </div>
      </section>

      {/* Terminals Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Nationwide Network</Badge>
            <h2 className="text-3xl font-bold mb-4">Terminal Locations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the most convenient terminal for your travel needs with modern facilities and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {terminals.map((terminal, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-lg">{terminal.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-medium">⭐ {terminal.rating}</span>
                    </div>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{terminal.reviews}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{terminal.description}</p>
                  
                  {/* Address */}
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-transport-blue mt-0.5" />
                      <p className="text-sm">{terminal.address}</p>
                    </div>
                    
                    {/* Contact */}
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-transport-blue" />
                      <p className="text-sm">{terminal.contact}</p>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <p className="text-sm font-medium mb-2">Amenities:</p>
                    <div className="flex flex-wrap gap-1">
                      {terminal.amenities.map((amenity, amenityIndex) => (
                        <Badge key={amenityIndex} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Navigation className="w-4 h-4 mr-1" />
                      Directions
                    </Button>
                    <Button variant="default" size="sm" className="flex-1">
                      <Clock className="w-4 h-4 mr-1" />
                      Schedules
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Operating Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Daily Operations</h3>
                  <p className="text-sm text-muted-foreground">4:00 AM - 10:00 PM</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-transport-blue mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Customer Service</h3>
                  <p className="text-sm text-muted-foreground">24/7 Available</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">All Terminals</h3>
                  <p className="text-sm text-muted-foreground">Open Daily</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}