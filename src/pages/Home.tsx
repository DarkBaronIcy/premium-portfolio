import { useState, type FormEvent } from "react";
import {
  Code2,
  TrendingUp,
  Mail,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { user, projects } from "../lib/data";
import ProjectCard from "../components/ProjectCard";

function Hero() {
  return (
    <header className="flex max-w-6xl flex-col items-start px-6 py-24 mx-auto">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-accent animate-fade-up">
        <Code2 className="h-4 w-4" />
        Available for freelance work
      </div>
      <h1 className="mb-6 font-heading text-5xl font-extrabold leading-tight md:text-7xl animate-fade-up">
        Hi, I'm <span className="text-accent">Olamide</span>.
        <br />
        I build modern <br /> web solutions.
      </h1>
      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-primary/60 animate-fade-up">
        A multifaceted {user.role} specializing in{" "}
        {user.skills.join(" and ")}. I craft exceptional digital experiences
        using modern tools to help brands grow and succeed online.
      </p>

      <div className="flex flex-wrap gap-3 mb-10">
        {user.tools.map((tool) => (
          <span
            key={tool}
            className="px-4 py-2 text-sm rounded-md border bg-surface border-gray-700"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="px-8 py-3 font-bold rounded-full bg-accent text-background shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all hover:bg-white"
        >
          View My Work
        </a>
        <a
          href={user.socials.github}
          target="_blank"
          rel="noreferrer"
          className="px-8 py-3 font-bold rounded-full border border-surface transition-all hover:border-accent"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

function HomeAboutPreview() {
  return (
    <section id="about" className="max-w-6xl px-6 py-24 mx-auto border-t border-gray-800">
      <div className="flex flex-col gap-12 md:flex-row md:items-center">
        <div className="w-full md:w-1/2">
          <h2 className="mb-4 text-4xl font-bold font-heading">About Me</h2>
          <div className="mb-8 w-20 h-1 rounded-full bg-accent" />
          <p className="mb-6 leading-relaxed text-primary/60">
            I'm {user.firstName}, the developer behind {user.brand}. I
            specialize in bridging the gap between functional code and effective
            digital strategy.
          </p>
          <p className="mb-8 leading-relaxed text-primary/60">
            With a strong foundation in both Web Development and Digital
            Marketing, I don't just build websites — I build platforms designed
            to perform and convert.
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:underline"
          >
            Learn more about me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="w-full p-8 rounded-xl border bg-surface border-gray-800 shadow-lg shadow-black/50 md:w-1/2">
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="h-5 w-5 text-accent" />
            <h3 className="text-xl font-bold font-heading">Core Arsenal</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {user.tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-sm font-medium rounded-md border bg-background border-gray-700 text-accent"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-8 mb-4">
            <TrendingUp className="h-5 w-5 text-accent" />
            <h3 className="text-xl font-bold font-heading">Expertise</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {user.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm rounded-md border bg-background border-gray-700 text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="max-w-6xl px-6 py-24 mx-auto border-t border-gray-800">
      <div className="mb-16">
        <h2 className="mb-4 text-4xl font-bold font-heading">Featured Projects</h2>
        <div className="w-20 h-1 rounded-full bg-accent" />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/baronicy1@gmail.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-6xl px-6 py-24 mx-auto border-t border-gray-800">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold font-heading">Get In Touch</h2>
        <div className="mx-auto mb-6 w-20 h-1 rounded-full bg-accent" />
        <p className="text-primary/60">
          Have a project in mind or looking to collaborate? Send a message and
          let's build something great together.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <a
          href={`mailto:${user.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-surface bg-surface px-5 py-2.5 text-sm font-medium text-accent transition-all hover:border-accent"
        >
          <Mail className="h-4 w-4" />
          {user.email}
        </a>
      </div>

      <div className="max-w-2xl p-8 mx-auto bg-surface rounded-xl border border-gray-800 shadow-lg shadow-black/50">
        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <CheckCircle2 className="h-14 w-14 text-accent" />
            <h3 className="text-xl font-bold font-heading">Message sent!</h3>
            <p className="text-primary/60">
              Thanks for reaching out. I'll get back to you shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-2 text-sm font-medium text-accent hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New message from Icy.Dev portfolio" />
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-primary/60"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border bg-background border-gray-700 text-primary placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-primary/60"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-md border bg-background border-gray-700 text-primary placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-primary/60"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-md border bg-background border-gray-700 text-primary placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                Something went wrong. Please try emailing me directly at{" "}
                {user.email}.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center justify-center gap-2 w-full py-4 font-bold rounded-md bg-accent text-background shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAboutPreview />
      <Projects />
      <Contact />
    </>
  );
}
