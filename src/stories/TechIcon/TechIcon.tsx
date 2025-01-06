import React from 'react';

interface TechIconProps {
    technology: string;
}

const TechIcon: React.FC<TechIconProps> = ({ technology }) => {
    return (
        <div className="flex justify-center items-center">
            <img className="w-[86px] h-[86px]" src={`https://skillicons.dev/icons?i=` + technology} alt={`${technology} Icon`} />
        </div>
    );
};

export default TechIcon;