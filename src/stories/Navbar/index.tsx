import "../../index.css";
import { NavbarItem } from "./NavbarItem/index.tsx";

const Navbar = () => {
    return (
        <div className="w-full fixed top-0 z-50 h-[106px] px-4 sm:px-8 py-4 sm:py-[21px] bg-[#252a44] shadow-[0px_10px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 sm:gap-12">
                <NavbarItem text="Home" href="#home" />
                <NavbarItem text="About Me" href="#aboutme" />
                <NavbarItem text="Projects" href="#projects" />
                <NavbarItem text="Contact" href="#contact" />
            </div>
        </div>
    );
};

export default Navbar;