
import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Menu, ChevronDown } from "lucide-react"
import Logo from '../../assets/images/logos/swatantra_logo.png'
const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isMontessoriOpen, setMontessoriOpen] = useState(false);

    const location = useLocation()

    const isActive = (path) => location.pathname === path

    return (
        <header className="sticky top-0 z-50 bg-white shadow">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <img src={Logo} alt="Svatantra Logo" className="h-12 w-auto" />
                {/* <NavLink to="/" className="text-xl font-bold text-pink-600">
                    Svatantra
                </NavLink> */}

                <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    <Menu className="w-6 h-6" />
                </button>

                {/* Navigation Menu */}
                <nav className="hidden md:flex items-center gap-6 font-semibold text-gray-700">
                    <NavLink to="/" className={`hover:text-pink-600 transition-colors ${isActive("/") ? "text-pink-600" : ""}`}>
                        Home
                    </NavLink>

                    {/* Montessori Dropdown */}
                    <div className="relative group">
                        <button className="hover:text-pink-600 flex items-center gap-1 py-2 transition-colors">
                            Montessori
                            <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                        </button>

                        {/* Dropdown Menu - No gap, proper positioning */}
                        <div className="absolute top-full left-0 w-64 z-50 bg-white shadow-lg rounded-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                            <ul className="py-2">
                                <li>
                                    <NavLink
                                        to="/montessori-benefits"
                                        className={`block px-4 py-3 hover:bg-pink-50 hover:text-pink-600 transition-colors ${isActive("/montessori/benefits") ? "text-pink-600 bg-pink-50" : ""}`}
                                    >
                                        Benefits
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/teaching-methods"
                                        className={`block px-4 py-3 hover:bg-pink-50 hover:text-pink-600 transition-colors ${isActive("/montessori/teaching-methods") ? "text-pink-600 bg-pink-50" : ""}`}
                                    >
                                        Teaching Methods
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/montessori-vs-traditionals"
                                        className={`block px-4 py-3 hover:bg-pink-50 hover:text-pink-600 transition-colors ${isActive("/montessori/montessori-vs-traditional") ? "text-pink-600 bg-pink-50" : ""}`}
                                    >
                                        Montessori vs Traditional
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <NavLink
                        to="/event"
                        className={`hover:text-pink-600 transition-colors ${isActive("/event") ? "text-pink-600" : ""}`}
                    >
                        Event
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={`hover:text-pink-600 transition-colors ${isActive("/about") ? "text-pink-600" : ""}`}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className={`hover:text-pink-600 transition-colors ${isActive("/gallery") ? "text-pink-600" : ""}`}
                    >
                        Gallery
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={`hover:text-pink-600 transition-colors ${isActive("/contact") ? "text-pink-600" : ""}`}
                    >
                        Contact
                    </NavLink>
                </nav>
            </div>

            {/* Mobile Menu */}
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-2 font-medium border-t">
                    <NavLink
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors ${isActive("/") ? "text-pink-600" : ""}`}
                    >
                        Home
                    </NavLink>

                    {/* Montessori Dropdown Toggle */}
                    <div>
                        <button
                            onClick={() => setMontessoriOpen(prev => !prev)}
                            className="w-full text-left font-semibold text-pink-600 py-2"
                        >
                            Montessori
                        </button>
                        {isMontessoriOpen && (
                            <div className="pl-4 space-y-1">
                                <NavLink
                                    to="/montessori/benefits"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block py-2 hover:text-pink-600 transition-colors ${isActive("/montessori/benefits") ? "text-pink-600" : ""}`}
                                >
                                    Benefits
                                </NavLink>
                                <NavLink
                                    to="/montessori/teaching-methods"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block py-2 hover:text-pink-600 transition-colors ${isActive("/montessori/teaching-methods") ? "text-pink-600" : ""}`}
                                >
                                    Teaching Methods
                                </NavLink>
                                <NavLink
                                    to="/montessori/montessori-vs-traditional"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block py-2 hover:text-pink-600 transition-colors ${isActive("/montessori/montessori-vs-traditional") ? "text-pink-600" : ""}`}
                                >
                                    Montessori vs Traditional
                                </NavLink>
                            </div>
                        )}
                    </div>

                    {/* Other Menu Links */}
                    <NavLink
                        to="/event"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors ${isActive("/event") ? "text-pink-600" : ""}`}
                    >
                        Event
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors ${isActive("/about") ? "text-pink-600" : ""}`}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors ${isActive("/gallery") ? "text-pink-600" : ""}`}
                    >
                        Gallery
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors ${isActive("/contact") ? "text-pink-600" : ""}`}
                    >
                        Contact
                    </NavLink>
                </div>
            )}

        </header>
    )
}

export default Header
