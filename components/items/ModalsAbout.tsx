"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect } from "react";
import { IoMdClose, IoMdDownload } from "react-icons/io";
import MagicButton from "../ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { InfiniteMovingCardsVertical } from "../ui/InfiniteMovingCardsVertical";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import Backdrop from "./Backdrop";
import { techSkills } from "@/data";
import { softSkills } from "@/data";

const expand = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};

const appearVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  transition: {
    duration: 0.1,
  },
};

const lineVariantsVertical = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

const lineVariantsHorizontal = {
  hidden: { height: 0 },
  visible: {
    height: "100px",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

const Modal = ({
  handleClose,
  id,
}: {
  handleClose: () => void;
  id: number;
}) => {
  const bgImg = {
    1: "url('/about-1.png')",
    4: "url('/about-4.png')",
    5: "url('/about-5.png')",
  };

  const [copied, setCopied] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);

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

  const windowWidth = useWindowWidth();

  const controlsVertical = useAnimation();
  const controlsHorizontal = useAnimation();
  const controlsText = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controlsVertical.start("visible");
      await controlsHorizontal.start("visible");
      await controlsText.start("visible");
    };

    sequence();
  }, [controlsVertical, controlsHorizontal, controlsText]);

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-clamp-50-700-90 h-min-50-300 m-auto py-2 rounded-lg flex flex-col items-center bg-inherit "
        style={{
          backgroundImage: bgImg[id] ? bgImg[id] : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        variants={expand}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div
          className={`relative w-full ${
            id === 2 || id === 3 ? "justify-center" : ""
          }`}
        >
          <div className={`flex absolute top-0 right-0 m-5 `}>
            <IoMdClose className="cursor-pointer" onClick={handleClose} />
          </div>
        </div>
        {id == 1 && (
          <div className="flex flex-col justify-center items-center">
            <h1 className="lg:text-2xl sm:text-base md:text-xl text-center font-bold lg:mx-32 sm:mx-10 md:mx-16 mt-10">
              Investing in Tomorrow&apos;s technology today unlocks boundless
              potential
            </h1>
            <p className="lg:text-xl sm:text-sm md:text-xl text-center my-7 mx-5">
              Thoughts can only take you so far, I want to be able to impact the
              world enough to create technology that can help innovate and help
              the world become the best place that it can be. Work with me to
              create things beyond our imagination. With enough dedication and
              workflow, anything can be created
            </p>
            <div className="flex flex-row w-full justify-center space-x-4">
              <MagicButton
                title={copied ? "Email Copied" : "Copy My Email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
              />
              <MagicButton
                title={pdfOpen ? "Resume Opened" : "View my Resume"}
                icon={<IoMdDownload />}
                position="left"
                handleClick={handleDownloadPDF}
              />
            </div>
          </div>
        )}

        {id == 2 && (
          <div className="flex flex-row justify-between items-center overflow-hidden w-full">
            {windowWidth >= 640 && (
              <InfiniteMovingCardsVertical
                items={techSkills.map(({ text }: { text: string }) => ({
                  text,
                }))}
                direction="down"
                speed="normal"
                className="mx-5"
              />
            )}

            <div className="w-full">
              <h1 className="lg:text-sm sm:text-sm md:text-sm text-center font-bold lg:mx-32 sm:mx-10 md:mx-16">
                My Tech Stack
              </h1>
              <p className="sm:text-center my-7 mx-5">
                Currently trying to work my hardest to be able to create the
                best websites I can, I do my best to learn as much as possible
                to be able to accomplish this. I want to learn to hone my skills
                to the best of their ability, and be able to use these skills to
                create ideas and generate new businesses.
              </p>
            </div>
            <InfiniteMovingCardsVertical
              items={[...techSkills]
                .reverse()
                .map(({ text }: { text: string }) => ({
                  text,
                }))}
              direction="up"
              speed="normal"
              className="mx-5"
            />
          </div>
        )}
        {id == 3 && (
          <div className="flex flex-row justify-between items-center overflow-hidden w-full">
            {windowWidth >= 640 && (
              <InfiniteMovingCardsVertical
                items={softSkills.map(({ text }: { text: string }) => ({
                  text,
                }))}
                direction="down"
                speed="normal"
                className="mx-5"
              />
            )}

            <div className="w-full">
              <h1 className="lg:text-sm sm:text-sm md:text-sm text-center font-bold lg:mx-32 sm:mx-10 md:mx-16">
                My Soft Skills
              </h1>
              <p className="sm:text-center my-7 mx-5">
                Working through my interpersonal and relational skills have
                always been a huge priority to me, which is why I always work
                towards being the best person I can be while being able to learn
                about my favorite subject.
              </p>
            </div>
            <InfiniteMovingCardsVertical
              items={[...softSkills]
                .reverse()
                .map(({ text }: { text: string }) => ({
                  text,
                }))}
              direction="up"
              speed="normal"
              className="mx-5"
            />
          </div>
        )}

        {id == 4 && (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[40px] font-bold">Goals</h1>
            <div className="flex flex-row mx-5 mt-5 justify-between">
              <p className="flex-1 text-center items-center justify-center px-3 text-[10px] md:text-[15px] font-bold">
                Be someone that is worth recognition
              </p>
              <p className="flex-1 text-center items-center justify-center px-3 text-[10px] md:text-[15px] font-bold">
                Become skilled enough to become a necessary part in changing
                something in the world
              </p>
              <p className="flex-1 text-center items-center justify-center px-3 text-[10px] md:text-[15px] font-bold">
                Create things that will help people in their daily lives
              </p>
            </div>
            <div className="flex flex-row mx-5 mt-10 justify-between">
              <p className="flex-1 text-center items-center justify-center px-3 text-[10px] md:text-[15px] font-bold">
                Build and help other people build cool new things
              </p>
              <p className="flex-1 text-center items-center justify-center px-3 text-[10px] md:text-[15px] font-bold">
                Have a strong bond with today’s technology
              </p>
            </div>
            <h1 className="mt-10 text-[23px]">Upcoming Goals</h1>
            <motion.div
              className="h-0.5 bg-white"
              initial="hidden"
              animate={controlsVertical}
              variants={lineVariantsVertical}
            />
            <div className="w-full flex flex-row justify-between lg:text-[15px] text-[9px]">
              <motion.div
                className="flex-1 text-white ml-2 lg:ml-5 mt-4"
                initial="hidden"
                animate={controlsText}
                variants={appearVariants}
              >
                <span className="font-bold">Creating an AI Trading Bot</span>{" "}
                <br /> following Stock Trends, News and more for best
                predictability
              </motion.div>
              <motion.div
                className="w-0.5 bg-white"
                initial="hidden"
                animate={controlsHorizontal}
                variants={lineVariantsHorizontal}
              />
              <motion.div
                className="flex-1 text-white text-center px-1 lg:px-0 mt-4 "
                initial="hidden"
                animate={controlsText}
                variants={appearVariants}
              >
                <span className="font-bold">Build my own AI Robot</span> <br />{" "}
                A companion that can follow me around and assist me with daily
                activities
              </motion.div>
              <motion.div
                className="w-0.5 bg-white"
                initial="hidden"
                animate={controlsHorizontal}
                variants={lineVariantsHorizontal}
              />
              <motion.div
                className="flex-1 text-white mr-2 lg:mr-5 text-right mt-4 "
                initial="hidden"
                animate={controlsText}
                variants={appearVariants}
              >
                <span className="font-bold"> Creating a Mobile App </span>{" "}
                <br /> To be able to understand how apps are built from the
                creation to publishing to marketing
              </motion.div>
            </div>
          </div>
        )}

        {id == 5 && (
          <div className="flex flex-col justify-center items-center">
            <h1 className="mt-8 text-[20px] sm:text-[25px] font-bold">
              My History
            </h1>
            <TextGenerateEffect
              speed="fast"
              className=" mx-5 sm:mx-12 my-5 sm:my-10 text-[12px] sm:text-[15px] md:text-[18px] font-normal"
              words="I was born and raised in Long Beach California, and have always been inspired to create, from trying to learn how to trade stocks  and learning how to write in HTML and CSS in my late years of middle school, I have always known that I have wanted to do something related to technology. New inventions being created today through new companies have given me a drive to learn as much as I can about the evolving world. I love spending my evenings learning about the newest ideas while I complete my education at Loyola Marymount University.  While I continue to try to create new businesses and learn as much as I can, in the end, I want to be able to create something helpful for the world and be able to assist in making the world a better place. If anyone would like to contact me about anything feel free to reach out and I would love to help you achieve your goals as well. "
            />
          </div>
        )}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
