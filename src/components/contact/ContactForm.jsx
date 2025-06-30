import React from "react";

const ContactForm = () => {
    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 underline decoration-pink-400 mb-6 text-center" style={{ fontFamily: 'Nunito, sans-serif' }}>
                We're here to Help You
            </h2>

            <div className="flex flex-col md:flex-row gap-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="flex-1 p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    placeholder="Your Phone"
                    className="flex-1 p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                style={{ fontFamily: 'Nunito, sans-serif' }}
            />

            <textarea
                placeholder="Comments"
                rows="5"
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                style={{ fontFamily: 'Nunito, sans-serif' }}
            />

            <div className="text-center">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ContactForm;
