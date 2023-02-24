import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import projects from "../data/projects.json";

type Props = {};

const Projects = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#36994c]/80 scrollbar">
                {projects.map((project, i) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                            alt=""
                            className="w-[350px] h-[350px]"
                        />
                        <div className="space-y-8 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#36994c]/50">
                                    Project # {i + 1} of {projects.length}:
                                </span>{" "}
                                {project.Name}
                            </h4>
                            <div className="flex flex-row items-center justify-center">
                                <Link href={project.Link} target="_blank">
                                    <p className="hover:text-lg hover:text-amber-600">
                                        Live Site
                                    </p>
                                </Link>
                                <Link href={project.Git_Repo} target="_blank">
                                    <p className="ml-10 text-base hover:text-lg hover:text-amber-600">
                                        GitHub Repo
                                    </p>
                                </Link>
                            </div>
                            <p className="text-lg text-center md:text-left">
                                {project.Description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#36994c]/10 left-0 h-[500px] skew-y-12"></div>
        </motion.div>
    );
};

export default Projects;
