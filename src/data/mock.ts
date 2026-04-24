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

const mk = (id: string, name: string, description: string, category: string, icon: any, color: Role["color"], demand: Role["demand"], skills: string[], degree: string, alt: string, subjects: string[], whoCan: string[], companies: string[], salary: string): Role => ({
  id, name, description, category, icon, color, demand, skills,
  education: { degree, alt }, subjects, whoCan, companies, salary,
  growth: "Excellent", opportunities: "High",
});

export const GOVT_ROLES: Role[] = [
  mk("tnpsc-group-1", "TNPSC Group 1", "Become a top-tier officer in the Tamil Nadu state government.", "Government Exams", Landmark, "primary", "High Demand",
    ["General Studies", "Aptitude", "Tamil/English", "Current Affairs", "Essay Writing"],
    "Any Bachelor's Degree", "Degree in Arts, Science, Commerce, Engineering",
    ["Indian Polity", "Indian Economy", "History", "Geography", "Science & Tech"],
    ["Graduates (Any Stream)", "Age 21-32", "Tamil Nadu Residents"],
    ["Tamil Nadu State Government", "Revenue Dept", "Commercial Taxes"], "₹56,100 – ₹2,05,400 / month"),
  mk("tnpsc-group-2", "TNPSC Group 2", "Join state services as Asst. Section Officer or similar roles.", "Government Exams", Landmark, "info", "High Demand",
    ["General Knowledge", "Aptitude", "Tamil", "Current Affairs"],
    "Any Bachelor's Degree", "Any Degree (10+2+3 pattern)",
    ["General Studies", "Tamil Eligibility Test", "Aptitude & Mental Ability"],
    ["Graduates", "Age 21-32"],
    ["TN Secretariat", "TNPSC Departments"], "₹36,400 – ₹1,15,700 / month"),
  mk("tnusrb-police", "TNUSRB Police Constable", "Serve and protect the public as a Tamil Nadu police constable.", "Government Exams", Shield, "warning", "High Demand",
    ["Physical Fitness", "General Knowledge", "Logical Reasoning", "Tamil/English"],
    "10+2 (Higher Secondary)", "Diploma / Any Degree",
    ["GK", "Numerical Aptitude", "Reasoning", "Psychology Test"],
    ["12th Pass", "Age 18-26", "Physically Fit"],
    ["Tamil Nadu Police", "Armed Reserve", "Coastal Security"], "₹20,600 – ₹65,500 / month"),
  mk("trb-teacher", "TRB Teacher (PG/UG)", "Become a government school teacher through TRB exams.", "Government Exams", GraduationCap, "success", "High Demand",
    ["Subject Knowledge", "Pedagogy", "Communication", "Tamil/English"],
    "B.Ed + PG/UG in subject", "B.Ed + Bachelor's/Master's in relevant subject",
    ["Subject Specialization", "Teaching Aptitude", "Educational Psychology"],
    ["B.Ed Holders", "Subject Graduates"],
    ["TN Govt Schools", "Higher Secondary Schools"], "₹35,000 – ₹85,000 / month"),
  mk("ssc-cgl", "SSC CGL", "Central Govt jobs in ministries and departments across India.", "Government Exams", Briefcase, "primary", "High Demand",
    ["Quantitative Aptitude", "English", "Reasoning", "General Awareness"],
    "Any Bachelor's Degree", "Degree from recognized university",
    ["Maths", "English", "Reasoning", "GK"],
    ["Graduates", "Age 18-32"],
    ["Income Tax", "CBI", "Customs", "Audit Dept"], "₹35,400 – ₹1,12,400 / month"),
  mk("upsc-civils", "UPSC Civil Services", "IAS, IPS, IFS — top administrative roles in India.", "Government Exams", Landmark, "warning", "High Demand",
    ["General Studies", "Essay", "Optional Subject", "Current Affairs", "Interview Skills"],
    "Any Bachelor's Degree", "Graduation from any recognized university",
    ["Polity", "Economy", "History", "Geography", "Ethics"],
    ["Graduates", "Age 21-32"],
    ["Govt of India", "IAS / IPS / IFS"], "₹56,100 – ₹2,50,000 / month"),
  mk("ssc-chsl", "SSC CHSL", "Combined Higher Secondary Level — clerks, data entry operators in central govt.", "Government Exams", Briefcase, "info", "High Demand",
    ["English", "Maths", "Reasoning", "General Awareness"],
    "10+2 (Higher Secondary)", "Class 12 Pass",
    ["Maths", "English", "Reasoning", "GK"],
    ["12th Pass", "Age 18-27"],
    ["Income Tax", "Postal Dept", "Ministries"], "₹19,900 – ₹81,100 / month"),
  mk("rrb-ntpc", "RRB NTPC (Railways)", "Non-Technical Popular Categories in Indian Railways.", "Government Exams", Briefcase, "success", "High Demand",
    ["Maths", "Reasoning", "General Awareness", "English"],
    "10+2 / Graduation (post-wise)", "Varies by post",
    ["Maths", "Reasoning", "GK", "GS"],
    ["12th / Graduates", "Age 18-33"],
    ["Indian Railways"], "₹19,900 – ₹35,400 / month"),
  mk("rrb-group-d", "RRB Group D", "Track maintainer, helper and other Group D posts in Railways.", "Government Exams", Briefcase, "warning", "High Demand",
    ["Maths", "Reasoning", "GK", "Physical Fitness"],
    "10th Pass / ITI", "Class 10 / ITI",
    ["Maths", "GS", "Reasoning"],
    ["10th Pass", "Age 18-33", "Physically Fit"],
    ["Indian Railways"], "₹18,000 – ₹56,900 / month"),
  mk("nda", "NDA (Defence)", "National Defence Academy — join Army, Navy or Air Force as an officer.", "Government Exams", Shield, "primary", "High Demand",
    ["Maths", "GAT", "Physical Fitness", "Officer-like Qualities"],
    "10+2 with PCM (for Air Force/Navy)", "12th Pass (Army)",
    ["Maths", "Physics", "GK", "English"],
    ["12th Pass (Unmarried Male/Female)", "Age 16.5-19.5"],
    ["Indian Army", "Navy", "Air Force"], "₹56,100 – ₹1,77,500 / month"),
  mk("cds", "CDS (Combined Defence Services)", "Officer entry to IMA, INA, AFA and OTA.", "Government Exams", Shield, "info", "High Demand",
    ["English", "GK", "Maths", "Officer Qualities"],
    "Bachelor's Degree", "Degree in Engineering / any stream",
    ["English", "GK", "Maths"],
    ["Graduates", "Age 19-25"],
    ["Indian Armed Forces"], "₹56,100 – ₹1,77,500 / month"),
  mk("ctet", "CTET (Central Teacher)", "Central Teacher Eligibility Test for KVS / NVS / central schools.", "Government Exams", GraduationCap, "success", "High Demand",
    ["Pedagogy", "Subject Knowledge", "Child Psychology", "Languages"],
    "B.Ed + Bachelor's", "D.El.Ed for Primary",
    ["Pedagogy", "Maths", "EVS", "Languages"],
    ["B.Ed / D.El.Ed Holders"],
    ["KVS", "NVS", "Central Schools"], "₹35,000 – ₹70,000 / month"),
  mk("state-psc-exams", "State PSC Exams", "State Public Service Commission exams across all states of India.", "Government Exams", Landmark, "orange", "High Medium Demand" as any,
    ["General Studies", "State-specific GK", "Aptitude", "Regional Language"],
    "Any Bachelor's Degree", "Graduation in any stream",
    ["State History", "Polity", "Economy", "Geography"],
    ["Graduates", "Age 21-32"],
    ["Respective State Governments"], "₹40,000 – ₹1,50,000 / month"),
  mk("state-police", "State Police Exams", "Constable & SI recruitment across various state police forces.", "Government Exams", Shield, "warning", "High Demand",
    ["Physical Fitness", "GK", "Reasoning", "Regional Language"],
    "10+2 / Graduation (post-wise)", "12th Pass / Any Degree",
    ["GK", "Reasoning", "Numerical Ability"],
    ["12th / Graduates", "Physically Fit"],
    ["State Police Departments"], "₹21,000 – ₹70,000 / month"),
  mk("isro-scientist", "ISRO Scientist / Engineer", "Join India's space agency as a scientist or engineer.", "Government Exams", Brain, "primary", "High Demand",
    ["Engineering Subjects", "Aptitude", "Research Skills"],
    "B.E / B.Tech (Mech / Elec / CSE)", "M.Tech / M.Sc",
    ["Engineering Core", "Maths", "Science"],
    ["Engineering Graduates"],
    ["ISRO", "DRDO"], "₹56,100 – ₹1,77,500 / month"),
  mk("drdo-scientist", "DRDO Scientist", "Defence Research & Development Organisation scientist roles.", "Government Exams", Brain, "info", "High Demand",
    ["Engineering / Science Subjects", "Research Aptitude"],
    "B.E / B.Tech / M.Sc", "M.Tech / PhD",
    ["Engineering Core", "Maths", "Physics"],
    ["Engineering & Science Graduates"],
    ["DRDO Labs"], "₹56,100 – ₹1,77,500 / month"),
  mk("nabard-grade-a", "NABARD Grade A", "Officer role in National Bank for Agriculture and Rural Development.", "Government Exams", Briefcase, "success", "High Demand",
    ["Economics", "Agriculture", "Rural Development", "English"],
    "Bachelor's Degree (Agri / Eco / Mgmt)", "PG preferred",
    ["Agri & Rural Eco", "ESI", "ARD"],
    ["Graduates (Agri / Eco / Mgmt)", "Age 21-30"],
    ["NABARD"], "₹44,500 – ₹1,00,000 / month"),
  mk("lic-aao", "LIC AAO", "Assistant Administrative Officer at Life Insurance Corporation.", "Government Exams", Briefcase, "info", "High Demand",
    ["Reasoning", "Quant", "English", "GK", "Insurance Awareness"],
    "Bachelor's Degree", "Graduation in any stream",
    ["Quant", "Reasoning", "English", "GK"],
    ["Graduates", "Age 21-30"],
    ["Life Insurance Corporation"], "₹50,000 – ₹95,000 / month"),
];

