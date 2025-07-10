import { useEffect, useState } from "react";

const useLoopingTypewriter = (phrases, typingSpeed = 100, pauseTime = 2000) => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    let currentPhrase = phrases[phraseIndex];
    const typing = setInterval(() => {
      setText(currentPhrase.substring(0, charIndex));
      setCharIndex((prev) => prev + 1);

      if (charIndex > currentPhrase.length) {
        clearInterval(typing);

        setTimeout(() => {
          setCharIndex(0);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, pauseTime);
      }
    }, typingSpeed);

    return () => clearInterval(typing);
  }, [charIndex, phraseIndex, phrases, typingSpeed, pauseTime]);

  return text;
};

export default useLoopingTypewriter;
