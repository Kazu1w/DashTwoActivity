import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const routes = [
  {
    origin: "Ali Mall Cubao Terminal",
    destination: "San Jose",
    schedules: ["9:00 am", "10:00 am", "1:00 pm", "4:00 pm"],
    duration: "4-5 hours",
    fare: "₱450"
  },
  {
    origin: "Alabang Terminal", 
    destination: "San Jose",
    schedules: ["6:00 am", "7:00 am", "2:00 pm", "6:00 pm", "10:00 pm"],
    duration: "4-5 hours",
    fare: "₱420"
  },
  {
    origin: "Cabuyao Terminal",
    destination: "San Jose", 
    schedules: ["8:00 am", "9:00 am", "4:00 pm", "8:00 pm"],
    duration: "3-4 hours",
    fare: "₱380"
  },
  {
    origin: "Espana Terminal",
    destination: "San Jose",
    schedules: ["4:30 am", "5:30 am", "12:00 pm", "4:00 pm", "8:00 pm"],
    duration: "4-5 hours",
    fare: "₱450"
  },
  {
    origin: "San Lazaro Terminal",
    destination: "San Jose",
    schedules: ["3:00 am", "4:30 am", "11:00 am", "3:00 pm", "7:00 pm"],
    duration: "4-5 hours", 
    fare: "₱450"
  },
  {
    origin: "Pasay Terminal",
    destination: "San Jose",
    schedules: ["5:00 am", "6:00 am", "1:00 pm", "3:00 pm"],
    duration: "4-5 hours",
    fare: "₱450"
  }
];

export default function Routes() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-transport-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Routes & Schedules</h1>
            <p className="text-xl opacity-90">
              Find the perfect route for your journey with our comprehensive schedule
            </p>
          </div>
        </div>
      </section>

      {/* Routes Info Banner */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-lg font-semibold">📍 All trips are vice versa</span>
            </div>
            <p className="text-center text-muted-foreground">
              We serve routes in both directions. Return trips available from San Jose to all Metro Manila terminals.
            </p>
          </div>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Daily Service</Badge>
            <h2 className="text-3xl font-bold mb-4">Our Routes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our multiple daily trips across Metro Manila to Mindoro Province
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between text-lg">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-primary">{route.origin}</span>
                    </div>
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{route.destination}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Schedules */}
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-transport-blue" />
                        <span className="text-sm font-medium">Daily Schedules</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {route.schedules.map((time, timeIndex) => (
                          <Badge key={timeIndex} variant="outline" className="text-xs">
                            {time}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Duration & Fare */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="font-medium">{route.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Fare</p>
                        <p className="font-medium text-primary">{route.fare}</p>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to="/book">Book This Route</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Trip?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Secure your seat today and enjoy comfortable travel with Dimple Star Transport
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/book">Book Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}