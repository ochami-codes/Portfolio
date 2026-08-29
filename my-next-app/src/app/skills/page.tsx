const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and modern user interfaces with component-based architecture.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Developing secure APIs, server-side applications, and business logic for full-stack systems.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Authorization",
      "RBAC",
      "API Integration",
    ],
  },
  {
    title: "Databases",
    description:
      "Working with relational and NoSQL databases to design and manage application data.",
    skills: [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Database Design",
      "Data Modeling",
    ],
  },
  {
    title: "Development & Tools",
    description:
      "Using modern development workflows and tools to build, test, deploy, and maintain applications.",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "npm",
      "Environment Variables",
      "API Testing",
    ],
  },
  {
    title: "Security",
    description:
      "Applying security principles to authentication, authorization, APIs, and application architecture.",
    skills: [
      "Authentication",
      "Authorization",
      "RBAC",
      "Secure API Design",
      "Session Management",
      "Web Security",
    ],
  },
  {
    title: "Other Skills",
    description:
      "Additional capabilities that support software development and problem solving.",
    skills: [
      "Problem Solving",
      "System Design",
      "Technical Research",
      "Debugging",
      "Digital Evangelism",
    ],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-glow px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">
            Skills & Technologies
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-300 leading-7">
            A collection of technologies and development skills I use to
            design, build, secure, and deploy modern full-stack applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="
                glass
                rounded-2xl
                p-6
                card-hover
              "
            >
              <h2 className="text-xl font-bold text-white">
                {category.title}
              </h2>

              <p className="mt-3 text-sm text-gray-400 leading-6">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      bg-gray-800
                      border
                      border-gray-700
                      text-sm
                      text-gray-300
                      hover:border-blue-500
                      hover:text-blue-400
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Full-Stack Summary */}
        <div className="mt-10 glass rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            Full-Stack Development
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-gray-300 leading-7">
            I build complete web applications across the frontend, backend,
            and database layers. My experience includes designing responsive
            interfaces, developing RESTful APIs, implementing authentication
            and role-based access control, working with both SQL and NoSQL
            databases, and deploying applications to production.
          </p>
        </div>

      </div>
    </section>
  );
}