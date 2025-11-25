"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MessageSquare, Linkedin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 gradient-emerald-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're here to answer your questions and help you start your journey
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              How Can We <span className="gradient-text">Help You?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred method to connect with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="tel:+46793484087"
              className="group"
            >
              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={28} />
                  </div>
                  <CardTitle>Phone</CardTitle>
                  <CardDescription>Call us directly</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold text-primary">
                    +46 793 484 087
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://wa.me/46793484087"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <MessageSquare className="text-white" size={28} />
                  </div>
                  <CardTitle>WhatsApp</CardTitle>
                  <CardDescription>Chat with us</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold text-primary">
                    Message Now
                  </p>
                </CardContent>
              </Card>
            </a>

            <a
              href="mailto:raghuvamsisair@gmail.com"
              className="group"
            >
              <Card className="hover:shadow-xl transition-all transform hover:-translate-y-2 h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={28} />
                  </div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>Send us a message</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm font-semibold text-primary break-all">
                    raghuvamsisair@gmail.com
                  </p>
                </CardContent>
              </Card>
            </a>

            <div className="group">
              <Card className="h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                    <Linkedin className="text-white" size={28} />
                  </div>
                  <CardTitle>LinkedIn</CardTitle>
                  <CardDescription>Connect professionally</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <a 
                    href="https://www.linkedin.com/in/raghuvamsisairangannagari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:underline break-all"
                  >
                    linkedin.com/in/raghuvamsisairangannagari
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step toward transforming your career today
          </p>
          <Link href="/courses">
            <button className="px-8 py-3 rounded-lg gradient-emerald-purple text-white text-lg font-medium hover:opacity-90 transition-all">
              Browse Courses
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}