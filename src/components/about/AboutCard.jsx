import React from 'react';

const AboutCard = () => {
  return (
    <div className="flex justify-center px-4 py-10">
      <div className="bg-pink-600 text-white rounded-3xl p-8 max-w-4xl w-full text-center shadow-lg">
        <h2 className="text-2xl text-black font-semibold mb-4">About Us</h2>
        <p className="mb-6 leading-relaxed">
          Svatantra 'Independence' began its life from a seed in 2018. Our mission is in the belief
          'Children learn through their own experiences and at their own pace.' Just as a small seed
          takes the form of a tree. The Montessori Methodology of Education is a child-centered
          educational approach based on the scientific observations of children from birth to
          childhood and into adulthood. Every Montessori material is well thought of and prepared
          for the needs of Children. Svatantra Montessori supports the aspects of child development,
          creating a balance in the children's natural interests by providing these perfectly
          designed materials.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-black">Aim:</h3>
        <p className="mb-6">
          Svatantra aims to "Give wings of freedom with responsibility" for the children to soar!!
        </p>

        <h3 className="text-xl font-semibold mb-2 text-black">Motto:</h3>
        <p>"Follow the child" by Dr. Maria Montessori.</p>
      </div>
    </div>
  );
};

export default AboutCard;
