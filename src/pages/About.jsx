import { useEffect, useState } from "react";
import profilePic from "../assets/profile.jpg";

export default function About() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const skills = [
    "React",
    "Node.js",
    "Express",
    "JavaScript",
    "SQL",
    "REST APIs",
    "Authentication",
    "RBAC",
  ];

  return (
    <section
      className={`min-h-screen bg-gray-900 px-6 py-20 transition-all duration-1000 fade-slide ${
        fadeIn ? "show" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-gradient-blue-purple text-shadow-md">
          About Me
        </h2>

        {/* Card */}
        <div className="bg-gray-800 rounded-3xl p-8 md:p-10 shadow-lg card-hover-shadow">

          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={profilePic}
                alt="Ian Ochami"
                className="
                  w-44
                  h-44
                  rounded-full
                  object-cover
                  border-4
                  border-blue-500
                  shadow-xl
                "
              />
            </div>

            {/* Content */}
            <div className="text-gray-300 space-y-6">

              <p className="leading-8 text-lg">
                I’m a passionate developer from Kenya focused on building
                clean, modern, and meaningful digital experiences.
                I enjoy turning ideas into functional systems and exploring
                technologies that solve real problems.
              </p>

              <p className="leading-8 text-lg">
                My journey combines technology with mission. I aim to master
                full-stack development, build impactful solutions, and use
                digital tools to support evangelism and uplift communities.
              </p>

              {/* Skills */}
              <div>
                <h3 className="font-semibold mb-4 text-white">
                  Technologies & Skills
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        bg-gray-700
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        text-gray-200
                        hover:bg-blue-600
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
                  href="/my-cv.pdf"
                  download
                  className="
                    inline-block
                    bg-blue-600
                    hover:bg-blue-700
                    px-6
                    py-3
                    rounded-xl
                    text-white
                    font-medium
                    btn-hover-shadow
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
