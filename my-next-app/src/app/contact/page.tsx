"use client";

import { useState } from "react";
import {
  User,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      access_key: "ac21e58f-c588-4acb-bcfc-28fa05d61109",
    };

    try {
      setSending(true);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        form.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      } else {
        console.error("Web3Forms error:", result);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setSending(false);
    }
  };

 return (
  <section className="min-h-screen bg-[var(--color-background)] px-6 py-16">
    <div className="max-w-xl mx-auto">
      {/* Gradient Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient">
        Contact Me
      </h1>

      {/* Form Card */}
      <div className="bg-[var(--color-surface)] rounded-2xl p-6 md:p-8 shadow-xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative group">
            <User
              className="absolute top-3.5 left-3 w-5 h-5 text-[var(--color-border)] group-focus-within:text-[var(--color-primary)] transition-colors"
            />
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              required
              className="peer w-full pl-10 pr-3 py-3 border border-[var(--color-border)] rounded-lg bg-[var(--color-background)] text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
            />
            <label
              htmlFor="name"
              className="absolute left-10 top-3 text-[var(--color-border)] pointer-events-none transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[var(--color-primary)] peer-valid:top-0 peer-valid:text-xs peer-valid:text-[var(--color-primary)]"
            >
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative group">
            <Mail
              className="absolute top-3.5 left-3 w-5 h-5 text-[var(--color-border)] group-focus-within:text-[var(--color-primary)] transition-colors"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              required
              className="peer w-full pl-10 pr-3 py-3 border border-[var(--color-border)] rounded-lg bg-[var(--color-background)] text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
            />
            <label
              htmlFor="email"
              className="absolute left-10 top-3 text-[var(--color-border)] pointer-events-none transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[var(--color-primary)] peer-valid:top-0 peer-valid:text-xs peer-valid:text-[var(--color-primary)]"
            >
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative group">
            <MessageCircle
              className="absolute top-3.5 left-3 w-5 h-5 text-[var(--color-border)] group-focus-within:text-[var(--color-primary)] transition-colors"
            />
            <textarea
              id="message"
              name="message"
              placeholder=" "
              required
              className="peer w-full pl-10 pr-3 py-3 h-32 border border-[var(--color-border)] rounded-lg bg-[var(--color-background)] text-[var(--color-foreground)] resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
            />
            <label
              htmlFor="message"
              className="absolute left-10 top-3 text-[var(--color-border)] pointer-events-none transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-[var(--color-primary)] peer-valid:top-0 peer-valid:text-xs peer-valid:text-[var(--color-primary)]"
            >
              Your Message
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={sending}
            className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--color-secondary)] disabled:opacity-60 disabled:cursor-not-allowed transition-all btn-glow"
          >
            <Send className="w-5 h-5" />
            {sending ? "Sending..." : "Send Message"}
          </button>

          {/* Success */}
          {success && (
            <p className="text-green-400 font-medium text-center">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>

      {/* Contact Information */}
      <div className="mt-8 p-6 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)]">
        <h2 className="text-xl font-semibold text-[var(--color-foreground)] mb-5 text-center">
          Other Ways to Reach Me
        </h2>

        <div className="space-y-4">
          {/* Email */}
          <a
            href="mailto:ochamiian29@gmail.com"
            className="flex items-center gap-3 p-3 bg-[var(--color-surface-light)] rounded-lg hover:bg-[var(--color-primary)] transition"
          >
            <Mail className="text-[var(--color-primary)] w-5 h-5 flex-shrink-0" />
            <span className="text-[var(--color-foreground)] break-all">
              ochamiian29@gmail.com
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+254795044356"
            className="flex items-center gap-3 p-3 bg-[var(--color-surface-light)] rounded-lg hover:bg-[var(--color-primary)] transition"
          >
            <Phone className="text-[var(--color-primary)] w-5 h-5 flex-shrink-0" />
            <span className="text-[var(--color-foreground)]">
              +254 795 044 356
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/254795044356"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-600 py-3 rounded-lg text-white font-semibold hover:bg-green-700 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);
}