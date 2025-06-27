import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <div className="w-full md:w-1/3 space-y-6">
            <h2 className="text-3xl  text-black mb-4 underline decoration-pink-300 font-extrabold" style={{ fontFamily: 'Nunito, sans-serif' }}>Office Info</h2>
            <div style={{ fontFamily: 'Nunito, sans-serif' }}>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-600">
                    148/149, House Srikamala<br />
                    Sarvabhoumanagar Chikkalasandra 2nd<br />
                    Main Uttarahalli Bangalore - 560061
                </p>
            </div>

            <div style={{ fontFamily: 'Nunito, sans-serif' }}>
                <h3 className="font-semibold text-lg" >Phone</h3>
                <p className="text-gray-600">+91 6360667034</p>
            </div>

            <div style={{ fontFamily: 'Nunito, sans-serif' }}>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">svatantramontessori@gmail.com</p>
            </div>

            <div className="flex gap-4 pt-2">
                <a href="#" className="bg-[#3b5998] text-white p-3 rounded-full">
                    <FaFacebookF />
                </a>
                <a href="#" className="bg-[#E1306C] text-white p-3 rounded-full">
                    <FaInstagram />
                </a>
                <a href="#" className="bg-[#25D366] text-white p-3 rounded-full">
                    <FaWhatsapp />
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;