export const BANKING_ROLES: Role[] = [
  mk("ibps-po", "IBPS PO (Probationary Officer)", "Officer-level role in public sector banks across India.", "Banking & Finance", Briefcase, "info", "High Demand",
    ["Quantitative Aptitude", "Reasoning", "English", "Banking Awareness", "Computer Knowledge"],
    "Any Bachelor's Degree", "Graduation in any discipline",
    ["Maths", "Reasoning", "English", "GK", "Banking"],
    ["Graduates", "Age 20-30"],
    ["PNB", "Canara Bank", "Bank of Baroda", "Union Bank"], "₹52,000 – ₹85,000 / month"),
  mk("sbi-po", "SBI PO", "Probationary Officer at the State Bank of India.", "Banking & Finance", Briefcase, "primary", "High Demand",
    ["Reasoning", "Quant", "English", "Data Analysis", "Banking Awareness"],
    "Any Bachelor's Degree", "Graduation in any stream",
    ["Maths", "English", "Reasoning", "GK"],
    ["Graduates", "Age 21-30"],
    ["State Bank of India"], "₹56,000 – ₹95,000 / month"),
  mk("ibps-clerk", "IBPS Clerk", "Clerical cadre role in nationalised banks.", "Banking & Finance", Briefcase, "success", "High Demand",
    ["Aptitude", "Reasoning", "English", "Computer Awareness"],
    "Any Bachelor's Degree", "Graduation in any stream",
    ["Quant", "Reasoning", "English", "GK"],
    ["Graduates", "Age 20-28"],
    ["PNB", "Canara", "Indian Bank", "BOB"], "₹28,000 – ₹45,000 / month"),
  mk("rbi-grade-b", "RBI Grade B Officer", "Prestigious officer role at the Reserve Bank of India.", "Banking & Finance", Landmark, "warning", "High Demand",
    ["Economics", "Finance", "Statistics", "English", "Reasoning"],
    "Bachelor's with 60%+", "PG in Economics / Finance preferred",
    ["Economic & Social Issues", "Finance & Management", "English"],
    ["Graduates", "Age 21-30"],
    ["Reserve Bank of India"], "₹77,000 – ₹1,30,000 / month"),
  mk("financial-analyst", "Financial Analyst", "Analyse financial data to drive business decisions.", "Banking & Finance", BarChart3, "info", "High Demand",
    ["Excel", "Financial Modeling", "Accounting", "SQL", "Power BI"],
    "B.Com / BBA / MBA Finance", "CA, CFA, M.Com",
    ["Accounting", "Corporate Finance", "Statistics"],
    ["Commerce Graduates", "MBA Finance"],
    ["JP Morgan", "Goldman Sachs", "Deloitte", "EY"], "₹5 LPA – ₹18 LPA"),
  mk("investment-banker", "Investment Banker", "Advise companies on mergers, IPOs and capital raising.", "Banking & Finance", Briefcase, "warning", "High Demand",
    ["Financial Modeling", "Valuation", "Excel", "Pitch Decks", "Communication"],
    "MBA Finance / CA / CFA", "B.Com + CFA / MBA",
    ["Corp Finance", "M&A", "Capital Markets"],
    ["MBA Graduates", "CA/CFA Holders"],
    ["Morgan Stanley", "JP Morgan", "Kotak", "ICICI Securities"], "₹10 LPA – ₹40 LPA"),
];

