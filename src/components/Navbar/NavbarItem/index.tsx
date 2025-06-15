import React from "react";

interface NavbarItemProps {
    text: string;
    href: string;
}

export const NavbarItem = ({ text, href }: NavbarItemProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="h-16 flex items-center text-text text-base sm:text-lg font-body px-4 hover:text-primary transition-colors duration-200">
            <a href={href} onClick={handleClick} className="w-full text-center">
                {text}
            </a>
        </div>
    );
};