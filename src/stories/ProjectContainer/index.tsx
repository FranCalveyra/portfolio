import { ItemCarousel } from "../ItemCarousel/index.tsx";

interface ProjectContainerProps {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
    projectLink: string;
    usedTechnologies: string[];
}

export const ProjectContainer = ({ projectTitle, projectLink, projectImage, projectDescription, usedTechnologies }: ProjectContainerProps) => {
    return (
        <div className="w-full sm:w-[448px] h-[352px] px-4 sm:px-8 py-4 sm:py-[21px] bg-[#3a3e59] rounded-[50px] shadow-[0px_10px_4px_rgba(0,0,0,0.25)] flex flex-col justify-start items-center gap-4 overflow-hidden">
            <div className="text-center text-white text-xl sm:text-2xl font-normal font-['Martian_Mono']">
                <a href={projectLink} className="hover:underline">
                    {projectTitle}
                </a>
            </div>

            <div className="flex w-full justify-start items-start gap-4">
                <div className="w-1/2 h-[175px] bg-transparent">
                    <img
                        src={projectImage}
                        alt={projectTitle}
                        className="w-full h-full object-cover rounded-full shadow-sm"
                    />
                </div>

                <div className="w-1/2 text-white text-sm font-normal font-['Martian_Mono']">
                    {projectDescription}
                </div>
            </div>

            <div className="w-full mt-4">
                <ItemCarousel technologies={usedTechnologies} iconSize={64} />
            </div>
        </div>
    );
};