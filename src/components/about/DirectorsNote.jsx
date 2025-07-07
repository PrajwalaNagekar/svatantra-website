import React from 'react';

const DirectorsNote = () => {
    return (
        <div className="px-4 py-10 bg-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#ffc9b2] via-[#fefcfb] to-[#ffe1c4] text-[#374151] rounded-3xl p-8 shadow-lg transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl space-y-6">
                <h2 className="text-3xl sm:text-4xl text-black font-extrabold text-center underline mb-4">
                    Director’s Note
                </h2>

                <p className=" leading-relaxed text-justify">
                    Pravenalini is a Certified Montessorian from Indian Montessori Training Centre. Svatantra is the seed of her passion which today is a thriving early childhood environment. She is a Montessorian for over 15 years. Her journey began as a volunteer in a School for Differently abled, during which her passion was directed towards the Montessori Methodology of Education by caring mentors.

                </p>

                <p className="leading-relaxed text-justify">
                    She believes that children who have been nurtured in the right environment always have the best to offer to the world. To children, we can offer them the world and they will further create the best from it. She believes that the best education to offer to children is the Montessori Methodology, which ensures the children not only develop intellectually or physically but also as Empathetic and Emotionally strong Individuals.
                </p>
            </div>
        </div>
    );
};

export default DirectorsNote;
