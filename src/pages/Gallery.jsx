import React from 'react';
import G1 from '../assets/images/gallery/g1.jpeg'
import G2 from '../assets/images/gallery/g2.jpeg'

import G3 from '../assets/images/gallery/g3.jpeg'

import G4 from '../assets/images/gallery/g4.jpeg'

import G5 from '../assets/images/gallery/g5.jpeg'

import G6 from '../assets/images/gallery/g6.jpeg'

import G7 from '../assets/images/gallery/g7.jpeg'

import G8 from '../assets/images/gallery/g8.jpg'

import G9 from '../assets/images/gallery/g9.jpg'


const galleryImages = [
  G1,
 G2,
  G3,
 G4,
 G5,
 G6,
  G7,
 G8,
 G9,



];

const Gallery = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <h2 style={{ fontFamily: 'Nunito, sans-serif' }} className="text-3xl md:text-5xl font-extrabold text-center text-black mb-8 underline decoration-pink-300">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow hover:shadow-lg transition duration-300">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
