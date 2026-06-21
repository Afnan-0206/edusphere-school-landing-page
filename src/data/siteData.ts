import type { LucideIcon } from 'lucide-react'
import {
  Atom,
  BookMarked,
  Bus,
  Camera,
  CheckCircle2,
  Computer,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Languages,
  Library,
  Microscope,
  MonitorPlay,
  Palette,
  School,
  ShieldCheck,
  Sparkles,
  Trophy,
  UsersRound,
} from 'lucide-react'

export type IconItem = { title: string; description: string; icon: LucideIcon }

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const programs: IconItem[] = [
  { icon: Sparkles, title: 'Nursery & Kindergarten', description: 'A joyful start built around play, discovery, and foundational skills.' },
  { icon: BookMarked, title: 'Primary School', description: 'Strong fundamentals, curiosity, and a lifelong love for learning.' },
  { icon: UsersRound, title: 'Middle School', description: 'Guided learning that builds confidence, character, and independence.' },
  { icon: GraduationCap, title: 'High School', description: 'Future-ready academics with focused mentoring and career awareness.' },
  { icon: Computer, title: 'Computer Education', description: 'Practical digital skills for a technology-led world.' },
  { icon: Languages, title: 'Spoken English & Communication', description: 'Clear expression and communication skills for every child.' },
]

export const facilities: IconItem[] = [
  { icon: MonitorPlay, title: 'Smart Classrooms', description: 'Interactive lessons that make learning engaging.' },
  { icon: Computer, title: 'Computer Lab', description: 'Hands-on access to essential technology.' },
  { icon: Library, title: 'Library', description: 'A calm space for reading and discovery.' },
  { icon: Microscope, title: 'Science Lab', description: 'Safe, guided experiments that bring science alive.' },
  { icon: Trophy, title: 'Sports Area', description: 'Room to move, play, and build team spirit.' },
  { icon: Bus, title: 'Safe Transport', description: 'Reliable pick-up and drop-off with care.' },
  { icon: ShieldCheck, title: 'CCTV Security', description: 'Thoughtful campus safety at every step.' },
  { icon: School, title: 'Clean Campus', description: 'A welcoming, well-maintained place to learn.' },
]

export const schoolPhotos = {
  hero: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600',
  about: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200',
}

export const galleryItems = [
  { title: 'Classroom Activity', label: 'Learning together', icon: Palette, image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400', alt: 'Students learning together in a bright classroom' },
  { title: 'Computer Lab', label: 'Future-ready skills', icon: Computer, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1100', alt: 'Students learning with computers' },
  { title: 'Sports Day', label: 'Growing through play', icon: Trophy, image: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=1100', alt: 'Children enjoying outdoor sport' },
  { title: 'School Function', label: 'Celebrating talent', icon: Camera, image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1100', alt: 'Children performing on stage' },
  { title: 'Library', label: 'A world of stories', icon: Library, image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1100', alt: 'A welcoming school library' },
  { title: 'Science Activity', label: 'Learning by doing', icon: Atom, image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1100', alt: 'Students exploring in a science laboratory' },
]

export const testimonials = [
  { quote: 'EduSphere School has helped my child become more confident and disciplined. The teachers are supportive and the school environment is very good.', name: 'Ramesh Kumar', role: 'Parent', initials: 'RK' },
  { quote: 'I appreciate the regular updates and the personal care each child receives. My daughter loves going to school every morning.', name: 'Priya Sharma', role: 'Parent', initials: 'PS' },
  { quote: 'The balance of academics, activities, and values is exactly what we wanted for our son. It feels like a real community.', name: 'Ayesha Khan', role: 'Parent', initials: 'AK' },
]

export const whyChooseUs = [
  'Experienced and caring teachers',
  'Modern learning environment',
  'Regular parent communication',
  'Focus on discipline and values',
  'Individual student attention',
  'Safe and supportive campus',
]

export const admissionSteps = [
  { title: 'Submit Enquiry', description: 'Tell us a little about your child and the class you are considering.' },
  { title: 'Visit School', description: 'Meet our team and see the learning environment in person.' },
  { title: 'Document Verification', description: 'Our admissions team will guide you through the simple checklist.' },
  { title: 'Admission Confirmation', description: 'Welcome to the EduSphere family and begin the next chapter.' },
]

export const faqItems = [
  { question: 'What classes are available?', answer: 'We offer learning programs from Nursery through Class 10, along with computer education and communication-skills support.' },
  { question: 'How can I apply for admission?', answer: 'Start with the enquiry form on this page. Our admissions team will contact you to arrange a visit and guide you through the next steps.' },
  { question: 'Does the school provide transport?', answer: 'Yes. We offer safe and reliable transport support. Please contact our team to check route availability for your area.' },
  { question: 'Are there computer classes?', answer: 'Yes. Students receive age-appropriate computer education in our dedicated computer lab.' },
  { question: 'How can parents contact the school?', answer: 'You can call us, send a WhatsApp message, email our team, or visit the school during office hours from Monday to Saturday.' },
]

export const schoolValues = [
  { icon: GraduationCap, title: 'Quality Education', description: 'Thoughtful teaching that helps children understand, not just memorise.' },
  { icon: HeartHandshake, title: 'Personal Attention', description: 'Every learner is seen, supported, and encouraged to do their best.' },
  { icon: Landmark, title: 'Value-Based Learning', description: 'Strong values and good habits that extend beyond the classroom.' },
]

export { CheckCircle2 }
