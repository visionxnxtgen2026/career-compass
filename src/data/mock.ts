// Mock data — replace with API later
import {
  Globe, Code2, Smartphone, Cloud, Database, Brain, Shield, Infinity as InfinityIcon,
  Palette, CheckCircle2, BarChart3, Gamepad2, Landmark, Briefcase, GraduationCap,
  Heart, Scale, MoreHorizontal,
} from "lucide-react";

export const POPULAR_STATES = [
  "Tamil Nadu", "Maharashtra", "Karnataka", "Kerala", "Gujarat",
  "Andhra Pradesh", "Telangana", "Uttar Pradesh", "West Bengal",
];

export const DISTRICTS: Record<string, string[]> = {
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem", "Tirunelveli", "Erode", "Vellore", "Thoothukudi"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubli"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
  "Kerala": ["Kochi", "Trivandrum", "Calicut"],
};

export type Stream = {
  id: string;
  name: string;
  description: string;
  examples: string[];
  color: "primary" | "success" | "info" | "orange" | "pink" | "teal" | "warning" | "muted";
  icon: any;
};

export const STREAMS: Stream[] = [
  { id: "govt", name: "Government Exams", description: "Prepare for various government exams and build a stable career.", examples: ["TNPSC, TNUSRB, TRB", "SSC, RRB, IBPS", "Defence, State Govt Exams"], color: "primary", icon: Landmark },
  { id: "it", name: "IT & Software", description: "Build a career in IT industry with in-demand tech skills.", examples: ["Engineering, BCA, MCA", "Data Science, AI/ML", "Web Development, Cyber Security"], color: "success", icon: Code2 },
  { id: "banking", name: "Banking & Finance", description: "Start your career in banking, finance and related sectors.", examples: ["Bank Exams (SBI, IBPS, RBI)", "Financial Analyst", "Accounting, Investment Banking"], color: "info", icon: Briefcase },
  { id: "mba", name: "MBA & Management", description: "Pursue management studies and build leadership skills.", examples: ["MBA, PGDM", "Marketing, HR, Finance", "Business Analytics"], color: "orange", icon: GraduationCap },
  { id: "arts", name: "Arts & Humanities", description: "Explore creative fields and build a career in arts & humanities.", examples: ["BA, MA, BFA", "Journalism, Psychology", "Design, Fine Arts, Literature"], color: "pink", icon: Palette },
  { id: "medical", name: "Medical & Health", description: "Join the healthcare sector and serve the community.", examples: ["MBBS, BDS, BAMS", "Nursing, Pharmacy", "Paramedical, Physiotherapy"], color: "teal", icon: Heart },
  { id: "law", name: "Law & Legal Studies", description: "Build a career in law, legal services and related fields.", examples: ["LLB, BA LLB, BCom LLB", "Legal Advisor", "Corporate Law, Civil Services"], color: "warning", icon: Scale },
  { id: "other", name: "Other Streams", description: "Explore other streams and career opportunities.", examples: ["Teaching, Education", "Aviation, Hospitality", "Agriculture, Defence & More"], color: "muted", icon: MoreHorizontal },
];

export type Role = {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: any;
  color: "primary" | "success" | "info" | "orange" | "pink" | "teal" | "warning";
  demand: "High Demand" | "Medium Demand";
  skills: string[];
  education: { degree: string; alt: string };
  subjects: string[];
  whoCan: string[];
  companies: string[];
  salary: string;
  growth: string;
  opportunities: string;
};

export const ROLES_BY_STREAM: Record<string, Role[]> = {};

