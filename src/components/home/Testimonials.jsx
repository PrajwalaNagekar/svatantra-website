import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Aarav Sharma',
        age: 3,
        image: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
        rating: 5,
        testimonial: 'svatantra montessori house of children helps children become independent right from a young age, and with true Montessori way of education.Pravena is a passionate educator and it’s a completely child focused school.And whenever we asked Pravena regarding any queries on parenting tips during lock- down period to overcome parental anxieties, she always counseled us, which helped us in fostering a better parent - child relationship.They have taken care online classes very well and child is able to follow and put in lot of efforts to address their needs',
    },
    {
        name: 'Saanvi Mehta',
        age: 4,
        image: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
        rating: 4,
        testimonial: 'One of the best Montessori I have experienced and seen.Its like a second home for my son.As we were not very much satisfied by the normal schooling methodologies experienced through our elder son, we wanted to try alternate schooling methods for our second son Vihith Ram, who started his montessori schooling at The Svatantra Montessori.We are more than happy with the option we sought for him.As, The mentors made him feel very comfortable and he loves his school environment from the day one.We feel very fortunate for opting the Montessori method for our child through Svatantra !!',
    },
    {
        name: 'Vivaan Kumar',
        age: 3,
        image: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
        rating: 5,
        testimonial: 'If you are looking for a "REAL" Montessori school, Svatantra Monstessori is THE BEST in this part of Bangalore. Read the full review below, but more importantly, make sure you visit school to experience yourself. Took almost a year to write this review and was deliberate in my action as wanted to experience firsthand, took enough time and then act. Having returned from the UK, experienced Montessori method, understood and trusted that Montessori is the BEST for my kids & their future, next step was to freeze on the school that offered Montessori education and that’s the toughest part!',
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
        <div className="w-full px-4 py-12 bg-gray-50">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black mb-8 font-extrabold"
                style={{ fontFamily: 'Nunito, sans-serif' }}>Feedbacks</h2>

            <div className="relative max-w-3xl mx-auto bg-white rounded-lg shadow-lg px-6 py-12 sm:px-10 sm:py-16">
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
                        <span className="text-sm text-gray-500 ml-2">{age} years</span>
                    </div>
                    <p className="mt-4 text-gray-600 italic max-w-2xl">“{testimonial}”</p>
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
    );
};

export default TestimonialSlider;
