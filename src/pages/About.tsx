import { Link } from "react-router-dom";
import {
  Code2,
  TrendingUp,
  GraduationCap,
  Award,
  RefreshCw,
  Globe,
  Mail,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { user, projects } from "../lib/data";
import ProjectCard from "../components/ProjectCard";

const aboutCards = [
  {
    icon: Code2,
    title: "I Build Websites",
    description:
      "From concept to deployment, I create fast, responsive, and modern websites using React, JavaScript, and the latest web technologies. Every site is built to perform, scale, and deliver an exceptional user experience.",
  },
  {
    icon: RefreshCw,
    title: "I Redesign Websites",
    description:
      "Already have a website that feels outdated or underperforms? I redesign existing sites to modernize the look, improve usability, and boost conversions — without losing what already works.",
  },
  {
    icon: Award,
    title: "Certified in Website Testing",
    description:
      "I hold a certificate in Website Testing, which means I rigorously test every project for cross-browser compatibility, responsiveness, accessibility, and performance before it goes live.",
  },
  {
    icon: GraduationCap,
    title: "Computer Science Graduate",
    description:
      "With a degree in Computer Science, I bring a deep understanding of algorithms, data structures, and software engineering principles to every project I work on.",
  },
];

export default function About() {
  return (
    <div className="max-w-6xl px-6 py-24 mx-auto">
      {/* Header */}
      <div className="mb-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-accent">
          <TrendingUp className="h-4 w-4" />
          About Me
        </div>
        <h1 className="mb-6 font-heading text-5xl font-extrabold leading-tight md:text-6xl">
          Get to know <span className="text-accent">Olamide</span>.
        </h1>
        <div className="mb-8 w-20 h-1 rounded-full bg-accent" />
        <p className="max-w-3xl text-lg leading-relaxed text-primary/60">
          I'm {user.firstName}, a Computer Science graduate and the developer
          behind {user.brand}. I specialize in building and redesigning websites
          that don't just look good — they perform, convert, and grow brands
          online. With a certificate in Website Testing and a strong foundation
          in both development and digital marketing, I bring a complete skill
          set to every project.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {aboutCards.map((card) => (
          <div
            key={card.title}
            className="p-8 rounded-xl border bg-surface border-gray-800 shadow-lg shadow-black/50 transition-all hover:border-accent"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                <card.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold font-heading">{card.title}</h3>
            </div>
            <p className="leading-relaxed text-primary/60">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Skills section */}
      <section className="mt-20">
        <div className="flex items-center gap-2 mb-6">
          <Code2 className="h-5 w-5 text-accent" />
          <h2 className="text-2xl font-bold font-heading">Core Arsenal</h2>
        </div>
        <div className="flex flex-wrap gap-3 mb-12">
          {user.tools.map((tool) => (
            <span
              key={tool}
              className="px-5 py-2.5 text-sm font-medium rounded-md border bg-background border-gray-700 text-accent"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-6">
          <Globe className="h-5 w-5 text-accent" />
          <h2 className="text-2xl font-bold font-heading">Expertise</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {user.skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 text-sm rounded-md border bg-background border-gray-700 text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects preview */}
      <section className="mt-20 border-t border-gray-800 pt-16">
        <div className="mb-10">
          <h2 className="mb-4 text-4xl font-bold font-heading">My Work</h2>
          <div className="w-20 h-1 rounded-full bg-accent" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <ProjectCard key={proj.title} project={proj} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:underline"
          >
            Back to home
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 p-10 text-center border rounded-xl bg-surface border-gray-800">
        <h2 className="mb-4 text-3xl font-bold font-heading">
          Let's work together
        </h2>
        <p className="mb-8 text-primary/60">
          Have a project in mind? I'd love to hear about it.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 font-bold rounded-full bg-accent text-background shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all hover:bg-white"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${user.email}`}
            className="inline-flex items-center gap-2 px-8 py-3 font-bold rounded-full border border-surface transition-all hover:border-accent"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
}
