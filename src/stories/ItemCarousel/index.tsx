import React from "react";
import { TechIcon, AltTechIcon } from "../TechIcon/TechIcon.tsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ItemCarousel.css";

interface ItemCarouselProps {
    technologies: string[];
    altTechnologies: string[];
    iconSize: number;
}

export const ItemCarousel = ({ technologies = [], altTechnologies = [], iconSize }: ItemCarouselProps) => {
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
        },
    };

    return (
        <div className="carousel-container">
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
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
                    <TechIcon key={index} technology={technology} size={iconSize} />
                ))}
                {technologies.map((technology, index) => (
                    <TechIcon key={index + technologies.length} technology={technology} size={iconSize} />
                ))}

                {altTechnologies.map((technology, index) => (
                    <AltTechIcon key={index} technology={technology} size={iconSize} />
                ))}
                {altTechnologies.map((technology, index) => (
                    <AltTechIcon key={index + altTechnologies.length} technology={technology} size={iconSize} />
                ))}
            </Carousel>
        </div>
    );
};