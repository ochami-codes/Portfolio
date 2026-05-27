import { useEffect, useState } from "react";

export default function Projects() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const projects = [
    {
      name: "ChurchApp",
      description:
        "A scalable multi-tenant church management platform designed for membership administration, financial tracking, and secure organizational workflows. Features authentication, role-based access control, and architecture supporting multiple churches within one system.",
      tech:
        "React • Node.js • Express • SQL • Authentication • RBAC • Multi-tenancy",
      link: "https://your-churchapp-link.com",
    },

    {
      name: "Second Advent Ministries",
      description:
        "A responsive digital evangelism platform providing Bible stories, Christian articles, and educational resources with emphasis on accessibility, usability, and engagement.",
      tech:
        "HTML5 • CSS3 • JavaScript (Vanilla) • Responsive Design",
      link: "https://advent-project.vercel.app",
    },
  ];

  return (
    <section className="px-6 py-16 max-w-5xl mx-auto bg-gray-900 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Featured Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl
            ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-white">
              {project.name}
            </h3>

            <p className="mt-4 text-gray-300 leading-relaxed">
              {project.description}
            </p>

            <p className="mt-4 text-sm text-blue-400">
              {project.tech}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-blue-500 font-medium hover:text-blue-400 hover:underline"
            >
              View Live Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
                      }
