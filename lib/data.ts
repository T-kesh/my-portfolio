export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const skillsData = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git", "Tailwind CSS", "Framer Motion", "Solidity", "Web3.js", "Ethers.js"
] as const;

export const projectsData = [
  {
    title: "Web3Nova Platform",
    description: "Contributed to the frontend development of Web3Nova, a comprehensive launchpad offering Web3 education bootcamps and premium digital services.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web3"],
    githubUrl: "https://github.com",
    demoUrl: "http://web3nova.org/",
    imageUrl: "/web3nova.png"
  },
  {
    title: "DUEL - AI Card Battle",
    description: "Developed an AI-powered card battle game built for Celo MiniPay. Players duel against CIPHER (the AI) to earn USDm rewards.",
    tags: ["React", "Next.js", "Celo", "Web3"],
    githubUrl: "https://github.com",
    demoUrl: "https://duels-flame.vercel.app",
    imageUrl: "/duel.png"
  },
  {
    title: "AjoClub",
    description: "Developed AjoClub, a platform for onchain rotating savings clubs built on the Celo blockchain.",
    tags: ["Next.js", "React", "Celo", "Web3"],
    githubUrl: "https://github.com",
    demoUrl: "https://ajoclub.vercel.app/",
    imageUrl: "/ajoclub.png"
  }
] as const;

export const experienceData = [
  {
    title: "Software Developer",
    location: "web3nova",
    description: "Started my journey here, focusing on Web3 technologies and decentralized applications.",
    date: "2026 - Present",
  },
  {
    title: "Open Source Contributor",
    location: "Remote",
    description: "Actively contributed to major open source projects including the Drips protocol and the Grantfo platform.",
    date: "2026",
  },
  {
    title: "Protocol Developer",
    location: "Talent Protocol & Celo",
    description: "Worked on Talent Protocol's talent app, with a specific focus and contribution to Celo's Proof of Ship initiative.",
    date: "2026",
  }
] as const;
