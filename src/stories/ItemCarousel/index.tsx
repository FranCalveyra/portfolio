import React from "react";
import TechIcon from "../TechIcon/TechIcon.tsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ItemCarousel.css"; // Import the CSS file

export const ItemCarousel = () => {
    const technologies = [
        "python", "javascript", "typescript", "docker", "github",
        "nginx", "react", "nodejs", "express", "postgresql",
        "go", "rust", "mongodb", "redis", "linux", "mysql", "html", "css", "git", "java",
        "kotlin", "gradle", "bash", "cpp", "flutter", "dart", "maven", "spring",
        "neovim", "vscode", "idea", "webstorm", "pycharm", "r", "regex", "tailwind",
        "vite", "windows"
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        }
    };

    return (
        <div className="carousel-container">
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={0}
                keyBoardControl={true}
                customTransition="transform 5s linear"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={"desktop"}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                additionalTransfrom={-1}
                arrows={false}
            >
                {technologies.map((technology, index) => (
                    <TechIcon key={index} technology={technology} />
                ))}
                {technologies.map((technology, index) => (
                    <TechIcon key={index + technologies.length} technology={technology} />
                ))}
            </Carousel>
        </div>
    );
};