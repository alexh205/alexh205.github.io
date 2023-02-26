import React from "react";
import projects from "../data/projects.json";
import { motion } from "framer-motion";

type Props = {};

const ProjectCard = (props: Props) => {
    return (
        <>
            {projects.map(project => (
                <article
                    className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[800px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40  transition-opacity duration-200 overflow-hidden"
                    key={project.id}>
                    <h4 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold">
                        {project.Name}
                    </h4>
                    <a href={project.Image} target="_blank">
                        <motion.img
                            initial={{ y: -100, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-[300px] h-[260px] lg:w-[330px] lg:h-[280px] xl:w-[400px] xl:h-[350px] rounded-sm object-fit object-center"
                            src={project.Image}
                            alt=""
                        />
                    </a>
                    <div className="px-0 md:px-10 flex flex-col items-center justify-center">
                        <div className="flex flex-row items-center justify-center my-2">
                            <a href={project.Link} target="_blank">
                                <button
                                    className="text-center rounded-lg px-3 py-2 m-1
                       bg-white text-[#36994c] text-sm sm:text-base hover:font-bold hover:text-amber-600">
                                    Demo
                                </button>
                            </a>
                            <a
                                href={project.Git_Repo}
                                target="_blank"
                                className="ml-1">
                                <button
                                    className="text-center rounded-lg px-3 py-2 m-1
                       bg-white text-[#36994c] text-sm sm:text-base hover:font-bold hover:text-amber-600">
                                    Repository
                                </button>
                            </a>
                        </div>
                        <div className="mt-2 px-[11px] text-xs sm:text-lg ">
                            {project.Description}
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
};

export default ProjectCard;
