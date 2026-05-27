import profilePic from "../assets/profile.jpg";

export default function Home() {
  const roles = [
    "Full-Stack Development",
    "Web Design",
    "Digital Evangelism",
    "Problem Solving",
  ];

  return (
    <section className="min-h-screen bg-gray-900 flex items-center px-6">

      <div className="max-w-4xl mx-auto text-center fade-slide show">

        {/* Profile Image */}
        <img
          src={profilePic}
          alt="Ian Ochami"
          className="
            w-32
            h-32
            md:w-36
            md:h-36
            rounded-full
            object-cover
            border-4
            border-blue-500
            shadow-lg
            mx-auto
            mb-6
          "
        />

        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Ian Ochami
        </h1>

        {/* Title */}
        <h2 className="mt-2 text-lg md:text-xl text-gradient-blue-purple font-medium">

          Aspiring Full-Stack Developer • Digital Evangelist

        </h2>

        {/* Intro */}
        <p className="
          mt-5
          text-gray-300
          leading-7
          max-w-2xl
          mx-auto
        ">

          I build modern web applications, explore new technologies,
          and aim to create digital solutions that serve people,
          communities, and mission-driven work.

        </p>

        {/* Skills */}
        <div className="
          mt-6
          flex
          justify-center
          flex-wrap
          gap-2
        ">

          {roles.map((item) => (
            <span
              key={item}
              className="
                bg-gray-800
                text-gray-300
                px-3
                py-1.5
                rounded-full
                text-sm
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="
          mt-8
          flex
          justify-center
          gap-4
          flex-wrap
        ">

          <a
            href="/Ochami_Resume(1).pdf"
            download
            className="
              bg-blue-600
              hover:bg-blue-700
              px-5
              py-2.5
              rounded-lg
              text-white
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
              px-5
              py-2.5
              rounded-lg
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
