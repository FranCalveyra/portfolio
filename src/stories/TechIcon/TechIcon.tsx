import React from 'react';

interface TechIconProps {
    technology: string;
    size: number;
}

const TechIcon: React.FC<TechIconProps> = ({ technology, size }) => {
    return (
        <div className="flex justify-center items-center">
            <img className={`w-[${size}px] h-[${size}px]`} src={`https://skillicons.dev/icons?i=` + technology} alt={`${technology} Icon`} />
        </div>
    );
};

export default TechIcon;