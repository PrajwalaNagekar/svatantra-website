import React, { useEffect, useState } from 'react';
import { fetchAllImages } from '../api'; 
import FullScreenLoader from '../components/loaders/FullScreenLoader';

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGalleryImages = async () => {
      const res = await fetchAllImages();
      if (res.success) {
        setGalleryImages(res.images || []);
      }
      setLoading(false);
    };

    getGalleryImages();
  }, []);

  return (
    <section className="py-10 px-4 bg-white">
      <h2
        style={{ fontFamily: 'Nunito, sans-serif' }}
        className="text-3xl md:text-5xl font-extrabold text-center text-black mb-8 underline decoration-pink-300"
      >
        Gallery
      </h2>

      {loading ? (
        <FullScreenLoader />
      ) : galleryImages.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No images found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={img.url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
