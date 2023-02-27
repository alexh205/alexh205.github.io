import React from "react";
import { motion } from "framer-motion";
import skillsObj from "../data/skillsObj.json";
import Link from "next/link";

type Props = {
    directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
    return (
        <>
            {skillsObj.map(skill => (
                <div
                    className="group relative flex cursor-pointer"
                    key={skill.id}>
                    <motion.img
                        initial={{
                            x: directionLeft ? -100 : 100,
                            opacity: 0,
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        src={skill.Image}
                        className="rounded-full border border-gray-500 object-cover w-[70px] h-[70px] md:w-[90px] md:h-[90px] xl:w-[110px] xl:h-[110px] filter group-hover:grayscale transition duration-300 ease-in-out"
                    />

                    <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[70px] h-[70px] md:w-[90px] md:h-[90px] xl:w-[110px] xl:h-[110px] rounded-full z-0">
                        <Link href={skill.Link} target="_blank">
                            <div className="flex items-center justify-center h-full">
                                <p className="text-[10px] md:text-[12px] lg:text-[14px] font-bold text-black opacity-100 text-center">
                                    {skill.Name}
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Skill;
