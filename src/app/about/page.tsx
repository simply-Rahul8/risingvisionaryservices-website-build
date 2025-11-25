"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Award, Users, Briefcase, ArrowRight } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from course design to student support."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We build trust through honesty, transparency, and ethical practices in all our interactions."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnerships to achieve greater success."
  },
  {
    icon: Briefcase,
    title: "Innovation",
    description: "We continuously innovate our teaching methods and curriculum to stay ahead."
  }
]

const stats = [
  { value: "2025", label: "Founded" },
  { value: "14+", label: "Students Trained" },
  { value: "Yet to Collaborate", label: "Companies Collaborated" },
  { value: "95%", label: "Success Rate" }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
            alt="Team collaboration"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/40 to-secondary/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Empowering professionals through education, experience, and excellence since 2025
          </p>
        </div>
      </section>

      {/* Mastermind Section */}
      <section className="py-20 bg-linear-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-4 max-w-xs">
            <div className="relative w-32 h-32 rounded-lg overflow-hidden border-4 border-primary/20">
              <Image
                src="/mastermind.jpg"
                alt="Mastermind"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-lg font-semibold text-muted-foreground">
              Mastermind Behind Idea
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  RisingVisionaryServices was founded in 2025 with a clear mission: to bridge the gap between traditional education and the practical skills needed in today's dynamic workplace.
                </p>
                <p>
                  We recognized that many talented individuals struggled to transition from education to meaningful careers, not due to lack of knowledge, but because they needed comprehensive, hands-on training from industry professionals.
                </p>
                <p>
                  Our innovative approach combines expert-led training with guided practical learning. This unique model has helped professionals advance their careers and achieve their goals through quality education and dedicated support.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for students seeking career growth and skill development in technology and professional fields.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=800&fit=crop"
                alt="Learning environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-linear-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`font-bold gradient-text mb-2 ${stat.value === "Yet to Collaborate" ? "text-3xl md:text-4xl" : "text-5xl"}`}>{stat.value}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-16 h-16 rounded-full gradient-emerald-purple flex items-center justify-center mb-4">
                  <Target className="text-white" size={32} />
                </div>
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To empower individuals with the skills, knowledge, and hands-on training they need to excel in their professional careers. We are committed to providing high-quality education that transforms lives and creates lasting career success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-16 h-16 rounded-full gradient-emerald-purple flex items-center justify-center mb-4">
                  <Eye className="text-white" size={32} />
                </div>
                <CardTitle className="text-3xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the leading professional development organization in Scandinavia, recognized for our innovative approach to education, quality instruction, and proven track record of student success. We envision a future where every professional has access to the training they need to reach their full potential.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-linear-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-emerald-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Become part of a network of ambitious professionals transforming their careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Explore Courses <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}