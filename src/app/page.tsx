"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedCounter from "@/components/AnimatedCounter"
import MarqueeScroll from "@/components/MarqueeScroll"
import { ArrowRight, BookOpen, Users, Award, TrendingUp, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Master modern web development with hands-on training in frontend and backend technologies.",
    price: "1500 SEK",
    duration: "12 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "AI & Data Science",
    description: "Learn artificial intelligence and data science fundamentals with practical applications.",
    price: "1500 SEK",
    duration: "10 weeks",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "UI/UX Product Design",
    description: "Create beautiful, user-centered designs and master industry-standard design tools.",
    price: "1500 SEK",
    duration: "8 weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Agile Methodology",
    description: "Master agile frameworks and project management techniques for modern teams.",
    price: "1500 SEK",
    duration: "6 weeks",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Mobile App Development (React Native)",
    description: "Build cross-platform mobile applications using React Native and modern tools.",
    price: "1500 SEK",
    duration: "10 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    title: "HTML, CSS and JavaScript",
    description: "Learn the foundational technologies of web development from scratch.",
    price: "1500 SEK",
    duration: "8 weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=600&fit=crop"
  }
]

const testimonials = [
  {
    name: "Dinesh Reddy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    content: "The course quality at RisingVisionaryServices is truly exceptional. The instructors are highly knowledgeable and the curriculum is perfectly structured. I gained practical skills that directly improved my career prospects.",
    rating: 5
  },
  {
    name: "Jaswanth Kumar Reddy",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    content: "Outstanding teaching quality! The depth of knowledge shared and the personalized guidance I received were invaluable. The course material was perfectly relevant to industry needs, and the support system helped me transition into a significantly better role.",
    rating: 5
  },
  {
    name: "Manish Kumar",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    content: "This course exceeded all my expectations. The instructors bring deep expertise and years of industry experience to their teaching. My career has improved significantly thanks to the comprehensive skills I gained.",
    rating: 5
  }
]

const marqueeItems = [
  "Limited Seats Only",
  "Admissions Available",
  "Professional Development",
  "Career Growth",
  "Expert Instructors",
  "Real-World Experience",
  "Industry Partnerships",
  "Flexible Learning"
]

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop"
            alt="Students learning together"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-secondary/30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Shape Your Tomorrow by
            <span className="block mt-2 bg-linear-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Building a Skill Today
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Learn from industry professionals through guided hands-on training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link href="/courses">
              <Button size="lg" className="gradient-emerald-purple text-white text-lg px-8 py-6 hover:opacity-90 transform hover:scale-105 transition-all">
                Explore Courses <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeScroll items={marqueeItems} />

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 bg-linear-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                <AnimatedCounter end={14} suffix="+" />
              </div>
              <p className="text-lg text-muted-foreground">Students Trained</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                Expert Instructors
              </div>
              <p className="text-lg text-muted-foreground">Dedicated to Your Success</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <p className="text-lg text-muted-foreground">Success Rate</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                Yet to Collaborate
              </div>
              <p className="text-lg text-muted-foreground">Companies Collaborated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to accelerate your professional growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={course.id} className="hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {course.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <BookOpen size={16} /> {course.duration}
                    </span>
                    <span className="text-sm font-medium px-2 py-1 bg-secondary/20 rounded">
                      {course.level}
                    </span>
                  </div>
                  <Link href="/courses">
                    <Button className="w-full gradient-emerald-purple text-white hover:opacity-90">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button size="lg" variant="outline" className="hover:bg-accent">
                View All Courses <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-linear-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience excellence in education with our unique approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-muted-foreground">Learn from industry professionals with years of experience</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real Partnerships</h3>
              <p className="text-muted-foreground">Connect with leading companies for hands-on experience</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-muted-foreground">95% of our graduates advance in their careers</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
              <p className="text-muted-foreground">Comprehensive curriculum updated with industry trends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="gradient-text">Students Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from professionals who transformed their careers with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="fill-yellow-400 text-yellow-400" size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">&ldquo;{testimonial.content}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}