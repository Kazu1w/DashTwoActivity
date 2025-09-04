import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-transport-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Get in touch with our team for any questions or assistance
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
                <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Have questions about our services? Need help with booking? We're here to help!
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>Contact Form</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input type="email" id="email" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input type="tel" id="phone" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">Contact Information</Badge>
                <h2 className="text-3xl font-bold mb-4">Reach Out to Us</h2>
                <p className="text-muted-foreground">
                  Multiple ways to get in touch with our customer service team
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">Phone Numbers</h3>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            Primary: <span className="text-foreground font-medium">+63 02 985 1451</span>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Mobile: <span className="text-foreground font-medium">+63 908 926 9163</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-transport-blue/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-transport-blue" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">Email Address</h3>
                        <p className="text-sm text-muted-foreground">
                          <span className="text-foreground font-medium">info@dimplestar.com</span>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">Main Office</h3>
                        <p className="text-sm text-muted-foreground">
                          Block 1 lot 10, southpoint Subd<br />
                          Brgy Banay-Banay, Cabuyao, Laguna
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-transport-green/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-transport-green" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">Customer Service Hours</h3>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            <span className="text-foreground font-medium">24/7 Phone Support</span>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Email: Mon-Sun, 8:00 AM - 8:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Tips */}
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">💡 Quick Tips</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• For booking inquiries, call our hotline for faster service</li>
                    <li>• Have your travel dates ready when calling</li>
                    <li>• Email us for detailed route information</li>
                    <li>• Visit our terminals for in-person assistance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Need Help?</Badge>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How can I book a ticket?</h3>
                <p className="text-sm text-muted-foreground">
                  You can book online through our website, call our hotline, or visit any of our terminals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What are your operating hours?</h3>
                <p className="text-sm text-muted-foreground">
                  We operate daily from 4:00 AM to 10:00 PM with multiple trips throughout the day.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I cancel or change my booking?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, changes and cancellations are allowed up to 2 hours before departure time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you offer group discounts?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we offer special rates for groups of 10 or more passengers. Contact us for details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}