import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isAbout = location.pathname === "/about";

  const linkClass = (path: string) =>
    `transition-colors hover:text-accent ${
      location.pathname === path ? "text-accent" : "text-primary/70"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-surface bg-background/80 backdrop-blur-md">
      <div className="flex max-w-6xl items-center justify-between px-6 py-5 mx-auto">
        <Link
          to="/"
          className="text-xl font-bold tracking-wider font-heading text-accent"
        >
          Icy.Dev
        </Link>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <a href="/#projects" className="text-primary/70 transition-colors hover:text-accent">
            Projects
          </a>
          <a href="/#contact" className="text-primary/70 transition-colors hover:text-accent">
            Contact
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-primary transition-all ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-primary transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-primary transition-all ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 px-6 pb-5 text-sm font-medium text-primary/80 md:hidden">
          <Link to="/" onClick={() => setOpen(false)} className="transition-colors hover:text-accent">
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="transition-colors hover:text-accent">
            About
          </Link>
          <a href="/#projects" onClick={() => setOpen(false)} className="transition-colors hover:text-accent">
            Projects
          </a>
          <a href="/#contact" onClick={() => setOpen(false)} className="transition-colors hover:text-accent">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
