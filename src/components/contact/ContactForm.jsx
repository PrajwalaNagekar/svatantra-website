import React, { useState } from "react";
import { contact } from "../../api/index";
import PopupModal from "../../components/popupModal/PopupModal";
import FullScreenLoader from "../..//components/loaders/FullScreenLoader";

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", phone: "", email: "", comments: "" });
    const [loading, setLoading] = useState(false);
    const [popup, setPopup] = useState({ show: false, message: "", type: "success" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, phone, email, comments } = form;
        // if (!name || !phone || !email || !comments) {
        //     setPopup({ show: true, message: "All fields are required", type: "error" });
        //     return;
        // }

        try {
            setLoading(true);
            await contact(form);
            setPopup({ show: true, message: "Message sent successfully!", type: "success" });
            setForm({ name: "", phone: "", email: "", comments: "" });
        } catch (err) {
            setPopup({ show: true, message: "Failed to send message", type: "error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">
            {loading && <FullScreenLoader />}
            {popup.show && (
                <PopupModal
                    type={popup.type}
                    message={popup.message}
                    onClose={() => setPopup({ ...popup, show: false })}
                />
            )}

            <h2 className="text-4xl font-bold text-gray-800 underline decoration-pink-400 mb-6 text-center" style={{ fontFamily: 'Nunito, sans-serif' }}>
                We're here to Help You
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        required
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        className="flex-1 p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        required
                        name="phone"
                        placeholder="Your Phone"
                        value={form.phone}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d{0,10}$/.test(value)) {
                                setForm({ ...form, phone: value });
                            }
                        }}
                        maxLength={10}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        className="flex-1 p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                </div>

                <input
                    type="email"
                    required
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <textarea
                    name="comments"
                    required
                    placeholder="Comments"
                    rows="5"
                    value={form.comments}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
