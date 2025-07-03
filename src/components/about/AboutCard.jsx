import React from 'react';

const AboutCard = () => {
  return (
    <div className="flex justify-center px-4 py-10" style={{ fontFamily: 'Nunito, sans-serif' }}>
      <div
        className="bg-gradient-to-br from-[#ffc9b2] via-[#fefcfb] to-[#ffe1c4] text-[#374151] rounded-3xl p-8 max-w-4xl w-full text-center shadow-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl text-black font-extrabold mb-4 underline">
          About Us
        </h2>

        <p className="leading-relaxed">
          Svatantra 'Independence' began its life from a seed in 2018. Our mission is in the belief
          'Children learn through their own experiences and at their own pace.' Just as a small seed
          takes the form of a tree. The Montessori Methodology of Education is a child-centered
          educational approach based on the scientific observations of children from birth to
          childhood and into adulthood. Every Montessori material is well thought of and prepared
          for the needs of Children. Svatantra Montessori supports the aspects of child development,
          creating a balance in the children's natural interests by providing these perfectly
          designed materials.
        </p>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-black">Aim:</h3>
          <p>
            Svatantra aims to "Give wings of freedom with responsibility" for the children to soar!!
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-black">Motto:</h3>
          <p>"Follow the child" by Dr. Maria Montessori.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-black">Our Philosophy:</h3>
          <p>
            At Svatantra Montessori, we believe that every child is a unique individual with limitless potential.
            Our role is to nurture this potential by providing a rich and stimulating environment that supports
            exploration, creativity, and self-discovery. Education here is not just about knowledge, it's about building character and confidence.
          </p>
        </div>

        <div className="space-y-2 text-left">
          <h3 className="text-xl font-semibold text-black text-center">What Makes Us Unique:</h3>
          <ul className="list-disc list-inside">
            <li>Certified Montessori educators passionate about child-led learning</li>
            <li>Peaceful, nurturing classrooms with scientifically designed learning materials</li>
            <li>Focus on independence, empathy, and curiosity</li>
            <li>Mixed-age environments that encourage mentoring and cooperation</li>
            <li>Strong parent partnership and transparent communication</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-black">Our Vision:</h3>
          <p>
            To create a peaceful, nurturing, and inclusive Montessori community where children grow to become
            independent thinkers, compassionate leaders, and lifelong learners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
