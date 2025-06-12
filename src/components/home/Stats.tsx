import React from 'react';

interface StatItem {
  number: string;
  label: string;
}

const stats: StatItem[] = [
  { number: '500+', label: 'Successfull Projects' },
  { number: '600+', label: 'Satisfied Clients' },
  { number: '1000+', label: 'Expert Consultations' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900" id="stats">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <p className="text-lg font-bold text-primary-950/70 dark:text-primary-200/70 sm:text-xl">{stat.number}</p>
              <p className="mt-2 text-lg font-medium text-primary-950/70 dark:text-primary-200/70 sm:text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
