import React from 'react';
import img1 from '../../assets/images/WhyChooseUs/img1.jpg'
import img2 from '../../assets/images/WhyChooseUs/i2.jpg'
import img3 from '../../assets/images/WhyChooseUs/i3.jpg'
import img4 from '../../assets/images/WhyChooseUs/i4.jpg'
import img5 from '../../assets/images/WhyChooseUs/i5.jpg'
import img6 from '../../assets/images/WhyChooseUs/i6.jpg'


const cards = [
    {
        id: 1,
        image: img1,
        title: 'Freedom to choose',
        caption: 'Children choose their work and explore their content.',
    },
    {
        id: 2,
        image: img2,
        title: 'Holistic Approach',
        caption: 'To approach the child as a whole person.',
    },
    {
        id: 3,
        image: img3,
        title: 'Child Centered',
        caption: 'Every child is special with his/her own interests and peace of growth.',
    },
    {
        id: 4,
        image: img4,
        title: 'Encourages Social Development',
        caption: 'Children learn to work together by encouraging one another and handling themselves during a conflict.',
    },
    {
        id: 5,
        image: img5,
        title: 'Mixed Age Group',
        caption: 'All age groups of children work together as a community leading a helping hand to each other.',
    },
    {
        id: 6,
        image: img6,
        title: 'Encourages Individual Talents',
        caption: 'Every child\'s individual interests are respected and encouraged.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black mb-8 font-extrabold underline decoration-pink-300"
                style={{ fontFamily: 'Nunito, sans-serif' }}>Why Choose Us</h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className="p-4 rounded-3xl shadow hover:shadow-2xl transition cursor-pointer text-center text-white bg-[#5D6D7E]"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        style={{ fontFamily: 'Nunito, sans-serif' }}
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-52 h-64 mx-auto mb-3 rounded-md object-cover"
                        />
                        <h3 className="font-semibold text-3xl">{card.title}</h3>
                        <p className="text-white text-sm">{card.caption}</p>
                    </div>
                ))}
            </div>





            {/* Big Card Below */}
            <div
                className="bg-gradient-to-br from-[#fdf1ec] via-[#fefcfb] to-[#f9f5f1] p-6 md:p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#f4e8e3] text-center max-w-5xl mx-auto space-y-8"
                style={{ fontFamily: 'Nunito, sans-serif' }}
            >
                <div>
                    <h3 className="text-4xl font-bold text-[#2f4858] tracking-wide">
                        Role of an Educator
                    </h3>
                    <div className="w-16 h-1 bg-[#f4a261] mx-auto rounded-full mt-2"></div>
                </div>

                <p className="text-lg text-[#374151] leading-relaxed">
                    A Montessori teacher thoughtfully prepares the environment with materials and activities that meet the
                    needs of the children and their unique talents. A Montessori teacher is a careful observer. She comes to
                    identify each child's interests. She understands the stages of development in each child and engages or
                    connects with them individually. The teachers in Svatantra are a team of Montessori Certified Adults
                    sharing the passion to carry forward the Montessori Methodology by providing children with a Holistic
                    Education.
                </p>

                <p className="italic font-semibold text-lg text-[#c05621]">
                    A guide, A keen Observer, Always follows the child
                </p>

                <p className="text-lg text-[#374151] leading-relaxed">
                    Montessori Teachers Cultivate Independence. They are less like the traditional idea of an instructor, and
                    more like a gentle guide. They don’t consider it their job to give a child information. They rather lead
                    children in the general direction and give them the tools they need to find the information themselves.
                </p>

                <p className="text-lg text-[#374151] leading-relaxed">
                    In Svatantra Montessori, the teachers are facilitators and guides. Our role is to observe each child’s
                    progress at a distance, his or her readiness to advance to new lessons, recognizing and interpreting each
                    child's needs. When it comes to assessments, Montessori teachers don’t rely on standardized tests; rather
                    we rely on the power of observation. A Montessori Teacher's notebook would be brimming with evidence of what
                    their children have mastered, need more support with, and are curious about. We are constantly recording
                    what they notice children working on and how that work is being executed. The role of the teacher in
                    Svatantra is providing children with tools for learning, not merely pouring knowledge and facts into them.
                    The teacher provides a connection between the child and the prepared environment. The most important
                    attribute of a Montessori teacher is the respect she holds for each child's needs.
                </p>

                <p className="text-lg text-[#374151] leading-relaxed">
                    The directress or adult periodically observes children working and records anecdotal notes to help drive
                    their work plans according to a child's individual needs. This recognizes and respects individual
                    variations in the learning process and is vital. This enables the building of coordination, concentration,
                    independence and order, and on longer terms towards the assimilation of information.
                </p>
            </div>



        </section>
    );
};

export default WhyChooseUs;
