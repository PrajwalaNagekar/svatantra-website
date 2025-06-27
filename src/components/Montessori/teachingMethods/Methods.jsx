import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";

const Methods = () => {
    return (
        <div className="container mx-auto px-4 py-10 space-y-10">
            {/* Heading & Paragraphs */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4">
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

            <div className="max-w-3xl mx-auto space-y-3">
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
                        <FaRegCircleCheck className="text-pink-500 mt-1" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Methods;