export const IT_ROLES: Role[] = [
  { id: "software-developer", name: "Software Developer", description: "Build software applications and solve real-world problems.", category: "IT & Software", icon: Code2, color: "success", demand: "High Demand",
    skills: ["DSA", "Java", "Python", "Git", "SQL", "System Design"], education: { degree: "B.E / B.Tech in CSE", alt: "BCA, B.Sc (CS/IT), MCA" },
    subjects: ["Data Structures", "OOPs Concepts", "Database Management", "Operating Systems", "Algorithms"],
    whoCan: ["12th Pass (Maths Preferred)", "Diploma / Degree Students", "Career Switchers"],
    companies: ["TCS", "Infosys", "Accenture", "Wipro", "Cognizant", "Zoho"], salary: "₹4 LPA – ₹15 LPA", growth: "Excellent", opportunities: "High" },
  { id: "web-developer", name: "Web Developer", description: "Design and develop websites and web applications.", category: "IT & Software", icon: Globe, color: "info", demand: "High Demand",
    skills: ["HTML", "CSS", "JavaScript", "React / Angular / Vue", "Bootstrap / Tailwind", "Node.js", "Express.js", "MongoDB / MySQL", "Git & GitHub", "REST APIs", "Problem Solving", "Responsive Design"],
    education: { degree: "B.E / B.Tech in Computer Science or related streams (IT, ECE, etc.)", alt: "BCA, B.Sc (CS/IT), Diploma in Computer Engineering" },
    subjects: ["Data Structures", "OOPs Concepts", "Database Management", "Computer Networks", "Operating Systems"],
    whoCan: ["12th Pass (Any Stream with Maths Preferred)", "Diploma / Degree Students", "Career Switchers"],
    companies: ["TCS", "Infosys", "Accenture", "Wipro", "Cognizant", "Zoho"], salary: "₹3.5 LPA – ₹12 LPA", growth: "Excellent", opportunities: "High" },
  { id: "mobile-app-developer", name: "Mobile App Developer", description: "Create mobile applications for Android and iOS.", category: "IT & Software", icon: Smartphone, color: "primary", demand: "High Demand",
    skills: ["Kotlin", "Swift", "Flutter", "React Native", "Firebase"], education: { degree: "B.E / B.Tech in CSE", alt: "BCA, MCA" },
    subjects: ["Mobile Computing", "OOPs", "UI/UX", "Networking"],
    whoCan: ["12th Pass", "Degree Students", "Career Switchers"],
    companies: ["Swiggy", "Zomato", "Paytm", "Flipkart"], salary: "₹4 LPA – ₹16 LPA", growth: "Excellent", opportunities: "High" },
  { id: "cloud-engineer", name: "Cloud Engineer", description: "Work with cloud platforms and cloud infrastructure.", category: "IT & Software", icon: Cloud, color: "info", demand: "High Demand",
    skills: ["AWS", "Azure", "GCP", "Linux", "Docker", "Kubernetes"], education: { degree: "B.E / B.Tech", alt: "BCA, MCA" },
    subjects: ["Networking", "OS", "Distributed Systems"], whoCan: ["Degree Students", "Working Professionals"],
    companies: ["AWS", "Microsoft", "Google", "TCS"], salary: "₹6 LPA – ₹25 LPA", growth: "Excellent", opportunities: "High" },
  { id: "data-scientist", name: "Data Scientist", description: "Analyze data and build models to solve business problems.", category: "IT & Software", icon: Database, color: "warning", demand: "High Demand",
    skills: ["Python", "Statistics", "Pandas", "ML", "SQL"], education: { degree: "B.E / B.Tech / B.Sc Statistics", alt: "MCA, M.Sc DS" },
    subjects: ["Statistics", "Linear Algebra", "ML", "Databases"], whoCan: ["Degree Students", "Career Switchers"],
    companies: ["Fractal", "Mu Sigma", "TCS", "Google"], salary: "₹6 LPA – ₹25 LPA", growth: "Excellent", opportunities: "High" },
  { id: "ai-ml-engineer", name: "AI / ML Engineer", description: "Build intelligent systems using machine learning.", category: "IT & Software", icon: Brain, color: "pink", demand: "High Demand",
    skills: ["Python", "PyTorch", "TensorFlow", "Math", "MLOps"], education: { degree: "B.E / B.Tech CSE", alt: "M.Sc, MCA" },
    subjects: ["Linear Algebra", "Probability", "ML", "DL"], whoCan: ["Degree Students", "Researchers"],
    companies: ["Google", "Microsoft", "OpenAI", "Adobe"], salary: "₹8 LPA – ₹30 LPA", growth: "Excellent", opportunities: "High" },
  { id: "cyber-security", name: "Cyber Security Analyst", description: "Protect systems and data from cyber threats.", category: "IT & Software", icon: Shield, color: "info", demand: "High Demand",
    skills: ["Networking", "Linux", "Security Tools", "Ethical Hacking"], education: { degree: "B.E / B.Tech", alt: "BCA, MCA" },
    subjects: ["Networks", "Cryptography", "OS"], whoCan: ["Degree Students", "Career Switchers"],
    companies: ["Deloitte", "EY", "Wipro", "PwC"], salary: "₹5 LPA – ₹20 LPA", growth: "Excellent", opportunities: "High" },
  { id: "devops", name: "DevOps Engineer", description: "Automate, deploy and manage applications efficiently.", category: "IT & Software", icon: InfinityIcon, color: "primary", demand: "High Demand",
    skills: ["Linux", "Docker", "Kubernetes", "CI/CD", "AWS"], education: { degree: "B.E / B.Tech", alt: "BCA, MCA" },
    subjects: ["OS", "Networking", "Cloud"], whoCan: ["Degree Students", "Working Professionals"],
    companies: ["TCS", "Infosys", "Amazon"], salary: "₹6 LPA – ₹22 LPA", growth: "Excellent", opportunities: "High" },
  { id: "ui-ux", name: "UI/UX Designer", description: "Design user-friendly interfaces and great user experiences.", category: "IT & Software", icon: Palette, color: "primary", demand: "High Demand",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping"], education: { degree: "B.Des / Any Degree", alt: "Diploma in Design" },
    subjects: ["Design Theory", "HCI"], whoCan: ["Any Stream", "Career Switchers"],
    companies: ["Razorpay", "Swiggy", "Adobe"], salary: "₹4 LPA – ₹18 LPA", growth: "Great", opportunities: "High" },
  { id: "qa", name: "QA Engineer", description: "Test software and ensure quality and performance.", category: "IT & Software", icon: CheckCircle2, color: "success", demand: "High Demand",
    skills: ["Manual Testing", "Selenium", "API Testing", "JIRA"], education: { degree: "B.E / B.Tech", alt: "BCA, B.Sc" },
    subjects: ["SDLC", "Testing"], whoCan: ["Degree Students", "Career Switchers"],
    companies: ["TCS", "Wipro", "Cognizant"], salary: "₹3 LPA – ₹12 LPA", growth: "Good", opportunities: "High" },
  { id: "data-analyst", name: "Data Analyst", description: "Turn data into insights and support business decisions.", category: "IT & Software", icon: BarChart3, color: "info", demand: "High Demand",
    skills: ["SQL", "Excel", "Python", "Power BI", "Tableau"], education: { degree: "Any Degree (Maths preferred)", alt: "BCA, B.Com" },
    subjects: ["Statistics", "Databases"], whoCan: ["Degree Students", "Career Switchers"],
    companies: ["Deloitte", "EY", "KPMG"], salary: "₹4 LPA – ₹14 LPA", growth: "Excellent", opportunities: "High" },
  { id: "game-developer", name: "Game Developer", description: "Design and develop engaging games and simulations.", category: "IT & Software", icon: Gamepad2, color: "pink", demand: "High Demand",
    skills: ["Unity", "Unreal", "C#", "C++", "3D Math"], education: { degree: "B.E / B.Tech CSE", alt: "Game Design Diploma" },
    subjects: ["Graphics", "Math", "Physics"], whoCan: ["Degree Students", "Hobbyists"],
    companies: ["Ubisoft", "EA", "Nazara"], salary: "₹4 LPA – ₹18 LPA", growth: "Great", opportunities: "Medium" },
];

