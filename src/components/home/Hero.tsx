import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const strings: string[] = [
    'Digital Services',
    'Custom App Development',
    'IT Consulting',
    'UI/UX Design',
    'Branding',
  ];
  const [currentText, setCurrentText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const typeSpeed: number = 150;
  const backSpeed: number = 70;
  const pauseTime: number = 1500;

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
    <section className="py-16 sm:py-20" style={{ backgroundImage: 'url(/MIANS/assets/heroImage.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-start gap-8 sm:gap-10">
            <div className="flex flex-col items-start gap-4 sm:gap-6">
              <h1 className="w-full text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                We are your one-stop solution <br /> for{' '}
                <span className="underline">{currentText}</span>
              </h1>
              <p className="text-lg text-primary-950/70 dark:text-primary-200/70 sm:text-xl">
                We don't just develop solutions, we craft experiences that reflect your visions and
                brings your idea to life. With the right amount of creativity, technical expertise,
                and a deep understanding of your goals blended together, we create digital products
                that resonate with your audience and elevate your brand. Let's turn your aspirations
                into impactful solutions!
              </p>
            </div>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:hover:text-primary-50 dark:focus-visible:outline-primary-400"
            >
              Begin Your Journey{' '}
            </a>
          </div>
          <div className="rounded-3xl py-10 shadow-dark-md">
            <div className="flex items-center justify-center gap-10 text-white">
              <h1 className="animate-gazzle-text-light dark:animate-gazzle-text-dark relative text-5xl font-bold">
                <span>Design</span>
              </h1>
              <span className="text-orange-500 animate-gazzle-text-light dark:animate-gazzle-text-dark text-3xl">•</span>
              <h1 className="animate-gazzle-text-light dark:animate-gazzle-text-dark relative text-5xl font-bold">
                <span>Develop</span>
              </h1>
              <span className="text-orange-500 animate-gazzle-text-light dark:animate-gazzle-text-dark text-3xl">•</span>
              <h1 className="animate-gazzle-text-light dark:animate-gazzle-text-dark relative text-5xl font-bold">
                <span>Deploy</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
