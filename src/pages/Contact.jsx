import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaPhone } from "react-icons/fa6";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section className="px-6 py-16 max-w-xl mx-auto bg-gray-900 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Me</h2>

      {/* FORM */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        
        {/* Name */}
        <div className="relative group">
          <FaUser className="absolute top-3 left-3 text-gray-400 group-focus-within:text-blue-400 transition-colors" />

          <input
            type="text"
            id="name"
            placeholder=" "
            className="peer w-full pl-10 p-3 border border-gray-700 rounded-lg bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />

          <label
            htmlFor="name"
            className="absolute left-10 top-3 text-gray-400 pointer-events-none transition-all
            duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-400
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
          >
            Your Name
          </label>
        </div>

        {/* Email */}
        <div className="relative group">
          <FaEnvelope className="absolute top-3 left-3 text-gray-400 group-focus-within:text-blue-400 transition-colors" />

          <input
            type="email"
            id="email"
            placeholder=" "
            className="peer w-full pl-10 p-3 border border-gray-700 rounded-lg bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />

          <label
            htmlFor="email"
            className="absolute left-10 top-3 text-gray-400 pointer-events-none transition-all
            duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-400
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
          >
            Your Email
          </label>
        </div>

        {/* Message */}
        <div className="relative group">
          <FaCommentDots className="absolute top-3 left-3 text-gray-400 group-focus-within:text-blue-400 transition-colors" />

          <textarea
            id="message"
            placeholder=" "
            className="peer w-full pl-10 p-3 h-32 border border-gray-700 rounded-lg bg-gray-800 text-white resize-none
            focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          ></textarea>

          <label
            htmlFor="message"
            className="absolute left-10 top-3 text-gray-400 pointer-events-none transition-all
            duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-400
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
          >
            Your Message
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all"
        >
          Send Message
        </button>

        {/* Success */}
        {success && (
          <p className="text-green-400 font-medium mt-4 text-center animate-fadeIn">
            Thank you! Your message has been sent.
          </p>
        )}
      </form>
{/* CONTACT INFO SECTION */}
<div className="mt-10 p-6 bg-gray-800 rounded-xl border border-gray-700">
  <h3 className="text-xl font-semibold text-white mb-4 text-center">
    Other Ways to Reach Me
  </h3>

  <div className="space-y-4">

    {/* Email */}
    <div className="flex items-center gap-3 p-3 bg-gray-700/40 rounded-lg hover:bg-gray-700 transition">
      <FaEnvelope className="text-blue-400 text-xl" />
      <p className="text-gray-300 break-all">ochamiian29@gmail.com</p>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-3 p-3 bg-gray-700/40 rounded-lg hover:bg-gray-700 transition">
      <FaPhone className="text-blue-400 text-xl" />
      <p className="text-gray-300">+254 795 044 356</p>
    </div>

    {/* WhatsApp */}
    <a
      href="https://wa.me/254795044356"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 bg-green-600 py-3 rounded-lg text-white font-semibold
      hover:bg-green-700 hover:scale-105 transition-all mt-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.96C.16 5.281 5.444 0 11.998 0c3.2 0 6.208 1.248 8.477 3.515a11.88 11.88 0 013.52 8.49c-.003 6.554-5.286 11.839-11.84 11.839a11.9 11.9 0 01-5.967-1.596L.057 24zM6.68 19.307c1.676.995 3.27 1.591 5.317 1.592 5.448 0 9.886-4.434 9.889-9.885.003-5.462-4.415-9.89-9.881-9.892C5.543 1.12 1.12 5.542 1.117 11c0 2.138.654 3.873 1.746 5.555l-.999 3.648 3.653-.996h.001zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.298.297-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.412z" />
      </svg>

      Chat on WhatsApp
    </a>
  </div>
</div>
    </section>
  );
        }import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaPhone } from "react-icons/fa6";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section className="px-6 py-16 max-w-xl mx-auto bg-gray-900 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Me</h2>

      {/* FORM */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        
        {/* Name */}
        <div className="relative group">
          <FaUser className="absolute top-3 left-3 text-gray-400 group-focus-within:text-blue-400 transition-colors" />

          <input
            type="text"
            id="name"
            placeholder=" "
            className="peer w-full pl-10 p-3 border border-gray-700 rounded-lg bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />

          <label
            htmlFor="name"
            className="absolute left-10 top-3 text-gray-400 pointer-events-none transition-all
            duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-400
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
          >
            Your Name
          </label>
        </div>

        {/* Email */}
        <div className="relative group">
          <FaEnvelope className="absolute top-3 left-3 text-gray-400 group-focus-within:text-blue-400 transition-colors" />

          <input
            type="email"
            id="email"
            placeholder=" "
            className="peer w-full pl-10 p-3 border border-gray-700 rounded-lg bg-gray-800 text-white
            focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />

          <label
            htmlFor="email"
            className="absolute left-10 top-3 text-gray-400 pointer-events-none transition-all
            duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-400
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
          >
            Your Email
          </label>
        </div>

        {/* Message */}
        <div className="relative group">
          <FaCommentDots className="absolute top-3 left-3 text-gray-400 group-focus-within:text-blue-400 transition-colors" />

          <textarea
            id="message"
            placeholder=" "
            className="peer w-full pl-10 p-3 h-32 border border-gray-700 rounded-lg bg-gray-800 text-white resize-none
            focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          ></textarea>

          <label
            htmlFor="message"
            className="absolute left-10 top-3 text-gray-400 pointer-events-none transition-all
            duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-400
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
          >
            Your Message
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all"
        >
          Send Message
        </button>

        {/* Success */}
        {success && (
          <p className="text-green-400 font-medium mt-4 text-center animate-fadeIn">
            Thank you! Your message has been sent.
          </p>
        )}
      </form>
{/* CONTACT INFO SECTION */}
<div className="mt-10 p-6 bg-gray-800 rounded-xl border border-gray-700">
  <h3 className="text-xl font-semibold text-white mb-4 text-center">
    Other Ways to Reach Me
  </h3>

  <div className="space-y-4">

    {/* Email */}
    <div className="flex items-center gap-3 p-3 bg-gray-700/40 rounded-lg hover:bg-gray-700 transition">
      <FaEnvelope className="text-blue-400 text-xl" />
      <p className="text-gray-300 break-all">ochamiian29@gmail.com</p>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-3 p-3 bg-gray-700/40 rounded-lg hover:bg-gray-700 transition">
      <FaPhone className="text-blue-400 text-xl" />
      <p className="text-gray-300">+254 795 044 356</p>
    </div>

    {/* WhatsApp */}
    <a
      href="https://wa.me/254795044356"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 bg-green-600 py-3 rounded-lg text-white font-semibold
      hover:bg-green-700 hover:scale-105 transition-all mt-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.96C.16 5.281 5.444 0 11.998 0c3.2 0 6.208 1.248 8.477 3.515a11.88 11.88 0 013.52 8.49c-.003 6.554-5.286 11.839-11.84 11.839a11.9 11.9 0 01-5.967-1.596L.057 24zM6.68 19.307c1.676.995 3.27 1.591 5.317 1.592 5.448 0 9.886-4.434 9.889-9.885.003-5.462-4.415-9.89-9.881-9.892C5.543 1.12 1.12 5.542 1.117 11c0 2.138.654 3.873 1.746 5.555l-.999 3.648 3.653-.996h.001zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.173.198-.298.297-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.412z" />
      </svg>

      Chat on WhatsApp
    </a>
  </div>
</div>
    </section>
  );
          }
