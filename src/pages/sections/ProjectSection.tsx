import { ProjectContainer } from "../../stories/ProjectContainer/index.tsx";
import "./ProjectSection.css"
import React from "react";

export const ProjectSection = () => {
    const projects = [
        {
            projectTitle: "Austral Map",
            projectDescription: "Web application that allows users to view the curriculum of our degree program as a graph, displaying each course and its relationships",
            projectImage: require("../../stories/assets/austral-map.png"),
            projectLink: "https://sasakiimarcos.github.io/austral-map/",
            usedTechnologies: ["react", "ts", "tailwind", "firebase"]
        },
        {
            projectTitle: "Snippet-Searcher",
            projectDescription: "Series of microservices that include services for the front, back, permissions, custom LSP, databases, etc.",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "https://github.com/Al-Fajor/printscript",
            usedTechnologies: ["react", "ts", "java", "kotlin", "gradle", "maven", "docker", "nginx", "azure", "postgresql"]
        },
        {
            projectTitle: "Chess Engine",
            projectDescription: "Chess Engine written in Java, with a GUI in JavaFX. It includes some variants like Capablanca Chess and Chess960, as well as Checkers",
            projectImage: "https://private-user-images.githubusercontent.com/121242677/369442161-69970601-915e-4351-a352-25769fa017a4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYxNzE2OTUsIm5iZiI6MTczNjE3MTM5NSwicGF0aCI6Ii8xMjEyNDI2NzcvMzY5NDQyMTYxLTY5OTcwNjAxLTkxNWUtNDM1MS1hMzUyLTI1NzY5ZmEwMTdhNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwNlQxMzQ5NTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNzk2NDI3ZWViZjcxYmEwYTRkY2FhNDhkNzM0ZmEzMTRlNTAyMmZjZGRhZjRkZGQzOWQxODFiMjk5NTE5ZWZjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.dEI17yPdtNWgDq7lsdHqXW6tppwTvVMifDlBBvKC5qc",
            projectLink: "https://chess-engine-lk8z.onrender.com",
            usedTechnologies: ["java", "gradle", "kotlin", "maven", "github"]
        },
        {
            projectTitle: "Duck Hunt",
            projectDescription: "Duck shooting game that connects to a React application hosted on an Amazon VM via MQTT, with data persistence handled on another Amazon VM.",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "#projects",
            usedTechnologies: ["react", "js", "mongodb", "mqtt", "aws", "arduino", "cpp"]
        },
        {
            projectTitle: "RPL Clone",
            projectDescription: "Series of microservices which try to replicate the RPL page of FIUBA, including a web application, a backend, and a database",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "https://github.com/WillyTonkas/rpl-service",
            usedTechnologies: ["golang", "react", "ts", "postgresql", "docker", "github"]
        },
        {
            projectTitle: "Trippy",
            projectDescription: "Transport Application assignment for Interaction Design at Universidad Austral",
            projectImage: require("../../stories/assets/trippy-logo.png"),
            projectLink: "https://francalveyra.github.io/trippy/",
            usedTechnologies: ["react", "ts", "tailwind", "figma"]
        },
        {
            projectTitle: "Home Cooking",
            projectDescription: "Recipe Sharing Web Application for Laboratory II course at Universidad Austral",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "#projects",
            usedTechnologies: ["react", "ts", "tailwind", "java", "gradle", "spring", "postgresql"]
        },
        {
            projectTitle: "Portfolio",
            projectDescription: "This current portfolio, built with React, TypeScript and Tailwind",
            projectImage: "https://skillicons.dev/icons?i=github",
            projectLink: "https://francalveyra.github.io/",
            usedTechnologies: ["react", "ts", "tailwind", "github"]
        }
    ];


    return (
        <div className="w-screen bg-[#454860] flex flex-col items-center gap-6 p-6">
            <h1 className="text-center text-white text-[64px] font-normal font-['Martian Mono']">
                Projects
            </h1>
            <div
                className="w-screen min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="rounded-lg p-4 flex flex-wrap items-center justify-start"
                    >
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