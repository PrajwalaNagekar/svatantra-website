import React from 'react';
// import BenefitsImage from '../../../assets/images/montessori-benefits/benefites.png';
import G8 from '../../../assets/images/gallery/g8.jpg'
import { FaRegCircleCheck } from "react-icons/fa6";

const Benefits = () => {
    return (
        <div className="container mx-auto px-4 py-10 space-y-12">
            {/* Section 1 - Centered Heading & Paragraph */}
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-6xl font-extrabold text-black mb-4 underline decoration-pink-300" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    What Are The Benefits of A Montessori School?
                </h1>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    A Montessori Methodology focuses on the innate childhood nature, to develop their full potential.
                    Curiosity, creativity, self-discovery, the need for order, and the desire to respond to sensorial input
                    are some of the traits. Montessori education is child-centered which develops the needs and capabilities
                    of the child.
                </p>
            </div>

            {/* Section 2 - Image and Text Side by Side */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={G8}
                        alt="Montessori benefits"
                        className="max-w-[800px] max-h-[700px] w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>

                <div className="w-full lg:w-1/2 text-gray-700 text-sm md:text-base leading-relaxed">
                    <p>
                        According to Dr. Montessori, each plane of development is characterized by distinct sensitive
                        periods for learning – where children exhibit certain needs, attributes, and characteristics at
                        each plane of development. During these sensitive periods, a child undergoes a period of intense
                        developmental change followed by a period of assimilation, displaying confidence in his newly
                        acquired abilities. Montessori education is a holistic approach based on these developmental stages.
                    </p>
                    <div className="mt-4 space-y-3">
                        <div className="flex items-start gap-2">
                            <FaRegCircleCheck className="text-pink-500 mt-1" />
                            <p><strong>The First Plane:</strong> Birth to Age 6 (Infancy/Early childhood)</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <FaRegCircleCheck className="text-pink-500 mt-1" />
                            <p><strong>The Second Plane:</strong> Ages 6–12 (Childhood)</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <FaRegCircleCheck className="text-pink-500 mt-1" />
                            <p><strong>The Third Plane:</strong> Ages 12–18 (Teenage/Adolescence)</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <FaRegCircleCheck className="text-pink-500 mt-1" />
                            <p><strong>The Fourth Plane:</strong> Ages 18–24 (Adulthood)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