export const MBA_ROLES: Role[] = [
  mk("marketing-manager", "Marketing Manager", "Lead branding, campaigns and growth strategy.", "MBA & Management", BarChart3, "orange", "High Demand",
    ["Brand Strategy", "Digital Marketing", "Analytics", "Communication", "Leadership"],
    "MBA in Marketing", "BBA + MBA",
    ["Marketing Mgmt", "Consumer Behaviour", "Digital Marketing"],
    ["MBA Graduates", "BBA + Experience"],
    ["HUL", "P&G", "Nestlé", "Amazon"], "₹8 LPA – ₹25 LPA"),
  mk("hr-manager", "HR Manager", "Manage people, culture and talent in organisations.", "MBA & Management", Briefcase, "pink", "High Demand",
    ["Communication", "Recruitment", "Labour Laws", "HRIS", "Negotiation"],
    "MBA in HR", "BBA + MBA HR",
    ["OB", "HRM", "Industrial Relations"],
    ["MBA HR Graduates"],
    ["TCS", "Infosys", "Accenture"], "₹6 LPA – ₹18 LPA"),
  mk("business-analyst", "Business Analyst", "Bridge business and tech with data-driven insights.", "MBA & Management", BarChart3, "info", "High Demand",
    ["SQL", "Excel", "Power BI", "Requirement Gathering", "Stakeholder Mgmt"],
    "MBA / BE + MBA", "Any Degree + Analytics Certification",
    ["Statistics", "Business Strategy", "Data Analytics"],
    ["MBA Graduates", "Engineers + MBA"],
    ["Deloitte", "Accenture", "EY", "KPMG"], "₹7 LPA – ₹20 LPA"),
  mk("operations-manager", "Operations Manager", "Optimise processes, supply chain and delivery.", "MBA & Management", Briefcase, "primary", "High Demand",
    ["Process Mgmt", "Six Sigma", "Leadership", "Excel", "ERP"],
    "MBA in Operations", "BE + MBA Ops",
    ["Operations Research", "SCM", "Quality Mgmt"],
    ["MBA Ops", "Engineers + MBA"],
    ["Amazon", "Flipkart", "Maersk"], "₹8 LPA – ₹22 LPA"),
];

