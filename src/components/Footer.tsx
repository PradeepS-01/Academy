import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold font-poppins">
                  Excel <span className="text-orange-400">Academy</span>
                </span>
                <p className="text-xs text-blue-300">Premier Coaching Centre</p>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Tamil Nadu's leading coaching institute for NEET, JEE, and TNPSC preparation. Shaping bright futures since 2005.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href + Icon.name}
                  href={href}
                  className="w-9 h-9 bg-blue-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Institute', path: '/about' },
                { label: 'Our Courses', path: '/courses' },
                { label: 'Our Faculty', path: '/faculty' },
                { label: 'Results & Achievements', path: '/results' },
                { label: 'Student Testimonials', path: '/testimonials' },
                { label: 'Photo Gallery', path: '/gallery' },
                { label: 'Blog & Updates', path: '/blog' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-blue-200 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-5">Our Courses</h4>
            <ul className="space-y-2.5">
              {[
                'NEET Foundation (2 Year)',
                'NEET Repeater Batch',
                'JEE Main & Advanced',
                'JEE Crash Course',
                'TNPSC Group 1 & 2',
                'TNPSC Group 4',
                'Online Test Series',
              ].map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-blue-200 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <span className="text-blue-200 text-sm">
                  No. 45, Omalur Main Road,<br />
                  Near Bus Stand, Salem – 636 001,<br />
                  Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <div className="text-sm">
                  <p className="text-blue-200">+91 98765 43210</p>
                  <p className="text-blue-200">+91 87654 32109</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <div className="text-sm">
                  <p className="text-blue-200">info@excelacademy.in</p>
                  <p className="text-blue-200">admissions@excelacademy.in</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-blue-300 mb-2 font-medium">Office Hours</p>
              <p className="text-sm text-blue-200">Mon – Sat: 8:00 AM – 8:00 PM</p>
              <p className="text-sm text-blue-200">Sunday: 9:00 AM – 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} Excel Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-sm">
            <Link to="/admission" className="text-blue-300 hover:text-orange-400 transition-colors">
              Admission Enquiry
            </Link>
            <span className="text-blue-700">|</span>
            <Link to="/contact" className="text-blue-300 hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-blue-700">|</span>
            <Link to="/contact" className="text-blue-300 hover:text-orange-400 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
