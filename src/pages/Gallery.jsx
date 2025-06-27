import React from 'react';

const galleryImages = [
  'https://svatantra.in/assets/202205121652342215.jpeg',
  'https://svatantra.in/assets/202204261650955213.jpeg',
  'https://svatantra.in/assets/202204261650955232.jpeg',
  'https://svatantra.in/assets/202205121652342263.jpeg',
  'https://svatantra.in/assets/202205121652342439.jpeg',
  'https://svatantra.in/assets/202205121652342468.jpeg',
  'https://svatantra.in/assets/202205121652342476.jpeg',
  'https://svatantra.in/assets/202301121673532727.jpg',
  'https://svatantra.in/assets/202301121673532798.jpg',



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
