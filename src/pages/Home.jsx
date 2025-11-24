import profilePic from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="text-center py-20 bg-gray-50">
      {/* Profile Image */}
      <img
        src={profilePic}
        alt="Ian Ochami"
        className="w-40 h-40 mx-auto rounded-full border-4 border-blue-600 object-cover mb-6"
      />

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900">
        Hi, I'm <span className="text-gradient-blue-purple">Ian Ochami</span>
      </h1>

      {/* Subheading */}
      <p className="text-xl text-gray-600 mt-4">
        Aspiring Full-Stack Developer • Digital Evangelist • Tech Creator
      </p>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <a
          href="/Ian-Ochami-CV.pdf"
          download
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 btn-hover-shadow transition"
        >
          Download CV
        </a>

        <a
          href="/projects"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 btn-hover-shadow transition"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
}