"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Headphones,
  Users,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
   
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Headphones className="h-4 w-4 mr-2" />
              24/7 Support Available
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
              Ready to get started with WhatsApp API for OTP delivery? Contact us for a demo, technical consultation, or
              any questions about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Call to Action */}
            <div>
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
                  <CardDescription>Call us directly for immediate assistance and consultation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-8">
                    <Phone className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-primary mb-2">+231887879877</h3>
                    <p className="text-muted-foreground mb-6">Available 24/7 for support and consultation</p>
                    <Button 
                      size="lg" 
                      className="w-full text-lg py-6"
                      onClick={() => window.open('tel:+231887879877', '_self')}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </Button>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-3">What to expect when you call:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        Immediate technical consultation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        Custom solution recommendations
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        Pricing based on your requirements
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        Setup and integration guidance
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">info@myotpservices.com</p>
                      <p className="text-sm text-muted-foreground">For general inquiries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">+231887879877</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MessageSquare className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">WhatsApp</h4>
                      <p className="text-muted-foreground">+231887879877</p>
                      <p className="text-sm text-muted-foreground">24/7 support available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      {/* <p className="text-muted-foreground">
                        123 Tech Street
                        <br />
                        - 94105
                        <br />
                        United States
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* <Button className="w-full justify-start bg-transparent" variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Start WhatsApp Demo
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    Schedule Video Call
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    Request Callback
                  </Button> */}
                </CardContent>
              </Card>

              {/* Why Choose Demo */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Our Demo?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <span className="font-medium">Live API Testing</span>
                        <p className="text-sm text-muted-foreground">Test our API in real-time with your use case</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <span className="font-medium">Custom Integration</span>
                        <p className="text-sm text-muted-foreground">Personalized guidance for your specific needs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <span className="font-medium">Pricing Consultation</span>
                        <p className="text-sm text-muted-foreground">Get custom pricing based on your volume</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <span className="font-medium">Technical Support</span>
                        <p className="text-sm text-muted-foreground">Direct access to our engineering team</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to get help when you need it
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>24/7 Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Round-the-clock technical assistance for all integration and API-related questions
                </CardDescription>
                <Badge variant="outline">Always Available</Badge>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Dedicated Account Manager</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Personal account manager for enterprise clients with priority support and custom solutions
                </CardDescription>
                <Badge variant="outline">Enterprise Only</Badge>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Developer Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Join our developer community for tips, best practices, and peer-to-peer support
                </CardDescription>
                <Badge variant="outline">Free Access</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our WhatsApp API service
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly can I get started?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  You can start testing our API within 24 hours of signing up. Full production setup typically takes 2-3
                  business days depending on your requirements.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the minimum volume requirement?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We don't have a minimum volume requirement. Our pricing scales from small startups to large
                  enterprises, starting at just $0.05 per OTP.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer free trials?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Yes! We offer a free trial with 100 OTP credits so you can test our service before committing to a
                  paid plan.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is technical support included?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All plans include technical support. Starter plans get email support, while Professional and
                  Enterprise plans get priority support with faster response times.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of businesses already using our WhatsApp API for secure, reliable OTP delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => window.open('tel:+231887879877', '_self')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +231887879877
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