export const ARTS_ROLES: Role[] = [
  mk("journalist", "Journalist", "Report news, write stories and inform the public.", "Arts & Humanities", Palette, "pink", "Medium Demand",
    ["Writing", "Research", "Communication", "Editing", "Camera Skills"],
    "BA Journalism / Mass Comm", "Any Degree + Diploma in Journalism",
    ["Reporting", "Editing", "Media Laws"],
    ["Arts Graduates", "Mass Comm Students"],
    ["The Hindu", "Times of India", "NDTV", "BBC"], "₹3 LPA – ₹10 LPA"),
  mk("psychologist", "Psychologist", "Help people with mental health and behavioural support.", "Arts & Humanities", Brain, "pink", "High Demand",
    ["Counselling", "Empathy", "Research", "Active Listening"],
    "BA + MA Psychology", "M.Phil / PhD Psychology",
    ["Cognitive Psych", "Clinical Psych", "Counselling"],
    ["Psychology Graduates", "Counsellors"],
    ["Hospitals", "Schools", "Private Practice"], "₹4 LPA – ₹15 LPA"),
  mk("graphic-designer", "Graphic Designer", "Design visuals for brands, products and media.", "Arts & Humanities", Palette, "orange", "High Demand",
    ["Photoshop", "Illustrator", "Figma", "Typography", "Branding"],
    "BFA / B.Des", "Any Degree + Design Diploma",
    ["Design Theory", "Color & Layout", "Typography"],
    ["Creative Students", "Self-taught Designers"],
    ["Adobe", "Ogilvy", "Wieden+Kennedy"], "₹3 LPA – ₹12 LPA"),
  mk("content-writer", "Content Writer", "Craft engaging articles, scripts and marketing copy.", "Arts & Humanities", Palette, "info", "High Demand",
    ["Writing", "SEO", "Research", "Editing"],
    "BA English / Mass Comm", "Any Degree",
    ["Literature", "Communication", "Digital Media"],
    ["Arts Graduates", "Bloggers"],
    ["Zomato", "Swiggy", "HubSpot", "Agencies"], "₹3 LPA – ₹10 LPA"),
];

export const MEDICAL_ROLES: Role[] = [
  mk("doctor", "Doctor (MBBS)", "Diagnose and treat patients as a medical professional.", "Medical & Health", Heart, "teal", "High Demand",
    ["Biology", "Anatomy", "Patient Care", "Diagnosis", "Empathy"],
    "MBBS (NEET UG)", "BDS, BAMS, BHMS",
    ["Anatomy", "Physiology", "Pathology", "Pharmacology"],
    ["12th PCB Students", "NEET Qualified"],
    ["Apollo", "Fortis", "AIIMS", "Govt Hospitals"], "₹6 LPA – ₹30 LPA"),
  mk("nurse", "Staff Nurse", "Provide critical care and patient support in hospitals.", "Medical & Health", Heart, "pink", "High Demand",
    ["Patient Care", "First Aid", "Empathy", "Medical Knowledge"],
    "B.Sc Nursing / GNM", "ANM, Diploma in Nursing",
    ["Anatomy", "Pharmacology", "Community Health"],
    ["12th PCB", "Nursing Graduates"],
    ["Apollo", "Fortis", "AIIMS", "Manipal"], "₹3 LPA – ₹8 LPA"),
  mk("pharmacist", "Pharmacist", "Dispense medicines and counsel patients on usage.", "Medical & Health", Heart, "success", "High Demand",
    ["Pharmacology", "Drug Knowledge", "Patient Counselling"],
    "B.Pharm / D.Pharm", "M.Pharm",
    ["Pharmaceutics", "Pharmacology", "Pharmacognosy"],
    ["12th PCB / PCM Students"],
    ["Apollo Pharmacy", "MedPlus", "Cipla"], "₹3 LPA – ₹8 LPA"),
  mk("physiotherapist", "Physiotherapist", "Rehabilitate patients through physical therapy.", "Medical & Health", Heart, "teal", "High Demand",
    ["Anatomy", "Therapy Techniques", "Empathy", "Patient Care"],
    "BPT (Bachelor of Physiotherapy)", "MPT",
    ["Anatomy", "Kinesiology", "Therapy"],
    ["12th PCB Students"],
    ["Hospitals", "Sports Clinics", "Wellness Centres"], "₹3 LPA – ₹10 LPA"),
];

