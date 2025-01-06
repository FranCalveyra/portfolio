import TechIcon from "../TechIcon/TechIcon.tsx";
import React, { useEffect, useRef, useState } from "react";

export const ItemCarousel = () => {
    const technologies = [
        "python", "javascript", "typescript", "docker", "aws", "kubernetes", "github"
    ]

    const Carousel = ({ images: items }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const carouselRef = useRef(null);

        console.log(items)

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === items.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000); // 3 seconds

            return () => clearInterval(interval)
        }, [items.length]);

        useEffect(() => {
            if (carouselRef.current) {
                carouselRef.current.style.transition = "transform 0.5s ease-in-out";
                carouselRef.current.style.transform = `translateX(-${
                    currentIndex * 100
                }%)`;
            }
        }, [currentIndex]);

        return (
            <div className="relative overflow-hidden w-full h-64">
                <div
                    ref={carouselRef}
                    className="flex w-full h-full"
                    style={{ width: `${items.length * 100}%` }}
                >
                    {items.map((item: string, index: number) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full h-full"
                            style={{ flexBasis: "100%" }}
                        >
                            <TechIcon name={item} />
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {items.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                                currentIndex === index ? "bg-white" : "bg-gray-500"
                            }`}
                        ></div>
                    ))}
                </div>
            </div>
        );
    };
    return (
        <Carousel images={technologies} />
    )
}