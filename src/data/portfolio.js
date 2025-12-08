export const portfolioData = {
    personal: {
        name: "Timothy Adeleke",
        title: "Backend & Fullstack Engineer",
        tagline: "I build production-grade systems, automate workflows, and optimize performance for products that serve thousands of users.",
        email: "dlktimothy@gmail.com",
        location: "Lagos, Nigeria",
        linkedin: "https://linkedin.com/in/timadey",
        github: "https://github.com/Timadey",
        status: "Managing DocsandDecks"
    },

    summary: "Backend-first engineer focused on building reliable systems, automating workflows, and solving real operational problems. I've shipped high-traffic services, internal tools, messaging engines, and full product flows across multiple stacks. I care about clean architecture, measurable performance gains, and delivering work that actually moves the business forward.",

    whatIBuild: [
        {
            title: "High-performance backend systems",
            description: "APIs, automation pipelines, cron services, distributed processes."
        },
        {
            title: "Internal tools and infrastructure",
            description: "Messaging engines, dashboards, workflow automation, monitoring."
        },
        {
            title: "Full product flows",
            description: "Authentication, payments, onboarding, admin portals."
        },
        {
            title: "Scalable micro-features",
            description: "Web scraping, integration scripts, performance optimization."
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
            tech: ["Laravel", "Python", "React", "Postgres"],
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
            tech: ["Laravel", "MySQL", "Tailwind", "JavaScript"],
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
        }
    ],

    skills: {
        languages: ["Python", "PHP", "JavaScript", "Go", "C"],
        frameworks: ["Laravel", "Django", "Flask", "FastAPI", "React", "Fiber", "Gin"],
        systems: ["Docker", "Linux", "Redis", "MySQL", "Postgres"],
        backend: ["APIs", "automation", "scaling", "performance tuning", "observability"],
        product: ["System design", "workflow automation", "documentation"]
    }
};
