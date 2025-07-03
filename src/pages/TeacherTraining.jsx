import React, { useState } from 'react';
import { FaChalkboardTeacher, FaUser, FaPhoneAlt } from 'react-icons/fa';
import { teachersTraining } from '../api/index';
import PopupModal from '../components/popupModal/PopupModal';
import FullScreenLoader from '../components/loaders/FullScreenLoader';

const TeacherTraining = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});
    const [popup, setPopup] = useState({ show: false, type: 'success', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!/^\d{10}$/.test(phone)) {
            newErrors.phone = 'Phone number must be exactly 10 digits';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setLoading(true);

        try {
            await teachersTraining({ name, phone });
            setPopup({ show: true, type: 'success', message: 'Application submitted successfully!' });
            setName('');
            setPhone('');
        } catch (error) {
            setPopup({
                show: true,
                type: 'error',
                message: error?.response?.data?.message || 'Something went wrong. Please try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen py-12 px-6 sm:px-10 lg:px-24 bg-pink-50">
            {loading && <FullScreenLoader />}
            {popup.show && (
                <PopupModal
                    type={popup.type}
                    message={popup.message}
                    onClose={() => setPopup({ ...popup, show: false })}
                />
            )}
            <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-lg">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-black mb-4 flex items-center justify-center gap-2 underline decoration-pink-300">
                        <FaChalkboardTeacher /> Teacher Training Program
                    </h2>
                    <div className="mt-6 text-gray-700 text-lg leading-relaxed space-y-5">
                        <p>
                            🌸 At Svatantra Montessori, teaching is more than a profession — it's a purpose. Our <span className="font-semibold text-pink-600">Teacher Training Program</span> helps passionate individuals become certified Montessori educators.
                        </p>
                        <p>
                            🧠 Gain deep understanding of Montessori principles, hands-on learning, and real classroom readiness through expert-led sessions.
                        </p>
                        <p>
                            🎓 Whether you're starting your journey or transitioning your career, this program is designed to empower your teaching dreams.
                        </p>
                    </div>
                </div>

                {/* Apply Form */}
                <div className="mt-12 bg-pink-100 p-6 sm:p-8 rounded-2xl shadow-inner">
                    <h3 className="text-2xl font-bold text-black mb-6 text-center">
                        Apply Now for Teacher Training
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
                        {/* Name */}
                        <div className="relative">
                            <FaUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-pink-600" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full pl-12 pr-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 outline-none text-lg bg-white`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1 ml-1">{errors.name}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <FaPhoneAlt className="absolute top-1/2 left-4 transform -translate-y-1/2 text-pink-600" />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    if (/^\d{0,10}$/.test(val)) {
                                        setPhone(val);
                                    }
                                }}
                                maxLength={10}
                                inputMode="numeric"
                                pattern="\d{10}"
                                className={`w-full pl-12 pr-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 outline-none text-lg bg-white`}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1 ml-1">{errors.phone}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-pink-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-pink-700 transition"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TeacherTraining;
