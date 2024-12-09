import React, { useRef, useState, useEffect } from "react";

import ItemCard from "./ItemCard";

const CardArea = ({ itemsList }) => {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    console.log("ItemsList: " + itemsList);

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
    <div className="relative w-full">

      <div ref={containerRef}
        style={{ scrollBehavior: "smooth" }}
        className=" w-full bg-fh_white flex overflow-x-scroll scrollbar-hide  transition rounded-md"
      >

        {itemsList.map((item, index) => {
          return <ItemCard
            itemData={item}
            key={index}
            className="flex-none w-80"
          />
        })}
        {itemsList.length === 0 && (
          <p className="text-center w-full m-4 p-4 items-center rounded-md bg-fh_beige min-w-120">
            No items to show
            </p>
        )}
      </div>
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-fh_beige hover:opacity-75 text-fh_black p-2 rounded-full shadow"
          style={{ marginLeft: '-4rem' }}
        >
          &larr;
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-fh_beige  hover:opacity-75 text-fh_black p-2 rounded-full shadow"
          style={{ marginRight: '-4rem' }}
        >
          &rarr;
        </button>
      )}
    </div>
  )
}

export default CardArea;