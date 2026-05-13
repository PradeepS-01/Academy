import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Users, Clock, BookOpen, Star, Filter } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Course } from '../lib/types';

const categories = ['All', 'Medical', 'Engineering', 'Government Jobs'];

const defaultCourses: Course[] = [
  { id: '1', name: 'NEET Foundation', category: 'Medical', description: 'Comprehensive 2-year program for NEET preparation.', duration: '2 Years', fee: 85000, batch_size: 35, is_active: true, features: ['Daily Classes', 'Weekly Tests', 'Study Material', 'Doubt Sessions', 'Online Portal'] },
  { id: '2', name: 'JEE Main & Advanced', category: 'Engineering', description: 'Complete JEE preparation for IIT/NIT admission.', duration: '2 Years', fee: 90000, batch_size: 30, is_active: true, features: ['Expert Faculty', 'Topic Tests', 'PYQ Practice', 'Revision', 'Scholarship'] },
  { id: '3', name: 'TNPSC Group 1 & 2', category: 'Government Jobs', description: 'Focused TNPSC coaching for Group 1 and 2 exams.', duration: '1 Year', fee: 45000, batch_size: 50, is_active: true, features: ['Tamil Medium', 'Current Affairs', 'Interview Coaching', 'Monthly Tests', 'Online Material'] },
  { id: '4', name: 'NEET Repeater Batch', category: 'Medical', description: 'Intensive 1-year for NEET repeaters with personalized attention.', duration: '1 Year', fee: 75000, batch_size: 25, is_active: true, features: ['Small Batch', 'Personalized Mentoring', 'Daily Tests', 'Counseling', 'PYQ Analysis'] },
  { id: '5', name: 'JEE Crash Course', category: 'Engineering', description: '3-month intensive for quick revision and exam strategy.', duration: '3 Months', fee: 25000, batch_size: 40, is_active: true, features: ['Rapid Revision', 'Important Topics', 'Mock Tests', 'Strategy Sessions', 'Expert Tips'] },
  { id: '6', name: 'TNPSC Group 4', category: 'Government Jobs', description: 'Structured preparation for VAO and Junior Assistant posts.', duration: '6 Months', fee: 20000, batch_size: 60, is_active: true, features: ['Basic to Advanced', 'Tamil GK', 'Aptitude Training', 'Mock Interviews', 'Job Updates'] },
];

const categoryColors: Record<string, string> = {
  Medical: 'bg-blue-100 text-blue-700',
  Engineering: 'bg-orange-100 text-orange-700',
  'Government Jobs': 'bg-emerald-100 text-emerald-700',
};

const categoryGradients: Record<string, string> = {
  Medical: 'from-blue-600 to-blue-800',
  Engineering: 'from-orange-500 to-orange-700',
  'Government Jobs': 'from-emerald-600 to-emerald-800',
};

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selected, setSelected] = useState('All');

  useEffect(() => {
    supabase.from('courses').select('*').eq('is_active', true)
      .then(({ data }) => { setCourses(data && data.length ? data : defaultCourses); });
  }, []);

  const filtered = selected === 'All' ? courses : courses.filter((c) => c.category === selected);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Our Programs</span>
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-4">
            Courses That <span className="text-orange-400">Shape Futures</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            From NEET to JEE to TNPSC — we have the right program for every aspiration
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 overflow-x-auto">
          <Filter className="w-4 h-4 text-gray-500 shrink-0" />
          <div className="flex gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  selected === cat
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-gray-400 text-sm ml-auto shrink-0">{filtered.length} programs</span>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((course, i) => (
              <div key={course.id} className="card overflow-hidden flex flex-col animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                {/* Card header */}
                <div className={`bg-gradient-to-br ${categoryGradients[course.category] || 'from-blue-600 to-blue-800'} p-6 text-white`}>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-75">{course.category}</span>
                  <h3 className="text-xl font-bold font-poppins mt-1 mb-2">{course.name}</h3>
                  <div className="flex items-center gap-4 text-sm opacity-90">
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{course.duration}</span>
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />Max {course.batch_size} students</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{course.description}</p>

                  <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600" /> Course Highlights
                  </h4>
                  <ul className="space-y-2 mb-6 flex-1">
                    {course.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Fee */}
                  <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">Annual Fee</p>
                      <p className="text-2xl font-bold text-gray-900 font-poppins">
                        ₹{course.fee.toLocaleString('en-IN')}
                      </p>
                      <p className="text-xs text-gray-400">EMI available</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link to="/admission" className="btn-primary text-sm px-5 py-2.5">
                        Enroll Now
                      </Link>
                      <Link to="/contact" className="text-center text-sm text-blue-700 hover:text-orange-500 font-medium transition-colors">
                        Know More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Compare</span>
            <h2 className="section-heading">Which Course Is Right for You?</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-md">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">NEET Foundation</th>
                  <th className="px-6 py-4 text-center font-semibold">JEE Main & Advanced</th>
                  <th className="px-6 py-4 text-center font-semibold">TNPSC Groups</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Duration', '2 Years', '2 Years', '6–12 Months'],
                  ['Medium', 'English', 'English', 'Tamil & English'],
                  ['Batch Size', 'Max 35', 'Max 30', 'Max 50–60'],
                  ['Online Portal', '✓', '✓', '✓'],
                  ['Hostel', '✓', '✓', '✓'],
                  ['Mock Tests', 'Weekly', 'Weekly', 'Monthly'],
                  ['Interview Prep', 'Medical counseling', 'JoSAA Counseling', 'Interview Coaching'],
                ].map(([feature, ...vals], i) => (
                  <tr key={feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-700">{feature}</td>
                    {vals.map((v, j) => (
                      <td key={j} className="px-6 py-4 text-center text-gray-600">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonial snippet */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-xl text-gray-700 italic mb-6">
            "Excel Academy's NEET program was comprehensive, structured, and incredibly supportive. I cleared NEET with AIR 342 in my first attempt!"
          </blockquote>
          <p className="font-bold text-gray-900">Priya Lakshmi</p>
          <p className="text-blue-700 text-sm">NEET 2024 — AIR 342 — MBBS at Madras Medical College</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-poppins text-white mb-4">Not Sure Which Course to Choose?</h2>
          <p className="text-orange-100 text-lg mb-8">Talk to our academic counselors — free guidance, no obligations</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admission" className="bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors shadow-lg inline-flex items-center gap-2">
              Get Free Counseling <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