export const LAW_ROLES: Role[] = [
  mk("advocate", "Advocate / Lawyer", "Represent clients in courts and provide legal counsel.", "Law & Legal Studies", Scale, "warning", "High Demand",
    ["Legal Drafting", "Argumentation", "Research", "Communication"],
    "LLB (3 yr) or BA LLB (5 yr)", "LLM",
    ["Constitutional Law", "Criminal Law", "Civil Procedure"],
    ["12th Pass (BA LLB)", "Any Graduate (LLB)"],
    ["Law Firms", "Independent Practice", "Courts"], "₹4 LPA – ₹20 LPA"),
  mk("corporate-lawyer", "Corporate Lawyer", "Advise companies on contracts, M&A and compliance.", "Law & Legal Studies", Scale, "info", "High Demand",
    ["Contract Law", "Negotiation", "Drafting", "Corporate Affairs"],
    "BA LLB / BCom LLB", "LLM Corporate Law",
    ["Company Law", "M&A", "Taxation"],
    ["Law Graduates", "MBA + LLB"],
    ["AZB", "Khaitan & Co", "Cyril Amarchand"], "₹8 LPA – ₹30 LPA"),
  mk("judge", "Judicial Services / Judge", "Serve in the judiciary by clearing state judicial exams.", "Law & Legal Studies", Scale, "primary", "High Demand",
    ["Legal Knowledge", "Analytical Skills", "Ethics", "Languages"],
    "LLB", "LLM preferred",
    ["CrPC", "CPC", "Evidence Act", "Constitution"],
    ["Law Graduates", "Age 21-35"],
    ["State Judicial Services"], "₹77,000 – ₹2,50,000 / month"),
];

export const OTHER_ROLES: Role[] = [
  mk("teacher", "School Teacher", "Educate and inspire students at school level.", "Other Streams", GraduationCap, "success", "High Demand",
    ["Subject Knowledge", "Communication", "Patience", "Lesson Planning"],
    "B.Ed + Bachelor's Degree", "D.El.Ed for Primary",
    ["Pedagogy", "Educational Psychology"],
    ["Graduates with B.Ed"],
    ["Govt & Private Schools", "CBSE / State Boards"], "₹3 LPA – ₹8 LPA"),
  mk("pilot", "Commercial Pilot", "Fly aircraft for commercial airlines.", "Other Streams", Briefcase, "info", "Medium Demand",
    ["Aviation Knowledge", "Reflexes", "Communication", "Discipline"],
    "12th PCM + CPL Training", "Cadet Programs",
    ["Aerodynamics", "Navigation", "Meteorology"],
    ["12th PCM Students", "Medically Fit"],
    ["IndiGo", "Air India", "Vistara"], "₹15 LPA – ₹50 LPA"),
  mk("hotel-mgmt", "Hotel Management", "Manage hospitality operations in hotels and resorts.", "Other Streams", Briefcase, "orange", "High Demand",
    ["Hospitality", "Communication", "Leadership", "Customer Service"],
    "BHM (Bachelor of Hotel Mgmt)", "Diploma in Hotel Mgmt",
    ["F&B", "Front Office", "Housekeeping"],
    ["12th Pass (Any Stream)"],
    ["Taj", "ITC", "Marriott", "Oberoi"], "₹3 LPA – ₹10 LPA"),
  mk("agriculture", "Agriculture Officer", "Work in agri sector, research and rural development.", "Other Streams", MoreHorizontal, "success", "Medium Demand",
    ["Agronomy", "Soil Science", "Field Work", "Research"],
    "B.Sc Agriculture", "M.Sc Agri",
    ["Agronomy", "Horticulture", "Soil Science"],
    ["12th PCB / PCM Students"],
    ["NABARD", "ICAR", "Agri Banks"], "₹4 LPA – ₹12 LPA"),
];

Object.assign(ROLES_BY_STREAM, {
  govt: GOVT_ROLES,
  it: IT_ROLES,
  banking: BANKING_ROLES,
  mba: MBA_ROLES,
  arts: ARTS_ROLES,
  medical: MEDICAL_ROLES,
  law: LAW_ROLES,
  other: OTHER_ROLES,
});

export const ALL_ROLES: Role[] = [
  ...IT_ROLES, ...GOVT_ROLES, ...BANKING_ROLES, ...MBA_ROLES,
  ...ARTS_ROLES, ...MEDICAL_ROLES, ...LAW_ROLES, ...OTHER_ROLES,
];

// ===== Location + Category filtering =====
// `LOCATION_SCOPE` returns the set of role IDs that are relevant for a given
// (location, stream) pair. `null` means "show everything from that stream".
export type LocationKey = "India" | "International" | string; // state names also accepted

