//import { RevealOnScroll } from "../RevealOnScroll";
import DecryptedText from "./DecryptedText";
import profileImage from "D:/GITHUB REPOS/Jie-s-Portfolio/jie-project/src/assets/Jie-Pic.JPG"; // adjust path if needed

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* <RevealOnScroll> */}
      <div className="flex flex-col md:flex-row items-center justify-center text-left z-10 px-4 gap-8">
        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Jie Sepeda"
          className="w-52 h-68 aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-2 border-purple-800 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-transform transform hover:-translate-y-1"
        />

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-800 to-purple-300 to-purple-100 bg-clip-text text-transparent leading-right">
            <DecryptedText
              text="Hi, I'm Jie Sepeda!"
              speed={100}
              maxIterations={20}
              characters="ABCD#%$*12"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            A Computer Science Graduate from Pamantasan ng Lungsod ng Maynila
            focusing on Full Stack Development
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-purple-800 to-purple-300 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-purple-500/50 py-3 px-6 rounded font-medium transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10
              text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-100"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      {/* </RevealOnScroll> */}
    </section>
  );
};
