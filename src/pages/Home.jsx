import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import Testimonial from '../components/home/Testimonials';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const carouselItems = [
  {
    image: 'https://svatantra.in/assets/img/banner0.jpeg',
    heading: 'Your Child Our Responsibility',
    subtitle: "The Education of even a small child,therefore, doesnot aim at preparing him or her  for school, but for life.",
    buttonText: 'Contact Us',
    link: '/contact',
  },
  {
    image: 'https://svatantra.in/assets/img/banner0.jpeg',
    heading: 'Education And Care For Your Children',
    subtitle: "Svatantra is about Holistic and child Centric Education",
    buttonText: 'Get Started',
    link: '/about',
  },

];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Carousel Section */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <img
              src={item.image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 flex flex-wrap justify-center gap-2">
                {item.heading.split(' ').map((word, index) => {
                  const colors = ['text-white', 'text-yellow-400', 'text-white', 'text-blue-400'];
                  const colorClass = colors[index % colors.length];
                  return (
                    <span key={index} className={colorClass}>
                      {word}
                    </span>
                  );
                })}
              </h2>
              <Link
                to={item.link}
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full shadow"

              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/50 px-2 py-1 rounded hover:bg-black/70 z-20"
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/50 px-2 py-1 rounded hover:bg-black/70 z-20"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative z-0">
        <WhyChooseUs />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
