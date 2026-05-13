import { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../lib/types';

const defaultPosts: BlogPost[] = [
  { id: '1', title: '10 Tips to Ace NEET Biology in Last 30 Days', slug: 'neet-biology-tips', content: 'Master NEET biology with proven strategies...', excerpt: 'Essential tips for last-minute NEET biology preparation', category: 'NEET', image_url: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600', author: 'Dr. Sumathi Devi', published_at: '2024-05-10' },
  { id: '2', title: 'JEE Advanced 2024: Exam Pattern & Strategy', slug: 'jee-advanced-2024', content: 'Complete guide to JEE Advanced pattern...', excerpt: 'Understanding the new JEE Advanced format and effective preparation', category: 'JEE', image_url: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600', author: 'Mr. Rajesh Kumar', published_at: '2024-05-05' },
  { id: '3', title: 'TNPSC Group 1 Current Affairs: May 2024 Update', slug: 'tnpsc-current-affairs', content: 'Latest current affairs relevant to TNPSC...', excerpt: 'Essential current affairs updates for TNPSC aspirants', category: 'TNPSC', image_url: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600', author: 'Mr. Karthik Murugan', published_at: '2024-05-01' },
];

export default function Blog() {
  const [posts] = useState<BlogPost[]>(defaultPosts);
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(posts.map(p => p.category))];
  const filtered = category === 'All' ? posts : posts.filter(p => p.category === category);

  return (
    <div className="pt-20">
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-poppins text-white mb-4">Blog & <span className="text-orange-400">Updates</span></h1>
          <p className="text-blue-100">Tips, strategies, and latest exam updates</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setCategory(cat)} className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${category === cat ? 'bg-blue-700 text-white' : 'bg-white border'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <div key={post.id} className="card overflow-hidden hover:shadow-xl transition-shadow animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <img src={post.image_url} alt={post.title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3">{post.category}</span>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(post.published_at).toLocaleDateString()}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                  </div>
                  <button className="text-blue-700 hover:text-orange-500 font-semibold text-sm flex items-center gap-1 transition-colors">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
