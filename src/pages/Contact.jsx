import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa6";

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

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="relative group">
          <FaUser className="absolute top-3 left-3 text-gray-400 transition-colors duration-200 group-focus-within:text-blue-400" />
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full pl-10 p-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 peer transition-all duration-200"
            required
          />
          <label
            htmlFor="name"
            className="absolute left-10 -top-2 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base"
          >
            Your Name
          </label>
        </div>

        {/* Email Field */}
        <div className="relative group">
          <FaEnvelope className="absolute top-3 left-3 text-gray-400 transition-colors duration-200 group-focus-within:text-blue-400" />
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full pl-10 p-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 peer transition-all duration-200"
            required
          />
          <label
            htmlFor="email"
            className="absolute left-10 -top-2 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base"
          >
            Your Email
          </label>
        </div>

        {/* Message Field */}
        <div className="relative group">
          <FaCommentDots className="absolute top-3 left-3 text-gray-400 transition-colors duration-200 group-focus-within:text-blue-400" />
          <textarea
            id="message"
            placeholder="Your Message"
            className="w-full pl-10 p-3 border border-gray-700 rounded-lg bg-gray-800 text-white h-32 resize-none placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 peer transition-all duration-200"
            required
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-10 -top-2 text-gray-400 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base"
          >
            Your Message
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-blue-700 hover:scale-105"
        >
          Send Message
        </button>

        {/* Success Message */}
        {success && (
          <p className="text-green-400 font-medium mt-4 text-center animate-fadeIn">
            Thank you! Your message has been sent.
          </p>
        )}
      </form>
    </section>
  );
}