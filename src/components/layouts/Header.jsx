"use client"

import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Menu } from "lucide-react"
import Logo from "../../assets/images/logos/swatantra_logo.png"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isMontessoriOpen, setMontessoriOpen] = useState(false)
    const location = useLocation()
    const dropdownRef = useRef(null)
    const isActive = (path) => location.pathname === path

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setMontessoriOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const navigate = useNavigate()

    return (
        <header className="sticky top-0 z-50 bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <img src={Logo || "/placeholder.svg"} alt="Svatantra Logo" className="h-12 w-auto" />

                {/* Hamburger Menu */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>

                {/* Desktop Navigation */}
                <nav
                    style={{ fontFamily: "Nunito, sans-serif" }}
                    className="hidden md:flex items-center gap-8  text-gray-700 font-extrabold"
                >
                    <NavLink
                        to="/"
                        className={`hover:text-pink-600 transition-colors duration-200 ${isActive("/") ? "text-pink-600" : ""}`}
                    >
                        Home
                    </NavLink>

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
                            <div
                                ref={dropdownRef}
                                className="absolute top-full left-0 w-64 z-50 bg-white shadow-lg rounded-md border border-pink-100 mt-2"
                            >
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
                        to="/admission"
                        className={`hover:text-pink-600 transition-colors duration-200 ${isActive("/admission") ? "text-pink-600" : ""}`}
                    >
                        Admission
                    </NavLink>

                    <NavLink
                        to="/teacher-training"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors duration-200 ${isActive("/teacher-training") ? "text-pink-600" : ""}`}
                    >
                        Teacher Training
                    </NavLink>

                    <NavLink
                        to="/events"
                        className={`hover:text-pink-600 transition-colors duration-200 ${isActive("/events") ? "text-pink-600" : ""}`}
                    >
                        Events
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={`hover:text-pink-600 transition-colors duration-200 ${isActive("/about") ? "text-pink-600" : ""}`}
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/campus"
                        className={`hover:text-pink-600 transition-colors duration-200 ${isActive("/gallery") ? "text-pink-600" : ""}`}
                    >
                        Campus
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
                <div
                    className="md:hidden bg-white shadow-md px-4 py-3 space-y-2 border-t font-extrabold"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                >
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
                            onClick={() => {
                                // console.log("Toggling dropdown")
                                setMontessoriOpen((prev) => !prev)
                            }}
                            className="w-full text-left text-black hover:text-pink-600 py-2 transition-colors duration-200 font-extrabold"
                            style={{ fontFamily: "Nunito, sans-serif" }}
                        >
                            Montessori
                        </button>

                        {isMontessoriOpen && (
                            <>
                                {/* {console.log("Montessori dropdown is rendered")} */}
                                {/* <div className="bg-white">
                                    <button onClick={() => console.log("Test click")}>Test Click</button>
                                    hello
                                </div> */}
                                <div
                                    className="ml-4 border-l-2 border-pink-200 pl-4 space-y-1"
                                    style={{ pointerEvents: "auto", touchAction: "manipulation" }}
                                >
                                    <button
                                        type="button"
                                        // onTouchStart={() => console.log("Touch started on Benefits")}
                                        onTouchEnd={(e) => {
                                            e.preventDefault()
                                            // console.log("Touch ended on Benefits")
                                            // console.log("Navigating to /montessori-benefits")
                                            setMontessoriOpen(false)
                                            setMobileMenuOpen(false)
                                            navigate("/montessori-benefits")
                                        }}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            // console.log("Click event on Benefits")
                                            // console.log("Navigating to /montessori-benefits")
                                            setMontessoriOpen(false)
                                            setMobileMenuOpen(false)
                                            navigate("/montessori-benefits")
                                        }}
                                        className={`block text-left w-full py-1.5 text-sm hover:text-pink-600 transition-colors duration-200 cursor-pointer ${isActive("/montessori-benefits") ? "text-pink-600 font-medium" : "text-gray-700"
                                            }`}
                                        style={{ pointerEvents: "auto", touchAction: "manipulation" }}
                                    >
                                        Benefits
                                    </button>

                                    <button
                                        type="button"
                                        // onTouchStart={() => console.log("Touch started on Teaching Methods")}
                                        onTouchEnd={(e) => {
                                            e.preventDefault()
                                            // console.log("Touch ended on Teaching Methods")
                                            // console.log("Navigating to /teaching-methods")
                                            setMontessoriOpen(false)
                                            setMobileMenuOpen(false)
                                            navigate("/teaching-methods")
                                        }}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            // console.log("Click event on Teaching Methods")
                                            // console.log("Navigating to /teaching-methods")
                                            setMontessoriOpen(false)
                                            setMobileMenuOpen(false)
                                            navigate("/teaching-methods")
                                        }}
                                        className={`block text-left w-full py-1.5 text-sm hover:text-pink-600 transition-colors duration-200 cursor-pointer ${isActive("/teaching-methods") ? "text-pink-600 font-medium" : "text-gray-700"
                                            }`}
                                        style={{ pointerEvents: "auto", touchAction: "manipulation" }}
                                    >
                                        Teaching Methods
                                    </button>

                                    <button
                                        type="button"
                                        // onTouchStart={() => console.log("Touch started on Montessori vs Traditional")}
                                        onTouchEnd={(e) => {
                                            e.preventDefault()
                                            // console.log("Touch ended on Montessori vs Traditional")
                                            // console.log("Navigating to /montessori-vs-traditionals")
                                            setMontessoriOpen(false)
                                            setMobileMenuOpen(false)
                                            navigate("/montessori-vs-traditionals")
                                        }}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            // console.log("Click event on Montessori vs Traditional")
                                            // console.log("Navigating to /montessori-vs-traditionals")
                                            setMontessoriOpen(false)
                                            setMobileMenuOpen(false)
                                            navigate("/montessori-vs-traditionals")
                                        }}
                                        className={`block text-left w-full py-1.5 text-sm hover:text-pink-600 transition-colors duration-200 cursor-pointer ${isActive("/montessori-vs-traditionals") ? "text-pink-600 font-medium" : "text-gray-700"
                                            }`}
                                        style={{ pointerEvents: "auto", touchAction: "manipulation" }}
                                    >
                                        Montessori vs Traditional
                                    </button>
                                </div>
                            </>
                        )}
                    </div>

                    <NavLink
                        to="/admission"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors duration-200 ${isActive("/admission") ? "text-pink-600" : ""}`}
                    >
                        Admission
                    </NavLink>

                    <NavLink
                        to="/teacher-training"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors duration-200 ${isActive("/teacher-training") ? "text-pink-600" : ""}`}
                    >
                        Teacher Training
                    </NavLink>

                    <NavLink
                        to="/events"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors duration-200 ${isActive("/events") ? "text-pink-600" : ""}`}
                    >
                        Events
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors duration-200 ${isActive("/about") ? "text-pink-600" : ""}`}
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/campus"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 hover:text-pink-600 transition-colors duration-200 ${isActive("/campus") ? "text-pink-600" : ""}`}
                    >
                        Campus
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
