"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Users, Award, CheckCircle2, ArrowRight } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Master modern web development with hands-on training in frontend and backend technologies.",
    fullDescription: "This comprehensive course covers everything you need to become a full-stack web developer. Learn frontend technologies like React, Next.js, and Tailwind CSS, along with backend development using Node.js, Express, and databases. Build real-world applications and master industry best practices.",
    price: "1500 SEK",
    duration: "12 weeks",
    level: "Intermediate",
    students: 180,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    features: [
      "Frontend development with React and Next.js",
      "Backend APIs with Node.js and Express",
      "Database design and management",
      "Authentication and security best practices",
      "Deployment and production optimization"
    ]
  },
  {
    id: 2,
    title: "AI & Data Science",
    description: "Learn artificial intelligence and data science fundamentals with practical applications.",
    fullDescription: "Dive into the world of artificial intelligence and data science. Learn machine learning algorithms, data analysis, visualization techniques, and AI model development. Work with Python, TensorFlow, and industry-standard tools to solve real-world problems.",
    price: "1500 SEK",
    duration: "10 weeks",
    level: "Advanced",
    students: 150,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    features: [
      "Machine learning algorithms and techniques",
      "Data analysis and visualization",
      "Python programming for data science",
      "Neural networks and deep learning",
      "AI model deployment and optimization"
    ]
  },
  {
    id: 3,
    title: "UI/UX Product Design",
    description: "Create beautiful, user-centered designs and master industry-standard design tools.",
    fullDescription: "Learn the principles of user interface and user experience design. Master design thinking, wireframing, prototyping, and visual design. Use industry-standard tools like Figma and Adobe XD to create stunning, user-friendly interfaces.",
    price: "1500 SEK",
    duration: "8 weeks",
    level: "Beginner",
    students: 200,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    features: [
      "User research and design thinking",
      "Wireframing and prototyping",
      "Visual design principles and typography",
      "Design systems and component libraries",
      "Usability testing and iteration"
    ]
  },
  {
    id: 4,
    title: "Agile Methodology",
    description: "Master agile frameworks and project management techniques for modern teams.",
    fullDescription: "Understand agile principles and learn to implement Scrum, Kanban, and other agile frameworks. Develop skills in sprint planning, backlog management, and team facilitation. Perfect for aspiring Scrum Masters, Product Owners, and team leaders.",
    price: "1500 SEK",
    duration: "6 weeks",
    level: "All Levels",
    students: 140,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    features: [
      "Scrum and Kanban frameworks",
      "Sprint planning and execution",
      "Backlog management and refinement",
      "Team collaboration and facilitation",
      "Agile metrics and continuous improvement"
    ]
  },
  {
    id: 5,
    title: "Mobile App Development (React Native)",
    description: "Build cross-platform mobile applications using React Native and modern tools.",
    fullDescription: "Learn to build native mobile applications for iOS and Android using React Native. Master mobile UI patterns, navigation, state management, and API integration. Deploy your apps to app stores and reach millions of users.",
    price: "1500 SEK",
    duration: "10 weeks",
    level: "Intermediate",
    students: 160,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    features: [
      "React Native fundamentals and components",
      "Mobile navigation and routing",
      "State management with Redux",
      "API integration and data fetching",
      "App deployment to iOS and Android stores"
    ]
  },
  {
    id: 6,
    title: "HTML, CSS and JavaScript",
    description: "Learn the foundational technologies of web development from scratch.",
    fullDescription: "Start your web development journey with the fundamental building blocks. Learn HTML for structure, CSS for styling, and JavaScript for interactivity. Build responsive websites and understand how the web works from the ground up.",
    price: "1500 SEK",
    duration: "8 weeks",
    level: "Beginner",
    students: 220,
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=600&fit=crop",
    features: [
      "HTML5 semantic markup and structure",
      "CSS3 styling and responsive design",
      "JavaScript fundamentals and DOM manipulation",
      "Modern ES6+ features and best practices",
      "Building complete responsive websites"
    ]
  }
]

export default function CoursesPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 gradient-emerald-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transform your career with our comprehensive training programs designed by industry experts
          </p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {courses.map((course, index) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-2xl transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                      {course.price}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline" className="border-primary text-primary">
                        {course.level}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock size={16} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users size={16} />
                        <span>{course.students} students</span>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4 gradient-text">
                      {course.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6">
                      {course.fullDescription}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="text-primary" size={20} />
                        What You'll Learn
                      </h3>
                      <ul className="space-y-2">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/join" className="flex-1">
                        <Button className="w-full gradient-emerald-purple text-white hover:opacity-90">
                          Enroll Now <ArrowRight className="ml-2" size={20} />
                        </Button>
                      </Link>
                      <Link href="/contact" className="flex-1">
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              Not Sure Which Course to Choose?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our advisors are here to help you find the perfect course for your career goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-emerald-purple text-white hover:opacity-90">
                  Contact an Advisor
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}