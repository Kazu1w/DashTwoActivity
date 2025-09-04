import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bus, MapPin, Clock, Users, Star, ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import heroImage from "@/assets/hero-bus.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              Trusted Since 1993
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Journey <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Starts Here
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
              Safe, reliable, and comfortable bus transportation across Metro Manila and Mindoro Province
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-4">
                <Link to="/book">Book Your Trip Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/routes">View Routes & Schedules</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">1M+</h3>
              <p className="text-muted-foreground">Happy Passengers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-transport-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-transport-blue" />
              </div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">Routes Daily</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="text-muted-foreground">Service Hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-transport-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-transport-green" />
              </div>
              <h3 className="text-3xl font-bold mb-2">31+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Routes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Popular Routes</Badge>
            <h2 className="text-4xl font-bold mb-4">Where We Take You</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Daily trips connecting Metro Manila to the beautiful province of Mindoro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { from: "Cubao", to: "San Jose", time: "4-5 hours", price: "₱450" },
              { from: "Alabang", to: "San Jose", time: "4-5 hours", price: "₱420" },
              { from: "Pasay", to: "San Jose", time: "4-5 hours", price: "₱450" },
              { from: "Espana", to: "San Jose", time: "4-5 hours", price: "₱450" },
              { from: "Cabuyao", to: "San Jose", time: "3-4 hours", price: "₱380" },
              { from: "San Lazaro", to: "San Jose", time: "4-5 hours", price: "₱450" }
            ].map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Bus className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{route.from}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold">{route.to}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">{route.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Starting at</p>
                      <p className="text-xl font-bold text-primary">{route.price}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/book">Book This Route</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Dimple Star Transport?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Three decades of experience delivering safe, comfortable, and reliable transportation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Safety First</h3>
              <p className="opacity-90">
                Regular maintenance, professional drivers, and comprehensive insurance coverage ensure your safety
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Always On Time</h3>
              <p className="opacity-90">
                99% on-time performance with multiple daily departures to fit your schedule
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💺</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Comfort & Style</h3>
              <p className="opacity-90">
                Modern, air-conditioned buses with comfortable seating and onboard amenities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-transport-blue text-white border-none">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Book your ticket today and experience the comfort and reliability of Dimple Star Transport
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
                  <Link to="/book">Book Your Trip</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us Now
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
