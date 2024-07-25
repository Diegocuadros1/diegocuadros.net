"use client"
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { IoMdClose, IoMdDownload } from "react-icons/io";
import MagicButton from '../ui/MagicButton';
import { IoCopyOutline } from 'react-icons/io5';
import { InfiniteMovingCardsVertical } from '../ui/InfiniteMovingCardsVertical';
import Backdrop from './Backdrop';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';



const expand = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,

    }
  },
  exit: {
    scale: 0,
    opacity: 0,
  }
}

const hoverHighlight = {
  scale: 1.1, 
  textShadow: "0px 0px 8px rgb(255,255,255)", 
  transition: 0.5,
}


const Modal = ({handleClose, id}) => {
    return (
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className='w-clamp-50-700-90 h-min-50-300 m-auto py-2 rounded-lg bg-black flex flex-col items-center bg-inherit '
          variants={expand}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
            <div className={`relative w-full ${id === 2 || id === 3 ? 'justify-center' : ''}`}>
              <div className={`flex absolute top-0 right-0 m-5 `}>
                <IoMdClose className="cursor-pointer" onClick={handleClose} />
              </div>
            </div>
            {id === 1 && (
              <>
                <div className='w-full flex flex-col sm:flex-row justify-between items-center'>
                  <div className='w-[200px] h-auto sm:w-[200px] sm:h-auto mr-10'>
                    <Image 
                      src="/cuadconnect.svg"
                      alt="cuadconnect"
                      layout='responsive'
                      width={200}
                      height={200}
                      className='my-5 mx-7 h-auto w-full object-cover'
                    />
                  </div>
                  <div className='flex items-center flex-col mt-3 sm:mt-7 sm:mr-5'>
                    <h1 className='text-[20px] sm:text-[30px] font-bold'>CuadConnect: </h1>
                    <h2 className='text-[12px] sm:text-[15px] font-semibold sm:mt-3'>A Social Media For Computer Science Students</h2>
                  </div>
                </div>
                <div className='flex items-center justify-center my-2 mx-5 flex-col'>
                  <p className='text-[9px] sm:text-[13px] ml-5 indent-8'>
                    Created using the Mern Stack, this website was created to ensure that people in Computer Science are not 
                    alone and there are people out there struggling with similar situations. This web application is a social networking 
                    platformed tailored specifically for students like me who need deeper and better collaboration among their peers. 
                    This platform is meant to be a gateway to friendships and to learn how to do your best in programming classes as 
                    pressures rise. The development of this website was enriching, since it enhanced my skills in deploying web applicaitons, 
                    leveraing MongoDB for database management, and React for front-end development and Express for back end services. 
                    I learned about how Rest APIs work and how I can integrate them into websites, and I was able to hone my problem-solving 
                    abilities, since I need to be able to solve issues and bugs as I go along in creating my first social media platform
                  </p>
                  <div className='flex flex-row justify-between items-center w-full my-5 text-purple'>
                    <Link href={"https://fathomless-journey-67027-44ee55a2e001.herokuapp.com/"} target='_blank'>
                      <motion.div whileHover={hoverHighlight} className='flex flex-row'>
                        <p className='text-[11px] sm:text-[15px] md:text-[17px]'>Check Live Site</p>
                        <FaExternalLinkAlt className='mt-1 ml-3 w-3 sm:w-4 h-auto '/>
                      </motion.div>
                    </Link>
                    <Link href={"https://github.com/Diegocuadros1/cuadconnect"} target='_blank'>
                      <motion.div whileHover={hoverHighlight} className='flex flex-row'>
                        <p className='text-[11px] sm:text-[15px] md:text-[17px]'>View Github</p>
                        <FaGithub className='mt-0 ml-3 w-3 sm:w-4 h-auto'/>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </>
            )}
            {id === 2 && (
              <>
                <div className='w-full flex flex-col sm:flex-row justify-between items-center'>
                  <div className='w-[200px] h-auto sm:w-[200px] sm:h-auto mr-10'>
                    <Image 
                      src="/crystalclear.svg"
                      alt="crystalclearsolutions"
                      layout='responsive'
                      width={200}
                      height={200}
                      className='my-5 mx-7 h-auto w-full object-cover'
                    />
                  </div>
                  <div className='flex items-center flex-col mt-3 sm:mt-7 sm:mr-5'>
                    <h1 className='text-[20px] sm:text-[30px] font-bold'>Crystal Clear Solutions: </h1>
                    <h2 className='text-[12px] sm:text-[15px] font-semibold sm:mt-3'>Window Cleaning Company Based in Long Beach California</h2>
                  </div>
                </div>
                <div className='flex items-center justify-center my-2 mx-5 flex-col'>
                  <p className='text-[9px] sm:text-[17px] ml-5 indent-8'>
                    Founded in 2022, Founder of Crystal Clear Solutions asked if I would build his website, for him, and I happily obliged. 
                    Font end website built using the Mern Stack, I was quickly able to learn more about how websites are deployed and published, 
                    and the process and the time that it takes to create a product such as this. Took lots of time and effort and I am 
                    constantly changing and updating the website as I learn more and more technologies as I progress through my journey as an 
                    upcoming Software developer
                  </p>
                  <div className='flex flex-row justify-center items-center w-full my-5 text-purple'>
                    <Link href={"https://crystalclearsolutions.co"} target='_blank'>
                      <motion.div whileHover={hoverHighlight} className='flex flex-row'>
                        <p className='text-[11px] sm:text-[15px] md:text-[17px]'>Check Live Site</p>
                        <FaExternalLinkAlt className='mt-1 ml-3 w-3 sm:w-4 h-auto '/>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </>
            )}
            {id === 3 && (
              <>
                <div className='w-full flex flex-col sm:flex-row justify-between items-center'>
                  <div className='w-[200px] h-auto sm:w-[200px] sm:h-auto mr-10'>
                    <Image 
                      src="/moneybuddy.svg"
                      alt="mymoneybuddy"
                      layout='responsive'
                      width={200}
                      height={200}
                      className='my-5 ml-7 h-auto w-full object-cover'
                    />
                  </div>
                  <div className='flex items-center justify-center flex-col mt-3 sm:mt-7 sm:mr-5'>
                    <h1 className='text-[20px] sm:text-[30px] font-bold'>My Money Buddy</h1>
                    <h2 className='text-[12px] sm:text-[15px] font-semibold sm:mt-3'>Budgeting app for people to manage their money</h2>
                  </div>
                </div>
                <div className='flex items-center justify-center my-2 mx-5 flex-col'>
                  <p className='text-[9px] sm:text-[15px] ml-5 indent-8'>
                    Created during my time taking an online harvard course called CS50, I learned all about the introduction for 
                    Computer Science, and my final project was a collection of all of it. This app was made after I read a book of the 
                    importance of needing to save and aim to have good financial goals. In the end I was able to learn the basics of how 
                    web development works and how to use graphs and create a login / register page for a website application using Flask to 
                    turn python code into Javascript for my website. The project is what woke up my intrigue for creating website 
                    applications and potentially mobile applications in the future.
                  </p>
                  <div className='flex flex-row justify-between items-center w-full my-5 text-purple'>
                    <Link href={"https://www.youtube.com/watch?v=ekNsAsgRCls"} target='_blank'>
                      <motion.div whileHover={hoverHighlight} className='flex flex-row'>
                        <p className='text-[11px] sm:text-[15px] md:text-[17px]'>Youtube Video</p>
                        <FaExternalLinkAlt className='mt-1 ml-3 w-3 sm:w-4 h-auto '/>
                      </motion.div>
                    </Link>
                    <Link href={"https://github.com/Diegocuadros1/MyMoneyBuddy"} target='_blank'>
                      <motion.div whileHover={hoverHighlight} className='flex flex-row'>
                        <p className='text-[11px] sm:text-[15px] md:text-[17px]'>Check Github</p>
                        <FaGithub className='mt-1 ml-3 w-3 sm:w-4 h-auto '/>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </>
            )}
            {id === 4 && (
              <>
                <div className='w-full flex flex-col sm:flex-row justify-between items-center'>
                  <div className='w-[100px] h-auto sm:w-[200px] sm:h-auto mr-10'>
                    <Image 
                      src="/videobot.svg"
                      alt="videobot"
                      layout='responsive'
                      width={200}
                      height={200}
                      className='my-5 mx-7 h-auto w-full object-cover'
                    />
                  </div>
                  <div className='flex items-center flex-col mt-3 sm:mt-7 sm:mr-5'>
                    <h1 className='text-[20px] sm:text-[30px] font-bold'>Short-Form Language Bot</h1>
                    <h2 className='text-[12px] sm:text-[15px] text-center font-semibold sm:mt-3'>Created a bot to create short form trivia videos for people on the internet to learn new languages</h2>
                  </div>
                </div>
                <div className='flex items-center justify-center my-2 mx-5 flex-col'>
                  <p className='text-[9px] sm:text-[15px] ml-5 indent-8'>
                    Created a bot using Python libraries such as Pillow, Moviepy, and others to create a self edited video where words are translated, 
                    created into multiple choice A, B, C, and D, and then concatinated into a minute long video using artificial speech with Eleven Labs API 
                    so that people on social media platforms can find an interest in learning other languages. This project has taught me the best way to be 
                    able to problem solve is to always keep trying and that eventually problems will be resolved one way or another, we just have to continue 
                    trying and when working in programming there is almost always a solution or a program to fix a problem, it just needs to be created 
                    tailored to your own specific needs. 
                  </p>
                  <div className='flex flex-row justify-center items-center w-full my-5 text-purple'>
                    <Link href={"https://github.com/Diegocuadros1/Social_media_video_bot"} target='_blank'>
                      <motion.div whileHover={hoverHighlight} className='flex flex-row'>
                        <p className='text-[11px] sm:text-[15px] md:text-[17px]'>View Github</p>
                        <FaGithub className='mt-1 ml-3 w-3 sm:w-4 h-auto '/>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </>
            )}
        </motion.div>
      </Backdrop>
    )
}

export default Modal

