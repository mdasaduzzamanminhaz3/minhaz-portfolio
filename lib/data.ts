export const profile = {
  name: "Md Asaduzzaman Minhaz",
  title: "Backend-focused Full Stack Developer",
  intro:
    "I build REST APIs and full stack web apps with Django, Django REST Framework, Node.js and Next.js. I’m a Computer Science & Technology student from Cumilla, Bangladesh.",
  email: "mdasaduzzamanminhaz3@gmail.com",
  github: "https://github.com/mdasaduzzamanminhaz3",
  linkedin: "https://www.linkedin.com/in/asaduzzaman-minhaz/",
  facebook: "https://www.facebook.com/asaduzzaman.minhaz.7",
  discord: "mdasaduzzamanminhaz",
  snapshot: [
    ["Role", "Backend / Full Stack Developer"],
    [
      "Core stack",
      "Python, Django, DRF, Node.js, Express, PostgreSQL, MongoDB",
    ],
    ["Shipped", "4 projects, 3 deployed with live demos"],
    ["Location", "Dhaka, Bangladesh"],
    ["Status", "Open to internships and junior roles"],
  ],
  doing: [
    "Design and build REST APIs with authentication (JWT, OAuth 2.0, session auth).",
    "Model data in PostgreSQL and MongoDB, with a focus on query optimization.",
    "Ship connected frontends in React and Next.js and deploy them on Vercel, Railway and Render.",
    "Aim to grow into a software engineer who works on meaningful products.",
  ],
};

export type Project = {
  name: string;
  kind: string;
  desc: string;
  tech: string[];
  live?: string;
  client?: string;
  server?: string;
};

export const projects: Project[] = [
  {
    name: "Ayojon – Event management platform",
    kind: "Full stack",
    desc: "Create and manage events, browse by category, join or cancel with one click, and see upcoming and completed events. Includes user authentication.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    live: "https://ayojon-client.vercel.app/",
    client: "https://github.com/mdasaduzzamanminhaz3/Ayojon-client",
    server: "https://github.com/mdasaduzzamanminhaz3/Ayojon-server",
  },
  {
    name: "NewsIque – Newspaper and subscription platform",
    kind: "Full stack",
    desc: "Online newspaper with role-based access control, news publishing and management, and premium subscriptions.",
    tech: ["Django", "DRF", "PostgreSQL", "Cloudinary"],
    live: "https://news-ique-client.vercel.app/",
    client: "https://github.com/mdasaduzzamanminhaz3/News_Ique-Client",
    server: "https://github.com/mdasaduzzamanminhaz3/News_Ique",
  },
  {
    name: "Eco-Track – Waste management and recycling",
    kind: "Full stack",
    desc: "Pickup requests, recycler verification, a green reward system and environmental impact tracking to encourage sustainable living.",
    tech: ["Python", "Django", "DRF", "JWT"],
    live: "https://eco-track-client-phi.vercel.app/",
    client: "https://github.com/mdasaduzzamanminhaz3/Eco_Track-client",
    server: "https://github.com/mdasaduzzamanminhaz3/Eco_Track",
  },
  {
    name: "BazarDor - Analysis of the market for essential commodities",
    kind: "Forntend",
    desc: "BazarDor is a modern, real-time daily commodity price tracker in Bangladesh. Built for transparency and ease of use, it helps consumers stay informed about current market prices for essential grocery items—including rice, lentils, oil, vegetables, fish, meat, and spices—across various markets and divisions.",
    tech: ["Next.js", "React.js", "MongoDB", "Better Auth"],
    live: "https://bazar-dor-1f3k.vercel.app/",
    client: "https://github.com/mdasaduzzamanminhaz3/Bazar-Dor",
  },
  {
    name: "Ayojon - Event Management Platform",
    kind: "FullStack",
    desc: "Ayojon is a full-stack event management platform that allows users to discover upcoming events, create and manage their own events, and join events that match their interests. It features secure authentication, event categorization, event registration, and personalized event management with a responsive interface and light/dark mode support.",
    tech: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
      "Shadcn",
    ],
    live: "https://ayojon-client.vercel.app/",
    client: "https://github.com/mdasaduzzamanminhaz3/Ayojon-client",
    server: "https://github.com/mdasaduzzamanminhaz3/Ayojon-server",
  },
  {
    name: "PhiMart – E-commerce REST API",
    kind: "Backend",
    desc: "Product, category, cart and order management with JWT authentication.",
    tech: ["Django REST Framework", "PostgreSQL", "JWT"],
    server: "https://e-commerce-azure-zeta.vercel.app/api/v1/auth/",
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["Python", "TypeScript", "JavaScript", "C++", "HTML", "CSS"],
  Backend: ["Django", "Django REST Framework", "Node.js", "Express.js"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Shadcn UI"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
  "Auth and APIs": ["JWT", "OAuth 2.0", "Better Auth", "Session Auth", "REST"],
  "Tools and deployment": [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Vercel",
    "Railway",
    "Render",
    "Cloudinary",
    "Netlify",
  ],
};

export const learning = [
  "Data Structures & Algorithms",
  "Database Optimization",
  "System Design",
  "Advanced Python and OOP",
  "TypeScript and Next.js",
  "Docker",
];
