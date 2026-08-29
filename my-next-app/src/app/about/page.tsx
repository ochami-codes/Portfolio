import Image from "next/image";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "SQL",
  "REST APIs",
  "Authentication",
  "RBAC",
];

export default function About() {
  return (
    <section className="min-h-screen bg-[var(--color-background)] px-6 py-20">
      <div className="max-w-5xl mx-auto fade-slide show">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient">
          About Me
        </h1>

        {/* Card */}
        <div className="bg-[var(--color-surface)] rounded-3xl p-8 md:p-10 shadow-lg card-hover">
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/profile.jpg"
                alt="Ian Ochami"
                width={176}
                height={176}
                className="
                  w-44
                  h-44
                  rounded-full
                  object-cover
                  border-4
                  border-[var(--color-primary)]
                  shadow-xl
                "
              />
            </div>

            {/* Content */}
            <div className="text-[var(--color-foreground)] space-y-6">

              <p className="leading-8 text-lg">
                I’m a full-stack developer from Kenya with a passion for
                building clean, modern, and meaningful digital experiences.
                I enjoy turning ideas into functional, scalable systems and
                using technology to solve real-world problems.
              </p>

              <p className="leading-8 text-lg">
                I have mastered full-stack web development across both
                frontend and backend technologies, including building
                responsive interfaces, REST APIs, authentication systems,
                role-based access control, and database-driven applications.
              </p>

              <p className="leading-8 text-lg">
                Beyond technology, I’m passionate about using digital tools
                for meaningful work. I’m particularly interested in digital
                evangelism and building solutions that can serve people,
                communities, and mission-driven organizations.
              </p>

              {/* Skills */}
              <div>
                <h2 className="font-semibold mb-4 text-[var(--color-foreground)] text-xl">
                  Technologies & Skills
                </h2>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        bg-[var(--color-surface-light)]
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        text-[var(--color-foreground)]
                        hover:bg-[var(--color-primary)]
                        transition
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Button */}
              <div className="pt-4">
                <a
                  href="/files/CV.pdf"
                  download
                  className="
                    inline-block
                    bg-[var(--color-primary)]
                    hover:bg-[var(--color-secondary)]
                    px-6
                    py-3
                    rounded-xl
                    text-white
                    font-medium
                    btn-glow
                    transition
                  "
                >
                  Download CV
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
