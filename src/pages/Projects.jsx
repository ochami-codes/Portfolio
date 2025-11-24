import { useEffect, useState } from "react";

export default function Projects() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const projects = [
    {
      name: "Project Name",
      description: "Short description of the project. Highlight what makes it unique or impactful.",
      link: "#",
    },
    {
      name: "Another Project",
      description: "Brief summary of the project. Show the purpose and technology used.",
      link: "#",
    },
    // more projects to be added here
  ];

  return (
    <section className="px-6 py-16 max-w-5xl mx-auto bg-gray-900 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 200}ms` }}
            className={`bg-gray-800 rounded-xl p-6 shadow-lg transition-transform duration-500 ease-out hover:scale-105 hover:shadow-2xl 
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <p className="mt-3 text-gray-300 leading-relaxed">{project.description}</p>
            <a
              className="inline-block mt-4 text-blue-500 font-medium transition-colors duration-200 hover:text-blue-400 hover:underline"
              href={project.link}
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}