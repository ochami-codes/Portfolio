import profilePic from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image */}
        <img
          src={profilePic}
          alt="Ian Ochami"
          className="w-32 h-32 rounded-full border-4 border-blue-600 object-cover"
        />

        {/* Text Content */}
        <div className="text-gray-700 space-y-4">
          <p className="leading-relaxed fade-slide">
            I'm a dedicated developer from Kenya with a strong passion for crafting
            clean, modern, and meaningful digital experiences. I enjoy turning ideas
            into functional, intuitive interfaces and exploring new technologies that
            make a real impact.
          </p>

          <p className="leading-relaxed fade-slide">
            My journey blends technology and mission: I aim to master full-stack
            development, use digital tools to advance evangelism, and build solutions
            that uplift communities both spiritually and technologically.
          </p>

          <div className="mt-4">
            <a
              href="/Ian-Ochami-CV.pdf"
              download
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 btn-hover-shadow transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}