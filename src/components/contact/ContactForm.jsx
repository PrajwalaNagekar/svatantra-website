import React from "react";

const ContactForm = () => {
    return (
        <div className="w-fit md:w-2/3 space-y-4">
            <h2 className="text-3xl font-extrabold text-black mb-4 underline decoration-pink-300" style={{ fontFamily: 'Nunito, sans-serif' }}>We`re here to Help You</h2>

            <div className="flex flex-col md:flex-row gap-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <input type="text" placeholder="Your Name" className="w-full md:w-1/2 p-4 bg-gray-100 rounded" />
                <input type="text" placeholder="Your Phone" className="w-full md:w-1/2 p-4 bg-gray-100 rounded" />
            </div>

            <input type="email" placeholder="your email" className="w-full p-4 bg-gray-100 rounded" />
            <textarea placeholder="Comments" rows="6" className="w-full p-4 bg-gray-100 rounded resize-none" />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Send
            </button>
        </div>
    );
};

export default ContactForm;
