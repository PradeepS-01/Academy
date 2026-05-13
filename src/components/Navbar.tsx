import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Results', path: '/results' },
  { label: 'Gallery', path: '/gallery' },
  {
    label: 'More',
    children: [
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'Blog & Updates', path: '/blog' },
      { label: 'Test Series', path: '/test-series' },
      { label: 'Study Materials', path: '/study-materials' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="bg-blue-900 text-white text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>📞 +91 98765 43210</span>
            <span>✉️ info@excelacademy.in</span>
            <span>📍 Salem, Tamil Nadu</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Mon–Sat: 8:00 AM – 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className={`text-xl font-bold font-poppins ${scrolled ? 'text-blue-900' : 'text-white'}`}>
                Excel <span className="text-orange-500">Academy</span>
              </span>
              <p className={`text-xs leading-none ${scrolled ? 'text-gray-500' : 'text-blue-200'}`}>
                Premier Coaching Centre
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      scrolled
                        ? 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-slide-down">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 ${
                            isActive(child.path) ? 'text-blue-700 bg-blue-50' : 'text-gray-700'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path!}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path!)
                      ? scrolled
                        ? 'text-blue-700 bg-blue-50'
                        : 'text-white bg-white/20'
                      : scrolled
                      ? 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/student-dashboard"
              className={`text-sm font-semibold px-4 py-2 rounded-lg border transition-all duration-200 ${
                scrolled
                  ? 'border-blue-700 text-blue-700 hover:bg-blue-50'
                  : 'border-white text-white hover:bg-white/10'
              }`}
            >
              Student Login
            </Link>
            <Link to="/admission" className="btn-primary text-sm px-5 py-2.5">
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">{link.label}</p>
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className={`block px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive(child.path) ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path!}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path!) ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 flex flex-col gap-2">
              <Link to="/student-dashboard" className="btn-secondary w-full justify-center text-sm py-2.5">
                Student Login
              </Link>
              <Link to="/admission" className="btn-primary w-full justify-center text-sm py-2.5">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
