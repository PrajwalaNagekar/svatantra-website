import React, { useEffect, useState } from 'react';
import { fetchAllEvents } from '../api'; // ✅ Ensure path is correct
import FullScreenLoader from '../components/loaders/FullScreenLoader';

const Event = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      const res = await fetchAllEvents();
      if (res.success) {
        setEvents(res.events || []);
      }
      setLoading(false);
    };
    getEvents();
  }, []);

  const today = new Date();

  return (
    <div className="px-4 py-10" style={{ fontFamily: 'Nunito, sans-serif' }}>
      {loading && <FullScreenLoader />}

      <h2 className="text-3xl font-bold text-center text-gray-800 underline decoration-pink-400 mb-8">
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {events.length === 0 && !loading && (
          <p className="text-center text-gray-500 col-span-full">No events available.</p>
        )}

        {events.map((event) => {
          const endDate = new Date(event.endDate);
          const isExpired = endDate < today;

          return (
            <div
              key={event._id}
              className="relative bg-gradient-to-br from-[#ffe5e5] via-[#fefcfb] to-[#fff7e1] text-[#374151] rounded-3xl p-6 sm:p-8 text-center shadow-lg transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              {isExpired && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  Event Expired
                </span>
              )}

              <img
                src={event.image}
                alt={event.name}
                className="w-full h-64 object-cover rounded-2xl mb-6 shadow"
              />

              <h3 className="text-xl sm:text-2xl text-[#d04848] font-bold mb-2">
                {event.name}
              </h3>

              <p className="mb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                {event.description}
              </p>

              <p className="text-sm font-medium text-gray-600">
                {new Date(event.startDate).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
                {' '}
                -{' '}
                {new Date(event.endDate).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Event;
