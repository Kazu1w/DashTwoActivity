import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, Users, MapPin, CreditCard, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const origins = [
  "Ali Mall Cubao Terminal",
  "Alabang Terminal", 
  "Cabuyao Terminal",
  "Espana Terminal",
  "San Lazaro Terminal",
  "Pasay Terminal"
];

const destinations = [
  "San Jose, Occidental Mindoro"
];

const busTypes = [
  { id: "regular", name: "Regular Bus", price: 400, description: "Standard comfort, AC" },
  { id: "deluxe", name: "Deluxe Bus", price: 450, description: "Premium comfort, Wide seats" },
  { id: "executive", name: "Executive Bus", price: 500, description: "Luxury comfort, Reclining seats" }
];

export default function Book() {
  const [tripType, setTripType] = useState("one-way");
  const [passengers, setPassengers] = useState(1);
  const [selectedBusType, setSelectedBusType] = useState("regular");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted!",
      description: "We'll process your booking and contact you shortly.",
    });
  };

  const selectedBus = busTypes.find(bus => bus.id === selectedBusType);
  const totalPrice = selectedBus ? selectedBus.price * passengers : 0;

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-transport-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Journey</h1>
            <p className="text-xl opacity-90">
              Secure your seat and travel with comfort and confidence
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Trip Type */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ArrowRight className="w-5 h-5" />
                    <span>Trip Type</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={tripType} onValueChange={setTripType} className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="one-way" id="one-way" />
                      <Label htmlFor="one-way">One Way</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="round-trip" id="round-trip" />
                      <Label htmlFor="round-trip">Round Trip</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Route Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Route Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="origin">Origin</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select origin terminal" />
                        </SelectTrigger>
                        <SelectContent>
                          {origins.map((origin) => (
                            <SelectItem key={origin} value={origin}>
                              {origin}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent>
                          {destinations.map((destination) => (
                            <SelectItem key={destination} value={destination}>
                              {destination}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Travel Dates */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Travel Dates</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="departure">Departure Date</Label>
                      <Input type="date" id="departure" required />
                    </div>
                    {tripType === "round-trip" && (
                      <div className="space-y-2">
                        <Label htmlFor="return">Return Date</Label>
                        <Input type="date" id="return" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Passengers & Bus Type */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Passengers & Bus Type</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="passengers">Number of Passengers</Label>
                    <Select value={passengers.toString()} onValueChange={(value) => setPassengers(parseInt(value))}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'Passenger' : 'Passengers'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label>Bus Type</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {busTypes.map((busType) => (
                        <Card 
                          key={busType.id} 
                          className={`cursor-pointer transition-all ${
                            selectedBusType === busType.id 
                              ? 'border-primary shadow-md' 
                              : 'hover:border-primary/50'
                          }`}
                          onClick={() => setSelectedBusType(busType.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <input
                                type="radio"
                                name="busType"
                                value={busType.id}
                                checked={selectedBusType === busType.id}
                                onChange={() => setSelectedBusType(busType.id)}
                                className="text-primary"
                              />
                              <h3 className="font-medium">{busType.name}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{busType.description}</p>
                            <Badge variant="secondary">₱{busType.price}</Badge>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Passenger Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Passenger Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input type="email" id="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input type="tel" id="phone" required />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Booking Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5" />
                    <span>Booking Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Bus Type:</span>
                    <span className="font-medium">{selectedBus?.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Passengers:</span>
                    <span className="font-medium">{passengers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Price per passenger:</span>
                    <span className="font-medium">₱{selectedBus?.price}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-primary">₱{totalPrice}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                  Submit Booking Request
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  You will receive a confirmation call within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}