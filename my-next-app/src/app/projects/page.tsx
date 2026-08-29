const projects = [
  {
    name: "ChurchApp",
    description:
      "A scalable multi-tenant church management platform designed for membership administration, financial tracking, and secure organizational workflows. Features authentication, role-based access control, departmental management, and architecture supporting multiple churches within one system.",
    tech:
      "React • Node.js • Express • SQL • Authentication • RBAC • Multi-tenancy",
    link: "https://cms-ian-ochami-s-projects.vercel.app",
  },
  {
    name: "Second Advent Ministries",
    description:
      "A digital evangelism and content management platform under development for publishing Bible studies, devotional articles, health resources, family-life content, and other Christian educational materials. The platform is being built with a modern full-stack architecture focused on structured content, accessibility, and scalability.",
    tech:
      "Next.js • TypeScript • Tailwind CSS • Express • MongoDB • MDX • CMS",
    link: "https://second-advent-ministries.vercel.app",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[var(--color-background)] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        
        {/* Gradient Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient">
          Featured Projects
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="
                bg-[var(--color-surface)]
                rounded-xl
                p-6
                shadow-lg
                card-hover
              "
            >
              <h2 className="text-2xl font-bold text-[var(--color-foreground)]">
                {project.name}
              </h2>

              <p className="mt-4 text-[var(--color-foreground)] leading-relaxed">
                {project.description}
              </p>

              <p className="mt-4 text-sm text-[var(--color-primary)] leading-6">
                {project.tech}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  mt-5
                  text-[var(--color-primary)]
                  font-medium
                  hover:text-[var(--color-secondary)]
                  hover:underline
                  transition
                "
              >
                View Live Project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
