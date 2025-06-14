import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';

const testimonials = [
  { name: 'Albert', message: 'The team truly listened and brought our vision to life. The communication and dedication were top-notch.' },
  { name: 'Samantha Johnston', message: 'I was impressed with how smooth and professional the entire process was. Highly recommend them!' },
  { name: 'Leena Maladhari', message: 'They didn’t just deliver a project, they delivered confidence. I’d definitely work with them again.' },
  { name: 'Neal Mehta', message: 'They exceeded our expectations. Everything was done on time, and the results speak for themselves.' },
  { name: 'Khimily', message: 'Working with them was a breeze. They understood our needs and delivered with precision.' },
  { name: 'James Davis', message: 'We saw real results within weeks. Their expertise is unmatched in the field.' },
  { name: 'Olivia Wilson', message: 'The quality of work and their commitment to excellence stood out. A fantastic team to collaborate with.' },
  { name: 'William Taylor', message: 'From day one, they made us feel like a priority. The results were incredible.' },
  { name: 'Ava Thomas', message: 'I loved the attention to detail and the level of creativity they brought to our project.' },
  { name: 'Liam White', message: 'They didn’t just deliver; they impressed at every step. Very professional and easy to work with.' },
];

export default function TestimonialSlider() {
  useEffect(() => {
    // Hide default navigation arrows
    const style = document.createElement('style');
    style.innerHTML = `
      .swiper-button-next,
      .swiper-button-prev {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full py-8">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-[80%]"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div className="bg-primary-500/10 dark:bg-primary-400/10 text-black dark:text-white rounded-xl p-6 shadow-lg h-full flex flex-col">
              <p className="italic text-lg text-primary-950/70 dark:text-primary-200/70 mb-4 flex-grow">"{item.message}"</p>
              <div className="text-right font-semibold text-lg text-primary-950/70 dark:text-primary-200/70">– {item.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons - Gray arrows */}
      <button 
        className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:hover:text-primary-50 dark:focus-visible:outline-primary-400"
        aria-label="Previous testimonials"
      >
        <svg 
          className="w-6 h-6 text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:hover:text-primary-50 dark:focus-visible:outline-primary-400"
        aria-label="Next testimonials"
      >
        <svg 
          className="w-6 h-6 text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}