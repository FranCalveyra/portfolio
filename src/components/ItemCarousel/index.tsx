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

    // Create unique JSX elements for each technology and altTechnology
    const techElements = technologies.map((technology, index) => (
        <TechIcon key={`tech-${index}`} technology={technology} size={iconSize} />
    ));

    const altTechElements = altTechnologies.map((technology, index) => (
        <AltTechIcon key={`alt-tech-${index}`} technology={technology} size={iconSize} />
    ));

    // Combine them in the desired order for a single pass
    const singlePassElements = [...techElements, ...altTechElements];

    // For a smooth continuous scroll, duplicate the combined list.
    const allElementsToRender = [
        ...singlePassElements,
        ...singlePassElements.map((element, index) =>
            React.cloneElement(element, { key: `${element.key}-clone-${index}` })
        )
    ];

    if (allElementsToRender.length === 0) {
        return null; // Don't render carousel if there are no items
    }

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
                autoPlaySpeed={0} // Relies on customTransition for speed
                keyBoardControl={true}
                customTransition="transform 1000ms linear"
                transitionDuration={0} // Match customTransition: 2.5 seconds
                containerClass="carousel-container"
                arrows={false} // Explicitly disable arrows for marquee style
                deviceType={"desktop"} // Or make dynamic if needed
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {allElementsToRender}
            </Carousel>
        </div>
    );
};