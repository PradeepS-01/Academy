import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function AdmissionEnquiry() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.course) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      await supabase.from('enquiries').insert([form]);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', course: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-20">
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-poppins text-white mb-4">Admission <span className="text-orange-400">Enquiry</span></h1>
          <p className="text-blue-100">Join Excel Academy today. Fill this form and our team will contact you soon.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <div className="card p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="input-field" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="input-field" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="input-field" placeholder="+91 9876543210" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interested Course *</label>
                <select required value={form.course} onChange={e => setForm({ ...form, course: e.target.value })} className="input-field">
                  <option value="">Select a course</option>
                  <option value="NEET Foundation">NEET Foundation</option>
                  <option value="JEE Main & Advanced">JEE Main & Advanced</option>
                  <option value="TNPSC Group 1 & 2">TNPSC Group 1 & 2</option>
                  <option value="NEET Repeater">NEET Repeater Batch</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="input-field" placeholder="Tell us more about your goals..." rows={4}></textarea>
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-3 bg-green-50 text-green-700 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Thank you! We'll contact you soon.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 bg-red-50 text-red-700 p-4 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Please fill all required fields.</span>
                </div>
              )}

              <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center">
                {status === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
