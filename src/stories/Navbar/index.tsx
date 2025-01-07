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
            <div className="w-full fixed top-0 z-50 h-[106px] px-4 sm:px-8 py-4 sm:py-[21px] bg-[#252a44] shadow-[0px_10px_4px_0px_rgba(0,0,0,0.25)] flex justify-between items-center">
                <div className="sm:hidden">
                    <button onClick={toggleNavbar} className="text-white">
                        <svg className={`w-6 h-6 ${isOpen ? 'icon-open' : 'icon-closed'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path className="bar1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16"></path>
                            <path className="bar2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16"></path>
                            <path className="bar3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h7"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden sm:flex justify-center items-center gap-4 sm:gap-12">
                    <NavbarItem text="Home" href="#home" />
                    <NavbarItem text="About Me" href="#aboutme" />
                    <NavbarItem text="Projects" href="#projects" />
                    <NavbarItem text="Contact" href="#contact" />
                </div>
            </div>
            <div className={`fixed inset-0 bg-[#252a44] z-40 flex flex-col items-center justify-center sm:hidden transition-transform transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <button onClick={toggleNavbar} className="absolute top-4 right-4 text-white">
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