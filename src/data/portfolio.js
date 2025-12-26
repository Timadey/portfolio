export const portfolioData = {
    personal: {
        name: "Timothy Adeleke",
        title: "Backend-Focused Software Engineer | Systems Architect | Product Builder",
        tagline: "Building scalable systems, practical platforms, and problem-driven products",
        email: "dlktimothy@gmail.com",
        location: "Lagos, Nigeria",
        linkedin: "https://linkedin.com/in/timadey",
        github: "https://github.com/Timadey",
        status: "Managing DocsandDecks"
    },

    summary: "I care less about shiny demos and more about software that actually works at scale, solves real problems, and can evolve into a business. I enjoy coding, but I think in systems, trade-offs, and long-term impact.",

    whatIBuild: [
        {
            title: "Backend Engineering",
            description: "Design and build backend systems with clarity and structure. Develop RESTful APIs and data-driven platforms. Focus on performance, scalability, and maintainability."
        },
        {
            title: "Product Development",
            description: "Turn vague problems into working products. Lead and coordinate technical execution. Think through systems, trade-offs, and long-term impact."
        }
    ],

    experience: [
        {
            title: "Fullstack Software Engineer",
            company: "Samic Telecoms",
            period: "03/2025 – Present",
            location: "Ibadan, Nigeria",
            achievements: [
                "Built Data2Cash, scaling to 10,000+ users and 1M+ transactions.",
                "Developed an internal SMS engine with smart routing + delivery analytics.",
                "Built an in-house email marketing system with 99% deliverability.",
                "Refactored frontend from Bootstrap → React, reducing load time by 90%.",
                "Automated internal processes using scripts + scraping to expose missing APIs.",
                "Optimized background jobs, doubling execution speed and improving uptime."
            ],
            tech: ["Laravel", "MySQL", "React", "Python", "Docker", "Linux"]
        }
    ],

    projects: [
        {
            name: "Windsms",
            description: "High-volume SMS marketing platform with intelligent routing, delivery analytics, and automated scheduling.",
            tech: ["Laravel", "Inertia", "ReactJs", "Postgres", "TailwindCSS"],
            liveLink: "https://timadey.alwaysdata.net",
            githubRepo: "https://github.com/Timadey/windsms",
            image: "/images/windsms.png"
        },
        {
            name: "CBT Engine",
            description: "End-to-end exam administration system: question banks, exam delivery, scoring, and reporting for institutions.",
            tech: ["Flask", "Docker", "Tailwind", "jQuery"],
            githubRepo: "https://github.com/Timadey/cbt",
            liveDemo: "https://cbtim.onrender.com",
            image: "https://github.com/Timadey/cbt/raw/main/img/examination.png"
        },
        {
            name: "Provinear API",
            description: "Backend powering a campus marketplace—product discovery, vendor listings, search, and geolocation queries.",
            tech: ["Laravel", "Postgres", "Swagger UI"],
            githubRepo: "https://github.com/dynamosphere/provinear.hopper",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
        },
        {
            name: "Docs & Decks Website & Admin Portal",
            description: "Responsive landing site with payment flow, plus an admin backend for student tracking and payment verification.",
            tech: ["Laravel", "Supabase", "Tailwind", "ReactJs"],
            liveLink: "https://www.docsanddecks.com",
            githubRepo: "https://github.com/Timadey/docsanddecks",
            image: "/images/docsanddecks.jpeg"
        },
        {
            name: "Docs & Decks Telegram Bot",
            description: "Workflow automation bot for attendance, assignments, reminders, and student session management.",
            tech: ["Python", "Telegram API"],
            githubRepo: "https://github.com/Timadey/Docs-and-Decks-Telegram-Bot",
            liveBot: "https://t.me/DocsandDecksBot",
            image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=400&fit=crop"
        },
        {
            name: "MeBudget",
            description: "A personal budget, expense and investment tracking application. Not the regular one.",
            tech: ["ReactJs", "TailwindCSS", "Supabase"],
            githubRepo: "https://github.com/Timadey/mebudget",
            liveDemo: "https://mebudget-eta.vercel.app/",
            image: "/images/mebudget.png"
        }
    ],

    skills: {
        backend: ["Python", "Django", "PHP", "Go", "PostgreSQL", "MySQL", "Redis"],
        frontend: ["HTML5", "CSS3", "JavaScript", "TailwindCSS"],
        infrastructure: ["Docker", "Linux", "Git", "GitHub"]
    }
};
