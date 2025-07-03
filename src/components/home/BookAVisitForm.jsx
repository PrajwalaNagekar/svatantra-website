import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../src/css/calender.css';
import { FaUser, FaPhone, FaCalendarAlt, FaClock } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import FullScreenLoader from '../../components/loaders/FullScreenLoader';
import PopupModal from '../../components/popupModal/PopupModal';
import { bookAVisit } from '../../api';

const BookAVisitForm = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [date, setDate] = useState(null);
    const [time, setTime] = useState('');
    const [loading, setLoading] = useState(false);
    const [popup, setPopup] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        if (popup.show) {
            document.body.style.overflow = 'hidden'; // disable scroll
        } else {
            document.body.style.overflow = 'auto'; // enable scroll
        }

        // Clean up on unmount just in case
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [popup.show]);

    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const timeSlots = [
        '09:30 AM',
        '10:30 AM',
        '11:30 AM',
        '12:30 PM',
        '01:30 PM',
        '02:30 PM',
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !mobile || !date || !time) {
            setPopup({ show: true, message: 'All fields are required', type: 'error' });
            return;
        }

        const payload = {
            name,
            mobile,
            date: date.toISOString().split('T')[0],
            time,
        };

        try {
            setLoading(true);
            const response = await bookAVisit(payload);
            setPopup({ show: true, message: 'Visit booked successfully!', type: 'success' });
            setName('');
            setMobile('');
            setDate(null);
            setTime('');
        } catch (error) {
            setPopup({ show: true, message: 'Failed to book the visit. Please try again.', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full px-4 py-12">
            <style jsx>{`
                .react-datepicker-wrapper {
                    width: 100% !important;
                }
                .react-datepicker__input-container {
                    width: 100% !important;
                }
                .react-datepicker__input-container input {
                    width: 100% !important;
                    box-sizing: border-box !important;
                }
            `}</style>

            <div className="max-w-6xl mx-auto">
                {loading && <FullScreenLoader />}
                {popup.show && (
                    <PopupModal
                        type={popup.type}
                        message={popup.message}
                        onClose={() => setPopup({ ...popup, show: false })}
                    />
                )}

                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-16">
                    <h2 className="text-3xl sm:text-4xl text-center font-extrabold text-black mb-10 underline decoration-pink-300" style={{ fontFamily: 'Nunito, sans-serif' }}>
                        Book A Visit
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Row 1: Name and Mobile */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="w-full relative">
                                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-500 z-10" />
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-500 outline-none text-lg bg-gray-100"
                                />
                            </div>

                            {/* Mobile */}
                            <div className="w-full relative">
                                <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-500 z-10" />
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    value={mobile}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        // Allow only numbers and restrict to 10 digits
                                        if (/^\d{0,10}$/.test(val)) {
                                            setMobile(val);
                                        }
                                    }}
                                    maxLength={10}
                                    inputMode="numeric"
                                    pattern="\d{10}"
                                    required
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-500 outline-none text-lg bg-gray-100"
                                />
                            </div>
                        </div>

                        {/* Row 2: Date and Time */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Date */}
                            <div className="w-full">
                                <label className="block text-base font-semibold text-gray-700 mb-2">Select Date</label>
                                <div className="relative w-full">
                                    {/* Calendar Icon */}
                                    <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-500 z-20 pointer-events-none" />
                                    {/* DatePicker Input */}
                                    <div className="w-full">
                                        <DatePicker
                                            selected={date}
                                            onChange={(date) => setDate(date)}
                                            filterDate={isWeekday}
                                            placeholderText="Choose a weekday"
                                            dateFormat="dd/MM/yyyy"
                                            minDate={new Date()}
                                            calendarClassName="custom-calendar"
                                            wrapperClassName="w-full"
                                            dayClassName={() =>
                                                'custom-day hover:bg-pink-100 rounded-full transition-all duration-200'
                                            }
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-500 outline-none text-lg bg-gray-100"
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Time */}
                            <div className="w-full">
                                <label className="block text-base font-semibold text-gray-700 mb-2">Select Time</label>
                                <div className="relative w-full">
                                    <FaClock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-500 z-10" />
                                    <select
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        required
                                        className="w-full pl-14 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-500 outline-none text-lg text-black font-semibold bg-gray-100 hover:cursor-pointer"
                                    >
                                        <option disabled value="" className="text-gray-400">Select time</option>
                                        {timeSlots.map((slot, index) => (
                                            <option
                                                key={index}
                                                value={slot}
                                                className="text-black font-semibold hover:bg-pink-100"
                                            >
                                                {slot}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 text-lg rounded-full shadow-md transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookAVisitForm;
