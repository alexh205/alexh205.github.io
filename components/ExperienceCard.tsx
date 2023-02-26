import React from "react";
import { motion } from "framer-motion";
import workHistory from "../data/workHistory.json";
import Link from "next/link";

type Props = {};

const ExperienceCard = (props: Props) => {
    return (
        <>
            {workHistory.map(job => (
                <article
                    className="flex flex-col justify-center rounded-lg items-center space-y-3 flex-shrink-0 w-[380px] md:w-[600px] xl:w-[800px] snap-center p-9 bg-[#292929] hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden"
                    key={job.id}>
                    <motion.img
                        initial={{ y: -100, opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="hidden sm:flex w-[90px] h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px] rounded-full object-cover object-center"
                        src={job.companyLogo}
                        alt=""
                    />
                    <div className="px-0 md:px-7 ">
                        <Link
                            href={job.companyLink}
                            target="_blank"
                            className="cursor-pointer">
                            <h4 className="text-xl md:text-2xl lg:text-3xl font-light ml-2">
                                {job.Role}
                            </h4>

                            <p className="font-bold text-base md:text-xl mt-1 ml-2">
                                {job.companyName}
                            </p>
                        </Link>
                        <p className="uppercase py-5 text-gray-500 ml-2">
                            {" "}
                            Started work {job.startDate} - {job.endDate}
                        </p>

                        <ul className="list-dic space-y-2 mx-2 sm:p-[6px] md:p-[3px] lg:p-[1px] text-xs md:text-base ">
                            {job.Accomplishments.map((accomplishment, i) => (
                                <li key={i}>{accomplishment}</li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
        </>
    );
};

export default ExperienceCard;
