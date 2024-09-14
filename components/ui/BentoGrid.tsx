"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Modal from "../items/ModalsAbout";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[5rem] grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [modalOn, setModalOn] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const open = (id: any) => {
    setSelectedId(id);
    setModalOn(true);
  };

  const close = () => {
    setSelectedId(null);
    setModalOn(false);
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1, zIndex: 10 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.01 }}
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
          className
        )}
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%",
        }}
        onClick={() => (modalOn ? close() : open(id))}
      >
        {/* Box  */}
        <div className={`${id === 6} && flex justify-start h-full`}>
          <div className="w-full h-full absolute">
            {img && (
              <Image
                src={img}
                alt={img}
                width={1000}
                height={1000}
                className={cn(imgClassName, "object-cover, object-center")}
              />
            )}
          </div>
          <div
            className={`absolute right-0 -bottom-5 ${
              id === 5 && "w-full opacity-80"
            }`}
          >
            {spareImg && (
              <Image
                src={spareImg}
                alt={spareImg}
                width={1000}
                height={1000}
                className={cn(
                  imgClassName,
                  "object-cover, object-center w-full h-full"
                )}
              />
            )}
          </div>
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duraiton-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 space-y-4 flex-grow"
            )}
          >
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
              {title}
            </div>

            {/* Skill Stack list div */}
            {id === 2 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 space-y-4">
                <div className="py-2 flex flex-col gap-5 lg:gap-4">
                  <span className="px-3 rounded-lg text-center bg-[#10132E]" />

                  {["React.js", "Next.js", "Tailwindcss"].map((item) => (
                    <span
                      key={item}
                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs opacity-50 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}

                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                </div>

                <div className="flex flex-col gap-5 lg:gap-4">
                  <span className="py-2 px-3 rounded-lg text-center bg-[#10132E]" />

                  {["Javascript", "Python", "MongoDB"].map((item) => (
                    <span
                      key={item}
                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs opacity-50 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-5 lg:gap-4">
                  <span className="px-3 rounded-lg text-center bg-[#10132E]" />
                  {["React.js", "Next.js", "Tailwindcss"].map((item) => (
                    <span
                      key={item}
                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs opacity-50 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                </div>
                <div className="flex flex-col gap-5 lg:gap-4">
                  <span className="py-2 px-3 rounded-lg text-center bg-[#10132E]" />
                  {["Javascript", "Python", "MongoDB"].map((item) => (
                    <span
                      key={item}
                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs opacity-50 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {modalOn && selectedId && (
          <Modal modalOn={modalOn} handleClose={close} id={selectedId} />
        )}
      </AnimatePresence>
    </>
  );
};
