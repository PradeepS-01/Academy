import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Star, Users, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Faculty as FacultyType } from '../lib/types';

const defaultFaculty: FacultyType[] = [
  { id: '1', name: 'Dr. Rajesh Kumar', designation: 'Head of Faculty & Director', subject: 'Physics', experience_years: 18, qualification: 'PhD Physics, IIT Madras', bio: 'Former IIT Madras researcher and visiting professor. Pioneered the Excel Academy methodology that has produced 850+ NEET and 320+ IIT selections.', image_url: '', achievements: ['IIT Madras Alumni', '500+ IIT selections', 'Best Teacher Award 2022', 'Author of 3 Physics textbooks'], is_active: true },
  { id: '2', name: 'Mrs. Sumathi Devi', designation: 'Senior Faculty – Biology', subject: 'Biology', experience_years: 15, qualification: 'MSc Botany, MPhil', bio: 'Passionate biology educator with a gift for making complex life science concepts accessible and memorable for NEET aspirants.', image_url: '', achievements: ['NEET topper mentor', '1000+ MBBS selections', 'TN Best Teacher 2023', 'Biology Olympiad Coach'], is_active: true },
  { id: '3', name: 'Mr. Venkatesh Iyer', designation: 'Senior Faculty – Chemistry', subject: 'Chemistry', experience_years: 12, qualification: 'MSc Chemistry, BEd', bio: 'Expert in Organic and Physical Chemistry with innovative teaching methods. Known for making the hardest reactions simple to understand.', image_url: '', achievements: ['Chemistry Olympiad Coach', '200+ NIT selections', 'Published Research Author', 'JEE Chemistry specialist'], is_active: true },
  { id: '4', name: 'Mrs. Priya Suresh', designation: 'Faculty – Mathematics', subject: 'Mathematics', experience_years: 10, qualification: 'MSc Mathematics, IIT Bombay', bio: 'IIT Bombay graduate specializing in JEE Mathematics. Her problem-solving approach transforms even weak students into confident mathematicians.', image_url: '', achievements: ['IIT Bombay Alumni', 'JEE specialist', '150+ IIT selections', 'Ranked Top 10 JEE Math tutors in TN'], is_active: true },
  { id: '5', name: 'Mr. Karthik Murugan', designation: 'TNPSC Expert', subject: 'General Studies', experience_years: 14, qualification: 'MA History, MA Political Science', bio: 'Former TNPSC Group 1 officer who now coaches aspirants with unparalleled insider knowledge, strategy, and motivation.', image_url: '', achievements: ['TNPSC Group 1 cleared', '300+ selections', 'TN History Expert', 'Current Affairs specialist'], is_active: true },
  { id: '6', name: 'Dr. Anitha Krishnan', designation: 'Faculty – Chemistry (NEET)', subject: 'Inorganic Chemistry', experience_years: 8, qualification: 'PhD Chemistry, Anna University', bio: 'Anna University doctorate with specialized expertise in NEET chemistry. Known for her structured notes and comprehensive revision sessions.', image_url: '', achievements: ['Anna University PhD', 'NEET Chemistry topper producer', 'Published 5 research papers', '200+ MBBS selections'], is_active: true },
];

const subjectColors: Record<string, string> = {
  Physics: 'bg-blue-100 text-blue-700',
  Biology: 'bg-green-100 text-green-700',
  Chemistry: 'bg-purple-100 text-purple-700',
  Mathematics: 'bg-orange-100 text-orange-700',
  'General Studies': 'bg-teal-100 text-teal-700',
  'Inorganic Chemistry': 'bg-pink-100 text-pink-700',
};

const avatarColors = [
  'from-blue-600 to-blue-800',
  'from-green-600 to-green-800',
  'from-orange-500 to-orange-700',
  'from-purple-600 to-purple-800',
  'from-teal-600 to-teal-800',
  'from-rose-600 to-rose-800',
];

export default function Faculty() {
  const [faculty, setFaculty] = useState<FacultyType[]>([]);
  const [selected, setSelected] = useState<FacultyType | null>(null);

  useEffect(() => {
    supabase.from('faculty').select('*').eq('is_active', true)
      .then(({ data }) => { setFaculty(data && data.length ? data : defaultFaculty); });
  }, []);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Our Team</span>
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-4">
            Learn from the <span className="text-orange-400">Best Minds</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            IIT alumni, PhD scholars, and TNPSC toppers — our faculty brings real experience to every classroom
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80 text-sm">
            {[`${faculty.length || 20}+ Expert Faculty`, 'Avg 12+ Years Experience', 'IIT/University Alumni', 'Active Researchers'].map((s) => (
              <span key={s} className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-orange-400 fill-orange-400" />{s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(faculty.length ? faculty : defaultFaculty).map((f, i) => (
              <div
                key={f.id}
                className="card p-6 cursor-pointer hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => setSelected(f)}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-16 h-16 bg-gradient-to-br ${avatarColors[i % avatarColors.length]} rounded-2xl flex items-center justify-center text-white text-2xl font-bold font-poppins shrink-0`}>
                    {f.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-poppins leading-tight">{f.name}</h3>
                    <p className="text-blue-700 text-sm font-medium">{f.designation}</p>
                    <span className={`inline-block mt-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${subjectColors[f.subject] || 'bg-gray-100 text-gray-600'}`}>
                      {f.subject}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">{f.bio}</p>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-5">
                  <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" />{f.qualification}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">{f.experience_years}+ Years</span>
                  </div>
                  <button className="text-sm text-blue-700 hover:text-orange-500 font-semibold transition-colors">
                    View Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hero-bg p-8 rounded-t-3xl text-white">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-3xl font-bold">
                  {selected.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-poppins">{selected.name}</h2>
                  <p className="text-blue-200">{selected.designation}</p>
                  <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mt-2">
                    {selected.subject}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-blue-800">{selected.experience_years}+</p>
                  <p className="text-xs text-gray-500">Years Experience</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <p className="text-sm font-bold text-orange-700">{selected.qualification}</p>
                  <p className="text-xs text-gray-500">Qualification</p>
                </div>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">About</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{selected.bio}</p>
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-orange-500" /> Key Achievements
              </h4>
              <ul className="space-y-2">
                {selected.achievements.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-gray-600">
                    <Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <Link to="/admission" className="btn-primary flex-1 justify-center text-sm py-2.5">
                  Learn Under {selected.name.split(' ')[0]}
                </Link>
                <button onClick={() => setSelected(null)} className="px-5 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join Faculty */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card p-10 text-center border-2 border-dashed border-blue-200">
            <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-3">Join Our Teaching Family</h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Are you an experienced educator passionate about competitive exam coaching? We're always looking for exceptional talent.
            </p>
            <Link to="/contact" className="btn-secondary">
              Apply as Faculty <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
