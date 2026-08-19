import { useState, type FormEvent } from "react";
import {
  Github,
  Twitter,
  Mail,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { user } from "../lib/data";
import { supabase } from "../lib/supabase";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterStatus("loading");

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email });

    if (error) {
      if (error.code === "23505") {
        setNewsletterStatus("success");
        setEmail("");
      } else {
        setNewsletterStatus("error");
      }
    } else {
      setNewsletterStatus("success");
      setEmail("");
    }
  };

  return (
    <footer className="px-6 py-12 mt-12 border-t bg-surface border-gray-800">
      <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-3">
        {/* Brand + copyright */}
        <div className="flex flex-col gap-4">
          <div className="text-xl font-bold tracking-wider font-heading text-accent">
            Icy.Dev
          </div>
          <p className="text-sm text-primary/50">
            Building modern web solutions that perform and convert.
          </p>
          <div className="text-sm text-primary/50">
            &copy; {new Date().getFullYear()} Icy.Dev. All rights reserved.
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold tracking-wider uppercase text-accent">
            Newsletter
          </h3>
          <p className="text-sm text-primary/50">
            Subscribe for updates on new projects and web development tips.
          </p>
          {newsletterStatus === "success" ? (
            <div className="flex items-center gap-2 text-sm text-accent">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              You're subscribed! Thanks for joining.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 text-sm rounded-md border bg-background border-gray-700 text-primary placeholder:text-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                disabled={newsletterStatus === "loading"}
                className="flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm font-bold whitespace-nowrap rounded-md bg-accent text-background transition-all hover:bg-white disabled:opacity-60"
              >
                {newsletterStatus === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
          {newsletterStatus === "error" && (
            <div className="flex items-center gap-2 text-sm text-red-400">
              <AlertCircle className="h-4 w-4 shrink-0" />
              Something went wrong. Please try again.
            </div>
          )}
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold tracking-wider uppercase text-accent">
            Connect
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${user.email}`}
              className="flex items-center gap-1.5 text-sm font-medium text-primary/60 transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href={user.socials.x}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-primary/60 transition-colors hover:text-accent"
            >
              <Twitter className="h-4 w-4" />
              X
            </a>
            <a
              href={user.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-primary/60 transition-colors hover:text-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={user.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-primary/60 transition-colors hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
