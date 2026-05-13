import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, ChevronLeft, ChevronRight, Trophy, Users, BookOpen,
  Award, CheckCircle, Phone, Play, TrendingUp, Clock, Zap, Target,
  MessageCircle, GraduationCap, Building2, Shield
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Testimonial, Achievement } from '../lib/types';

const stats = [
  { value: '5000+', label: 'Students Enrolled', icon: Users },
  { value: '850+', label: 'NEET Selections', icon: Trophy },
  { value: '320+', label: 'IIT/NIT Selections', icon: Award },
  { value: '18+', label: 'Years of Excellence', icon: Star },
];

const courses = [
  {
    title: 'NEET Coaching',
    icon: '🩺',
    color: 'from-blue-600 to-blue-800',
    badge: 'Most Popular',
    desc: 'MBBS/BDS seat guaranteed prep with expert biology & chemistry faculty.',
    features: ['2-Year Program', 'Daily Practice Tests', '99% Pass Rate'],
  },
  {
    title: 'JEE Main & Advanced',
    icon: '⚙️',
    color: 'from-orange-500 to-orange-700',
    badge: 'IIT Focused',
    desc: 'Crack IIT/NIT with our proven IIT-alumni faculty and rigorous prep.',
    features: ['2-Year Program', 'PYQ Analysis', 'Advanced Problem Sets'],
  },
  {
    title: 'TNPSC Coaching',
    icon: '🏛️',
    color: 'from-emerald-600 to-emerald-800',
    badge: 'Government Jobs',
    desc: 'Comprehensive preparation for all TNPSC groups in Tamil & English medium.',
    features: ['Group 1, 2, 4', 'Tamil Medium', 'Current Affairs'],
  },
  {
    title: 'Foundation Course',
    icon: '📚',
    color: 'from-purple-600 to-purple-800',
    badge: 'Class 8–10',
    desc: 'Build strong fundamentals for competitive exams from the school level.',
    features: ['Class 8, 9, 10', 'Concept Building', 'Olympiad Prep'],
  },
];

const whyUs = [
  { icon: GraduationCap, title: 'Expert Faculty', desc: 'IIT & top university alumni with 10–20 years teaching experience' },
  { icon: Trophy, title: 'Proven Results', desc: 'Consistently top-ranked institute with 850+ NEET selections' },
  { icon: BookOpen, title: 'Quality Material', desc: 'Exclusive study material updated as per latest exam patterns' },
  { icon: Target, title: 'Personalized Attention', desc: 'Small batch sizes ensuring every student gets individual focus' },
  { icon: TrendingUp, title: 'Regular Mock Tests', desc: 'Weekly and monthly mock tests with detailed performance reports' },
  { icon: Zap, title: 'Online Portal', desc: '24/7 online access to recordings, notes, and practice tests' },
  { icon: Shield, title: 'Safe Environment', desc: 'CCTV monitored campus with hostel facility for outstation students' },
  { icon: Building2, title: 'Modern Infrastructure', desc: 'Smart classrooms, well-equipped labs, and digital learning tools' },
];

const googleReviews = [
  { name: 'Ramesh Kumar', rating: 5, review: 'Best coaching in Salem! My son cleared NEET in first attempt with AIR under 500. Faculty is outstanding.', time: '2 months ago' },
  { name: 'Vijaya Lakshmi', rating: 5, review: 'Excel Academy changed my daughter\'s life. The TNPSC faculty is exceptionally knowledgeable. Highly recommended!', time: '3 months ago' },
  { name: 'Suresh Babu', rating: 5, review: 'Value for money. JEE faculty here is IIT-level. My son got NIT Trichy. Excellent environment for studies.', time: '1 month ago' },
  { name: 'Meenakshi S', rating: 5, review: 'Wonderful institute with caring teachers. My daughter\'s confidence improved a lot. Results speak for themselves!', time: '4 months ago' },
];

function CounterCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      className={`text-center p-8 transition-all duration-500 ${visible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-7 h-7 text-orange-400" />
      </div>
      <p className="text-4xl font-bold font-poppins text-white mb-1">{stat.value}</p>
      <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
    </div>
  );
}

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    supabase.from('testimonials').select('*').eq('is_featured', true).limit(6)
      .then(({ data }) => { if (data) setTestimonials(data); });
    supabase.from('achievements').select('*').eq('is_featured', true).limit(6)
      .then(({ data }) => { if (data) setAchievements(data); });
  }, []);

  useEffect(() => {
    if (!testimonials.length) return;
    const timer = setInterval(() => {
      setCurrentTestimonial((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prevTestimonial = () => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () => setCurrentTestimonial((p) => (p + 1) % testimonials.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center relative overflow-hidden pt-28">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Tamil Nadu's #1 Coaching Institute</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white leading-tight mb-6 animate-fade-in-up">
              Crack <span className="text-orange-400">NEET</span>, <span className="text-orange-400">JEE</span>{' '}
              &amp; <span className="text-orange-400">TNPSC</span>{' '}
              <br />with Excel Academy
            </h1>

            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg animate-fade-in-up delay-100">
              Join 5,000+ successful students. Expert faculty, proven methodology, and personalized coaching to turn your dreams into reality.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up delay-200">
              <Link to="/admission" className="btn-primary text-base px-8 py-4">
                Apply for Admission <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white text-base px-8 py-4"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 animate-fade-in-up delay-300">
              {[
                { label: '850+ NEET Selections', color: 'text-orange-400' },
                { label: '320+ IIT/NIT', color: 'text-orange-400' },
                { label: '98% Pass Rate', color: 'text-orange-400' },
              ].map(({ label, color }) => (
                <div key={label} className="flex items-center gap-2">
                  <CheckCircle className={`w-4 h-4 ${color}`} />
                  <span className="text-white/80 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – info cards */}
          <div className="relative hidden lg:block animate-fade-in-right delay-200">
            <img
              src="https://images.pexels.com/photos/5553045/pexels-photo-5553045.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Students studying"
              className="rounded-3xl shadow-2xl w-full object-cover h-[480px]"
            />

            {/* Floating cards */}
            <div className="absolute -left-8 top-10 glass-card rounded-2xl p-4 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">AIR 156</p>
                  <p className="text-blue-200 text-xs">NEET 2024 Topper</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 bottom-16 glass-card rounded-2xl p-4 shadow-xl animate-float delay-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">AIR 445</p>
                  <p className="text-blue-200 text-xs">JEE Advanced 2024</p>
                </div>
              </div>
            </div>

            <div className="absolute left-4 -bottom-6 glass-card rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white/30 flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">+5,000 Students</p>
                  <p className="text-blue-200 text-xs">Trust Excel Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Achievement banner */}
      <section className="bg-orange-500 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white text-sm font-semibold">
            {['🏆 850+ NEET Selections 2024', '🎓 320+ IIT/NIT Selections', '📋 400+ TNPSC Clearances', '⭐ 18 Years of Excellence', '🔥 Results 2024: 98% Pass Rate'].map((item) => (
              <span key={item} className="flex items-center gap-2">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-blue-800">
            {stats.map((stat, i) => (
              <CounterCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Our Programs</span>
            <h2 className="section-heading">Courses We Offer</h2>
            <p className="section-subheading">Comprehensive coaching programs designed to get you into top medical, engineering, and government service roles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <div
                key={course.title}
                className={`card p-0 overflow-hidden group animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${course.color} p-6 text-white relative overflow-hidden`}>
                  <span className="text-4xl mb-3 block">{course.icon}</span>
                  <h3 className="text-lg font-bold font-poppins mb-1">{course.title}</h3>
                  <span className="inline-block bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {course.badge}
                  </span>
                  <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full" />
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {course.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/courses"
                    className="flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-orange-500 transition-colors group"
                  >
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/courses" className="btn-secondary">
              View All Courses <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Why Excel Academy</span>
            <h2 className="section-heading">What Makes Us Different</h2>
            <p className="section-subheading">18 years of dedicated coaching have shaped us into Tamil Nadu's most trusted coaching institute</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-700 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 font-poppins">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Achievers */}
      {achievements.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="section-tag">Hall of Fame</span>
              <h2 className="section-heading">Our Top Achievers 2024</h2>
              <p className="section-subheading">Celebrating the brilliant minds who made their dreams come true with Excel Academy</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((a, i) => (
                <div
                  key={a.id}
                  className="card p-6 border border-orange-100 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      {a.student_name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 font-poppins">{a.student_name}</h4>
                      <p className="text-blue-700 text-sm font-medium">{a.exam}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-orange-500 font-bold text-lg">{a.rank}</p>
                      {a.score && <p className="text-gray-500 text-xs">{a.score}</p>}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{a.course}</span>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">{a.year}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/results" className="btn-primary">
                View All Results <Trophy className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Video + CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Play className="w-4 h-4" /> Watch Our Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6">
            Begin Your Journey to<br />
            <span className="text-orange-400">Medical, Engineering & Government Service</span>
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Join Excel Academy today and get access to expert faculty, quality study material, regular mock tests, and a supportive learning environment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admission" className="btn-primary px-8 py-4 text-base">
              Start Your Application <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline-white px-8 py-4 text-base">
              <Phone className="w-5 h-5" /> Call +91 98765 43210
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="section-tag">Student Stories</span>
              <h2 className="section-heading">What Our Students Say</h2>
              <p className="section-subheading">Real success stories from real students who transformed their lives with Excel Academy</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="testimonial-card rounded-3xl p-8 md:p-12">
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonials[currentTestimonial]?.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial]?.content}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentTestimonial]?.student_name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 font-poppins">{testimonials[currentTestimonial]?.student_name}</p>
                    <p className="text-blue-700 text-sm font-medium">
                      {testimonials[currentTestimonial]?.course} — {testimonials[currentTestimonial]?.rank}
                    </p>
                    <p className="text-gray-500 text-xs">{testimonials[currentTestimonial]?.year}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentTestimonial ? 'bg-blue-700 w-8' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="text-center mt-6">
                <Link to="/testimonials" className="text-blue-700 hover:text-orange-500 text-sm font-semibold transition-colors">
                  Read All Stories →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Google Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Google Reviews</span>
            <h2 className="section-heading">Trusted by Parents & Students</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9</span>
              <span className="text-gray-500 text-sm">(420+ Reviews on Google)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {googleReviews.map((review, i) => (
              <div key={i} className="card p-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.time}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{review.review}</p>
                <div className="mt-4 flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-xs text-gray-400">Google Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-white" />
            <span className="text-white font-bold text-lg">Admissions Open for 2024–25 Batch!</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
            Don't Miss Your Chance – Limited Seats Available
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Get early bird discount, free study material, and scholarship for meritorious students. Apply now before seats fill up.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admission" className="bg-white text-orange-600 font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors shadow-lg inline-flex items-center gap-2">
              Register Now — Free! <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919876543210"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" /> +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
