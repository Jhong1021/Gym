import React, { useState } from "react";
import logo from "../assets/images/loggo.png";

const Navbar = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 text-slate-700 container mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center bg-transparent z-50"
            style={{ fontFamily: 'Ga Maamli, sans-serif' }}
        >
            <a href="#" className="flex items-center whitespace-nowrap text-2xl font-black">
                <span className="mr-2">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-20 w-auto" // Adjust height as needed, width will scale automatically
                    />
                </span>
            </a>

            <input type="checkbox" className="peer hidden" id="navbar-open" />
            <label
                className="absolute top-5 right-5 cursor-pointer lg:hidden"
                htmlFor="navbar-open"
                onClick={toggleNavbar}
            >
                <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </label>
            <nav
                aria-label="Header Navigation"
                className={`peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row ${isNavbarOpen ? "pt-8 max-h-60" : ""}`}
            >
                <ul className="flex w-full flex-col text-center items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
                    <li className="lg:mr-12">
                        <a
                            className="rounded text-[#FCCB06] transition focus:outline-none focus:ring-1 focus:ring-[#FCCB06] focus:ring-offset-2"
                            href="#home"
                        >
                            Home
                        </a>
                    </li>
                    <li className="lg:mr-12">
                        <a
                            className="rounded text-[#FCCB06] transition focus:outline-none focus:ring-1 focus:ring-[#FCCB06] focus:ring-offset-2"
                            href="#team"
                        >
                            Team
                        </a>
                    </li>
                    <li className="lg:mr-12">
                        <a
                            className="rounded text-[#FCCB06] transition focus:outline-none focus:ring-1 focus:ring-[#FCCB06] focus:ring-offset-2"
                            href="#pricing"
                        >
                            Pricing
                        </a>
                    </li>
                    <li className="lg:mr-12">
                        <a
                            className="rounded text-[#FCCB06] transition focus:outline-none focus:ring-1 focus:ring-[#FCCB06] focus:ring-offset-2"
                            href="#review"
                        >
                            Review
                        </a>
                    </li>
                </ul>
                <hr className="mt-4 w-full lg:hidden" />
                <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                    <a
                        href="#contact"
                        title=""
                        className="whitespace-nowrap rounded-xl bg-[#FCCB06] px-5 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FCCB06] focus:ring-offset-2 hover:bg-[#f0a900]"
                    >
                        Contact Us
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
