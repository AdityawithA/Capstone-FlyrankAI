export type Project = {
  name: string;
  score: number;
  summary: string;
  technologies: string[];
  strengths: string[];
  highlights: string[];
};

export const projects: Record<string, Project> = {
  "InterviewAce AI": {
    name: "InterviewAce AI",
    score: 94,
    summary:
      "An AI-powered interview preparation platform with role-specific mock interviews, response evaluation, and performance tracking.",
    technologies: ["Python", "Flask", "Groq/Gemini", "SQLite", "HTML/CSS/JS"],
    strengths: [
      "AI-powered mock interview experience",
      "Role-specific interview questions",
      "Response evaluation and feedback",
      "Performance tracking with stored results",
    ],
    highlights: [
      "Deployed web application",
      "Server-side AI integration",
      "Authentication and persistence",
    ],
  },
  CampusSync: {
    name: "CampusSync",
    score: 90,
    summary:
      "A college activity platform for events, announcements, registrations, dashboards, and role-based access.",
    technologies: ["Python", "Flask", "MySQL/SQLite", "HTML", "CSS", "JavaScript"],
    strengths: [
      "Role-based access control",
      "Event registration",
      "Student and organizer dashboards",
      "College activity management",
    ],
    highlights: [
      "Full-stack architecture",
      "Database-backed workflows",
      "Responsive web interface",
    ],
  },
  TypeRush: {
    name: "TypeRush",
    score: 84,
    summary:
      "A browser-based typing practice project focused on speed, accuracy, and interactive feedback.",
    technologies: ["HTML", "CSS", "JavaScript"],
    strengths: [
      "Interactive typing experience",
      "Real-time performance feedback",
      "Simple and focused user flow",
    ],
    highlights: [
      "Lightweight frontend",
      "Fast browser interaction",
      "Gamified practice concept",
    ],
  },
  "SMS Spam Detection": {
    name: "SMS Spam Detection",
    score: 88,
    summary:
      "A machine-learning web application that classifies SMS messages as spam or legitimate.",
    technologies: ["Python", "Flask", "Machine Learning", "Pandas", "Scikit-learn"],
    strengths: [
      "ML classification workflow",
      "Web-based prediction interface",
      "Practical text classification use case",
    ],
    highlights: [
      "Deployed prediction app",
      "End-to-end ML integration",
      "Clear user-facing result",
    ],
  },
  "Breast Cancer Detection": {
    name: "Breast Cancer Detection",
    score: 91,
    summary:
      "A machine-learning classification project for predicting breast cancer outcomes from clinical features.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask"],
    strengths: [
      "Strong classification performance",
      "Model evaluation with cross-validation",
      "Deployed prediction interface",
    ],
    highlights: [
      "Approximately 95% reported accuracy",
      "ML evaluation workflow",
      "Production-style web demo",
    ],
  },
};
