import { MapPin, GraduationCap, Mail, Github, Linkedin } from "lucide-react";

export const MainCard = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-7xl p-8 md:p-14 glass-card glass-shine">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* LEFT COLUMN */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-foreground">
              Joaquin Philco
            </h1>

            <p className="text-base md:text-lg text-foreground/80">
              Computer Engineering graduate with hands-on experience in robotics,
              industry, research, open-source and CubeSat communications.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="glass-button-primary">
                View My Work
              </a>

              <a href="/assets/Joaquin_Philco_CV.pdf" download className="glass-button-ghost">
                Download CV
              </a>
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold mb-2">About Me</h3>
              <p className="text-foreground/80 mb-3">
                Final-year Computer Engineering student (York University, May 2025 grad)
                with expertise in embedded systems, robotics, and software development...
              </p>

              <ul className="list-disc list-inside text-foreground/80 space-y-1">
                <li>BEng with Honours in Computer Engineering</li>
                <li>Open source contributor</li>
                <li>Python, C++, Java, Bash</li>
              </ul>
            </div>

            <div className="text-xs uppercase text-foreground/60 mt-6">
              Currently <br />
              Research Assistant at{" "}
              <a
                href="https://jtl.lassonde.yorku.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Tsotsos Lab
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-sm text-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin size={16} /> Toronto, Canada
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={16} /> York University
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:joaquinphilco@gmail.com" className="underline">
                  Email
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github size={16} />
                <a href="https://github.com/Joas329" className="underline">
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} />
                <a href="https://www.linkedin.com/in/joaquin-philco/" className="underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
            <div className="glass-panel">
              <img
                src="/assets/me.jpg"
                alt="Joaquin Philco"
                className="w-full max-w-sm md:max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
