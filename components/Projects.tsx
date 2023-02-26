import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

type Props = {};

const Projects = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-[100px] sm:top-[90px] uppercase tracking-[20px] text-gray-400 text-lg md:text-xl lg:text-2xl">
                Projects
            </h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-7 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#36994c]/80">
                <ProjectCard />
            </div>
        </motion.div>
    );
};

export default Projects;
