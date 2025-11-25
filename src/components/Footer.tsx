import Link from "next/link"
import { Mail, Phone, Linkedin, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg gradient-emerald-purple flex items-center justify-center">
                <span className="text-white font-bold text-xl">RV</span>
              </div>
              <span className="font-bold gradient-text text-lg">
                RisingVisionaryServices
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering future professionals through quality education and guided hands-on training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Student Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Full-Stack Web Development</li>
              <li className="text-sm text-muted-foreground">AI & Data Science</li>
              <li className="text-sm text-muted-foreground">UI/UX Product Design</li>
              <li className="text-sm text-muted-foreground">Agile Methodology</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <a href="tel:+46793484087" className="hover:text-primary transition-colors">+46 793 484 087</a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:raghuvamsisair@gmail.com" className="hover:text-primary transition-colors">raghuvamsisair@gmail.com</a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Linkedin size={16} className="text-primary" />
                <a href="https://www.linkedin.com/in/raghuvamsisairangannagari" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>Stockholm, Sweden</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 RisingVisionaryServices. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}