// State-only exams: ONLY exams conducted by/for that specific state.
// No central exams mixed in — those are shown when user picks "India".
const STATE_GOVT_EXAMS: Record<string, string[]> = {
  "Tamil Nadu": ["tnpsc-group-1", "tnpsc-group-2", "tnusrb-police", "trb-teacher"],
  "Maharashtra": ["mpsc-state", "mh-police", "mh-tet"],
  "Karnataka": ["kpsc-state", "ka-police", "ka-tet"],
  "Kerala": ["kpsc-kerala", "kl-police", "kl-tet"],
  "Andhra Pradesh": ["appsc-state", "ap-police", "ap-tet"],
  "Telangana": ["tspsc-state", "ts-police", "ts-tet"],
  "Uttar Pradesh": ["uppsc-state", "up-police", "up-tet"],
  "West Bengal": ["wbpsc-state", "wb-police", "wb-tet"],
  "Gujarat": ["gpsc-state", "gj-police", "gj-tet"],
};

const INDIA_GOVT_EXAMS = [
  "upsc-civils", "ssc-cgl", "ssc-chsl", "rrb-ntpc", "rrb-group-d",
  "ibps-po", "sbi-po", "ibps-clerk", "rbi-grade-b",
  "nda", "cds", "state-police",
  "ctet", "trb-teacher",
  "state-psc-exams", "isro-scientist", "drdo-scientist",
  "nabard-grade-a", "lic-aao",
];
const INTL_GOVT_EXAMS = ["intl-sat", "intl-gre", "intl-gmat", "intl-ielts", "intl-toefl"];

// Helper to generate a state-PSC, state-police and state-TET entry for a state
const stateSet = (
  prefix: string,
  stateName: string,
  pscName: string,
  language: string,
  color: Role["color"]
): Role[] => [
  mk(`${prefix}-state`, pscName, `${pscName} — officer-level recruitment for ${stateName} state government.`, "Government Exams", Landmark, color, "High Demand",
    ["General Studies", language, "Aptitude", "Current Affairs", "Essay Writing"],
    "Any Bachelor's Degree", "Graduation in any stream",
    [`${stateName} History`, "Polity", "Economy", "Geography"],
    ["Graduates", "Age 21-32", `${stateName} Residents`],
    [`${stateName} State Government`], "₹40,000 – ₹1,50,000 / month"),
  mk(`${prefix}-police`, `${stateName} Police`, `Constable & SI recruitment for ${stateName} Police Department.`, "Government Exams", Shield, "warning", "High Demand",
    ["Physical Fitness", "GK", "Reasoning", language],
    "10+2 / Graduation (post-wise)", "12th Pass / Any Degree",
    ["GK", "Reasoning", "Numerical Ability"],
    ["12th / Graduates", "Physically Fit"],
    [`${stateName} Police Department`], "₹21,000 – ₹70,000 / month"),
  mk(`${prefix}-tet`, `${stateName} TET`, `${stateName} Teacher Eligibility Test for state government schools.`, "Government Exams", GraduationCap, "success", "High Demand",
    ["Pedagogy", "Subject Knowledge", "Child Psychology", language],
    "B.Ed + Bachelor's", "D.El.Ed for Primary",
    ["Pedagogy", "Maths", "EVS", "Languages"],
    ["B.Ed / D.El.Ed Holders"],
    [`${stateName} Govt Schools`], "₹30,000 – ₹65,000 / month"),
];

