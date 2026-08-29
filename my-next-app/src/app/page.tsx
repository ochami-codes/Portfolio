import Image from "next/image";

const roles = [
  "Full-Stack Development",
  "Web Design",
  "Problem Solving",
];

export default function Home() {
  return (
    <section className="min-h-screen bg-[var(--color-background)] flex items-center px-6">
      <div className="max-w-4xl mx-auto text-center fade-slide show">

        {/* Profile Image */}
        <Image
          src="/images/profile.jpg"
          alt="Ian Ochami"
          width={144}
          height={144}
          priority
          className="
            w-32
            h-32
            md:w-36
            md:h-36
            rounded-full
            object-cover
            border-4
            border-[var(--color-primary)]
            shadow-lg
            mx-auto
            mb-6
          "
        />

        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
          Ian Ochami
        </h1>

        {/* Title */}
        <h2 className="mt-2 text-lg md:text-xl font-medium text-gradient">
          Full-Stack Developer
        </h2>

        {/* Intro */}
        <p className="
          mt-5
          text-[var(--color-foreground)]
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
                bg-[var(--color-surface)]
                text-[var(--color-foreground)]
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
            href="/files/CV.pdf"
            download
            className="
              bg-[var(--color-primary)]
              hover:bg-[var(--color-secondary)]
              px-5
              py-2.5
              rounded-lg
              text-white
              btn-glow
              transition
            "
          >
            Download CV
          </a>

          <a
            href="/projects"
            className="
              border
              border-[var(--color-border)]
              hover:border-[var(--color-primary)]
              px-5
              py-2.5
              rounded-lg
              text-[var(--color-foreground)]
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

