import {ItemCarousel} from "../ItemCarousel/index.tsx";

interface ProjectContainerProps {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
    projectLink: string;
    usedTechnologies: string[];
}

export const ProjectContainer = ({ projectTitle, projectLink, projectImage, projectDescription, usedTechnologies }: ProjectContainerProps) => {
    return (
        <div className="w-[448px] h-[352px] px-8 py-[21px] bg-[#3a3e59] rounded-[50px] shadow-[0px_10px_4px_rgba(0,0,0,0.25)] flex flex-col justify-start items-center gap-4">
            <div className="text-center text-white text-2xl font-normal font-['Martian_Mono']">
                <a href={projectLink} className={"hover:underline"}>{projectTitle}</a>
            </div>

            <div className="flex w-full justify-start items-start gap-4">
                <div className="w-1/2 h-[175px] bg-[#d9d9d9]">
                    <img src={projectImage} alt={projectTitle} className="w-full h-full object-cover rounded" />
                </div>

                <div className="w-1/2 text-white text-sm font-normal font-['Martian_Mono']">
                    {projectDescription}
                </div>
            </div>

            <div className="w-full mt-4">
                <ItemCarousel technologies={usedTechnologies} iconSize={64}/>
            </div>
        </div>
    );
}