import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10" style={{ fontFamily: 'Nunito, sans-serif' }}>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Side - Description + Social */}
        <div className="w-full lg:w-2/3">
          <p className="text-sm leading-relaxed break-words whitespace-normal max-w-lg mb-6">
            Svatantra Montessori supports the aspects of child development, creating a balance in the children's natural interests by providing these perfectly designed materials.
          </p>

          <div className="flex gap-5 mt-4">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 text-xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 text-xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Side - Links */}
        <div className="w-full lg:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <NavLink to="/gallery" className="hover:text-pink-400">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-pink-400">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-pink-400">
                Get In Touch With Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 p-10 text-center text-sm text-gray-400">
        © Copyright {new Date().getFullYear()} by{' '}
        <NavLink to="/contact" className="font-semibold text-pink-400 ">
          Svatantra Montessori
        </NavLink>.
      </div>

    </footer>
  );
};

export default Footer;
