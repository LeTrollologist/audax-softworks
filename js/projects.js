/** Audax Softworks — project catalog */
window.AUDAX_PROJECTS = [
  {
    id: "aristos-pw",
    name: "Aristos Property Works",
    category: "sites",
    tagline: "Premium property maintenance & technical diagnostics",
    description:
      "Glassmorphism single-page site with scroll animations, before/after sliders, dark mode, and local SEO schema for high-end residential and commercial clients.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: { live: null, github: "https://github.com/LeTrollologist/aristosPW" },
    featured: true,
    accent: "#C9A227",
  },
  {
    id: "numa-space",
    name: "Numa's Space",
    category: "sites",
    tagline: "Personal interstellar study & rest portal",
    description:
      "Reactive personal site with world clocks, stargazer sky map, sleep timers, system diagnostics, and a living memory album — deployed on GitHub Pages.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://letrollologist.github.io/numa.github.io/",
      github: "https://github.com/LeTrollologist/numa.github.io",
    },
    featured: true,
    accent: "#A78BFA",
  },
  {
    id: "orion-editor",
    name: "Orion Editor",
    category: "tools",
    tagline: "Cosmic-themed in-browser code editor",
    description:
      "Full IDE experience with starfield canvas, tabbed editing, syntax theming, and a deep-space aesthetic — built entirely in vanilla web tech.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: { live: null, github: "https://github.com/LeTrollologist/Orion-Editor" },
    featured: true,
    accent: "#1A8FFF",
  },
  {
    id: "websage",
    name: "WebSage",
    category: "tools",
    tagline: "Zero-cost AI deep web analyzer",
    description:
      "Express-powered auditor that crawls sites with Puppeteer, streams AI analysis via SSE, and delivers SEO, UX, and code insights without paid APIs.",
    stack: ["Node.js", "Express", "Puppeteer", "OpenAI"],
    links: { live: null, github: null, local: true },
    featured: true,
    accent: "#6EE7B7",
  },
  {
    id: "personal-os",
    name: "Personal OS",
    category: "tools",
    tagline: "Self-hosted productivity kernel",
    description:
      "Rust + Axum backend with todos, notes, planner, focus timer, RSS newsletter cron jobs, and SQLite persistence — your local command center.",
    stack: ["Rust", "Axum", "SQLite", "Tokio"],
    links: { live: null, github: null, local: true },
    featured: true,
    accent: "#F97316",
  },
  {
    id: "gloss-n-glory",
    name: "Soft Launch: Gloss 'n Glory",
    category: "games",
    tagline: "Beauty startup empire simulator",
    description:
      "Scale an indie beauty brand from closet R&D to global conglomerate. Dynamic economy, live social feed, corporate debt, and a $50M exit goal.",
    stack: ["Game Dev", "Simulation"],
    links: {
      live: "https://trollologist.itch.io/gloss-n-glory",
      github: "https://github.com/LeTrollologist/Soft-Launch",
    },
    featured: true,
    accent: "#EC4899",
  },
  {
    id: "xenomart",
    name: "XenoMart",
    category: "games",
    tagline: "Cosmic horror space tycoon",
    description:
      "Run a trading post on a remote outpost — serve alien customers, manage inventory and sanity, and survive increasingly disturbing events.",
    stack: ["Game Design", "2D"],
    links: { live: null, github: "https://github.com/LeTrollologist/XenoMart" },
    featured: false,
    accent: "#14B8A6",
  },
  {
    id: "message-scheduler",
    name: "Message Scheduler",
    category: "plugins",
    tagline: "Schedule Discord messages in Vencord",
    description:
      "Vencord userplugin with calendar UI in the chat bar, context-menu scheduling, persistent local storage, and native dispatch toasts.",
    stack: ["TypeScript", "Vencord"],
    links: { live: null, github: "https://github.com/LeTrollologist/messageScheduler" },
    featured: false,
    accent: "#5865F2",
  },
  {
    id: "stratagem",
    name: "S.T.R.A.T.A.G.E.M.",
    category: "utilities",
    tagline: "Helldivers 2 stratagem macros",
    description:
      "AutoHotkey automation for Helldivers 2 — precision stratagem input sequences and autoclicker macros for faster battlefield deployment.",
    stack: ["AutoHotkey"],
    links: { live: null, github: "https://github.com/LeTrollologist/s.t.r.a.t.a.g.e.m." },
    featured: false,
    accent: "#EF4444",
  },
  {
    id: "veloce-linux",
    name: "VeloceNetwork Linux",
    category: "systems",
    tagline: "Network tooling for Linux",
    description:
      "Cross-platform network utilities and tooling built for Linux environments — part of the VeloceNetwork suite.",
    stack: ["Linux", "Networking"],
    links: { live: null, github: "https://github.com/LeTrollologist/VeloceNetwork-Linux" },
    featured: false,
    accent: "#22C55E",
  },
  {
    id: "veloce-windows",
    name: "VeloceNetwork Windows",
    category: "systems",
    tagline: "Network tooling for Windows",
    description:
      "Windows-native network utilities and tooling — companion to VeloceNetwork Linux for cross-platform workflows.",
    stack: ["Windows", "Networking"],
    links: { live: null, github: "https://github.com/LeTrollologist/VeloceNetwork-Windows" },
    featured: false,
    accent: "#3B82F6",
  },
  {
    id: "analytics-server",
    name: "Analytics Server",
    category: "systems",
    tagline: "Lightweight analytics backend",
    description:
      "JavaScript analytics server for tracking and reporting — MIT licensed infrastructure tooling.",
    stack: ["JavaScript", "Node.js"],
    links: { live: null, github: "https://github.com/LeTrollologist/analytics-server" },
    featured: false,
    accent: "#8B5CF6",
  },
];

window.AUDAX_CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "sites", label: "Sites" },
  { id: "tools", label: "Tools" },
  { id: "games", label: "Games" },
  { id: "plugins", label: "Plugins" },
  { id: "utilities", label: "Utilities" },
  { id: "systems", label: "Systems" },
];
