import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-poppins text-white mb-4">Get in <span className="text-orange-400">Touch</span></h1>
          <p className="text-blue-100">We're here to help with your academic journey</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold font-poppins mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Address</h3>
                  <p className="text-gray-600 text-sm">No. 45, Omalur Main Road, Near Bus Stand, Salem – 636 001, Tamil Nadu</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600 text-sm">+91 98765 43210</p>
                  <p className="text-gray-600 text-sm">+91 87654 32109</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600 text-sm">info@excelacademy.in</p>
                  <p className="text-gray-600 text-sm">admissions@excelacademy.in</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Office Hours</h3>
                  <p className="text-gray-600 text-sm">Mon–Sat: 8:00 AM – 8:00 PM</p>
                  <p className="text-gray-600 text-sm">Sunday: 9:00 AM – 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold font-poppins mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="input-field" />
              <input type="email" placeholder="Your Email" className="input-field" />
              <input type="tel" placeholder="Phone Number" className="input-field" />
              <textarea placeholder="Your Message" rows={4} className="input-field"></textarea>
              <button type="submit" className="btn-primary w-full justify-center">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold font-poppins mb-4">Ready to Enroll?</h2>
          <p className="mb-8">Join thousands of successful students. Apply for admission now!</p>
          <Link to="/admission" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors inline-block">
            Start Your Application
          </Link>
        </div>
      </section>
    </div>
  );
}
