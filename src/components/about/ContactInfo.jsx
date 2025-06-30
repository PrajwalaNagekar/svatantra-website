import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">
            <h2 className="text-3xl  text-black mb-4 underline decoration-pink-300 font-extrabold" style={{ fontFamily: 'Nunito, sans-serif' }}>Office Info</h2>
            <div style={{ fontFamily: 'Nunito, sans-serif' }} className="p-2">
                <h3 className="font-semibold text-2xl">Location</h3>
                <p className="text-gray-600">
                    148/149, House Srikamala<br />
                    Sarvabhoumanagar Chikkalasandra 2nd<br />
                    Main Uttarahalli Bangalore - 560061
                </p>
            </div>

            <div style={{ fontFamily: 'Nunito, sans-serif' }} className="p-2">
                <h3 className="font-semibold text-2xl" >Phone</h3>
                <p className="text-gray-600">+91 6360667034</p>
            </div>

            <div style={{ fontFamily: 'Nunito, sans-serif' }} className="p-2"> 
                <h3 className="font-semibold text-2xl">Email</h3>
                <p className="text-gray-600">svatantramontessori@gmail.com</p>
            </div>

            <div className="flex gap-4 p-2">
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
