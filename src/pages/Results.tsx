import { useState } from 'react';
import { Trophy, Award, TrendingUp } from 'lucide-react';
import type { Achievement } from '../lib/types';

const defaultAchievements: Achievement[] = [
  { id: '1', student_name: 'A. Priya Dharshini', exam: 'NEET 2024', rank: 'AIR 156', score: '698/720', year: 2024, course: 'NEET', image_url: '', is_featured: true },
  { id: '2', student_name: 'K. Surya Narayanan', exam: 'JEE Advanced 2024', rank: 'AIR 445', score: '298/360', year: 2024, course: 'JEE Advanced', image_url: '', is_featured: true },
  { id: '3', student_name: 'M. Kavya Sree', exam: 'NEET 2024', rank: 'AIR 289', score: '693/720', year: 2024, course: 'NEET', image_url: '', is_featured: true },
];

export default function Results() {
  const [achievements] = useState<Achievement[]>(defaultAchievements);
  const [filter, setFilter] = useState<number>(new Date().getFullYear());

  const years = [2024, 2023, 2022];
  const filtered = achievements.filter(a => a.year === filter);
  const stats = {
    neet: filtered.filter(a => a.course === 'NEET').length,
    jee: filtered.filter(a => a.course.includes('JEE')).length,
    tnpsc: filtered.filter(a => a.course.includes('TNPSC')).length,
  };

  return (
    <div className="pt-20">
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-4">
            Results & <span className="text-orange-400">Achievements</span>
          </h1>
          <p className="text-blue-100">Celebrating excellence and success</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { label: 'NEET Selections', value: stats.neet, icon: Trophy },
              { label: 'JEE Selections', value: stats.jee, icon: Award },
              { label: 'TNPSC Cleared', value: stats.tnpsc, icon: TrendingUp },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="card p-6 text-center">
                  <Icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-gray-900 font-poppins">{s.value}+</p>
                  <p className="text-gray-600 text-sm">{s.label}</p>
                </div>
              );
            })}
          </div>

          <div className="flex gap-2 justify-center mb-10">
            {years.map(y => (
              <button key={y} onClick={() => setFilter(y)} className={`px-6 py-2 rounded-lg font-semibold transition-all ${filter === y ? 'bg-blue-700 text-white' : 'bg-white border border-gray-200'}`}>
                {y}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((a, i) => (
              <div key={a.id} className="card p-6 flex items-center gap-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                  {a.student_name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{a.student_name}</h3>
                  <p className="text-gray-600 text-sm">{a.exam} • {a.course}</p>
                </div>
                <div className="text-right">
                  <p className="text-orange-600 font-bold text-lg">{a.rank}</p>
                  <p className="text-gray-500 text-xs">{a.score || 'Qualified'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
