import { useState, useEffect, useRef } from "react";

interface AutoScrollListProps {
  items: string[];
  direction?: "up" | "down";
}

export const AutoScrollList: React.FC<AutoScrollListProps> = ({
  items,
  direction = "down",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(
    direction === "up" ? -1 : 1
  ); // 1 for down, -1 for up

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    if (direction === "up") {
      // Start at bottom for upward scroll
      scrollContainer.scrollTop =
        scrollContainer.scrollHeight - scrollContainer.clientHeight;
    } else {
      // Start at top for downward scroll
      scrollContainer.scrollTop = 0;
    }
  }, [direction]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      if (!isUserInteracting) {
        const currentScroll = scrollContainer.scrollTop;
        const maxScroll =
          scrollContainer.scrollHeight - scrollContainer.clientHeight;

        // Change direction when reaching the end
        if (currentScroll >= maxScroll) {
          setScrollDirection(-1);
        } else if (currentScroll <= 0) {
          setScrollDirection(1);
        }

        scrollContainer.scrollTop += scrollDirection * 0.5; // Smooth slow scroll
      }
    };

    const intervalId = setInterval(autoScroll, 20);

    return () => clearInterval(intervalId);
  }, [isUserInteracting, scrollDirection]);

  const handleMouseEnter = () => setIsUserInteracting(true);
  const handleMouseLeave = () => setIsUserInteracting(false);
  const handleTouchStart = () => setIsUserInteracting(true);
  const handleTouchEnd = () =>
    setTimeout(() => setIsUserInteracting(false), 1000);

  return (
    <div className="">
      <div
        ref={scrollRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="h-[400px] w-[150px] overflow-y-scroll scrollbar-hide space-y-4 py-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-4 flex items-center justify-center border border-slate-700/50 shadow-lg hover:bg-slate-700/80 transition-colors duration-300"
          >
            <span className="text-white text-sm font-medium text-center">
              {item}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};