// Extra roles only shown for specific locations (state PSCs + international exams)
export const LOCATION_EXTRA_ROLES: Role[] = [
  mk("mpsc-state", "MPSC State Services", "Maharashtra Public Service Commission state-level officer roles.", "Government Exams", Landmark, "primary", "High Demand",
    ["General Studies", "Marathi", "Aptitude", "Current Affairs"],
    "Any Bachelor's Degree", "Graduation in any stream",
    ["Polity", "Economy", "History", "Geography"],
    ["Graduates", "Age 19-38", "Maharashtra Residents"],
    ["Maharashtra State Govt"], "₹40,000 – ₹1,50,000 / month"),
  mk("kpsc-state", "KPSC State Services", "Karnataka Public Service Commission officer roles.", "Government Exams", Landmark, "info", "High Demand",
    ["General Studies", "Kannada", "Aptitude", "Current Affairs"],
    "Any Bachelor's Degree", "Graduation in any stream",
    ["Polity", "Economy", "History", "Geography"],
    ["Graduates", "Karnataka Residents"],
    ["Karnataka State Govt"], "₹40,000 – ₹1,50,000 / month"),
  mk("kpsc-kerala", "Kerala PSC", "Kerala Public Service Commission roles in state departments.", "Government Exams", Landmark, "success", "High Demand",
    ["General Knowledge", "Malayalam", "Aptitude"],
    "10+2 / Bachelor's Degree", "Varies by post",
    ["GK", "Maths", "Reasoning"],
    ["Kerala Residents"],
    ["Kerala State Govt"], "₹30,000 – ₹1,20,000 / month"),

  // Per-state Police + TET sets for the states above
  ...stateSet("mh", "Maharashtra", "Maharashtra Police & TET", "Marathi", "primary").slice(1),
  ...stateSet("ka", "Karnataka", "Karnataka Police & TET", "Kannada", "info").slice(1),
  ...stateSet("kl", "Kerala", "Kerala Police & TET", "Malayalam", "success").slice(1),

  // New states — full set (PSC + Police + TET)
  ...stateSet("appsc", "Andhra Pradesh", "APPSC Group Services", "Telugu", "primary"),
  ...stateSet("tspsc", "Telangana", "TSPSC Group Services", "Telugu", "info"),
  ...stateSet("uppsc", "Uttar Pradesh", "UPPSC State Services", "Hindi", "warning"),
  ...stateSet("wbpsc", "West Bengal", "WBPSC State Services", "Bengali", "pink"),
  ...stateSet("gpsc", "Gujarat", "GPSC State Services", "Gujarati", "orange"),

  // International exams (Government Exams category for entrance/standardised tests)
  mk("intl-sat", "SAT (USA)", "Standardised test for undergraduate admissions in the USA.", "Government Exams", GraduationCap, "info", "High Demand",
    ["English", "Math", "Reading Comprehension", "Essay Writing"],
    "10+2 (Higher Secondary)", "Currently in 11th/12th",
    ["Algebra", "Geometry", "Reading", "Writing"],
    ["High School Students aiming for US universities"],
    ["Harvard", "MIT", "Stanford", "UC Berkeley"], "Scholarship-based"),
  mk("intl-gre", "GRE", "Graduate Record Examination for masters/PhD admissions abroad.", "Government Exams", GraduationCap, "primary", "High Demand",
    ["Verbal Reasoning", "Quantitative", "Analytical Writing"],
    "Bachelor's Degree", "Final-year UG students",
    ["Vocabulary", "Maths", "Critical Reasoning"],
    ["Graduates aiming for MS abroad"],
    ["US, Canada, Germany Universities"], "Scholarship-based"),
  mk("intl-gmat", "GMAT", "Entrance test for top global MBA programs.", "Government Exams", Briefcase, "warning", "High Demand",
    ["Quant", "Verbal", "Integrated Reasoning", "AWA"],
    "Bachelor's Degree", "Working professionals preferred",
    ["Maths", "Logic", "English"],
    ["MBA aspirants"],
    ["Harvard Business School", "Wharton", "INSEAD", "ISB"], "Scholarship-based"),
  mk("intl-ielts", "IELTS", "English proficiency test for study/work abroad.", "Government Exams", GraduationCap, "success", "High Demand",
    ["Listening", "Reading", "Writing", "Speaking"],
    "No formal qualification", "Anyone aspiring to study/work abroad",
    ["English Grammar", "Vocabulary", "Pronunciation"],
    ["Students", "Working Professionals", "Migrants"],
    ["UK, Australia, Canada, NZ Universities"], "Test fee ~₹17,000"),
  mk("intl-toefl", "TOEFL", "Test of English for non-native speakers, accepted globally.", "Government Exams", GraduationCap, "info", "High Demand",
    ["Reading", "Listening", "Speaking", "Writing"],
    "No formal qualification", "Students aiming for US universities",
    ["English Comprehension", "Speaking Fluency"],
    ["Students", "Researchers"],
    ["US Universities", "Global Institutions"], "Test fee ~₹16,900"),
];

const ROLE_BY_ID: Record<string, Role> = Object.fromEntries(
  [...ALL_ROLES, ...LOCATION_EXTRA_ROLES].map((r) => [r.id, r])
);

/**
 * Filter roles by both location AND stream category.
 * Rules:
 *  - "International": for `govt` show standardised global exams; for other streams
 *    show remote/global-friendly roles (default IT/banking/etc as-is).
 *  - State name (e.g. "Tamil Nadu"): for `govt` show state PSC + a couple of central exams.
 *  - "India" or unknown: show the full stream list.
 */
export const getRolesFor = (location: string | undefined, streamId: string): Role[] => {
  const baseStream = ROLES_BY_STREAM[streamId] || [];
  if (!location || location === "India") {
    if (streamId === "govt") return INDIA_GOVT_EXAMS.map((id) => ROLE_BY_ID[id]).filter(Boolean);
    return baseStream;
  }
  if (location === "International") {
    if (streamId === "govt") return INTL_GOVT_EXAMS.map((id) => ROLE_BY_ID[id]).filter(Boolean);
    if (streamId === "medical" || streamId === "law") return []; // location-restricted
    return baseStream; // IT, banking, mba, arts, other apply globally
  }
  // Specific Indian state
  if (streamId === "govt") {
    const ids = STATE_GOVT_EXAMS[location] || INDIA_GOVT_EXAMS;
    return ids.map((id) => ROLE_BY_ID[id]).filter(Boolean);
  }
  return baseStream;
};

// Lookup any role by id (regardless of stream/location).
export const getRoleById = (id: string): Role | undefined => ROLE_BY_ID[id];

