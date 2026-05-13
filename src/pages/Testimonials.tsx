import { useEffect, useState } from 'react';
import { Star, Award, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Testimonial } from '../lib/types';

const defaultTestimonials: Testimonial[] = [
  { id: '1', student_name: 'Priya Lakshmi', course: 'NEET', rank: 'AIR 156', score: '698/720', content: 'Excel Academy prepared me exceptionally well. Secured MBBS at Madras Medical College!', rating: 5, image_url: '', year: 2024, is_featured: true },
  { id: '2', student_name: 'Arjun Selvam', course: 'JEE Advanced', rank: 'AIR 1205', score: '285/360', content: 'The structured approach and mock tests helped me crack JEE. Now at IIT Madras!', rating: 5, image_url: '', year: 2024, is_featured: true },
  { id: '3', student_name: 'Kavitha Rajan', course: 'TNPSC Group 1', rank: 'Rank 45', score: '', content: 'Comprehensive TNPSC coaching with current affairs updates made all the difference!', rating: 5, image_url: '', year: 2023, is_featured: true },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    supabase.from('testimonials').select('*').order('year', { ascending: false })
      .then(({ data }) => setTestimonials(data && data.length ? data : defaultTestimonials));
  }, []);

  const filtered = filter === 'All' ? testimonials : testimonials.filter(t => t.course === filter);

  return (
    <div className="pt-20">
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-4">
            Success Stories from Our <span className="text-orange-400">Students</span>
          </h1>
          <p className="text-blue-100 text-lg">Real students, real achievements, real transformations</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {['All', 'NEET', 'JEE Advanced', 'TNPSC Group 1'].map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${filter === cat ? 'bg-blue-700 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((t, i) => (
              <div key={t.id} className="card p-8 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {t.student_name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{t.student_name}</h3>
                    <p className="text-blue-700 text-sm">{t.course}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic mb-5">"{t.content}"</p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-bold text-sm">{t.rank}</span>
                    <span className="text-gray-400 text-xs">{t.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
