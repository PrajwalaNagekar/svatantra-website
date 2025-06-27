import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Menu } from "lucide-react"
import Logo from '../../assets/images/logos/swatantra_logo.png'

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isMontessoriOpen, setMontessoriOpen] = useState(false)
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    return (
        <header className="sticky top-0 z-50 bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <img src={Logo} alt="Svatantra Logo" className="h-12 w-auto" />

                {/* Hamburger Menu */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>

                {/* Desktop Navigation */}
                <nav style={{ fontFamily: 'Nunito, sans-serif' }} className="hidden md:flex items-center gap-8  text-gray-700 font-extrabold">
                    <NavLink
                        to="/"
                        className={`hover:text-pink-600 transition-colors duration-200 ${isActive("/") ? "text-pink-600" : ""}`}
                    >
                        Home
                    </NavLink>

                    {/* Montessori Dropdown */}
                    {/* Montessori Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setMontessoriOpen((prev) => !prev)}
                            className={`hover:text-pink-600 transition ${["/montessori-benefits", "/teaching-methods", "/montessori-vs-traditionals"].includes(location.pathname)
                                    ? "text-pink-600"
                                    : ""
                                }`}
                        >
                            Montessori
                        </button>

                        {isMontessoriOpen && (
                            <div className="absolute top-full left-0 w-64 z-50 bg-white shadow-lg rounded-md border border-pink-100 mt-2">
                                <ul className="py-2">
                                    <li>
                                        <NavLink
                                            to="/montessori-benefits"
                                            onClick={() => setMontessoriOpen(false)}
                                            className={`block px-5 py-2.5 border-l-4 ${isActive("/montessori-benefits")
                                                    ? "border-pink-600 text-pink-600 bg-pink-50"
                                                    : "border-transparent text-gray-700 hover:border-pink-600 hover:text-pink-600 hover:bg-pink-50"
                                                }`}
                                        >
                                            Benefits
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/teaching-methods"
                                            onClick={() => setMontessoriOpen(false)}
                                            className={`block px-5 py-2.5 border-l-4 ${isActive("/teaching-methods")
                                                    ? "border-pink-600 text-pink-600 bg-pink-50"
                                                    : "border-transparent text-gray-700 hover:border-pink-600 hover:text-pink-600 hover:bg-pink-50"
                                                }`}
                                        >
                                            Teaching Methods
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/montessori-vs-traditionals"
                                            onClick={() => setMontessoriOpen(false)}
                                            className={`block px-5 py-2.5 border-l-4 ${isActive("/montessori-vs-traditionals")
                                                    ? "border-pink-600 text-pink-600 bg-pink-50"
                                                    : "border-transparent text-gray-700 hover:border-pink-600 hover:text-pink-600 hover:bg-pink-50"
                                                }`}
                                        >
                                            Montessori vs Traditional
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>


                    <NavLink
                        to="/event"
                        className={`hover:text-pink-600 transition-colors duration-200 ${isActive("/event") ? "text-pink-600" : ""}`}
                    >
                        Event
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={`hover:text-pink-600 transition-colors duration-200 ${isActive("/about") ? "text-pink-600" : ""}`}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className={`hover:text-pink-600 transition-colors duration-200 ${isActive("/gallery") ? "text-pink-600" : ""}`}
                    >
                        Gallery
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={`hover:text-pink-600 transition-colors duration-200 ${isActive("/contact") ? "text-pink-600" : ""}`}
                    >
                        Contact
                    </NavLink>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-2  border-t font-extrabold" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    <NavLink
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors duration-200 ${isActive("/") ? "text-pink-600" : ""}`}
                    >
                        Home
                    </NavLink>

                    {/* Montessori Dropdown Toggle */}
                    <div>
                        <button
                            onClick={() => setMontessoriOpen(prev => !prev)}
                            className="w-full text-left  text-black hover:text-pink-600 py-2 transition-colors duration-200 font-extrabold"
                            style={{ fontFamily: 'Nunito, sans-serif' }}
                        >
                            Montessori
                        </button>
                        {isMontessoriOpen && (
                            <div className="ml-4 border-l-2 border-pink-200 pl-4 space-y-1">
                                <NavLink
                                    to="/montessori-benefits"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block py-1.5 text-sm hover:text-pink-600 transition-colors duration-200 ${isActive("/montessori/benefits") ? "text-pink-600 font-medium" : "text-gray-700"}`}
                                >
                                    Benefits
                                </NavLink>
                                <NavLink
                                    to="/teaching-methods"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block py-1.5 text-sm hover:text-pink-600 transition-colors duration-200 ${isActive("/montessori/benefits") ? "text-pink-600 font-medium" : "text-gray-700"}`}
                                >
                                    Teaching Methods
                                </NavLink>
                                <NavLink
                                    to="/montessori-vs-traditionals"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block py-1.5 text-sm hover:text-pink-600 transition-colors duration-200 ${isActive("/montessori/benefits") ? "text-pink-600 font-medium" : "text-gray-700"}`}
                                >
                                    Montessori vs Traditional
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink
                        to="/event"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors duration-200 ${isActive("/event") ? "text-pink-600" : ""}`}
                    >
                        Event
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors duration-200 ${isActive("/about") ? "text-pink-600" : ""}`}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors duration-200 ${isActive("/gallery") ? "text-pink-600" : ""}`}
                    >
                        Gallery
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors duration-200 ${isActive("/contact") ? "text-pink-600" : ""}`}
                    >
                        Contact
                    </NavLink>
                </div>
            )}
        </header>
    )
}

export default Header