"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCardsVertical = ({
  items,
  direction = "up",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    text: string;
  }[];
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "up") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-h-[600px] sm:max-h-[700px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col min-h-full shrink-0 gap-4 py-4 w-full",
          start && "animate-scroll-vertical",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-full max-w-[450px] relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.text}
          >
            <blockquote className="text-center flex justify-center items-center">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-[8px] sm:text-sm leading-[1.6] text-gray-100 font-normal text-center">
                {item.text}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
