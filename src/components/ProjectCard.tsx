import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  image: string;
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="block overflow-hidden transition-all duration-300 bg-surface rounded-xl border border-gray-800 shadow-lg shadow-black/50 group hover:border-accent"
    >
      <div className="h-60 overflow-hidden bg-gray-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top opacity-80 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
      </div>
      <div className="p-6">
        <p className="mb-2 text-xs font-bold tracking-wider uppercase text-accent">
          {project.category}
        </p>
        <h3 className="mb-4 text-2xl font-bold font-heading">{project.title}</h3>
        <span className="flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors group-hover:text-accent">
          View Live Project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
}
