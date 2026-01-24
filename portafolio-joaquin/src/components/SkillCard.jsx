const IconTile = ({ name, src, href }) => {
  const node = (
    <div className="skill-tile" title={name} aria-label={name}>
      <img
        src={src}
        alt={name}
        draggable="false"
        style={{
          width: 28,
          height: 28,
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
      {node}
    </a>
  ) : (
    node
  );
};


const Section = ({ title, items }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-xs tracking-widest uppercase text-foreground/50 text-center">
        {title}
      </h3>

      {/* row of icons */}
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((it) => (
          <IconTile key={it.name} {...it} />
        ))}
      </div>
    </div>
  );
};

// Simple Icons CDN (SVG)
const si = (slug) => `https://cdn.simpleicons.org/${slug}`;

export const SkillsCard = () => {
  const sections = [
    {
      title: "Languages",
      items: [
        { name: "Python", src: si("python") },
        { name: "C++", src: si("cplusplus") },
        { name: "Java", src: si("openjdk") },
        { name: "Bash", src: si("gnubash") },
        { name: "CMake", src: si("cmake") },
        { name: "HTML5", src: si("html5") },
        { name: "JavaScript", src: si("javascript") },
      ],
    },
    {
      title: "Frameworks",
      items: [
        { name: "ROS 2", src: si("ros") },
        { name: "Qt / QML", src: si("qt") },
        { name: "GTK", src: si("gtk") },
        { name: "Spring Boot", src: si("springboot") },
        { name: "JUnit", src: si("junit5") },
        { name: "React", src: si("react") },
        { name: "Tailwind CSS", src: si("tailwindcss") },
        { name: "Libadwaita", src: si("gnome") },
      ],
    },
    {
      title: "Developer Tools",
      items: [
        { name: "Git", src: si("git") },
        { name: "Postman", src: si("postman") },
        { name: "Docker", src: si("docker") },
        { name: "CLion", src: si("jetbrains") },
        { name: "GitHub", src: si("github") },
      ],
    },
    {
      title: "Platforms & Hardware",
      items: [
        { name: "Linux", src: si("linux") },
        { name: "NVIDIA", src: si("nvidia") },
        { name: "Raspberry Pi", src: si("raspberrypi") },
        { name: "Arduino", src: si("arduino") },
      ],
    },
    {
      title: "Miscellaneous",
      items: [
        { name: "Terminal", src: si("gnometerminal") },
        { name: "LaTeX", src: si("latex") },
        { name: "GNU Radio", src: si("gnubash") },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-24"
    >
      <div className="w-full max-w-6xl p-8 md:p-14 glass-card glass-shine glass-sweep">
        <div className="relative z-10">
          <div className="flex justify-center gap-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide center-in">
              Skills
            </h2>
          </div>

          <div className="space-y-10">
            {sections.map((s) => (
              <Section key={s.title} title={s.title} items={s.items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
