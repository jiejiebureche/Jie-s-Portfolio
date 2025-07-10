import { useRef, useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ChevronRight, ChevronLeft } from "lucide-react";
import py1 from "../../assets/py1.png";
import ibm from "../../assets/ibm.png";
import cyess from "../../assets/cyess.png";
import iness from "../../assets/iness.png";
import istrel from "../../assets/istrel.jpg";
import uijrt from "../../assets/uijrt.png";

const certifications = [
  {
    title: "CISCO: \n Cybersecurity Essentials",
    description:
      "An intermediate-level, self-paced course that explores core cybersecurity concepts such as threat analysis, network security, cryptography, and risk management. It builds practical skills in identifying and responding to cybersecurity threats, implementing security measures, and applying security principles in various IT environments.",
    skills: ["Cybersecurity", "Threat Analysis", "Risk Management"],
    preview: cyess,
    pdf: "https://drive.google.com/file/d/1voEGIlMVvEuc4HTr19xKhILqBh6g5W-t/view?usp=drive_link",
  },
  {
    title: "CISCO: \n Introduction to Cybersecurity Certificate",
    description:
      "A free, self-paced beginner-level course that provides a broad overview of cybersecurity. Topics include common threats and vulnerabilities, best practices for personal and organizational protection, and career insights in the field.",
    skills: ["Cybersecurity", "Best Practices", "Threat Awareness"],
    preview: iness,
    pdf: "https://drive.google.com/file/d/1h30QzX4mDrRLZUs_guymm3rMjKZ_BCVQ/view?usp=drive_link",
  },
  {
    title: "CISCO: \n Python Essentials 1",
    description:
      "An introductory, self-paced course that teaches the basics of Python programming. It covers fundamental concepts like variables, data types, control structures, functions, and basic data structures, preparing learners for the PCEP certification. Ideal for beginners with no prior coding experience.",
    skills: ["Python", "Problem Solving", "PCEP Preparation"],
    preview: py1,
    pdf: "https://drive.google.com/file/d/1_LVSBNnW0DGKSlqgwsKMO8JWY6DHEybJ/view?usp=sharing",
  },
  {
    title: "IBM SkillsBuild: \n Artificial Intelligence Fundamentals",
    description:
      "Covered the core concepts of Artificial Intelligence, including machine learning, neural networks, and their real-world applications. Emphasized ethical considerations and the impact of AI across various industries.",
    skills: ["AI", "Machine Learning", "Ethical AI"],
    preview: ibm,
    pdf: "https://drive.google.com/file/d/1G9yBrnhXinj4Ca2qMfQYYY9132w5xe3G/view?usp=sharing",
  },
  {
    title: "UIJRT: \n Certificate of Publication (Thesis)",
    description:
      "Our study, published in an international publication, identifies overfitting in GRU-based emotion models and effectively combats it using a trio of dropout (20%), batch normalization, and Xavier initialization—yielding a solid boost in performance.",
    skills: ["AI", "Machine Learning", "Deep Learning"],
    preview: uijrt,
    pdf: "https://drive.google.com/file/d/1xLhLfsTR8EvhvSABVLVL03pkM6SXrRG7/view?usp=drive_link",
  },
  {
    title: "ISTREL: \n Certificate of Presentation & Best Abstract Award(Thesis)",
    description:
      "Our study, presented at an international conference, explores innovative techniques in Machine/Deep Learning, particularly in the realm of emotion recognition. We received the Best Abstract Award for our findings.",
    skills: ["AI", "Machine Learning", "Deep Learning"],
    preview: istrel,
    pdf: "https://drive.google.com/file/d/1szPrBj8gKe9ord0X0NR3WMQRXfctIvx0/view?usp=drive_link",
  },
  // Add more...
];

export const Certifications = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      return () => scrollContainer.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <section id="certifications" className="py-20 w-full">
      <RevealOnScroll>
        <div className="w-full px-4 relative">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-800 to-purple-300 to-purple-100 bg-clip-text text-transparent text-center">
            Certifications
          </h2>

          {/* Scroll Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll(-350)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 text-white p-4 rounded-full hover:bg-purple-500 transition"
            >
              <ChevronLeft size={28} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll(350)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 text-white p-4 rounded-full hover:bg-purple-500 transition"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Scrollable Certificate Cards */}
          <div
            ref={scrollRef}
            className="w-full flex space-x-6 overflow-x-auto scrollbar-hide py-4 pl-5 pr-24"
          >
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[320px] max-w-[320px] h-[460px] flex-shrink-0 rounded-xl border border-white/10 hover:border-purple-500/50 transition hover:-translate-y-1 shadow-md bg-black/50"
              >
                <div className="flex flex-col text-left p-4 h-full">
                  <img
                    src={cert.preview}
                    alt={`${cert.title} preview`}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                  <h3 className="font-semibold text-sm mb-1 text-white text-center">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-300 italic text-justify leading-relaxed mb-3">
                    {cert.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 justify-center">
                    {cert.skills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-purple-500/10 text-purple-500 py-0.5 px-2 
          rounded-full text-xs transition hover:bg-purple-500/20 
          hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
