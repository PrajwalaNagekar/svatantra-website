import { FiMail, FiPhoneCall } from 'react-icons/fi';

const Topbar = () => {
    return (
        <div className="bg-pink-500 text-white text-sm py-2 px-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
            <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2 sm:gap-6 text-center sm:text-right">

                {/* Email */}
                <div className="flex items-center gap-2">
                    <FiMail className="text-base" />
                    <span className="truncate">svatantramontessori@gmail.com</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2">
                    <FiPhoneCall className="text-base" />
                    <span>+91 6360667034</span>
                </div>

            </div>
        </div>
    );
};

export default Topbar;
