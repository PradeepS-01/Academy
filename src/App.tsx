import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Faculty from './pages/Faculty';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Results from './pages/Results';
import Blog from './pages/Blog';
import AdmissionEnquiry from './pages/AdmissionEnquiry';
import StudentDashboard from './pages/StudentDashboard';
import TestSeries from './pages/TestSeries';
import StudyMaterials from './pages/StudyMaterials';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/results" element={<Results />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admission" element={<AdmissionEnquiry />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/test-series" element={<TestSeries />} />
        <Route path="/study-materials" element={<StudyMaterials />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
