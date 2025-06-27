import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";

const Methods = () => {
    return (
        <div className="container mx-auto px-4 py-24 space-y-10">
            {/* Heading & Paragraphs */}
            <div className="text-center max-w-3xl mx-auto" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 underline decoration-pink-300" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    How Montessori Helps Build the Child’s Self-Sufficiency and Independence?
                </h2>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                    At Svatantra, we focus on the needs of children in the first and second planes of development.
                    The focus is on developing the child’s potential during these sensitive periods by creating and providing
                    an emotionally nurturing environment that is at the same time cognitively intriguing.
                </p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    We believe in a holistic approach that involves children in various activities which not only develops and
                    enhances them as good students but also helps build a journey to become self-sufficient and independent.
                </p>
            </div>

            <div className="max-w-4xl mx-auto mt-8 grid grid-cols-3 gap-x-6 gap-y-4">
                {[
                    "Care of Self",
                    "Prepared Environment",
                    "Movement and Cognition",
                    "Freedom of Choice",
                    "Self-respect",
                    "Mixed Age Learning",
                    "Self-Motivated",
                    "Individual Attention",
                    "Nil Intervention"
                ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                        <FaRegCircleCheck className="text-pink-500 mt-1 shrink-0" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Methods;
