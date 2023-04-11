import React from 'react';
import {motion} from 'framer-motion';

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="container mx-auto flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly md:justify-center items-center ">
      <h3 className="absolute top-[100px] sm:top-[90px] uppercase tracking-[20px] text-gray-400 text-lg md:text-xl lg:text-2xl">
        about
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: true}}
        src="https://user-images.githubusercontent.com/95322089/221450218-ae0db517-2b46-4ec6-ab59-b425798b56ed.png"
        className="-mb-28 md:mb-0 flex-shrink-0 w-[160px] h-[160px] rounded-full object-cover md:rounded-lg md:w-[260px] md:h-[350px] xl:w-[450px] xl:h-[550px]"
      />
      <div className="space-y-6 px-0 md:px-10">
        <h4 className="text-3xl sm:text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#36994c]/50">little</span>{' '}
          about me
        </h4>
        <p className="text-left text-xs sm:text-[16px]">
          It&apos;s a pleasure to meet you! As a seasoned software engineer,
          I&apos;ve had a lifelong fascination with technology and
          problem-solving. When I discovered the world of computer programming,
          I found the perfect outlet to combine my passions. To me, software
          engineering is a form of digital artistry, where I can create
          something entirely new on a unique canvas using just a few lines of
          code. With the power of technology, I can build entire worlds,
          revolutionize industries, and create platforms that were once
          unimaginable.
          <br />
          <br />
          Apart from my professional interests, I&apos;m also an avid enthusiast
          of video games, soccer, and travel photography. I believe that diverse
          interests outside of work can fuel creativity and innovation in my
          programming. I would be thrilled to discuss your team&apos;s
          requirements and learn more about your organization&apos;s culture and
          goals. Together, we can create cutting-edge solutions and drive your
          vision forward.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
