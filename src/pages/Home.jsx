import React, { lazy, useState } from 'react';
import { Link } from 'react-router-dom';
// import WhyChooseUs from '../components/home/WhyChooseUs';
// import Testimonials from '../components/home/Testimonials';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import G1 from '../assets/images/gallery/g1.jpeg'
import G2 from '../assets/images/gallery/g2.jpeg'

import G3 from '../assets/images/gallery/g3.jpeg'
import BookAVisitForm from '../components/home/BookAVisitForm'

const WhyChooseUs = lazy(() => import('../components/home/WhyChooseUs'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const carouselItems = [
  {
    image: G1,
    heading: 'Your Child Our Responsibility',
    subtitle: "Svatantra is about Holistic and child Centric Education",

    buttonText: 'Contact Us',
    link: '/contact',
  },
  {
    image: G2,
    heading: 'Education And Care For Your Children',
    subtitle: "The Education of even a small child,therefore, doesnot aim at preparing him or her  for school, but for life.",
    buttonText: 'Get Started',
    link: '/about',
  },
  {
    image: G3,
    heading: 'Teacher Training',
    subtitle: "Get trained from experts and start your career  as a Montessiori teacher",
    buttonText: 'Get Started',
    link: '/teacher-training',
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
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
              <h2
                className="text-3xl md:text-7xl font-bold mb-3 flex flex-wrap justify-center gap-2 leading-tight fade-in-up"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
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

              <p
                className="text-sm md:text-2xl font-semibold max-w-xl mb-5 md:mb-6 px-2 md:px-4 text-white/90 fade-in-up"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {item.subtitle}
              </p>

              <Link
                to={item.link}
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-4 rounded-full shadow text-sm md:text-base fade-in-up"
              >
                {item.buttonText}
              </Link>
            </div>


          </div>
        ))}

        {/* Controls */}
        {/* Controls - place after carouselItems.map */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 md:left-8 text-white text-3xl bg-black/50 px-3 py-2 rounded-full hover:bg-black/70"
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 md:right-8 text-white text-3xl bg-black/50 px-3 py-2 rounded-full hover:bg-black/70"
        >
          <MdOutlineKeyboardArrowRight />
        </button>

      </div>

      {/* Why Choose Us Section */}
      <div className="relative z-0">
        <WhyChooseUs />
        <BookAVisitForm />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
