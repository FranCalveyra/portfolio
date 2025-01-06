interface NavbarItemProps {
    text: string;
}

export const NavbarItem = ({text}: NavbarItemProps) => {
    return (
        <div className="h-16 text-center text-white text-2xl font-normal font-['Martian_Mono'] px-4 mt-6">{text}</div>
    )
}