import React from "react";
import projects from "../data/projects.json";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const ProjectCard = (props: Props) => {
    return (
        <>
            {projects.map(project => (
                <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40  transition-opacity duration-200 overflow-hidden">
                    <h4 className="text-3xl text-white font-semiBold">
                        {project.Name}
                    </h4>
                    <a href={project.Image} target="_blank">
                        <motion.img
                            initial={{ y: -100, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-[400px] h-[350px] rounded-sm xl:w-[400px] xl:h-[350px] object-fit object-center"
                            src={project.Image}
                            alt=""
                        />
                    </a>
                    <div className="px-0 md:px-10 flex flex-col items-center justify-center">
                        <div className="flex flex-row items-center justify-center my-2">
                            <a href={project.Link} target="_blank">
                                <button
                                    className="text-center rounded-lg px-3 py-2 m-1
                       bg-white text-[#36994c] text-base hover:font-bold hover:text-amber-600">
                                    Demo
                                </button>
                            </a>
                            <a
                                href={project.Git_Repo}
                                target="_blank"
                                className="ml-1">
                                <button
                                    className="text-center rounded-lg px-3 py-2 m-1
                       bg-white text-[#36994c] text-base hover:font-bold hover:text-amber-600">
                                    Repository
                                </button>
                            </a>
                        </div>
                        <div className="mt-2 text-lg ">
                            {project.Description}
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
};

export default ProjectCard;
