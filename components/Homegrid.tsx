"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { TechStackModal, SoftSkillsModal } from "./items/ModalItems";

const Homegrid = () => {
  const [techStackModal, setTechStackModal] = useState(false);
  const [softSkillsModal, setSoftSkillsModal] = useState(false);

  const [pdfOpen, setPdfOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("cuadrosda21@gmail.com");

    setCopied(true);
  };

  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setPdfOpen(true);
  };

  return (
    <section id="about">
      <div className="flex justify-center items-center">
        <h1 className="text-white font-bold text-[40px] md:text-[50px] p-10 z-50">
          About <span className="text-purple">Me</span>
        </h1>
      </div>

      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto lg:auto-rows-[220px]"
        )}
      >
        {/* Contact Card */}
        <div className="lg:col-span-4 md:col-span-2 lg:row-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 min-h-[30vh]">
          <div className="w-full h-full absolute inset-0">
            <Image
              src="/about-1.png"
              alt="about illustration"
              fill
              className={cn("object-cover object-center")}
            />
          </div>
          <div
            className={cn(
              "relative md:h-full min-h-[30vh] flex flex-col justify-between p-5 lg:p-10 space-y-4 flex-grow "
            )}
          >
            <h1 className="font-sans font-bold text-lg lg:text-2xl mb-30 transition duration-200 group-hover/bento:translate-x-2">
              Interested in working together? Look at my resume or copy my email
              and get in touch!
            </h1>
            <div className="w-full mt-auto flex justify-between">
              <MagicButton
                title={copied ? "Email Copied!" : "Copy Email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
              />
              <MagicButton
                title={pdfOpen ? "Resume Downloaded" : "View my Resume"}
                icon={<IoMdDownload />}
                position="left"
                handleClick={handleDownloadPDF}
              />
            </div>
          </div>
        </div>
        {/* Tech Stack Card */}
        <div
          onClick={() => setTechStackModal(true)}
          className="lg:col-span-2 md:col-span-1 lg:row-span-1 md:row-span-1 cursor-pointer relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 min-h-[10vh]"
        >
          <div
            className={cn(
              "justify-end relative md:h-full min-h-20 flex flex-col p-5 lg:p-10 space-y-4 flex-grow "
            )}
          >
            <div className="transition duration-200 group-hover/bento:translate-x-2 z-10">
              <p className=" font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 ">
                I Constantly Try to Improve
              </p>
              <h1 className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
                My Tech Stack
              </h1>
            </div>
            <div className="flex gap-1 lg:gap-5 w-fit absolute -bottom-11 -right-3 lg:-right-2 space-y-4">
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
          </div>
        </div>
        <TechStackModal
          open={techStackModal}
          onClose={() => setTechStackModal(false)}
        />

        {/* Soft Skills Stack Card */}
        <div
          onClick={() => setSoftSkillsModal(true)}
          className="lg:col-span-2 md:col-span-1 lg:row-span-1 md:row-span-1 cursor-pointer relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 min-h-[10vh]"
        >
          <div
            className={cn(
              "justify-end relative md:h-full min-h-20 flex flex-col p-5 lg:p-10 space-y-4 flex-grow "
            )}
          >
            <div className="transition duration-200 group-hover/bento:translate-x-2 z-10">
              <p className=" font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 ">
                I Constantly Try to Improve
              </p>
              <h1 className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
                My Soft Skills
              </h1>
            </div>
            <div className="flex gap-1 lg:gap-5 w-fit absolute -bottom-11 -right-3 lg:-right-2 space-y-4">
              <div className="py-2 flex flex-col gap-5 lg:gap-4">
                <span className="px-3 rounded-lg text-center bg-[#10132E]" />

                {["Adaptability", "Problem Solving", "Communication"].map(
                  (item) => (
                    <span
                      key={item}
                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs opacity-50 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  )
                )}

                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>

              <div className="flex flex-col gap-5 lg:gap-4">
                <span className="py-2 px-3 rounded-lg text-center bg-[#10132E]" />

                {["Productivity", "Time Management", "Leadership"].map(
                  (item) => (
                    <span
                      key={item}
                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs opacity-50 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <SoftSkillsModal
          open={softSkillsModal}
          onClose={() => setSoftSkillsModal(false)}
        />
      </div>
    </section>
  );
};

export default Homegrid;
