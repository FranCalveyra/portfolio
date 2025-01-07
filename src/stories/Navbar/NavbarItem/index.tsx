interface NavbarItemProps {
    text: string;
    href: string;
}

export const NavbarItem = ({ text, href }: NavbarItemProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault(); // Prevent default anchor behavior

        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth", // Smooth scroll animation
                block: "start",     // Align to the start of the section
            });
        }
    };

    return (
        <div className="h-16 text-center text-white text-2xl font-normal font-['Martian_Mono'] px-4 mt-6 hover:underline">
            <a href={href} onClick={handleClick}>
                {text}
            </a>
        </div>
    );
};
