import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const softSkills = [
    "Problem Solving",
    "Analytical Thinking",
    "Attention to Detail",
    "Team Collaboration",
    "Time Management",
    "Quick Learner",
  ];

  const progLang = [
    "Java",
    "Groovy",
    "C",
    "C++",
    "Python",
    "PHP",
    "Dart",
    "HTML",
    "CSS",
    "JavaScript",
  ];

  const appDev = [
    "React",
    "Django",
    "Laravel",
    "Flask",
    "Flutter",
    "Express",
    "Spring Boot",
    "Node",
    "AppSheet",
    "MySQL",
    "MongoDB",
  ];

  const entrepTools = [
    "Git/GitHub",
    "Katalon Studio",
    "Jira",
    "Confluence",
    "Salesforce",
    "Bruno",
    "Postman",
    "Microsoft Dynamics 365",
    "Azure Cosmos DB",
    "DBeaver",
    "Oracle",
    "Looker Studio",
    "Google Apps Script",
    "UNIX Shell (Basic)",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-800 to-purple-300 to-purple-100 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-purple-500/30  transition-all bg-black/50">
            <p className="text-gray-300 mb-6">
              Magna Cum Laude Computer Science graduate with proven expertise in
              Full-Stack Development (MERN, Flask/React). I possess hands-on
              experience delivering full-cycle software projects , including
              building scalable systems and engineering robust API endpoints. My
              skills span the MERN stack, Flutter/Dart mobile development , and
              an understanding of enterprise-level Quality Engineering ,
              ensuring high-quality, testable code from architecture to
              deployment.
            </p>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">My Favorite Track!</h3>
              <div className="flex flex-wrap gap-2">
                <div style={{ maxWidth: "400px", margin: "0 auto" }}>
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/track/07LZPF6LzXu19GhVyqWF81?utm_source=generator&theme=0"
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {progLang.map((tech, key) => (
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
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Application/Software Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {appDev.map((tech, key) => (
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
                <h3 className="text-xl font-bold mb-4"> Enterprise Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {entrepTools.map((tech, key) => (
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
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-purple-500/30 transition-all bg-black/50">
              <h3 className="text-xl font-bold mb-4"> Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-justify">
                <li>
                  <strong>
                    {" "}
                    Pamantasan ng Lungsod ng Maynila (2021-2025){" "}
                  </strong>{" "}
                  - B.S Computer Science (Magna Cum Laude)
                </li>
                <li>
                  <strong>National Teachers College (2019-2021)- </strong>{" "}
                  Science, Technology, Engineering and Mathematics (With High
                  Honors)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-purple-500/30 transition-all bg-black/50">
              <h3 className="text-xl font-bold mb-4"> Work Experience </h3>

              <div className="space-y-8 text-gray-300">
                {/* Quality Engineer Section */}
                <div>
                  <h4 className="font-semibold mb-2">
                    Quality Engineer Intern at Manulife (Sept 2025 – Dec 2025)
                  </h4>
                  <ul className="text-justify list-disc ml-5 space-y-1">
                    <li>
                      Completed an intensive Software Engineering training
                      program covering modern web technologies including
                      ReactJS, Apollo GraphQL, Node.js, REST APIs, and
                      Agile-Scrum methodologies.
                    </li>
                    <li>
                      Performed end-to-end manual and automation testing
                      (UI/API) for the CWS KLO project using Katalon,
                      Salesforce, Microsoft Dynamics 365, and Bruno.
                    </li>
                    <li>
                      Developed and executed automated workflows using Groovy
                      scripts to enhance testing efficiency and coverage.
                    </li>
                    <li>
                      Managed the full defect tracking lifecycle using Jira and
                      Confluence, ensuring all bugs were documented with
                      detailed evidence according to QE standards.
                    </li>
                    <li>
                      Interacted with Azure Cosmos DB and DBeaver for database
                      validation and migration testing.
                    </li>
                    <li>
                      Actively participated in Agile ceremonies, including daily
                      stand-ups, sprint planning, and retrospectives, to ensure
                      alignment with team goals.
                    </li>
                  </ul>
                </div>

                {/* Application Developer Section */}
                <div>
                  <h4 className="font-semibold mb-2">
                    Application Developer at Third Generation Holding
                    Corporation (2024)
                  </h4>
                  <ul className="text-justify list-disc ml-5 space-y-1">
                    <li>
                      Created an internal document request, retrieval, and form
                      creation application using Google AppSheet, significantly
                      reducing manual labor and streamlining operational
                      processes.
                    </li>
                    <li>
                      Spearheaded end-to-end application testing by distributing
                      a test version across all company departments to validate
                      functionality and gather feedback.
                    </li>
                    <li>
                      Designed and deployed dynamic dashboards and reports using
                      AppSheet and Looker Studio, improving internal reporting
                      efficiency.
                    </li>
                    <li>
                      Automated document generation workflows via Google Sheets
                      and Apps Script, reducing manual work by ~50%.
                    </li>
                    <li>
                      Customized forms and backend workflows to streamline data
                      input and retrieval processes.
                    </li>
                    <li>
                      Provided IT support for hardware/software troubleshooting
                      and issue resolution across departments.
                    </li>
                    <li>
                      Conducted system evaluations and submitted structured
                      defect reports to improve internal tools.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-purple-500/30  transition-all bg-black/50 gap-6 mt-8">
            <div className="text-gray-300 font-bold mb-4 gap-4">
              My Favorite Track
              <div style={{ maxWidth: "400px", margin: "0 auto" }}>
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/track/4JGKZS7h4Qa16gOU3oNETV?utm_source=generator&theme=0"
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>
          </div> */}
        </div>
      </RevealOnScroll>
    </section>
  );
};
