"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Briefcase, Target, TrendingUp, Award, ArrowRight } from "lucide-react"

const benefits = [
  {
    icon: Briefcase,
    title: "Real-World Experience",
    description: "Students gain hands-on experience working on actual business projects with our partner companies."
  },
  {
    icon: Users,
    title: "Industry Mentorship",
    description: "Direct access to experienced professionals who provide guidance and career advice."
  },
  {
    icon: Target,
    title: "Networking Opportunities",
    description: "Build valuable connections with industry leaders and potential employers."
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description: "Many students transition directly into full-time roles with our partner companies."
  }
]

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
            alt="Business partnership"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Industry Partnerships
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Connecting students with leading companies for real-world experience and career opportunities
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Our <span className="gradient-text">Partnerships Matter</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We bridge the gap between education and employment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Building <span className="gradient-text">Future Collaborations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are actively seeking partnerships with innovative companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Partnership collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Partnership Opportunities</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  RisingVisionaryServices is building a network of industry partnerships to provide our students with real-world experience and career opportunities.
                </p>
                <p>
                  We are actively seeking collaborations with forward-thinking companies that value skilled professionals and want to contribute to the next generation of talent.
                </p>
                <p>
                  Our partnership model creates a win-win situation: companies gain access to trained professionals, while students receive invaluable hands-on experience and mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              How <span className="gradient-text">It Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From enrollment to employment - your journey with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Enroll in Course</h3>
              <p className="text-muted-foreground">Choose a program that aligns with your career goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Training</h3>
              <p className="text-muted-foreground">Learn from experts and master essential skills</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Partner Placement</h3>
              <p className="text-muted-foreground">Get matched with partner companies for hands-on experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch Career</h3>
              <p className="text-muted-foreground">Transition into full-time employment opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">
                Interested in Partnering With Us?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Join our network of leading companies and help shape the next generation of professionals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Become a Partner <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}