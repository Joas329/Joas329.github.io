import { Link } from "react-router-dom";

export const ExperienceCard = () => {
  const experiences = [
    {
      title: "Research Assistant — Tsotsos Vision Lab",
      meta: "Toronto, ON • May 2025 – Present",
      bullets: [
        "Conducting research on surface normal estimation algorithms for binocular systems.",
        "Engineered a pipeline that transforms binocular parallel setups into convergent systems with 98% accuracy.",
        "Built Matplotlib/OpenCV visualizations to display 3D vectors and fixation geometry.",
        "Conducting experiments between geometry-based and deep learning based models for surface estimation.",
        "Collaborating on academic paper drafts related to stereo reconstruction techniques.",
      ],
    },
    {
      title: "Software Engineer — FuriLabs",
      meta: "Hong Kong (Remote) • January 2023 – Present",
      bullets: [
        "Maintainer for FuriOS Camera and FuriOS Gallery, contributing to mobile Linux ecosystem.",
        "Designed and implemented the Gallery app from scratch for FuriOS 13.0.7, featuring folder creation, automatic thumbnails, and media organization.",
        "Contributed to OS-level components involving D-Bus services, Gio interfaces, and system event handling.",
        "Represented FuriLabs at open-source/embedded conferences, showcasing developments in FuriOS.",
        "Engineered a video streaming widget using GStreamer and GTK4 for the native gallery app.",
      ],
    },
    {
      title: "Affiliated Software Developer — Canadian Space Incubator",
      meta: "Toronto, ON • December 2024 – October 2025",
      bullets: [
        "Collaborated on an ESA BEXUS payload to track Resident Space Objects during a sub-orbital balloon flight.",
        "Engineered camera interfaces to collect synchronized multispectral datasets of stars from the atmosphere.",
        "Developed a photometric calibration model for infrared imaging.",
        "Designed image processing algorithms and a UI used in Design Reviews at the Swedish Space Center.",
      ],
    },
    {
      title: "Researcher — York Space Systems",
      meta: "International Astronautical Congress (Milan, Italy) • 2024",
      bullets: [
        "Designed a communication system using I2C and UART protocols on Raspberry Pi Pico.",
        "Streamed real-time data over RF to the base station for analysis and monitoring.",
        "Published a research paper detailing findings in embedded satellite communication.",
      ],
    },
    {
      title: "Software Developer — Royal Bank of Canada",
      meta: "Toronto, ON • Jan 2023 – Aug 2023",
      bullets: [
        "Worked with Spring Boot and REST APIs for developing Chorus API features.",
        "Led a Certificate Authority migration project, enhancing network security.",
        "Supported cloud migration (OCP3 → OCP4), gaining expertise in Helios, Kubernetes, and Postman.",
        "Used Wireshark to analyze API-server and client request interactions.",
      ],
    },
    {
      title: "Software Team Lead — York University Robotics Society",
      meta: "Toronto, ON • Sept 2022 – May 2025",
      bullets: [
        "Set up Linux (Ubuntu) development environments and managed software architecture.",
        "Led rover software team, implementing multi-wheel drive and control logic.",
        "Developed low-level PID controller for 6-DoF robotic arm using ROS2 (C++/Python).",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6 md:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="glass-card glass-shine glass-sweep p-6 md:p-10">
          <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wide">
            Experience
          </h2>

          {/* Timeline */}
          <div className="relative pl-6 md:pl-10">
            {/* vertical line */}
            <div className="absolute left-2 md:left-3 top-0 bottom-0 w-[3px] bg-foreground/20 rounded-full" />

            <div className="space-y-10">
              {experiences.map((e) => (
                <div key={e.title} className="relative">
                  {/* card */}
                  <div className="glass-panel p-5 md:p-6 text-left">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {e.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mt-1 mb-4">
                      {e.meta}
                    </p>

                    <ul className="list-disc pl-5 space-y-1 text-foreground/85">
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional: CTA row */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact" className="glass-button-primary">
              Contact Me
            </Link>
            <a href="/assets/Joaquin_Philco_CV.pdf" download className="glass-button-ghost">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
