import { Link } from "react-router-dom";

export const ProjectsCard = () => {
  const projects = [
    {
      title: "6 DoF Robotics Arm",
      desc: "Six Degrees of Freedom robotics arm with inverse kinematics and custom firmware.",
      img: "/assets/6DoFRoboticArm.jpg",
      hideOnMobile: false,
    },
    {
      title: "FuriOS Gallery Application",
      desc: "Native gallery application for the mobile Linux operating system FuriOS.",
      img: "/assets/FuriLabsLogo.png",
      hideOnMobile: false,
    },
    {
      title: "REXUS/BEXUS ESA",
      desc: "European Space Agency stratospheric balloon mission for Resident Space Objects.",
      img: "/assets/SOBER.jpeg",
      hideOnMobile: true,
    },
    {
      title: "FuriOS Camera Application",
      desc: "Native camera application for the mobile Linux operating system FuriOS.",
      img: "/assets/FuriLabsLogo.png",
      hideOnMobile: true,
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4 md:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">

          {/* 🔹 Background image INSIDE the card */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/assets/background1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.45,
            }}
          />

          {/* 🔹 Dark tint for readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* 🔹 Content */}
          <div className="relative z-10 p-6 md:p-10">
            <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wide text-white">
              Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className={[
                    "relative group rounded-xl overflow-hidden shadow-lg",
                    p.hideOnMobile ? "hidden md:block" : "",
                  ].join(" ")}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-[400px] object-cover"
                  />

                  {/* Card overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

                  {/* Text */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] glass-panel p-4 text-white">
                    <div className="text-3xl font-bold group-hover:text-4xl group-hover:text-cyan-300 transition-all duration-300">
                      {p.title}
                    </div>
                    <div className="text-base mt-1 group-hover:text-lg group-hover:text-cyan-100 transition-all duration-300">
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <Link
                to="/projects"
                className="glass-button-ghost inline-block py-6 px-12 text-xl hover:text-2xl transition-all duration-300 text-white"
              >
                Check Out All My Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
