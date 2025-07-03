import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Ramesh Babu',
        age: 3,
        image: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
        rating: 5,
        testimonial: 'We have admitted our daughter to Svatantra in the year 2022 and she has completed her 3 years of montessori journey and learnt a lot with full of fun and joy. All the staff were well trained with high quality of teaching skills. Ambience is also very nice.I strongly recommend Montessori method of learning for any kid.When we say Montessori, many schools are doing business in the name of Montessori, but svatantra is practicing the concept strictly without any compromise.'
    },
    {
        name: 'Asha bharath',
        age: 3,
        image: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
        rating: 5,
        testimonial: 'As a parent of two kids, I always wanted my kids to enjoy their learning, get individual attention, not pressurised and I could able to see all this at Svatantra Montessori. Pravena and team are doing really a very good job. I am very much happy about the progress of my kids at Svatantra.',
    },
    {
        name: 'Sahana Pramod',
        age: 10,
        image: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
        rating: 5,
        testimonial: 'Svatantra Montessori School has been a fantastic environment for my child’s growth. The classrooms are beautifully organized, and the Montessori materials are of high quality, fostering a love for learning. The teachers are Montessori-certified and provide excellent guidance, allowing children to explore and learn at their own pace.The school community is very welcoming, with plenty of opportunities for parental involvement.it is like a second house for my son.we are really satisfied with myson\'s improvement over an yearOver all, Svatantra Montessori School has provided a nurturing and enriching environment for my child’s development.I highly recommend it to other parents looking for a Montessori education." Thanks lot to Ms. Praveena.',
    },
  
];

const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const { name, age, image, rating, testimonial } = testimonials[current];

    return (
        <div className="w-full px-4 py-12">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black mb-8 font-extrabold underline decoration-pink-300"
                    style={{ fontFamily: 'Nunito, sans-serif' }}>Testimonials</h2>

                <div className="relative max-w-5xl mx-auto bg-white rounded-3xl  px-6 py-12 sm:px-14 sm:py-16 lg:px-20 lg:py-20">
                    {/* Left Button */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white w-10 h-10 rounded-full shadow flex items-center justify-center"
                    >
                        ‹
                    </button>

                    {/* Testimonial Content */}
                    <div className="flex flex-col items-center text-center px-4 sm:px-8">
                        <img
                            src={image}
                            alt={name}
                            className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                        <div className="flex items-center justify-center gap-2 mt-2 text-yellow-500">
                            {[...Array(rating)].map((_, idx) => (
                                <FaStar key={idx} />
                            ))}
                            <span className="text-sm text-gray-500 ml-2"><span className="text-sm text-gray-500 ml-2">
                                {age} {current < 2 ? 'weeks' : 'months'} ago
                            </span>
                            </span>
                        </div>
                        <p className="mt-4 text-gray-600 italic max-w-3xl">“{testimonial}”</p>
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white w-10 h-10 rounded-full shadow flex items-center justify-center"
                    >
                        ›
                    </button>
                </div>
            </div>
        </div>

    );
};

export default TestimonialSlider;
