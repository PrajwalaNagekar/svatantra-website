import React from 'react';
import DifferencesImage from '../../../assets/images/differences/image.png';

const Differences = () => {
    return (
        <div className="container mx-auto px-4 py-10 space-y-8">
            {/* Top Centered Image */}
            <div className="flex justify-center">
                <img
                    src={DifferencesImage}
                    alt="Montessori vs Traditional"
                    className="w-full max-w-3xl rounded-lg shadow-lg object-cover"
                />
            </div>

            {/* Heading */}
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-black">
                    Differences Between Montessori Schools and Traditional Schools
                </h2>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>
                    <strong>1. Child-Centered Approach:</strong> Montessori education focuses on individual child development. Unlike traditional schools, where a common route is set by the teacher, Montessori uses observation to cater to each child’s pace and interest.
                </p>

                <p>
                    <strong>2. Adaptable Curriculum:</strong> Montessori allows children to choose their lessons and move at their own pace. Traditional schools follow a uniform curriculum for all students.
                </p>

                <p>
                    <strong>3. Thoughtfully Designed Curriculum:</strong> Montessori classrooms are structured around practical life, math, culture, language, and sensorial areas. The calm environment encourages focus—unlike traditional schools with colorful distractions.
                </p>

                <p>
                    <strong>4. Follow the Child:</strong> In Montessori, teachers adapt the environment based on the child’s interests and development. Traditional schools expect the child to adapt to the classroom.
                </p>

                <p>
                    <strong>5. Moral Development:</strong> Montessori emphasizes values and emotional intelligence through modeling behavior, rather than just instructing manners like "thank you" and "please."
                </p>

                <p>
                    <strong>6. Outdoor Learning:</strong> Outdoors is part of the Montessori classroom experience—not a break. Activities like gardening and reading outdoors promote joyful learning.
                </p>
            </div>

            {/* Tags */}
            <div className="max-w-4xl mx-auto pt-6 border-t border-gray-300 text-sm text-gray-600">
                <span className="font-semibold mr-2">Tags:</span>
                <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2">
                    Children
                </span>
                <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2">
                    Care
                </span>
                <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2">
                    Education
                </span>
                <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                    Montessori
                </span>
            </div>

        </div>
    );
};

export default Differences;
