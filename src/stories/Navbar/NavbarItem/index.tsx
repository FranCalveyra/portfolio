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
        <div className="h-16 text-center text-white text-lg sm:text-xl lg:text-2xl font-normal font-['Martian_Mono'] px-2 sm:px-4 mt-2 sm:mt-6 hover:underline transition-opacity duration-300 ease-in-out hover:opacity-75">
            <a href={href} onClick={handleClick}>
                {text}
            </a>
        </div>
    );
};