export type RoadmapStep = {
  step: number;
  title: string;
  duration: string;
  description: string;
  learn: string[];
  resources: { name: string; type: string }[];
  outcomes: string[];
};

export const WEB_DEV_ROADMAP: RoadmapStep[] = [
  { step: 1, title: "Foundation", duration: "1 – 2 Months", description: "Learn the basic building blocks of web development.",
    learn: ["HTML – Structure of Web", "CSS – Styling & Layout", "JavaScript – Basics & DOM", "Mini Project – Build a basic website"],
    resources: [{ name: "freeCodeCamp (HTML, CSS)", type: "Course" }, { name: "W3Schools", type: "Docs" }, { name: "YouTube – Traversy Media", type: "Video" }],
    outcomes: ["Build and publish your first website", "Understand how web works"] },
  { step: 2, title: "Front-end Development", duration: "2 – 3 Months", description: "Build interactive and responsive websites.",
    learn: ["Advanced CSS, Flexbox, Grid", "JavaScript (ES6+)", "Responsive Design", "Mini Project – Portfolio Website"],
    resources: [{ name: "MDN Web Docs", type: "Docs" }, { name: "CSS Tricks", type: "Blog" }, { name: "Frontend Mentor", type: "Practice" }],
    outcomes: ["Create responsive web pages", "Build a personal portfolio website"] },
  { step: 3, title: "JavaScript Framework", duration: "2 – 3 Months", description: "Use frameworks to build modern web apps.",
    learn: ["React.js (Recommended) or Angular / Vue.js", "Component Based Development", "State Management (Basics)", "Mini Project – To-do / Dashboard App"],
    resources: [{ name: "React Official Docs", type: "Docs" }, { name: "YouTube – Code with Harry", type: "Video" }, { name: "Scrimba", type: "Course" }],
    outcomes: ["Build dynamic web applications", "Understand components and reusability"] },
  { step: 4, title: "Back-end Development", duration: "2 – 3 Months", description: "Build server-side logic and APIs.",
    learn: ["Node.js & Express.js", "REST APIs", "Authentication (JWT)", "Mini Project – Blog / Notes App"],
    resources: [{ name: "Node.js Docs", type: "Docs" }, { name: "YouTube – Fireship", type: "Video" }, { name: "freeCodeCamp (Backend)", type: "Course" }],
    outcomes: ["Create APIs", "Handle user authentication", "Connect front-end with back-end"] },
  { step: 5, title: "Database & Tools", duration: "1 – 2 Months", description: "Store data and deploy your applications.",
    learn: ["MongoDB / MySQL", "CRUD Operations", "Git & GitHub", "Deploy Your Project (Vercel / Netlify)"],
    resources: [{ name: "MongoDB Docs", type: "Docs" }, { name: "GitHub Docs", type: "Docs" }, { name: "Netlify / Vercel Docs", type: "Docs" }],
    outcomes: ["Manage and store data", "Deploy live projects", "Use Git for version control"] },
];