// Official application / information portals for each exam or career.
// If a role isn't listed here, the UI shows a friendly "info not available" message.
export const APPLY_LINKS: Record<string, { url: string; label: string }> = {
  // Tamil Nadu state exams
  "tnpsc-group-1": { url: "https://www.tnpsc.gov.in/", label: "Apply on TNPSC Portal" },
  "tnpsc-group-2": { url: "https://www.tnpsc.gov.in/", label: "Apply on TNPSC Portal" },
  "tnusrb-police": { url: "https://www.tnusrbonline.org/", label: "Apply on TNUSRB Portal" },
  "trb-teacher": { url: "https://www.trb.tn.gov.in/", label: "Apply on TRB Tamil Nadu" },
  // Other state PSCs
  "mpsc-state": { url: "https://mpsc.gov.in/", label: "Apply on MPSC Portal" },
  "kpsc-state": { url: "https://kpsc.kar.nic.in/", label: "Apply on KPSC Portal" },
  "kpsc-kerala": { url: "https://www.keralapsc.gov.in/", label: "Apply on Kerala PSC" },
  // Central exams
  "upsc-civils": { url: "https://upsc.gov.in/", label: "Apply on UPSC Portal" },
  "ssc-cgl": { url: "https://ssc.gov.in/", label: "Apply on SSC Portal" },
  "ssc-chsl": { url: "https://ssc.gov.in/", label: "Apply on SSC Portal" },
  "rrb-ntpc": { url: "https://www.rrbcdg.gov.in/", label: "Apply on RRB Portal" },
  "rrb-group-d": { url: "https://www.rrbcdg.gov.in/", label: "Apply on RRB Portal" },
  "ibps-po": { url: "https://www.ibps.in/", label: "Apply on IBPS Portal" },
  "ibps-clerk": { url: "https://www.ibps.in/", label: "Apply on IBPS Portal" },
  "sbi-po": { url: "https://sbi.co.in/web/careers", label: "Apply on SBI Careers" },
  "rbi-grade-b": { url: "https://opportunities.rbi.org.in/", label: "Apply on RBI Portal" },
  "nda": { url: "https://upsc.gov.in/", label: "Apply via UPSC (NDA)" },
  "cds": { url: "https://upsc.gov.in/", label: "Apply via UPSC (CDS)" },
  "ctet": { url: "https://ctet.nic.in/", label: "Apply on CTET Portal" },
  "state-psc-exams": { url: "https://www.google.com/search?q=state+public+service+commission+notification", label: "Find State PSC Notifications" },
  "state-police": { url: "https://www.google.com/search?q=state+police+constable+recruitment", label: "Find State Police Recruitments" },
  "isro-scientist": { url: "https://www.isro.gov.in/Careers.html", label: "Apply on ISRO Careers" },
  "drdo-scientist": { url: "https://drdo.gov.in/careers", label: "Apply on DRDO Careers" },
  "nabard-grade-a": { url: "https://www.nabard.org/careernotices.aspx", label: "Apply on NABARD Portal" },
  "lic-aao": { url: "https://licindia.in/Bottom-Links/careers", label: "Apply on LIC Careers" },
  // International
  "intl-sat": { url: "https://satsuite.collegeboard.org/sat/registration", label: "Register for SAT" },
  "intl-gre": { url: "https://www.ets.org/gre.html", label: "Register for GRE" },
  "intl-gmat": { url: "https://www.mba.com/exams/gmat-exam", label: "Register for GMAT" },
  "intl-ielts": { url: "https://www.ielts.org/", label: "Register for IELTS" },
  "intl-toefl": { url: "https://www.ets.org/toefl", label: "Register for TOEFL" },
};

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
  { id: "j9", company: "Cognizant", role: "Programmer Analyst Trainee", location: "Trichy, Tamil Nadu", experience: "0-1 Yrs", type: "Full Time", category: "MNCs", applyBy: "12 Jun", salary: "₹4 LPA", logo: "CO" },
  { id: "j10", company: "Wipro", role: "Project Engineer", location: "Trichy, Tamil Nadu", experience: "0-2 Yrs", type: "Full Time", category: "MNCs", applyBy: "18 Jun", salary: "₹3.5 – 5 LPA", logo: "WI" },
  { id: "j11", company: "BHEL", role: "Graduate Apprentice", location: "Trichy, Tamil Nadu", experience: "0-1 Yrs", type: "Internship", category: "Internships", applyBy: "22 Jun", salary: "₹15k/mo", logo: "BH" },
  { id: "j12", company: "Sify Technologies", role: "Network Engineer", location: "Trichy, Tamil Nadu", experience: "1-3 Yrs", type: "Full Time", category: "Small Companies", applyBy: "30 Jun", salary: "₹3 – 5 LPA", logo: "SF" },
  { id: "j13", company: "Aspire Systems", role: "Associate Software Engineer", location: "Madurai, Tamil Nadu", experience: "0-2 Yrs", type: "Full Time", category: "MNCs", applyBy: "25 Jun", salary: "₹4 – 6 LPA", logo: "AS" },
  { id: "j14", company: "Kaar Tech", role: "SAP Developer Trainee", location: "Coimbatore, Tamil Nadu", experience: "0-1 Yrs", type: "Full Time", category: "Startups", applyBy: "28 Jun", salary: "₹4 LPA", logo: "KA" },
];
