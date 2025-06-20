// import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const softSkills = [
    "Analytical Thinking",
    "Attention to Detail",
    "Leadership",
    "Time Management",
    "Team Player",
  ];

  const coreSkills = [
    "Machine Learning",
    "Neural Networks",
    "Deep Learning",
    "Software Engineering",
    "Cybersecurity Basics",
  ];

  const frontendSkills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Flutter",
    "AppSheet",
    "Looker Studio",
    "Figma",
    "Tkinter",
  ];

  const backendSkills = [
    "Python",
    "Java",
    "C++",
    "C",
    "PHP",
    "Dart",
    "Flask",
    "Django",
    "Laravel",
    "Livewire",
    "MySQL",
    "Google Apps Script",
    "Git",
    "Javascript",
    "React",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      {/* <RevealOnScroll> */}
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-800 to-purple-300 to-purple-100 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-black/50">
          <p className="text-gray-300 mb-6">
            Computer Science graduate with hands-on experience in Machine
            Learning, UI/UX, and full-stack web/app development. Recognized with
            Best Abstract Award at an international research conference. Strong
            foundation in GRU based Speech Emotion Recognition, AppSheet
            automation, and UI/UX prototyping using Flutter and Figma.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#11071a] text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#11071a] text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#11071a] text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#11071a] text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(127, 67, 181, 0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-black/50">
            <h3 className="text-xl font-bold mb-4"> Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong> Pamantasan ng Lungsod ng Maynila (2021-2025) </strong>{" "}
                - B.S Computer Science
              </li>
              <li>
                <strong>National Teachers College (2019-2021)- </strong>{" "}
                Science, Technology, Engineering and Mathematics (STEM)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-black/50">
            <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  {" "}
                  IT Intern at Third Generation Holding Corporation (2024){" "}
                </h4>
                <li>
                  Designed and deployed dynamic dashboards and reports using
                  AppSheet and Looker Studio, improving reporting efficiency.
                </li>
                <li>
                  Automated document generation workflows via Google Sheets and
                  Apps Script, reducing manual work by ~50%.
                </li>
                <li>
                  Customized forms and backend workflows to streamline data
                  input and retrieval processes.
                </li>
                <li> 
                  Provided IT support for hardware/software
                  troubleshooting and issue resolution across departments.
                </li>
                <li> 
                  Conducted system evaluations and submitted structured defect
                  reports to improve internal tools.</li>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* </RevealOnScroll> */}
    </section>
  );
};
