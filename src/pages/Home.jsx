import profilePic from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center px-6">

      <div className="max-w-5xl mx-auto text-center fade-slide show">

        {/* Profile Image */}
        <img
          src={profilePic}
          alt="Ian Ochami"
          className="
            w-44
            h-44
            mx-auto
            rounded-full
            border-4
            border-blue-500
            object-cover
            shadow-xl
            mb-8
          "
        />

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white text-shadow-md leading-tight">

          Building purposeful digital experiences with

          <span className="block text-gradient-blue-purple mt-2">
            code, creativity & mission
          </span>

        </h1>

        {/* Intro */}
        <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8">

          I'm <span className="font-semibold text-white">Ian Ochami</span>,
          an aspiring full-stack developer from Kenya passionate about
          creating modern web applications, solving real problems through
          technology, and advancing digital evangelism through impactful tools.

        </p>

        {/* Roles */}
        <div className="mt-6 flex justify-center flex-wrap gap-3">

          {[
            "Full-Stack Development",
            "Web Design",
            "Digital Evangelism",
            "Problem Solving",
            "Tech Projects",
          ].map((item) => (
            <span
              key={item}
              className="
                bg-gray-800
                px-4
                py-2
                rounded-full
                text-sm
                text-gray-300
              "
            >
              {item}
            </span>
          ))}

        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="/CV.pdf"
            download
            className="
              bg-blue-600
              hover:bg-blue-700
              px-7
              py-3
              rounded-xl
              text-white
              font-medium
              btn-hover-shadow
            "
          >
            Download CV
          </a>

          <a
            href="/projects"
            className="
              border
              border-gray-600
              hover:border-blue-500
              hover:text-blue-400
              px-7
              py-3
              rounded-xl
              text-gray-200
              transition
            "
          >
            View Projects
          </a>

        </div>

      </div>

    </section>
  );
}