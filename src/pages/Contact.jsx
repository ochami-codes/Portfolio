export default function Contact() {
  return (
    <section className="px-6 py-16 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h2>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
        />

        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded h-32"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}