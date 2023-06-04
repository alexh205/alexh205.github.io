import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

const Header = (props: Props) => {
  const handleClick = () => {
    window.location.hash = '#contact';
  };

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
        }}
        className="flex flex-row items-center">
        <div className="flex flex-col items-center justify-center">
          <SocialIcon
            url="https://www.linkedin.com/in/alexander-hunt-3b1b1710a/"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="text-xs text-gray-500 opacity-80">LinkedIn</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-[6px]">
          <SocialIcon
            url="https://angel.co/u/alexander-hunt-3"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="text-xs text-gray-500 opacity-80">Wellfound</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <SocialIcon
            url="https://github.com/alexh205"
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="text-xs text-gray-500 opacity-80">GitHub</p>
        </div>
      </motion.div>
      <div className="flex flex-col items-center">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
          onClick={handleClick}>
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-300 mr-3">
            Get In Touch
          </p>
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
          }}>
          <a
            href="https://docs.google.com/document/d/1l428DEq3N2RCl5-zvuscUYX8euELsuYvjfbC4U-GYGM/edit?usp=sharing"
            target="_blank"
            className=" self-start md:flex mr-2 md:mr-0 text-gray-300 rounded-md p-[4px] text-[13px] sm:text-[16px] opacity-40 hover:opacity-80 font-bold cursor-pointer border-[2px] border-gray-400 hover:border-[#36994c] active:text-amber-600 ">
            Resume
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
