import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      'Hello, My Name is Alex Hunt',
      'Someone-who-loves-apple.py',
      '<ButPrefersASpliceOfCodeInstead />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        src="https://user-images.githubusercontent.com/95322089/231020311-f77ba8b2-25d6-4584-a2d3-7c45cee4fe90.jpg"
        alt="profile image"
        className="relative rounded-full w-[140px] h-[140px] mx-auto object-contain"
      />
      <div className="z-20 w-[387px] sm:w-[810px]">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[11px] sm:tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-[20px] md:text-3xl lg:text-4xl xl:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#36994c" />
        </h1>
        <div className="pt-5  ">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
