"use client";

import React, { useState } from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./items/ModalsProjects";
import Link from "next/link";
import Image from "next/image";

const RecentProjects = () => {
  const [modalOn, setModalOn] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const open = (id: any) => {
    console.log(`opening item for id ${id}`);
    setSelectedId(id);
    setModalOn(true);
  };

  const close = () => {
    console.log(`closing item`);
    setSelectedId(null);
    setModalOn(false);
  };

  const filteredProjects = projects
    .filter((project) => project.id >= 1 && project.id <= 4)
    .slice(0, 4);

  return (
    <>
      <div className="py-5" id="projects">
        <h1 className="heading mt-10">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
          {filteredProjects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className="h-[32rem] sm:h-[41rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
              onClick={() => (modalOn ? close() : open(id))}
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <Image
                      src="/bg.svg"
                      alt="bg-img"
                      width={570}
                      height={570}
                    />
                  </div>
                  <Image
                    src={img}
                    alt={title}
                    width={570}
                    height={570}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <Image src={icon} alt={icon} width={20} height={20} />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-x md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {modalOn && selectedId && (
          <Modal modalOn={modalOn} handleClose={close} id={selectedId} />
        )}
      </AnimatePresence>
    </>
  );
};

export default RecentProjects;
