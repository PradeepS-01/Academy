import { BarChart3, BookOpen, Clock, Target, TrendingUp, Award, LogOut } from 'lucide-react';

export default function StudentDashboard() {
  const stats = [
    { label: 'Tests Completed', value: 24, color: 'bg-blue-100 text-blue-700', icon: BarChart3 },
    { label: 'Accuracy Rate', value: '78%', color: 'bg-green-100 text-green-700', icon: TrendingUp },
    { label: 'Study Hours', value: '156', color: 'bg-orange-100 text-orange-700', icon: Clock },
    { label: 'Rank (Mocks)', value: 'AIR 342', color: 'bg-purple-100 text-purple-700', icon: Award },
  ];

  return (
    <div className="pt-20 pb-10 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-poppins text-gray-900">Welcome, Priya Lakshmi</h1>
            <p className="text-gray-600 mt-1">NEET Foundation Batch • Enrolled: 15 Jan 2024</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 font-semibold transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map(s => {
            const Icon = s.icon;
            return (
              <div key={s.label} className={`card p-6 border-l-4 border-l-blue-700`}>
                <div className={`${s.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-gray-600 text-sm">{s.label}</p>
                <p className="text-2xl font-bold font-poppins text-gray-900">{s.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-8">
              <h2 className="text-xl font-bold font-poppins text-gray-900 mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-700" /> Test Performance
              </h2>
              <div className="space-y-4">
                {[
                  { name: 'Biology Mock #12', score: 145, total: 200, date: 'May 10, 2024' },
                  { name: 'Chemistry Mock #11', score: 132, total: 200, date: 'May 08, 2024' },
                  { name: 'Physics Mock #10', score: 118, total: 200, date: 'May 05, 2024' },
                ].map((test, i) => (
                  <div key={i} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{test.name}</h3>
                      <span className="text-sm text-gray-500">{test.date}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(test.score / test.total) * 100}%` }}></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{test.score}/{test.total} ({Math.round((test.score / test.total) * 100)}%)</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h2 className="text-xl font-bold font-poppins text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" /> Assignments & Topics
              </h2>
              <div className="space-y-3">
                {[
                  { title: 'Cell Biology – Revision', due: 'May 15', status: 'pending' },
                  { title: 'Organic Chemistry – Completed', due: 'May 12', status: 'completed' },
                  { title: 'Physics Numericals – In Progress', due: 'May 18', status: 'inProgress' },
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg">
                    <div className={`w-2 h-8 rounded-full ${a.status === 'completed' ? 'bg-green-500' : a.status === 'inProgress' ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{a.title}</p>
                      <p className="text-xs text-gray-500">Due: {a.due}</p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${a.status === 'completed' ? 'bg-green-100 text-green-700' : a.status === 'inProgress' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-600'}`}>
                      {a.status === 'completed' ? 'Done' : a.status === 'inProgress' ? 'In Progress' : 'Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-700" /> Study Goals
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Attendance</span>
                    <span className="text-sm font-bold text-blue-700">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Test Completion</span>
                    <span className="text-sm font-bold text-green-700">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Notes Written</span>
                    <span className="text-sm font-bold text-orange-700">156 pages</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
              <h3 className="font-bold mb-3">Fee Status</h3>
              <p className="text-sm opacity-90 mb-3">Annual Fee: ₹85,000</p>
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                  <span>Paid</span>
                  <span>₹42,500</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <p className="text-sm font-semibold">Due: ₹42,500 (By June 30)</p>
              <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors text-sm">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
