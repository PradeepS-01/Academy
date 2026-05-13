import { FileText, Download, Lock } from 'lucide-react';

export default function StudyMaterials() {
  const materials = [
    { id: 1, title: 'NEET Biology Notes – Genetics', subject: 'Biology', exam: 'NEET', size: '12 MB', free: true },
    { id: 2, title: 'JEE Math Formula Sheet', subject: 'Mathematics', exam: 'JEE', size: '5 MB', free: true },
    { id: 3, title: 'TNPSC GK Handbook 2024', subject: 'General Knowledge', exam: 'TNPSC', size: '25 MB', free: false },
  ];

  return (
    <div className="pt-20">
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-poppins text-white mb-4">Study <span className="text-orange-400">Materials</span></h1>
          <p className="text-blue-100">Download quality study materials prepared by our expert faculty</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4">
            {materials.map((m, i) => (
              <div key={m.id} className="card p-6 flex items-center justify-between animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{m.title}</h3>
                    <p className="text-gray-500 text-sm">{m.subject} • {m.exam} • {m.size}</p>
                  </div>
                </div>
                <button className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all ${m.free ? 'btn-primary text-sm' : 'border border-orange-500 text-orange-600 hover:bg-orange-50'}`}>
                  {m.free ? (
                    <>
                      <Download className="w-4 h-4" /> Download Free
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" /> Premium
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
