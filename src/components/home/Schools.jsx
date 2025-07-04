import React, { useEffect, useRef } from 'react';

import school1 from '../../assets/images/schools/school1.png';
import school2 from '../../assets/images/schools/school2.png';
import school3 from '../../assets/images/schools/school3.jpeg';
import school4 from '../../assets/images/schools/school4.jpg';
import school8 from '../../assets/images/schools/school8.jpg';
import school6 from '../../assets/images/schools/school6.png';

const logos = [school8, school6, school1, school2, school3, school4];

const Schools = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let animationId;

        const animate = () => {
            slider.scrollLeft += 1;
            if (slider.scrollLeft >= slider.scrollWidth / 2) {
                slider.scrollLeft = 0;
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, []);

    const allLogos = [...logos, ...logos];

    return (
        <div className="w-full bg-white py-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-center text-black mb-8 font-extrabold underline decoration-pink-300"
                style={{ fontFamily: 'Nunito, sans-serif' }}>Svatantra Graduates Shine</h2>

            <div
                ref={sliderRef}
                className="w-full overflow-hidden whitespace-nowrap max-w-6xl mx-auto bg-gray-50 py-6 rounded-xl shadow-sm"
            >
                <div className="inline-flex">
                    {allLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center px-6"
                        >
                            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                                <img
                                    src={logo}
                                    alt={`school-logo-${index}`}
                                    className="h-16 md:h-28 object-contain max-w-none"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Schools;
