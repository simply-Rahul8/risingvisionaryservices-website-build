"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { GraduationCap, Briefcase, Building2, CheckCircle2 } from "lucide-react"

export default function JoinPage() {
  const [applicationType, setApplicationType] = useState<"student" | "trainer" | "company">("student")
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20 gradient-emerald-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Whether you're a student, trainer, or company, we'd love to have you in our community
          </p>
        </div>
      </section>

      {/* Application Type Selection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              How Would You Like to <span className="gradient-text">Join</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Select your application type to get started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card
              className={`cursor-pointer transition-all transform hover:-translate-y-2 ${
                applicationType === "student"
                  ? "border-primary shadow-xl ring-2 ring-primary"
                  : "hover:shadow-lg"
              }`}
              onClick={() => setApplicationType("student")}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  applicationType === "student" ? "gradient-emerald-purple" : "bg-muted"
                }`}>
                  <GraduationCap className={applicationType === "student" ? "text-white" : "text-muted-foreground"} size={32} />
                </div>
                <CardTitle>I'm a Student</CardTitle>
                <CardDescription>
                  Enroll in our courses and transform your career
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className={`cursor-pointer transition-all transform hover:-translate-y-2 ${
                applicationType === "trainer"
                  ? "border-primary shadow-xl ring-2 ring-primary"
                  : "hover:shadow-lg"
              }`}
              onClick={() => setApplicationType("trainer")}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  applicationType === "trainer" ? "gradient-emerald-purple" : "bg-muted"
                }`}>
                  <Briefcase className={applicationType === "trainer" ? "text-white" : "text-muted-foreground"} size={32} />
                </div>
                <CardTitle>I'm a Trainer</CardTitle>
                <CardDescription>
                  Share your expertise and inspire students
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className={`cursor-pointer transition-all transform hover:-translate-y-2 ${
                applicationType === "company"
                  ? "border-primary shadow-xl ring-2 ring-primary"
                  : "hover:shadow-lg"
              }`}
              onClick={() => setApplicationType("company")}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  applicationType === "company" ? "gradient-emerald-purple" : "bg-muted"
                }`}>
                  <Building2 className={applicationType === "company" ? "text-white" : "text-muted-foreground"} size={32} />
                </div>
                <CardTitle>I'm a Company</CardTitle>
                <CardDescription>
                  Partner with us to find talented professionals
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Application Forms */}
          <div className="max-w-3xl mx-auto">
            {formSubmitted ? (
              <Card className="border-primary bg-primary/5">
                <CardContent className="p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Application Submitted!</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Thank you for your interest. We'll review your application and get back to you within 2-3 business days.
                  </p>
                  <Button onClick={() => setFormSubmitted(false)} variant="outline">
                    Submit Another Application
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">
                    {applicationType === "student" && "Student Application"}
                    {applicationType === "trainer" && "Trainer Application"}
                    {applicationType === "company" && "Company Partnership Application"}
                  </CardTitle>
                  <CardDescription>
                    {applicationType === "student" && "Fill out the form below to apply for our courses"}
                    {applicationType === "trainer" && "Join our team of expert instructors"}
                    {applicationType === "company" && "Partner with us to access top talent"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Common Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required placeholder="john.doe@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required placeholder="+46 123 456 789" />
                    </div>

                    {/* Student-Specific Fields */}
                    {applicationType === "student" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="course">Preferred Course *</Label>
                          <select
                            id="course"
                            required
                            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option value="">Select a course</option>
                            <option value="full-stack">Full-Stack Web Development</option>
                            <option value="ai-data-science">AI & Data Science</option>
                            <option value="ui-ux">UI/UX Product Design</option>
                            <option value="agile">Agile Methodology</option>
                            <option value="mobile">Mobile App Development (React Native)</option>
                            <option value="html-css-js">HTML, CSS and JavaScript</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="background">Educational Background</Label>
                          <Input id="background" placeholder="e.g., Bachelor's in Computer Science" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="experience">Work Experience (years)</Label>
                          <Input id="experience" type="number" min="0" placeholder="0" />
                        </div>
                      </>
                    )}

                    {/* Trainer-Specific Fields */}
                    {applicationType === "trainer" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="expertise">Area of Expertise *</Label>
                          <Input id="expertise" required placeholder="e.g., Web Development, Data Science" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="teaching-experience">Teaching Experience (years) *</Label>
                          <Input id="teaching-experience" type="number" min="0" required placeholder="5" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="linkedin">LinkedIn Profile</Label>
                          <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" />
                        </div>
                      </>
                    )}

                    {/* Company-Specific Fields */}
                    {applicationType === "company" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="company-name">Company Name *</Label>
                          <Input id="company-name" required placeholder="Your Company AB" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry *</Label>
                          <Input id="industry" required placeholder="e.g., Technology, Finance" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company-size">Company Size *</Label>
                          <select
                            id="company-size"
                            required
                            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option value="">Select size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="500+">500+ employees</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="website">Company Website</Label>
                          <Input id="website" type="url" placeholder="https://yourcompany.com" />
                        </div>
                      </>
                    )}

                    {/* Message Field */}
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {applicationType === "student" && "Why are you interested in this course?"}
                        {applicationType === "trainer" && "Tell us about your teaching philosophy"}
                        {applicationType === "company" && "What are you looking for in a partnership?"}
                      </Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Share your thoughts..."
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="mt-1 h-4 w-4 rounded border-input"
                      />
                      <Label htmlFor="terms" className="text-sm font-normal">
                        I agree to the terms and conditions and privacy policy *
                      </Label>
                    </div>

                    <Button type="submit" className="w-full gradient-emerald-purple text-white hover:opacity-90 h-12 text-lg">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {!formSubmitted && (
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Why <span className="gradient-text">Join Us</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {applicationType === "student" && (
                <>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="text-white" size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">Expert Instruction</h3>
                      <p className="text-sm text-muted-foreground">Learn from industry professionals with years of experience</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="text-white" size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">Practical Training</h3>
                      <p className="text-sm text-muted-foreground">Gain hands-on experience with comprehensive curriculum</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="text-white" size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">Career Support</h3>
                      <p className="text-sm text-muted-foreground">Get guidance and support for your career advancement</p>
                    </CardContent>
                  </Card>
                </>
              )}

              {applicationType === "trainer" && (
                <>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="text-white" size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">Impact Lives</h3>
                      <p className="text-sm text-muted-foreground">Make a difference by teaching motivated students</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="text-white" size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">Flexible Schedule</h3>
                      <p className="text-sm text-muted-foreground">Choose when and how much you want to teach</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="text-white" size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">Professional Growth</h3>
                      <p className="text-sm text-muted-foreground">Develop your teaching skills and expand your network</p>
                    </CardContent>
                  </Card>
                </>
              )}

              {applicationType === "company" && (
                <>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="text-white" size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">Access Top Talent</h3>
                      <p className="text-sm text-muted-foreground">Connect with skilled, motivated professionals</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="text-white" size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">Brand Visibility</h3>
                      <p className="text-sm text-muted-foreground">Increase your company's presence in the community</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full gradient-emerald-purple flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="text-white" size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">Flexible Partnership</h3>
                      <p className="text-sm text-muted-foreground">Customize partnership terms to fit your needs</p>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}