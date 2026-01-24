import { useMemo, useState } from "react";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { ContactPanel } from "@/components/ContactPanel";

import { ChevronDown, ExternalLink } from "lucide-react";

const ProjectItem = ({ project, isOpen, onToggle }) => {
  return (
    <div className="glass-card glass-shine glass-sweep overflow-hidden">
      {/* Image */}
      <div className="h-[420px] sm:h-[500px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Body */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left p-6 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs tracking-widest uppercase text-foreground/60 mb-2">
              {project.category}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              {project.title}
            </h2>
          </div>

          <ChevronDown
            className={[
              "mt-2 shrink-0 transition-transform duration-300",
              isOpen ? "rotate-180" : "rotate-0",
            ].join(" ")}
          />
        </div>

        <p className="mt-4 text-foreground/80">{project.summary}</p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-foreground/70">
          {project.tags.map((t) => (
            <span
              key={t}
              className="glass-panel px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand */}
        <div
          className={[
            "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
            isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0",
          ].join(" ")}
        >
          <div className="overflow-hidden">
            <hr className="my-4 border-foreground/20" />
            <p className="text-sm md:text-base text-foreground/80 mb-5">
              {project.details}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    link.variant === "solid"
                      ? "glass-button-primary"
                      : "glass-button-ghost",
                    "inline-flex items-center gap-2",
                  ].join(" ")}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export const Projects = () => {
  const projects = useMemo(
    () => [
      {
        category: "Robotics",
        title: "6 DoF Robotic Arm",
        image: "/assets/6DoFRoboticArm.jpg",
        summary:
          "Six Degrees of Freedom robotic arm with custom firmware, inverse kinematics, and encoder-based PID control using ROS2.",
        tags: ["ROS2", "C++", "Embedded"],
        details:
          "This project features inverse kinematics solved analytically, real-time telemetry over UDP, and a modular ROS2 driver with PID auto-tuning and encoder offset correction.",
        links: [
          { label: "View Project", href: "https://github.com/Joas329/arm_control.git", variant: "ghost" },
        ],
      },
      {
        category: "Linux Mobile",
        title: "FuriOS Gallery Application",
        image: "/assets/FuriLabsLogo.png",
        summary:
          "Native gallery app for the FuriOS mobile Linux system with folder creation, media previews, and DBus/Gio integration.",
        tags: ["Linux Mobile", "Gallery", "DBus"],
        details:
          "Built for FuriOS 13.0.7 using C++ and QML, featuring dynamic thumbnails and system media hooks.",
        links: [
          { label: "View Project", href: "https://furilabs.com/gallery-app/", variant: "ghost" },
          { label: "GitHub", href: "https://github.com/FuriLabs/furios-gallery", variant: "solid" },
        ],
      },
      {
        category: "Space Systems",
        title: "REXUS/BEXUS ESA Mission",
        image: "/assets/SOBER.jpeg",
        summary:
          "ESA stratospheric balloon mission focused on Resident Space Object detection.",
        tags: ["ESA", "REXUS/BEXUS", "Research"],
        details:
          "Hardware integration for optical tracking and development of star-detection pipelines, collaborating with ESA engineers during campaign week in Esrange.",
        links: [
          { label: "View Mission", href: "https://rexusbexus.net/bexus/", variant: "ghost" },
        ],
      },
      {
        category: "Linux Mobile",
        title: "FuriOS Camera Application",
        image: "/assets/FuriLabsLogo.png",
        summary:
          "Maintained and modernized the native FuriOS camera app with QR scanning, GPS geotagging, and performance improvements.",
        tags: ["Camera", "GeoClue", "QML/C++"],
        details:
          "Added async photo capture, optimized DBus interfaces, integrated QR decoding, and reduced launch time by 30%.",
        links: [
          { label: "View Project", href: "https://github.com/FuriLabs/furios-camera/", variant: "solid" },
        ],
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Background />
      <Navbar />

      <main className="relative z-10">
        <section className="max-w-6xl mx-auto py-24 px-6">
          <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wide">
            Projects
          </h2>

          <div className="space-y-10">
            {projects.map((p, idx) => (
              <ProjectItem
                key={p.title}
                project={p}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
        </section>
      </main>

      <ContactPanel />
    </div>
  );
};
