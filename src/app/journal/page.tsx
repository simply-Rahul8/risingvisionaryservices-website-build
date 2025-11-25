"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Dinesh Reddy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    content: "The course quality at RisingVisionaryServices is truly exceptional. The instructors are highly knowledgeable and the curriculum is perfectly structured. I gained practical skills that directly improved my career prospects and boosted my confidence significantly."
  },
  {
    id: 2,
    name: "Jaswanth Kumar Reddy",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    content: "Outstanding teaching quality! The depth of knowledge shared and the personalized guidance I received were invaluable. The course material was perfectly relevant to industry needs, and the support system helped me transition into a significantly better role. This program has been transformational for my career."
  },
  {
    id: 3,
    name: "Manish Kumar",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    content: "This course exceeded all my expectations in every way. The instructors bring deep expertise and years of industry experience to their teaching. Complex concepts that once seemed intimidating became clear and manageable. My career has improved significantly thanks to the comprehensive skills I gained."
  },
  {
    id: 4,
    name: "James Mathew",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    content: "The course content is excellent and thoroughly covers everything you need to know. What really sets RisingVisionaryServices apart is the fantastic instructor support. The teaching methodology emphasizes practical, hands-on learning. I highly recommend this program to anyone looking to advance their career."
  },
  {
    id: 5,
    name: "Tejeswar Naidu",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    content: "The quality of education at RisingVisionaryServices is truly outstanding. The instructors are patient, knowledgeable, and genuinely invested in student success. This course has been instrumental in my professional growth and has opened doors I never thought possible. I've gained both technical skills and the confidence to pursue ambitious career goals."
  },
  
]

const ITEMS_PER_PAGE = 5

export default function JournalPage() {
  const [currentPage, setCurrentPage] = useState(1)
  
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentTestimonials = testimonials.slice(startIndex, endIndex)

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 gradient-emerald-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Student Testimonials
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real experiences from our students about their transformative learning journey
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-all">
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
                        {[...Array(5)].map((_, i) => (
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="gap-2"
              >
                <ChevronLeft size={20} />
                Previous
              </Button>
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => {
                      setCurrentPage(page)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className={currentPage === page ? "gradient-emerald-purple text-white" : ""}
                  >
                    {page}
                  </Button>
                ))}
              </div>
              
              <Button
                variant="outline"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="gap-2"
              >
                Next
                <ChevronRight size={20} />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Write Your <span className="gradient-text">Success Story</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community and start your transformation today
          </p>
          <Link href="/courses">
            <Button size="lg" className="gradient-emerald-purple text-white hover:opacity-90">
              Browse Courses
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}