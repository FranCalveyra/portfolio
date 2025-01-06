import "../../index.css";
import {NavbarItem} from "./NavbarItem/index.tsx";

const Navbar = () => {
    return (
        <div className="w-full h-[106px] px-8 py-[21px] bg-[#252a44] shadow-[0px_10px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center">
            <div className="flex justify-center items-center gap-12">
                <NavbarItem text={"Home"}></NavbarItem>
                <NavbarItem text={"About Me"}></NavbarItem>
                <NavbarItem text={"Projects"}></NavbarItem>
                <NavbarItem text={"Contact"}></NavbarItem>
            </div>
        </div>
    )
}

export default Navbar;