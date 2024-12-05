import React, { useRef, useState, useEffect } from "react";

import Review from "./Review";

const ReviewArea = ({ reviews }) => {
    const containerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    useEffect(() => {
        const container = containerRef.current;

        const updateArrows = () => {
            if (!container) return;

            // Show the left arrow if not scrolled all the way to the left
            setShowLeftArrow(container.scrollLeft > 0);

            // Show the right arrow if not scrolled all the way to the right
            setShowRightArrow(
                container.scrollWidth > container.clientWidth + container.scrollLeft
            );
        };

        // Initial check
        updateArrows();

        // Add event listeners for scroll and resize
        container.addEventListener("scroll", updateArrows);
        window.addEventListener("resize", updateArrows);

        return () => {
            // Clean up event listeners
            container.removeEventListener("scroll", updateArrows);
            window.removeEventListener("resize", updateArrows);
        };
    }, []);

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    return (
        <div className="relative w-full h-80">
            <div ref={containerRef}
                style={{ scrollBehavior: "smooth" }}
                className=" w-full  flex overflow-x-scroll scrollbar-track-fh_beige-light scrollbar-thumb-fh_beige scrollbar-corner-fh_beige-dark transition scrollbar-hide">

                {reviews.map((item, index) => {
                    return <Review
                        review={item}
                        key={index}
                        className="flex-none w-80"
                    // onClick={tähän koodi mil vaihtaa sivua}
                    />
                })}
            </div>
            {/* Left Arrow */}
            {showLeftArrow && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-fh_white opacity-50 hover:opacity-75 text-fh_black p-2 rounded-full shadow"
                >
                    &larr;
                </button>
            )}

            {/* Right Arrow */}
            {showRightArrow && (
                <button
                    onClick={scrollRight}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-fh_white opacity-50 hover:opacity-75 text-fh_black p-2 rounded-full shadow"
                >
                    &rarr;
                </button>
            )}

        </div>
    )
}

export default ReviewArea;