import React from 'react';
import {
  FaChalkboardTeacher,
  FaDrawPolygon,
  FaLaptopCode,
  FaSearch,
  FaUserCheck,
  FaCloudUploadAlt,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaChalkboardTeacher size={30} />,
    name: 'Consulting',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    icon: <FaDrawPolygon size={30} />,
    name: 'Wireframing',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    icon: <FaUserCheck size={30} />,
    name: 'UI/UX',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    icon: <FaLaptopCode size={30} />,
    name: 'Developing',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    icon: <FaSearch size={30} />,
    name: 'Testing',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    icon: <FaCloudUploadAlt size={30} />,
    name: 'Deploying',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
];

const workflow = [
  { name: 'Developing', icon: <FaLaptopCode size={40} /> },
  { name: 'Testing', icon: <FaSearch size={40} /> },
  { name: 'Deploying', icon: <FaCloudUploadAlt size={40} /> },
  { name: 'Consulting', icon: <FaChalkboardTeacher size={40} /> },
  { name: 'Wireframing', icon: <FaDrawPolygon size={40} /> },
  { name: 'UI/UX', icon: <FaUserCheck size={40} /> },
];

const Services = () => {
  const circleRadius = 150;
  const iconRadius = 160;

  return (
    <section className="py-16 sm:py-20"  id="services">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-12 text-left text-3xl font-medium tracking-tight sm:text-4xl">
          Services
        </h2>
        <div className="mt-40 flex flex-col gap-28 md:mt-0">
          <div className="mb-20 flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-12 hidden lg:mb-0 lg:block lg:w-1/2">
              <h3 className="mb-6 text-2xl font-semibold">Your Vision is our Mision</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                We follow a structured and systematic approach to turn your vision into reality. Our
                workflow includes the following key steps: Consulting, Wireframing, UI/UX Design,
                Development, Testing, and Deployment. Each step is handled by experienced
                professionals to ensure quality and efficiency.
              </p>
            </div>

            {/* Circular Diagram (Right) */}
            <div className="relative flex items-center justify-center lg:w-1/2">
              {/* Visible Circle */}
              <div className="border-gray-300 absolute h-[350px] w-[350px] rounded-full border-4"></div>

              {/* Center Text */}
              <div className="bg-gray-800 relative z-10 flex h-24 w-24 items-center justify-center rounded-full text-center dark:text-primary-50 text-primary-600">
                Your Vision
              </div>

              {/* Circular Workflow Icons */}
              {workflow.map((item, index) => {
                const angle = (index / workflow.length) * 360; // Calculate angle
                const x = Math.cos((angle * Math.PI) / 180) * iconRadius; // x-position
                const y = Math.sin((angle * Math.PI) / 180) * iconRadius; // y-position

                return (
                  <div
                    key={item.name}
                    className="shadow-lg absolute flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white dark:bg-primary-950"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      // left: '50%',
                      // top: '50%',
                    }}
                  >
                    <div className="text-blue-500">{item.icon}</div>
                    <p className="mt-2 text-center text-sm">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="grid gap-8 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="flex flex-col gap-6 rounded-3xl bg-primary-500/10 px-6 py-8 dark:bg-primary-400/10"
                >
                  <div className="text-blue-500">{service.icon}</div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium">{service.name}</h3>
                    <p className="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
                      {service.description}
                    </p>
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

export default Services;