export const HOW_TO_STUDY = [
  { title: "Daily Routine (2 – 3 hrs)", points: ["1 hr learning new concept", "1 hr coding practice", "30 min revision"] },
  { title: "Weekly Goal", points: ["Build 1 mini project", "Write notes / blog", "Solve coding problems"] },
  { title: "Monthly Goal", points: ["Complete 1 module fully", "Publish project on GitHub", "Update LinkedIn / Portfolio"] },
  { title: "Pro Tips", points: ["Don't just watch — code along", "Build real projects, not tutorials only", "Be consistent — 1 hr daily > 10 hr once a week"] },
];

export type Job = {
  id: string;
  company: string;
  role: string;
  location: string;
  experience: string;
  type: "Full Time" | "Internship" | "Part Time" | "Remote";
  category: "MNCs" | "Startups" | "Small Companies" | "Work From Home" | "Internships";
  applyBy: string;
  salary?: string;
  logo: string;
};

export const JOBS: Job[] = [
  { id: "j1", company: "Infosys", role: "System Engineer", location: "Salem, Tamil Nadu", experience: "0-2 Yrs", type: "Full Time", category: "MNCs", applyBy: "31 May", salary: "₹4 – 6 LPA", logo: "IN" },
  { id: "j2", company: "Zoho Corp", role: "Software Developer", location: "Salem, Tamil Nadu", experience: "1-3 Yrs", type: "Full Time", category: "MNCs", applyBy: "25 May", salary: "₹6 – 9 LPA", logo: "ZO" },
  { id: "j3", company: "HCL Technologies", role: "Graduate Engineer Trainee", location: "Salem, Tamil Nadu", experience: "0-1 Yrs", type: "Full Time", category: "MNCs", applyBy: "28 May", salary: "₹3.5 – 5 LPA", logo: "HC" },
  { id: "j4", company: "Exotel", role: "Associate Support Engineer", location: "Salem, Tamil Nadu", experience: "0-2 Yrs", type: "Full Time", category: "Startups", applyBy: "30 May", salary: "₹4 – 6 LPA", logo: "EX" },
  { id: "j5", company: "Freshworks", role: "Customer Success Intern", location: "Remote", experience: "0-1 Yrs", type: "Internship", category: "Internships", applyBy: "10 Jun", salary: "₹20k/mo", logo: "FR" },
  { id: "j6", company: "Razorpay", role: "Frontend Developer", location: "Remote", experience: "1-3 Yrs", type: "Remote", category: "Work From Home", applyBy: "15 Jun", salary: "₹8 – 14 LPA", logo: "RZ" },
  { id: "j7", company: "Local IT Hub", role: "Junior Web Developer", location: "Coimbatore, Tamil Nadu", experience: "0-1 Yrs", type: "Full Time", category: "Small Companies", applyBy: "20 Jun", salary: "₹2.5 – 4 LPA", logo: "LI" },
  { id: "j8", company: "TCS", role: "Assistant System Engineer", location: "Chennai, Tamil Nadu", experience: "0-2 Yrs", type: "Full Time", category: "MNCs", applyBy: "5 Jun", salary: "₹3.5 LPA", logo: "TC" },
];
