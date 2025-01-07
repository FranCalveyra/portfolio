import { ProjectContainer } from "../../stories/ProjectContainer/index.tsx";
import "./ProjectSection.css"
import React from "react";

export const ProjectSection = () => {
    const projects = [
        {
            projectTitle: "Chess Engine",
            projectDescription: "Java-based Chess Engine with a JavaFX GUI, featuring variants like Capablanca Chess, Chess960, and Checkers.",
            projectImage: require("../../stories/assets/chess-board.png"),
            projectLink: "https://chess-engine-lk8z.onrender.com",
            usedTechnologies: ["java", "gradle", "kotlin", "maven", "github"]
        },
        {
            projectTitle: "Snippet-Searcher",
            projectDescription: "Microservices handling front-end, back-end, permissions, custom LSP, and databases.",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "https://github.com/Al-Fajor/printscript",
            usedTechnologies: ["react", "ts", "java", "kotlin", "gradle", "maven", "docker", "nginx", "azure", "postgresql"]
        },
        {
            projectTitle: "Home Cooking",
            projectDescription: "Recipe-sharing app built for a Laboratory II course at Universidad Austral.",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "#projects",
            usedTechnologies: ["react", "ts", "tailwind", "java", "gradle", "spring", "postgresql"]
        },
        {
            projectTitle: "Austral Map",
            projectDescription: "Web app displaying our degree curriculum as a graph, showing courses and their relationships.",
            projectImage: require("../../stories/assets/austral-map.png"),
            projectLink: "https://sasakiimarcos.github.io/austral-map/",
            usedTechnologies: ["react", "ts", "tailwind", "python"]
        },
        {
            projectTitle: "Portfolio",
            projectDescription: "This current portfolio, built with React, TypeScript and Tailwind.",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "https://francalveyra.github.io/portfolio",
            usedTechnologies: ["react", "ts", "tailwind", "github"]
        },
        {
            projectTitle: "Duck Hunt",
            projectDescription: "Duck shooting game connecting to a React app via MQTT, with MongoDB data persistence on Amazon VMs.",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "#projects",
            usedTechnologies: ["react", "js", "mongodb", "aws", "arduino", "cpp"]
        },
        {
            projectTitle: "RPL Clone",
            projectDescription: "Microservices replicating FIUBA's RPL page, featuring a web app, backend, and database.",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "https://github.com/WillyTonkas/rpl-service",
            usedTechnologies: ["golang", "react", "ts", "postgresql", "docker", "github"]
        },
        {
            projectTitle: "Trippy",
            projectDescription: "Transport app developed for an Interaction Design course at Universidad Austral.",
            projectImage: require("../../stories/assets/trippy-logo.png"),
            projectLink: "https://francalveyra.github.io/trippy/",
            usedTechnologies: ["react", "ts", "tailwind", "figma"]
        }
    ];



    return (
        <div id="projects" className="w-screen bg-[#454860] flex flex-col items-center gap-6 p-6">
            <h1 className="text-center text-white text-4xl sm:text-5xl lg:text-6xl font-normal font-['Martian Mono']">
                Projects
            </h1>
            <div className="w-screen min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 pr-8">
                {projects.map((project, index) => (
                    <div key={index} className="rounded-lg p-4 flex flex-wrap items-center justify-start">
                        <ProjectContainer
                            projectTitle={project.projectTitle}
                            projectDescription={project.projectDescription}
                            projectImage={project.projectImage}
                            projectLink={project.projectLink}
                            usedTechnologies={project.usedTechnologies}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
};