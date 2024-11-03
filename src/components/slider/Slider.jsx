// Slider.jsx
import React, { useEffect, useState } from "react";

const Slider = () => {
  const strings = [
    "Youtuber",
    "Freelancer",
    "Graphics Designer",
    "Web Designer",
    "Web Developer",
  ];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typeSpeed = 150;
  const backSpeed = 70;
  const pauseTime = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[index];

      if (isDeleting) {
        setCurrentText(currentString.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }
      } else {
        setCurrentText(currentString.substring(0, currentText.length + 1));
        if (currentText === currentString) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? backSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, index]);

  return (
    <section>
      <div class="w-full flex justify-center">
        <div class="flex justify-center items-center">
          <h1 class="text-3xl font-bold">
            We are <span class="text-red mr-1">{currentText}</span>
            <span class="inline-block w-1 h-8 mx-1 animate-blink"></span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Slider;
