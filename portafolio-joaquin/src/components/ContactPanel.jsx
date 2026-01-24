import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

export const ContactPanel = () => {
  return (
    <section
      id="contact"
      className="relative w-full mt-32"
    >
      {/* Full-width glass band */}
      <div className="glass-card glass-shine glass-sweep rounded-none px-6 md:px-16 py-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">

          {/* Heading */}
          <div>
            <h3 className="text-4xl md:text-5xl font-semibold mb-3">
              Get in Touch
            </h3>
          </div>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row gap-6 text-lg">
            <a
              href="mailto:joaquinphilco@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Mail size={20} /> Email
            </a>

            <a
              href="https://github.com/Joas329"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Github size={20} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/joaquin-philco/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-foreground/20 my-4" />

          {/* Footer note */}
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Joaquin Philco · Toronto, Canada
          </p>

          {/* Inline Back to Top */}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="glass-button-ghost flex items-center gap-2 mt-4"
          >
            <ArrowUp size={18} />
            Back to Top
          </button>
        </div>
      </div>

      {/* Floating Back-to-Top (optional, very nice UX) */}
      <button
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        className="
          fixed bottom-6 right-6 z-50
          glass-panel glass-sweep
          w-12 h-12
          flex items-center justify-center
          hover:scale-105 transition
        "
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </section>
  );
};
