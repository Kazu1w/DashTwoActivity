import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Calendar, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-transport-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dimple Star Transport</h1>
            <p className="text-xl opacity-90">
              Leading the bus transport industry with reliable service and innovation since 1993
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Our History</Badge>
              <h2 className="text-3xl font-bold mb-6">Three Decades of Excellence</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Photo taken on October 16, 1993, Napat Transit (now Dimple Star Transport) NVR-963 
                  (fleet No 100) going to Alabang and jeepneys under the Light Rail Line in Taft Ave 
                  near United Nations Avenue, Ermita, Manila, Philippines.
                </p>
                <p>
                  Year 2004 of May changes has been made, Napat Transit became Dimple Star Transport, 
                  marking a new era of improved service and modernization in our fleet and operations.
                </p>
                <p>
                  Since our transformation, we have continuously upgraded our services, expanded our 
                  routes, and maintained our commitment to passenger safety and comfort.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">31+</h3>
                  <p className="text-sm text-muted-foreground">Years of Service</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">1M+</h3>
                  <p className="text-sm text-muted-foreground">Passengers Served</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">50+</h3>
                  <p className="text-sm text-muted-foreground">Routes Covered</p>
                </div>
                <div className="text-center">
                  <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">99%</h3>
                  <p className="text-sm text-muted-foreground">On-Time Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To provide superior transport service to Metro Manila and Mindoro Province 
                  commuters with a commitment to safety, reliability, and customer satisfaction. 
                  We strive to make every journey comfortable and punctual.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-transport-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-transport-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-transport-blue">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To lead the bus transport industry through innovation, service excellence, 
                  and sustainable practices. We envision a future where public transportation 
                  is the preferred choice for all commuters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl font-bold mb-4">What Drives Us Forward</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-muted-foreground">
                Passenger safety is our top priority. Regular maintenance and safety checks ensure secure travel.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-transport-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-muted-foreground">
                Consistent, on-time service you can count on for your daily commute and travel needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Continuous improvement in service quality and customer experience drives our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}