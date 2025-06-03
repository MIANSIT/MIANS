import React from 'react';

const projects = [
  {
    image: "/assets/daatti.png",
    name: 'Daatti Home Collection',
    description:
      'We approach understanding your unique challenges, deep diving into your business story and guidelines, and collaborating with your idea to find the best solutions, which can deliver real-time results.',
    link: "https://www.daattihomecollection.com/",
  },
  {
    image: "/assets/motamot.png",
    name: 'Motamot',
    description:
      'We create your ideas into structured layouts through our wireframing service, converting your vision into clear and user-friendly designs. Our wireframes help you visualize your project’s workflow and functionality, making development smoother and more efficient.',
    link: "https://motamot.io/",
  },
  {
    image: "/assets/pawfect.png",
    name: 'Pawfect',
    description:
      'MIANS crafts visual-dependent interfaces that not only look great but guide users effectively. Whether for websites or apps, we offer user-friendly experiences to engage the targeted users through our designs.',
      link: "/assets/pawfect-figma.pdf",
  },
  {
    image: "/assets/moesdeli.png",
    name: 'MOE"S DELI',
    description:
      'Moe’s Deli is a gourmet sandwich shop based in Orange County, California, specializing in handcrafted sandwiches, subs, wraps, soups, and fresh salads. The website offers a bold and appetizing visual experience, showcasing their signature stacked sandwiches front and center. Visitors can easily explore the deli’s offerings through sections like “Our Menu,” “Our Locations,” “Catering,” and “3rd Party Delivery.” The site prominently features convenient “Order Online & Delivery” buttons, catering to both individual cravings and event needs. Moe’s Deli proudly serves multiple OC cities, including Anaheim, Irvine, Santa Ana, and more, delivering mouthwatering deli favorites with speed and flavor.',
      link: "https://moesdelioc.com/",
  },
];

const Projects = () => {
  return (
    <section className="py-16 sm:py-20" id="projects">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-left text-3xl font-medium tracking-tight sm:text-4xl">
          Projects
        </h2>
        <div className="flex flex-col gap-28 mt-10">
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="grid gap-8 lg:grid-cols-3">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.link}
                  className="flex flex-col gap-6 rounded-3xl bg-primary-500/10 px-6 py-8 dark:bg-primary-400/10 transition-transform duration-200 hover:scale-105"
                >
                  <div className="text-blue-500">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-48 w-full object-fit rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
                      {project.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
