export type Course = {
  id: number;
  emoji: string;
  title: string;
  subtitle: string;
  instructor: string;
  initials: string;
  avatarBg: string;
  rating: number;
  reviews: number;
  students: string;
  lessons: number;
  hours: string;
  level: string;
  levelColor: string;
  levelBg: string;
  tags: string[];
  isNew?: boolean;
};

export const COURSES: Course[] = [
  {
    id: 1,
    emoji: "📘",
    title: "Technical Writing Fundamentals",
    subtitle: "Master writing style, voice, audience analysis & style guides.",
    instructor: "Priya Mehta",
    initials: "PM",
    avatarBg: "#7c3aed",
    rating: 4.8,
    reviews: 1240,
    students: "4",
    lessons: 28,
    hours: "12h",
    level: "Beginner",
    levelColor: "#15803d",
    levelBg: "#dcfce7",
    tags: ["Google Docs", "Notion", "Style Guides"],
  },
  {
    id: 2,
    emoji: "📗",
    title: "User Documentation Mastery",
    subtitle: "Write professional manuals, knowledge bases & quick-start guides.",
    instructor: "Arjun Kapoor",
    initials: "AK",
    avatarBg: "#1d4ed8",
    rating: 4.7,
    reviews: 890,
    students: "3.1k",
    lessons: 32,
    hours: "15h",
    level: "Intermediate",
    levelColor: "#1d4ed8",
    levelBg: "#dbeafe",
    tags: ["Snagit", "Loom", "Confluence"],
  },
  {
    id: 3,
    emoji: "⚙️",
    title: "API & Developer Documentation",
    subtitle: "Write API docs, release notes & interactive walkthroughs.",
    instructor: "Sneha Rao",
    initials: "SR",
    avatarBg: "#b45309",
    rating: 4.9,
    reviews: 612,
    students: "2.4k",
    lessons: 24,
    hours: "18h",
    level: "Advanced",
    levelColor: "#b45309",
    levelBg: "#fef3c7",
    tags: ["Swagger", "GitHub", "OpenAPI"],
    isNew: true,
  },
  {
    id: 4,
    emoji: "🤝",
    title: "Client Communication for Writers",
    subtitle: "SME interviews, feedback cycles & stakeholder management.",
    instructor: "Rahul Singh",
    initials: "RS",
    avatarBg: "#0e7490",
    rating: 4.6,
    reviews: 445,
    students: "1.8k",
    lessons: 18,
    hours: "8h",
    level: "All Levels",
    levelColor: "#0e7490",
    levelBg: "#cffafe",
    tags: ["Real Clients", "SME Interviews", "Slack"],
  },
  {
    id: 5,
    emoji: "💼",
    title: "Portfolio & Career Launch",
    subtitle: "Build 5–8 real pieces. Resume review, LinkedIn & mock interviews.",
    instructor: "Divya Nair",
    initials: "DN",
    avatarBg: "#15803d",
    rating: 4.8,
    reviews: 760,
    students: "2.9k",
    lessons: 20,
    hours: "10h",
    level: "All Levels",
    levelColor: "#0e7490",
    levelBg: "#cffafe",
    tags: ["Portfolio", "LinkedIn", "Interviews"],
  },
  {
    id: 6,
    emoji: "🏢",
    title: "Corporate Readiness Bootcamp",
    subtitle: "Deadlines, feedback cycles & professional workplace communication.",
    instructor: "Vikram Patel",
    initials: "VP",
    avatarBg: "#6d28d9",
    rating: 4.5,
    reviews: 330,
    students: "1.2k",
    lessons: 15,
    hours: "6h",
    level: "Beginner",
    levelColor: "#15803d",
    levelBg: "#dcfce7",
    tags: ["Workplace Skills", "Email Writing", "Etiquette"],
    isNew: true,
  },
];
