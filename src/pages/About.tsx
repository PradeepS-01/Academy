import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, BookOpen, Target, Star } from 'lucide-react';

const milestones = [
  { year: '2005', event: 'Excel Academy founded in Salem by Dr. Rajesh Kumar with 50 students' },
  { year: '2008', event: 'Expanded to JEE coaching; first batch produces 12 IIT selections' },
  { year: '2012', event: 'Launched TNPSC division; Salem branch inaugurated' },
  { year: '2015', event: 'Reached 500+ NEET selections milestone; awarded Best Coaching Centre TN' },
  { year: '2018', event: 'Opened new campus with smart classrooms and digital labs' },
  { year: '2020', event: 'Launched online learning portal during pandemic; 2000+ students enrolled' },
  { year: '2023', event: 'Crossed 5000+ total student enrollment; 850+ NEET selections in one year' },
  { year: '2024', event: 'Ranked #1 Coaching Institute in Tamil Nadu by EduRank India' },
];

const values = [
  { icon: Target, title: 'Excellence', desc: 'We strive for academic excellence in everything we do' },
  { icon: Users, title: 'Student-First', desc: 'Every decision revolves around student success and well-being' },
  { icon: BookOpen, title: 'Integrity', desc: 'Transparent communication, honest guidance, ethical coaching' },
  { icon: Award, title: 'Innovation', desc: 'Continuously updating methods to match evolving exam patterns' },
];

const achievements = [
  { number: '5,000+', label: 'Total Students' },
  { number: '850+', label: 'NEET Selections (2024)' },
  { number: '320+', label: 'IIT/NIT Selections' },
  { number: '400+', label: 'TNPSC Clearances' },
  { number: '18+', label: 'Years Experience' },
  { number: '4.9★', label: 'Google Rating' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            About Excel Academy
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-4">
            18 Years of Academic <span className="text-orange-400">Excellence</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Tamil Nadu's most trusted coaching institute for NEET, JEE, and TNPSC — shaping futures since 2005
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-gray-100">
            {achievements.map((a) => (
              <div key={a.label} className="py-8 text-center">
                <p className="text-3xl font-bold font-poppins text-blue-800">{a.number}</p>
                <p className="text-gray-500 text-sm mt-1">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-left">
            <span className="section-tag">Our Story</span>
            <h2 className="section-heading mb-6">Built on a Dream to Transform Lives</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Excel Academy was founded in 2005 by Dr. Rajesh Kumar, an IIT Madras alumnus, with a singular vision: to provide world-class competitive exam coaching to students of Tamil Nadu, especially those from tier-2 and tier-3 cities who lacked access to quality education.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Starting with just 50 students in a small classroom in Salem, Excel Academy has grown into Tamil Nadu's premier coaching institute, with over 5,000 students enrolled across NEET, JEE, and TNPSC programs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our success is built on three pillars: exceptional faculty, rigorous study material, and a nurturing environment that brings out the best in every student. We don't just coach — we mentor, guide, and transform.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['IIT-alumni faculty', 'Updated study material', 'Personalized mentoring', 'Digital learning tools', 'Hostel facilities', '24/7 online portal'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in-right">
            <img
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Excel Academy campus"
              className="rounded-3xl shadow-2xl w-full h-[480px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold font-poppins">#1</p>
              <p className="text-sm font-medium opacity-90">Coaching Institute</p>
              <p className="text-sm opacity-75">Tamil Nadu 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8 border-l-4 border-blue-700">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, high-quality coaching that empowers every student — regardless of their background — to achieve their academic aspirations and secure seats in top medical colleges, engineering institutes, and government service roles.
              </p>
            </div>
            <div className="card p-8 border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be India's most student-centric coaching institute, known not just for academic results but for the holistic development of students — instilling values, building confidence, and creating future leaders who contribute positively to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">What We Stand For</span>
            <h2 className="section-heading">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 border border-blue-100 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-16 h-16 bg-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 font-poppins mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-heading">Milestones & Achievements</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`card p-5 inline-block max-w-sm animate-fade-in-up`} style={{ animationDelay: `${i * 0.1}s` }}>
                      <span className="text-orange-500 font-bold text-sm">{m.year}</span>
                      <p className="text-gray-700 text-sm mt-1">{m.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-8 h-8 bg-blue-700 rounded-full border-4 border-white shadow-md items-center justify-center shrink-0 z-10">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Campus & Facilities</span>
            <h2 className="section-heading">World-Class Infrastructure</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Smart Classrooms', desc: '45 smart classrooms with interactive digital boards and HD projectors' },
              { img: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Science Labs', desc: 'State-of-the-art physics, chemistry, and biology laboratories' },
              { img: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Digital Library', desc: '50,000+ resources including books, journals, and digital content' },
              { img: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Computer Center', desc: '150-seat computer center for online tests and digital learning' },
              { img: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Hostel Facility', desc: 'Comfortable hostel with mess facility for outstation students' },
              { img: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Sports & Recreation', desc: 'Indoor games, sports area, and meditation room for student well-being' },
            ].map((f, i) => (
              <div key={f.title} className="card overflow-hidden group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="overflow-hidden h-48">
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 font-poppins mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-800 to-blue-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-poppins text-white mb-4">Ready to Join Our Family?</h2>
          <p className="text-blue-200 mb-8 text-lg">Take the first step towards your dream career with Tamil Nadu's #1 coaching institute</p>
          <Link to="/admission" className="btn-primary text-base px-8 py-4">
            Apply for Admission <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
