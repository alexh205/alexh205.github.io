import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-[100px] md:top-[90px] lg:top-[80px] uppercase tracking-[20px] text-gray-400 text-lg md:text-xl lg:text-2xl ">
                Experience
            </h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-0 md:p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#36994c]/80">
                <ExperienceCard />
            </div>
        </motion.div>
    );
};

export default Experience;
