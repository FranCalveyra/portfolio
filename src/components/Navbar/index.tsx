import React, { useState } from "react";
import "../../index.css";
import { NavbarItem } from "./NavbarItem/index.tsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="w-full fixed top-0 z-50 h-16 px-6 bg-surface shadow-md flex justify-between items-center text-text">
                <div className="sm:hidden">
                    <button onClick={toggleNavbar} className="text-text focus:outline-none">
                        <svg className={`w-6 h-6 ${isOpen ? 'icon-open' : 'icon-closed'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path className="bar1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16"></path>
                            <path className="bar2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16"></path>
                            <path className="bar3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h7"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden sm:flex items-center space-x-8">
                    <NavbarItem text="Home" href="#home" />
                    <NavbarItem text="About Me" href="#aboutme" />
                    <NavbarItem text="Projects" href="#projects" />
                    <NavbarItem text="Contact" href="#contact" />
                </div>
            </div>
            <div className={`fixed inset-0 bg-surface z-40 flex flex-col items-center justify-center sm:hidden transition-transform transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <button onClick={toggleNavbar} className="absolute top-4 right-4 text-text focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div onClick={handleItemClick} className="space-y-4">
                    <NavbarItem text="Home" href="#home" />
                    <NavbarItem text="About Me" href="#aboutme" />
                    <NavbarItem text="Projects" href="#projects" />
                    <NavbarItem text="Contact" href="#contact" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;