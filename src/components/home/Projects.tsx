import React from 'react';

interface Project {
  image: string;
  name: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    image: '/assets/daatti.png',
    name: 'Daatti Home Collection',
    description: 'A Multivendor E-commerce Platform',
    tags: ['Next Js', 'React', 'Nest Js', 'Tailwind'],
    link: 'https://www.daattihomecollection.com/',
  },
  {
    image: '/assets/moesdeli.png',
    name: 'MOE"S DELI',
    description: 'A Food Business Website with Yelp Integration',
    tags: ['Wordpress', 'CSS-3', 'Yelp'],
    link: 'https://moesdelioc.com/',
  },
  {
    image: '/assets/crp.png',
    name: 'Valerie Taylor Trust',
    description: 'The Valerie Taylor Trust is the UK support organisation for Centre for the Rehabilitation of the Paralysed.',
    tags: ['Wordpress', 'CSS-3', 'Social Media'],
    link: 'https://www.crp-bangladesh.org/',
  },
  {
    image: '/assets/pawfect.png',
    name: 'Pawfect',
    description: 'A UI/UX Design Concept for a Pet Social App',
    tags: ['Figma', 'UI Design', 'UX', 'Social Media'],
    link: '/assets/pawfect-figma.pdf',
  },
  {
    image: '/assets/edTech.png',
    name: 'Educare',
    description: 'Educare is an ed-tech software',
    tags: ['NodeJs', 'NextJs', 'React'],
    link: '#',
  },
  {
    image: '/assets/krayonmag.jpeg',
    name: 'Krayonmag',
    description: 'An online storytelling platform',
    tags: ['Wordpress', 'CSS-3', 'Social Media'],
    link: '#',
  },
  {
    image: '/assets/rewrap.png',
    name: 'Repwrap',
    description: 'Repwrap is a task management tool',
    tags: ['NodeJs', 'NextJs', 'React', 'Java'],
    link: '#',
  },
  {
    image: '/assets/managementtool.png',
    name: 'AgroAwsaf',
    description: 'AgroAwsaf is an ecommerce for agriculture.',
    tags: ['NodeJs', 'VueJs', 'Type ORM', 'MongoDB'],
    link: '#',
  },
  {
    image: '/assets/nori.png',
    name: 'Noree',
    description: 'Noree is an AI assistant app',
    tags: ['NodeJs', 'React', 'React Native'],
    link: '#',
  },
  {
    image: '/assets/finance.png',
    name: 'Finch Web Application',
    description: 'Finch is a finance management web application',
    tags: ['NodeJs', 'React'],
    link: '#',
  },
  {
    image: '/assets/finchFinance.png',
    name: 'Finch Mobile Application',
    description: 'Finch is a finance management app',
    tags: ['NodeJs', 'React', 'React Native'],
    link: '#',
  },
  {
    image: '/assets/financeApp.png',
    name: 'Finch Website',
    description: 'Finch is a finance management website',
    tags: ['NodeJs', 'React'],
    link: '#',
  },
  
  {
    image: '/assets/sagsio.png',
    name: 'Sagsio',
    description: 'Sagsio is a digital ERP SAAS application',
    tags: ['NodeJs', 'NextJs', 'React', 'Java'],
    link: '#',
  },
  {
    image: '/assets/motamot.png',
    name: 'Motamot',
    description: 'An online platform for sharing and voting on opinions.',
    tags: ['Next Js', 'React', 'Laravel', 'Wireframe'],
    link: 'https://motamot.io/',
  },
];


const Projects: React.FC = () => {
  return (
    <section className="py-16 sm:py-20" id="projects">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-left text-3xl font-medium tracking-tight sm:text-4xl">
          World-class digital products, From ideas to execution
        </h2>
        <div className="mt-10 flex flex-col gap-28">
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="grid gap-8 lg:grid-cols-3">
              {projects.map((project) => (
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
                    <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border-green-500 text-green-600 rounded-full border bg-white dark:bg-primary-400/10 px-3 py-1 text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
