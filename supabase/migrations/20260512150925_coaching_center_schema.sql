/*
  # Coaching Center - Full Schema

  ## Tables Created:
  1. `enquiries` - Admission enquiry form submissions
  2. `testimonials` - Student testimonials
  3. `courses` - Available courses
  4. `faculty` - Faculty members
  5. `blog_posts` - Blog/update posts
  6. `gallery_images` - Gallery images
  7. `achievements` - Results and achievements
  8. `test_series` - Online test series
  9. `study_materials` - Downloadable study materials

  ## Security:
  - RLS enabled on all tables
  - Public read access for display tables
  - Authenticated write access for admin tables
*/

-- Enquiries table
CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  course text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit enquiry"
  ON enquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view enquiries"
  ON enquiries FOR SELECT
  TO authenticated
  USING (true);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  course text NOT NULL,
  rank text DEFAULT '',
  score text DEFAULT '',
  content text NOT NULL,
  rating integer DEFAULT 5,
  image_url text DEFAULT '',
  year integer DEFAULT 2024,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  duration text NOT NULL,
  fee numeric DEFAULT 0,
  batch_size integer DEFAULT 30,
  is_active boolean DEFAULT true,
  features text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view courses"
  ON courses FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Faculty table
CREATE TABLE IF NOT EXISTS faculty (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  designation text NOT NULL,
  subject text NOT NULL,
  experience_years integer DEFAULT 0,
  qualification text NOT NULL,
  bio text DEFAULT '',
  image_url text DEFAULT '',
  achievements text[] DEFAULT '{}',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE faculty ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view faculty"
  ON faculty FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text DEFAULT '',
  category text DEFAULT 'general',
  image_url text DEFAULT '',
  author text DEFAULT 'Admin',
  is_published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- Gallery images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image_url text NOT NULL,
  category text DEFAULT 'general',
  description text DEFAULT '',
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view gallery"
  ON gallery_images FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Achievements table
CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  exam text NOT NULL,
  rank text DEFAULT '',
  score text DEFAULT '',
  year integer DEFAULT 2024,
  course text NOT NULL,
  image_url text DEFAULT '',
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view achievements"
  ON achievements FOR SELECT
  TO anon, authenticated
  USING (true);

-- Test series table
CREATE TABLE IF NOT EXISTS test_series (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  exam_type text NOT NULL,
  total_questions integer DEFAULT 0,
  duration_minutes integer DEFAULT 60,
  difficulty text DEFAULT 'medium',
  is_free boolean DEFAULT false,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE test_series ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view test series"
  ON test_series FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Study materials table
CREATE TABLE IF NOT EXISTS study_materials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subject text NOT NULL,
  exam_type text NOT NULL,
  file_url text NOT NULL,
  file_size text DEFAULT '',
  description text DEFAULT '',
  is_free boolean DEFAULT false,
  download_count integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE study_materials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view study materials"
  ON study_materials FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Seed data for testimonials
INSERT INTO testimonials (student_name, course, rank, score, content, rating, year, is_featured) VALUES
('Priya Lakshmi', 'NEET', 'AIR 342', '680/720', 'Excel Academy prepared me exceptionally well for NEET. The faculty''s dedication and study material quality is unmatched. I secured MBBS seat at Madras Medical College!', 5, 2024, true),
('Arjun Selvam', 'JEE Advanced', 'AIR 1205', '285/360', 'The structured approach and regular mock tests at Excel Academy helped me crack JEE Advanced. Now studying at IIT Madras!', 5, 2024, true),
('Kavitha Rajan', 'TNPSC Group 1', 'Rank 45', '–', 'The comprehensive TNPSC coaching with current affairs updates and practice tests made all the difference. Cleared Group 1 in first attempt!', 5, 2023, true),
('Surya Prakash', 'NEET', 'AIR 892', '665/720', 'Joining Excel Academy was the best decision. The biology and chemistry faculty are brilliant. Secured seat in Government Medical College!', 5, 2024, false),
('Meena Devi', 'TNPSC Group 2', 'Rank 12', '–', 'Excel Academy''s Tamil medium TNPSC coaching is outstanding. The study materials cover every aspect of the syllabus.', 5, 2023, false);

-- Seed data for courses
INSERT INTO courses (name, category, description, duration, fee, batch_size, features) VALUES
('NEET Foundation', 'Medical', 'Comprehensive NEET preparation covering Physics, Chemistry, and Biology with regular mock tests', '2 Years', 85000, 35, ARRAY['Daily Classes', 'Weekly Tests', 'Study Material', 'Doubt Sessions', 'Online Portal']),
('JEE Main & Advanced', 'Engineering', 'Complete JEE preparation with advanced problem solving techniques and IIT faculty mentorship', '2 Years', 90000, 30, ARRAY['Expert Faculty', 'Topic-wise Tests', 'PYQ Practice', 'Revision Classes', 'Scholarship Program']),
('TNPSC Group 1 & 2', 'Government Jobs', 'Focused TNPSC coaching covering all subjects with current affairs and Tamil Nadu history', '1 Year', 45000, 50, ARRAY['Tamil & English Medium', 'Current Affairs Updates', 'Interview Coaching', 'Monthly Tests', 'Online Study Material']),
('NEET Repeater Batch', 'Medical', 'Intensive one-year program for NEET repeaters with personalized attention and advanced coaching', '1 Year', 75000, 25, ARRAY['Small Batch', 'Personalized Mentoring', 'Daily Tests', 'Counseling Support', 'Previous Year Analysis']),
('JEE Crash Course', 'Engineering', '3-month intensive JEE preparation for quick revision and exam strategy', '3 Months', 25000, 40, ARRAY['Rapid Revision', 'Important Topics', 'Mock Tests', 'Strategy Sessions', 'Expert Tips']),
('TNPSC Group 4', 'Government Jobs', 'Structured TNPSC Group 4 preparation for VAO, Junior Assistant posts', '6 Months', 20000, 60, ARRAY['Basic to Advanced', 'Tamil GK Focus', 'Aptitude Training', 'Mock Interviews', 'Job Updates']);

-- Seed data for faculty
INSERT INTO faculty (name, designation, subject, experience_years, qualification, bio, achievements) VALUES
('Dr. Rajesh Kumar', 'Head of Faculty', 'Physics', 18, 'PhD Physics, IIT Madras', 'Former IIT Madras researcher with 18 years of teaching excellence. Specialist in JEE and NEET Physics.', ARRAY['IIT Madras Alumni', '500+ IIT selections', 'Best Teacher Award 2022']),
('Mrs. Sumathi Devi', 'Senior Faculty', 'Biology', 15, 'MSc Botany, MPhil', 'Passionate biology educator with expertise in making complex concepts simple for NEET aspirants.', ARRAY['NEET topper mentor', '1000+ MBBS selections', 'Tamil Nadu Best Teacher 2023']),
('Mr. Venkatesh Iyer', 'Senior Faculty', 'Chemistry', 12, 'MSc Chemistry, BEd', 'Expert in Organic Chemistry with innovative teaching methods and real-world applications.', ARRAY['Chemistry Olympiad Coach', '200+ NIT selections', 'Published Research Author']),
('Mrs. Priya Suresh', 'Faculty', 'Mathematics', 10, 'MSc Mathematics, IIT Bombay', 'IIT Bombay alumni specializing in JEE Mathematics with a track record of producing toppers.', ARRAY['IIT Bombay Alumni', 'JEE specialist', '150+ IIT selections']),
('Mr. Karthik Murugan', 'TNPSC Expert', 'General Studies', 14, 'MA History, MA Political Science', 'TNPSC Group 1 cleared officer who now coaches aspirants with insider knowledge and strategy.', ARRAY['TNPSC Group 1 cleared', '300+ selections', 'Tamil Nadu History Expert']);

-- Seed data for achievements
INSERT INTO achievements (student_name, exam, rank, score, year, course, is_featured) VALUES
('A. Priya Dharshini', 'NEET 2024', 'AIR 156', '698/720', 2024, 'NEET', true),
('K. Surya Narayanan', 'JEE Advanced 2024', 'AIR 445', '298/360', 2024, 'JEE Advanced', true),
('M. Kavya Sree', 'NEET 2024', 'AIR 289', '693/720', 2024, 'NEET', true),
('P. Aakash Kumar', 'JEE Advanced 2024', 'AIR 892', '276/360', 2024, 'JEE Advanced', false),
('S. Lakshmi Priya', 'TNPSC Group 1 2023', 'Rank 23', '–', 2023, 'TNPSC Group 1', false),
('R. Dinesh Babu', 'NEET 2023', 'AIR 501', '677/720', 2023, 'NEET', true),
('V. Anitha Kumari', 'TNPSC Group 2 2023', 'Rank 8', '–', 2023, 'TNPSC Group 2', false),
('N. Vignesh Raj', 'JEE Main 2024', '99.2 percentile', '285/300', 2024, 'JEE Main', false);
