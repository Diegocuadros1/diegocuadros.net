"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IoMdClose, IoMdDownload } from "react-icons/io";
import Backdrop from "./Backdrop";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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

const hoverHighlight = {
  scale: 1.1,
  textShadow: "0px 0px 8px rgb(255,255,255)",
  transition: { duration: 0.5 },
};

const Modal = ({
  handleClose,
  id,
}: {
  handleClose: () => void;
  id: number;
}) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-clamp-50-700-90 h-min-50-300 m-auto py-2 rounded-lg bg-black flex flex-col items-center bg-inherit "
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

        {id === 1 && (
          <>
            <div className="w-full flex flex-col sm:flex-row justify-between items-center">
              <div className="w-[200px] h-auto sm:w-[200px] sm:h-auto mr-10">
                <Image
                  src="/crystalclear.svg"
                  alt="crystalclearsolutions"
                  layout="responsive"
                  width={200}
                  height={200}
                  className="my-5 mx-7 h-auto w-full object-cover"
                />
              </div>
              <div className="flex items-center flex-col mt-3 sm:mt-7 sm:mr-5">
                <h1 className="text-[20px] sm:text-[30px] font-bold">
                  Crystal Clear Solutions:{" "}
                </h1>
                <h2 className="text-[12px] sm:text-[15px] font-semibold sm:mt-3">
                  Window Cleaning Company Based in Long Beach California
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center my-2 mx-5 flex-col">
              <p className="text-[9px] sm:text-[13px] ml-5 indent-8">
                Crystal Clear Solutions is a collaborative business initiative I
                co-founded with a partner, aimed at providing innovative web
                development solutions. As my expertise in Web Development has
                expanded, so has the website. This project has been instrumental
                in advancing my knowledge of deployment, domain management, and
                the creation of business-oriented websites.
                <br />
                <br />
                The website initially launched using React and Redux, but has
                since evolved into a Next.js application, significantly
                improving loading times and image optimization. Leveraging
                Framer Motion, I introduced smooth, fluid animations, further
                enhancing the user experience. I also transitioned to
                TailwindCSS for styling, resulting in a more efficient and
                modern design workflow.
                <br />
                <br />
                As the business grows, I continue to refine my skills and
                contribute to the development of dynamic, high-performance web
                applications.
              </p>
              <div className="flex flex-row justify-center items-center w-full my-5 text-purple">
                <Link href={"https://crystalclearsolutions.co"} target="_blank">
                  <motion.div
                    whileHover={hoverHighlight}
                    className="flex flex-row"
                  >
                    <p className="text-[11px] sm:text-[15px] md:text-[17px]">
                      Check Live Site
                    </p>
                    <FaExternalLinkAlt className="mt-1 ml-3 w-3 sm:w-4 h-auto " />
                  </motion.div>
                </Link>
              </div>
            </div>
          </>
        )}
        {id === 2 && (
          <>
            <div className="w-full flex flex-col sm:flex-row justify-between items-center">
              <div className="w-[200px] h-auto sm:w-[200px] sm:h-auto mr-10">
                <Image
                  src="/cuadconnect.svg"
                  alt="cuadconnect"
                  layout="responsive"
                  width={200}
                  height={200}
                  className="my-5 mx-7 h-auto w-full object-cover"
                />
              </div>
              <div className="flex items-center flex-col mt-3 sm:mt-7 sm:mr-5">
                <h1 className="text-[20px] sm:text-[30px] font-bold">
                  CuadConnect:{" "}
                </h1>
                <h2 className="text-[12px] sm:text-[15px] font-semibold sm:mt-3">
                  A Social Media For Computer Science Students
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center my-2 mx-5 flex-col">
              <p className="text-[9px] sm:text-[13px] ml-5 indent-8">
                This web application was designed to support Computer Science
                students by fostering a sense of community and providing a
                platform for collaboration. It is a social networking site
                tailored specifically to help students connect with peers who
                may face similar academic challenges. The platform serves as a
                gateway to form friendships and share strategies for success in
                programming courses, especially as academic pressures mount.
                <br />
                <br />
                Developing this platform enhanced my expertise in the MERN
                stack, utilizing MongoDB for database management, React for
                front-end development, Express for backend services, and Node.js
                to tie it all together. I also deepened my understanding of
                RESTful APIs and how to integrate them into dynamic web
                applications. Throughout this process, I refined my
                problem-solving skills, tackling bugs and deployment challenges
                as I built my first social media platform.
              </p>
              <div className="flex flex-row justify-between items-center w-full my-5 text-purple">
                <Link
                  href={
                    "https://fathomless-journey-67027-44ee55a2e001.herokuapp.com/"
                  }
                  target="_blank"
                >
                  <motion.div
                    whileHover={hoverHighlight}
                    className="flex flex-row"
                  >
                    <p className="text-[11px] sm:text-[15px] md:text-[17px]">
                      Check Live Site
                    </p>
                    <FaExternalLinkAlt className="mt-1 ml-3 w-3 sm:w-4 h-auto " />
                  </motion.div>
                </Link>
                <Link
                  href={"https://github.com/Diegocuadros1/cuadconnect"}
                  target="_blank"
                >
                  <motion.div
                    whileHover={hoverHighlight}
                    className="flex flex-row"
                  >
                    <p className="text-[11px] sm:text-[15px] md:text-[17px]">
                      View Github
                    </p>
                    <FaGithub className="mt-0 ml-3 w-3 sm:w-4 h-auto" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </>
        )}
        {id === 3 && (
          <>
            <div className="w-full flex flex-col sm:flex-row justify-between items-center">
              <div className="w-[200px] h-auto sm:w-[200px] sm:h-auto mr-10">
                <Image
                  src="/cuadocspics.png"
                  alt="cuadocs"
                  layout="responsive"
                  width={200}
                  height={200}
                  className="my-5 mx-7 h-auto w-full object-cover"
                />
              </div>
              <div className="flex items-center flex-col mt-3 sm:mt-7 sm:mr-5">
                <h1 className="text-[20px] sm:text-[30px] font-bold">
                  Cuadocs:{" "}
                </h1>
                <h2 className="text-[12px] sm:text-[15px] font-semibold sm:mt-3">
                  A Google Docs Clone With Authentication
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center my-2 mx-5 flex-col">
              <p className="text-[9px] sm:text-[13px] ml-5 indent-8">
                Cuadocs is a project designed to emulate the collaborative
                features of Google Docs while providing a user-friendly
                interface. The primary focus was to deepen my understanding of
                real-time collaboration between users on web platforms. Though a
                challenging area, leveraging open-source tools like Liveblocks
                and Clerk accelerated my grasp of live interaction and
                streamlined the implementation of user authentication. <br />
                <br /> Through this project, I enhanced my proficiency in
                building full-stack applications using Next.js. It also
                significantly expanded my skill set, enabling me to create
                robust web solutions and equipping me with the knowledge to
                build personal applications and websites.
              </p>
              <div className="flex flex-row justify-between items-center w-full my-5 text-purple">
                <Link href={"https://cuadocs.vercel.app/"} target="_blank">
                  <motion.div
                    whileHover={hoverHighlight}
                    className="flex flex-row"
                  >
                    <p className="text-[11px] sm:text-[15px] md:text-[17px]">
                      Check Live Site
                    </p>
                    <FaExternalLinkAlt className="mt-1 ml-3 w-3 sm:w-4 h-auto " />
                  </motion.div>
                </Link>
                <Link
                  href={"https://github.com/Diegocuadros1/cuadocs"}
                  target="_blank"
                >
                  <motion.div
                    whileHover={hoverHighlight}
                    className="flex flex-row"
                  >
                    <p className="text-[11px] sm:text-[15px] md:text-[17px]">
                      View Github
                    </p>
                    <FaGithub className="mt-0 ml-3 w-3 sm:w-4 h-auto" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </>
        )}
        {id === 4 && (
          <>
            <div className="w-full flex flex-col sm:flex-row justify-between items-center">
              <div className="w-[200px] h-auto sm:w-[200px] sm:h-auto mr-10">
                <Image
                  src="/moneybuddy.svg"
                  alt="mymoneybuddy"
                  layout="responsive"
                  width={200}
                  height={200}
                  className="my-5 ml-7 h-auto w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-center flex-col mt-3 sm:mt-7 sm:mr-5">
                <h1 className="text-[20px] sm:text-[30px] font-bold">
                  My Money Buddy
                </h1>
                <h2 className="text-[12px] sm:text-[15px] font-semibold sm:mt-3">
                  Budgeting app for people to manage their money
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center my-2 mx-5 flex-col">
              <p className="text-[9px] sm:text-[15px] ml-5 indent-8">
                This project was the culmination of my studies in Harvard&apos;s
                online CS50 course, where I gained a foundational understanding
                of Computer Science principles. Inspired by a book on financial
                goal-setting, I created an application that emphasizes the
                importance of saving and financial planning. Through this
                project, I learned the fundamentals of web development,
                including how to create user login and registration systems, and
                how to visualize data using interactive graphs.
                <br />
                <br />
                Built with Flask, this project allowed me to bridge Python and
                JavaScript to deliver dynamic web functionality. It also sparked
                my interest in web development and laid the groundwork for my
                potential future ventures into mobile application development.
              </p>
              <div className="flex flex-row justify-between items-center w-full my-5 text-purple">
                <Link
                  href={"https://www.youtube.com/watch?v=ekNsAsgRCls"}
                  target="_blank"
                >
                  <motion.div
                    whileHover={hoverHighlight}
                    className="flex flex-row"
                  >
                    <p className="text-[11px] sm:text-[15px] md:text-[17px]">
                      Youtube Video
                    </p>
                    <FaExternalLinkAlt className="mt-1 ml-3 w-3 sm:w-4 h-auto " />
                  </motion.div>
                </Link>
                <Link
                  href={"https://github.com/Diegocuadros1/MyMoneyBuddy"}
                  target="_blank"
                >
                  <motion.div
                    whileHover={hoverHighlight}
                    className="flex flex-row"
                  >
                    <p className="text-[11px] sm:text-[15px] md:text-[17px]">
                      Check Github
                    </p>
                    <FaGithub className="mt-1 ml-3 w-3 sm:w-4 h-auto " />
                  </motion.div>
                </Link>
              </div>
            </div>
          </>
        )}
        {id === 5 && (
          <>
            <div className="w-full flex flex-col sm:flex-row justify-between items-center">
              <div className="w-[100px] h-auto sm:w-[200px] sm:h-auto mr-10">
                <Image
                  src="/videobot.svg"
                  alt="videobot"
                  layout="responsive"
                  width={200}
                  height={200}
                  className="my-5 mx-7 h-auto w-full object-cover"
                />
              </div>
              <div className="flex items-center flex-col mt-3 sm:mt-7 sm:mr-5">
                <h1 className="text-[20px] sm:text-[30px] font-bold">
                  Short-Form Language Bot
                </h1>
                <h2 className="text-[12px] sm:text-[15px] text-center font-semibold sm:mt-3">
                  Created a bot to create short form trivia videos for people on
                  the internet to learn new languages
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center my-2 mx-5 flex-col">
              <p className="text-[9px] sm:text-[15px] ml-5 indent-8">
                This project involved creating a bot using Python libraries like
                Pillow, MoviePy, and others to generate self-edited
                language-learning videos. The bot translates words into
                multiple-choice questions (A, B, C, D) and compiles them into a
                one-minute video with artificial speech generated through the
                Eleven Labs API. The goal is to engage social media users in
                learning new languages in a dynamic and interactive way.
                <br />
                <br />
                Throughout this project, I honed my problem-solving skills,
                learning that persistence is key in programming. Whether it’s
                finding solutions to complex challenges or creating custom tools
                to meet unique requirements, this project reinforced the idea
                that almost every programming issue has a solution—it’s just a
                matter of finding or building the right one.
              </p>
              <div className="flex flex-row justify-center items-center w-full my-5 text-purple">
                <Link
                  href={
                    "https://github.com/Diegocuadros1/Social_media_video_bot"
                  }
                  target="_blank"
                >
                  <motion.div
                    whileHover={hoverHighlight}
                    className="flex flex-row"
                  >
                    <p className="text-[11px] sm:text-[15px] md:text-[17px]">
                      View Github
                    </p>
                    <FaGithub className="mt-1 ml-3 w-3 sm:w-4 h-auto " />
                  </motion.div>
                </Link>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
