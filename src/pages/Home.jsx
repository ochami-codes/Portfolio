export default function Home() {
  return (
    <section className="text-center py-20 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900">
        Hi, I'm <span className="text-blue-600">Ian Ochami</span>
      </h1>

      <p className="text-xl text-gray-600 mt-4">
        Aspiring Full-Stack Developer • Digital Evangelist • Tech Creator
      </p>

      <a
        href="/projects"
        className="mt-8 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700"
      >
        View My Projects
      </a>
    </section>
  );
}