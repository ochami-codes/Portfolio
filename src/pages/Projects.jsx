export default function Projects() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">My Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Project Card 1 */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800">Project Name</h3>
          <p className="mt-3 text-gray-600">Short description of the project.</p>

          <a
            className="inline-block mt-4 text-blue-600 hover:underline"
            href="#"
          >
            View Project →
          </a>
        </div>

        {/* Copy the card and edit for more projects */}
      </div>
    </section>
  );
}