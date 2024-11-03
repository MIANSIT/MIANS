// Slider.jsx
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const strings = ['Youtuber', 'Freelancer', 'Graphics Designer', 'Web Designer', 'Web Developer'];
  const [currentText, setCurrentText] = useState('');
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
        if (currentText === '') {
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
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-start gap-8 sm:gap-10">
            <div className="flex max-w-xl flex-col items-start gap-4 sm:gap-6">
              <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                We design and build your next digital experience <br/>
                <div>
                {currentText}
                </div>
              </h1>
              <p className="text-lg text-primary-950/70 dark:text-primary-200/70 sm:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt.
              </p>
            </div>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400"
            >
              Get started
            </a>
          </div>
          <img
            className="h-auto w-full rounded-3xl"
            width="1280"
            height="640"
            src="/assets/hero.webp"
            alt="Hero picture"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
