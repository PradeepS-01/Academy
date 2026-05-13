import { PlayCircle, Lock, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TestSeries() {
  const tests = [
    { id: 1, name: 'Full Length Mock #5', type: 'NEET', duration: 180, questions: 180, difficulty: 'Hard', status: 'free', price: 0 },
    { id: 2, name: 'Chapter-wise: Biology', type: 'NEET', duration: 60, questions: 50, difficulty: 'Medium', status: 'free', price: 0 },
    { id: 3, name: 'JEE Advanced Mock #3', type: 'JEE', duration: 180, questions: 162, difficulty: 'Hard', status: 'premium', price: 499 },
  ];

  return (
    <div className="pt-20">
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-poppins text-white mb-4">Online <span className="text-orange-400">Test Series</span></h1>
          <p className="text-blue-100">Practice with real exam-pattern tests and track your progress</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test, i) => (
              <div key={test.id} className="card p-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${test.type === 'NEET' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                      {test.type}
                    </span>
                  </div>
                  {test.status === 'premium' && <Lock className="w-4 h-4 text-gray-400" />}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">{test.name}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p className="flex items-center gap-2"><Clock className="w-4 h-4" />{test.duration} minutes</p>
                  <p className="flex items-center gap-2"><Zap className="w-4 h-4" />{test.questions} questions</p>
                  <p className="flex items-center gap-2"><span className={`font-semibold ${test.difficulty === 'Hard' ? 'text-red-600' : 'text-orange-600'}`}>{test.difficulty}</span> Difficulty</p>
                </div>
                {test.status === 'free' ? (
                  <button className="btn-primary w-full justify-center text-sm py-2.5">
                    <PlayCircle className="w-4 h-4" /> Start Test
                  </button>
                ) : (
                  <button className="btn-secondary w-full justify-center text-sm py-2.5">
                    <Lock className="w-4 h-4" /> Unlock – ₹{test.price}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
