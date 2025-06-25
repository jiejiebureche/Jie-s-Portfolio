import { RevealOnScroll } from "../RevealOnScroll";

export const KeyAchievements = () => {
  return (
    <section
      id="keyachievements"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-800 to-purple-300 to-purple-100 bg-clip-text text-transparent text-center">
            {" "}
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/50">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Enhancement of Gated Recurrent Unit for Speech Emotion
                Recognition in the Implementation of Voice-Based Danger
                Recognition System
              </h3>
              <p className="text-gray-400 mb-4 text-justify">
                This study identifies overfitting in GRU-based emotion models
                and effectively combats it using a trio of dropout (20%), batch
                normalization, and Xavier initialization—yielding a solid boost
                in performance and enabling its deployment in voice-based danger
                recognition system created using flask.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Flask",
                  "Deep Learning",
                  "Speech Emotion Recognition (SER)",
                  "Gated Recurrent Units (GRU)",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-[#11071a] text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://www.researchgate.net/publication/387947074_An_Enhancement_of_Gated_Recurrent_Unit_GRU_for_Speech_Emotion_Recognition_in_the_Implementation_of_Voice-Based_Danger_Recognition_System?channel=doi&linkId=67838c2432c79152e3cde379&showFulltext=true"
                  className="text-purple-500 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-purple-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">PrismViz</h3>
              <p className="text-gray-400 mb-4 text-justify">
                PrismViz is a Next.js-based interactive data visualization web
                application system with a primary focus on data report
                generation. It is designed to transform raw data into
                insightful, actionable reports that is made easier with the help
                of an AI assistant function.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TensorFlow", "D3.js", "Flask"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-[#11071a] text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://prismviz.vercel.app/"
                  className="text-purple-500 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Cosmic Script Compiler</h3>
              <p className="text-gray-400 mb-4 text-justify">
                A completion project for the course program{" "}
                <strong>Compiler Design </strong>
                where we had to make our own programming language and compiler.
                Cosmic Script is a compiler based on the simple syntax of Python
                and C++. This compiler is aimed at anyone who appreciates an
                out-of-this-world theme and wants to learn programming in a
                unique and simple way.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Tkinter", "Figma", "Git/Github"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-purple-500/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/dssrts/COSMIC_SCRIPT"
                  className="text-purple-500 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                Renacimiento Application
              </h3>
              <p className="text-gray-400 mb-4 text-justify">
                This mobile app was developed exclusively for Renacimiento
                Manila, a private cultural organization dedicated to the
                cultural revival of Manila. Designed for smartphones and
                tablets, the app streamlines event participation and
                transactions, while also serving as a platform to promote the
                preservation of the city's rich heritage. It supports the
                organization's mission to renew, rebuild, and revitalize Manila
                by showcasing its history, empowering local arts, and inspiring
                collective action toward a cultural renaissance of the "Pearl of
                the Orient."
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Dart", "Figma", "Android Studio", "Firebase", "Git/Github"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-purple-500/10 text-purple-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-purple-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://drive.google.com/file/d/1ghOzRmHdouIgStCcllpzWX090lWbuSsH/view?usp=sharing"
                  className="text-purple-500 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
