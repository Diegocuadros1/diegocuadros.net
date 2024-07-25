"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import MagicButton from "./ui/MagicButton";
import { FaArrowUpRightDots, FaHouseFlag } from "react-icons/fa6";
import { MdOutlineDraw } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const Jobs = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Jobs I <span className="text-purple">Work On</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card href="/cohost" description="Cohosting for an Airbnb host so that the host doesn't need to worry about managing their own Airbnb" title="Airbnb Cohosting" icon={<FrontIcon name="Airbnb Cohosting" icon={<FaHouseFlag />}/>}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card href="/webdev" description="I will help you build your dream website or app and manage it for you" title="Website Development" icon={<FrontIcon name="Website Development" icon={<MdOutlineDraw />}/>}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
          {/* Radial gradient for the cute fade */}
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  description,
  href,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  href: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 lg:h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-center dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 
          style={{color: '#e4ecff'}}
          className="dark:text-white text-sm opacity-0 text-center group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {description}
          <br/>
          <a href={href}>
            <MagicButton
              title="Learn More"
              icon={<FaArrowRight />} 
              position="right"
              extraClasses="w-[40px]"
            />
          </a>
        </h2>
        

      </div>
    </div>
  );
};

const FrontIcon = ({ name, icon, }: {name: string, icon: React.ReactNode,}) => {
  return (
    <div className="mx-10 md:mx-0">
      <MagicButton otherClasses="cursor-default font-bold text-[21px] p-10" title={name} icon={icon} position="right"/>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Jobs