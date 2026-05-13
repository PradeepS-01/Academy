import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { GalleryImage } from '../lib/types';

const defaultImages: GalleryImage[] = [
  { id: '1', title: 'Smart Classroom Session', image_url: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Classroom', description: 'Interactive learning environment' },
  { id: '2', title: 'Science Laboratory', image_url: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Lab', description: 'Well-equipped science lab' },
  { id: '3', title: 'Student Workshop', image_url: 'https://images.pexels.com/photos/5212600/pexels-photo-5212600.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Event', description: 'Interactive workshop session' },
  { id: '4', title: 'Campus Library', image_url: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Infrastructure', description: 'Digital library facility' },
  { id: '5', title: 'Graduation Ceremony', image_url: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Event', description: 'Student success celebration' },
  { id: '6', title: 'Computer Center', image_url: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Infrastructure', description: 'Advanced computer lab' },
];

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    supabase.from('gallery_images').select('*').eq('is_active', true)
      .then(({ data }) => setImages(data && data.length ? data : defaultImages));
  }, []);

  const categories = ['All', ...new Set(images.map(i => i.category))];
  const filtered = filter === 'All' ? images : images.filter(i => i.category === filter);

  return (
    <div className="pt-20">
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-4">
            Photo Gallery
          </h1>
          <p className="text-blue-100">A glimpse into life at Excel Academy</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${filter === cat ? 'bg-blue-700 text-white' : 'bg-white text-gray-600'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <div key={img.id} className="group overflow-hidden rounded-xl cursor-pointer animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }} onClick={() => setSelected(img)}>
                <img src={img.image_url} alt={img.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">{img.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10">
              <X className="w-6 h-6" />
            </button>
            <img src={selected.image_url} alt={selected.title} className="w-full h-96 object-cover" />
            <div className="p-6">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3">{selected.category}</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selected.title}</h3>
              <p className="text-gray-600">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
