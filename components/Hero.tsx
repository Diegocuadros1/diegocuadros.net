import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from 'next/image';
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-20 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex-col md:flex-row w-full">
        <div className="flex justify-center relative my-20 z-10 w-full">
          <div className="w-12 h-11 flex-row flex-1 justify-end items-start hidden md:flex">
            <div className="flex flex-col justify-end items-start mb-32">
              <Image
                className="py-5 ml-52 animate-scale-in-center delay-1000"
                src="/github.png"
                alt="GithubLogo"
                width={48}
                height={48}
                layout="fixed"
              />
              <Image
                className="py-5 ml-28 animate-scale-in-center delay-1200"
                src="/instagram.png"
                alt="instagramLogo"
                width={48}
                height={48}
                layout="fixed"
              />
              <Image
                className="py-5 ml-14 animate-scale-in-center delay-1500"
                src="/linkedin.png"
                alt="linkedInLogo"
                width={48}
                height={48}
                layout="fixed"
              />
              <Image
                className="py-5 ml-8 animate-scale-in-center delay-1700"
                src="/facebook.png"
                alt="facebook"
                width={48}
                height={48}
                layout="fixed"
              />
            </div>
            <div className="flex-2 border-r-5 border-white items-center justify-center">
              <div className="w-full md:w-auto flex justify-center md:justify-start">
                <Image
                  className="border-white mr-24 border-r-8 "
                  src={"/me.png"}
                  alt="me"
                  width={200}
                  height={200}
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
          <div className=" h-60 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center flex-2 mt-16">
            <h3 className="text-[75px] font-bold md:mr-96">Diego</h3>
            <h3 className="text-purple text-[75px] font-bold px-20">Cuadros</h3>
            <TextGenerateEffect 
              className="text-center text-small md:tracking-wider mb-4 md:text-large lg:text-2xl p-10 pb-0"
              words="Turning dreams into reality through programming and business"
            />
            <a href="#about" className="">
              <MagicButton 
                title="Get to know me"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
