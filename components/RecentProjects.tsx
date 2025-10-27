"use client";

import React, { useState } from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import { projectDescriptions } from "@/data/index";
import { ProjectsModal } from "./items/ModalItems";

type ProjectInfo = {
  title: string;
  subtitle: string;
  image_url: string;
  url: string;
  description: React.ReactNode;
};

const RecentProjects = () => {
  const [modalOn, setModalOn] = useState(false);
  const [projectInfo, setProjectInfo] = useState<ProjectInfo | null>(null);

  return (
    <>
      <div className="py-5" id="projects">
        <h1 className="heading mt-10">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className="h-[32rem] sm:h-[41rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const info = projectDescriptions[id];
                if (info) {
                  setProjectInfo(info);
                  setModalOn(true);
                }
              }}
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
      <ProjectsModal
        open={modalOn}
        onClose={() => setModalOn(false)}
        info={
          projectInfo
            ? projectInfo
            : {
                title: "",
                subtitle: "",
                image_url: "",
                url: "",
                description: () => <>Nothing found</>,
              }
        }
      />
    </>
  );
};

export default RecentProjects;
