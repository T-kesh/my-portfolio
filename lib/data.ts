export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const skillsData = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git", "Tailwind CSS", "Framer Motion", "PostgreSQL", "Prisma"
] as const;

export const projectsData = [
  {
    title: "AI Chat Application",
    description: "A modern chat application powered by AI. Features real-time messaging and dark mode.",
    tags: ["React", "Next.js", "Tailwind", "OpenAI"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com"
  },
  {
    title: "E-Commerce Dashboard",
    description: "An admin dashboard for managing inventory and tracking sales.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Prisma"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com"
  }
] as const;

export const experienceData = [
  {
    title: "Frontend Developer",
    location: "Tech Corp",
    description: "Built scalable web applications using React and Next.js.",
    date: "2023 - Present",
  },
  {
    title: "Web Developer Intern",
    location: "Startup Inc",
    description: "Assisted in the development of main product features.",
    date: "2022 - 2023",
  }
] as const;
