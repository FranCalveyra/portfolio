import React from "react";

interface TechIconProps {
    technology: string;
    size: number;
}

const TechIcon: React.FC<TechIconProps> = ({ technology, size }) => {
    return (
        <div className="flex justify-center items-center">
            <img
                style={{ width: size, height: size }}
                src={`https://skillicons.dev/icons?i=${technology}`}
                alt={`${technology} Icon`}
            />
        </div>
    );
};

const AltTechIcon: React.FC<TechIconProps> = ({ technology: techIconSrc, size }) => {
    return (
        <div className="flex justify-center items-center">
            <img
                style={{ width: size, height: size }}
                src={`${techIconSrc}`}
                alt={`${techIconSrc} Icon`}
            />
        </div>
    );
};

export { TechIcon, AltTechIcon };
