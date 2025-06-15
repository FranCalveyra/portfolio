import React from "react"
import { TechIcon } from "../TechIcon/TechIcon.tsx";

interface ProjectContainerProps {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
    projectLink: string;
    usedTechnologies: string[];
}

export const ProjectContainer = ({ projectTitle, projectLink, projectImage, projectDescription, usedTechnologies }: ProjectContainerProps) => {
    return (
        <div className="w-full bg-surface rounded-lg shadow-md p-6 flex flex-col gap-4">
            <div className="text-center text-white text-xl sm:text-2xl font-normal font-['Martian_Mono']">
                <a href={projectLink} className="text-primary hover:underline font-heading text-lg sm:text-xl">
                    {projectTitle}
                </a>
            </div>

            <div className="w-full">
                <img
                    src={projectImage}
                    alt={projectTitle}
                    className="w-full h-40 object-cover rounded-md shadow-sm mb-4"
                />
                <p className="text-text-muted text-sm font-body leading-relaxed">
                    {projectDescription}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
                {usedTechnologies.map((tech) => (
                    <TechIcon key={tech} technology={tech} size={32} />
                ))}
            </div>
        </div>
    );

};