import React, { useState, useEffect } from 'react';
interface Project {
  image: string;
  name: string;
  description: string;
  link: string;
}
const projects: Project[] = [
  {
    image: '/assets/daatti.png',
    name: 'Daatti Home Collection',
    description:
      'We approach understanding your unique challenges, deep diving into your business story and guidelines, and collaborating with your idea to find the best solutions, which can deliver real-time results.',
    link: 'https://www.daattihomecollection.com/',
  },
  {
    image: '/assets/motamot.png',
    name: 'Motamot',
    description:
      'We create your ideas into structured layouts through our wireframing service, converting your vision into clear and user-friendly designs. Our wireframes help you visualize your project’s workflow and functionality, making development smoother and more efficient.',
    link: 'https://motamot.io/',
  },
  {
    image: '/assets/pawfect.png',
    name: 'Pawfect',
    description:
      'MIANS crafts visual-dependent interfaces that not only look great but guide users effectively. Whether for websites or apps, we offer user-friendly experiences to engage the targeted users through our designs.',
    link: '/assets/pawfect-figma.pdf',
  },
  {
    image: '/assets/moesdeli.png',
    name: 'MOE"S DELI',
    description:
      'Moe’s Deli is a gourmet sandwich shop based in Orange County, California, specializing in handcrafted sandwiches, subs, wraps, soups, and fresh salads. The website offers a bold and appetizing visual experience, showcasing their signature stacked sandwiches front and center. Visitors can easily explore the deli’s offerings through sections like “Our Menu,” “Our Locations,” “Catering,” and “3rd Party Delivery.” The site prominently features convenient “Order Online & Delivery” buttons, catering to both individual cravings and event needs. Moe’s Deli proudly serves multiple OC cities, including Anaheim, Irvine, Santa Ana, and more, delivering mouthwatering deli favorites with speed and flavor.',
    link: 'https://moesdelioc.com/',
  },
];
const MAX_WORDS = 25; // Maximum words to show before truncation

const Projects: React.FC = () => {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  // Handle body overflow when modal is open
  useEffect(() => {
    if (openModalIndex !== null) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
    };
  }, [openModalIndex]);
  // Add this to your component
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenModalIndex(null);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const truncateText = (text: string, maxWords: number): string => {
    const words = text.trim().split(/\s+/);
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : text;
  };

  const needsTruncation = (text: string, maxWords: number): boolean => {
    return text.trim().split(/\s+/).length > maxWords;
  };

  return (
    <section className="py-16 sm:py-20" id="projects">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-left text-3xl font-medium tracking-tight sm:text-4xl">Projects</h2>
        <div className="mt-10 flex flex-col gap-28">
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="grid gap-8 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="flex h-full flex-col gap-6 rounded-3xl bg-primary-500/10 px-6 py-8 transition-all duration-200 hover:scale-105 dark:bg-primary-400/10"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 block"
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-48 w-full rounded-lg object-cover"
                    />
                  </a>
                  <div className="flex flex-grow flex-col gap-4">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
                      {truncateText(project.description, MAX_WORDS)}
                      {needsTruncation(project.description, MAX_WORDS) && (
                        <button
                          onClick={() => setOpenModalIndex(index)}
                          className="text-blue-500 ml-1.5 hover:underline"
                        >
                          Read More
                        </button>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed modal container outside main content */}
      {openModalIndex !== null && (
        <div
          style={{
            position: 'fixed',
            top: '0 !important',
            left: '0 !important',
            right: '0 !important',
            bottom: '0 !important',
            zIndex: '9999 !important',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isDarkMode ? '#1a202c' : 'white',
            color: isDarkMode ? '#e2e8f0' : '#4a5568',
          }}
          onClick={() => setOpenModalIndex(null)}
        >
          <div
            style={{
              position: 'relative',
              zIndex: '10000 !important',
              backgroundColor: isDarkMode ? '#1a202c' : 'white',
              color: isDarkMode ? '#e2e8f0' : '#4a5568',
              borderRadius: '1rem',
              maxWidth: '48rem',
              width: '100%',
              margin: '0 1rem',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold">{projects[openModalIndex].name}</h3>
                <button
                  onClick={() => setOpenModalIndex(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>
              <div className="mb-4">
                <img
                  src={projects[openModalIndex].image}
                  alt={projects[openModalIndex].name}
                  className="h-48 w-full rounded-lg object-cover"
                />
              </div>
              <p className="text-gray-700 mb-6">{projects[openModalIndex].description}</p>
              <div className="flex justify-end">
                <a
                  href={projects[openModalIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 rounded-lg px-6 py-2 text-white transition-colors"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
