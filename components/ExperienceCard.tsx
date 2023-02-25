import React from "react";
import { motion } from "framer-motion";
import workHistory from "../data/workHistory.json";
import Link from "next/link";

type Props = {};

const ExperienceCard = (props: Props) => {
    return (
        <>
            {workHistory.map(job => (
                <Link href={job.companyLink} target="_blank">
                    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
                        <motion.img
                            initial={{ y: -100, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                            src={job.companyLogo}
                            alt=""
                        />
                        <div className="px-0 md:px-10">
                            <h4 className="text-4xl font-light">{job.Role}</h4>
                            <p className="font-bold text-2xl mt-1">
                                {job.companyName}
                            </p>
                            <p className="uppercase py-5 text-gray-500">
                                {" "}
                                Started work {job.startDate} - {job.endDate}
                            </p>

                            <ul className="list-dic space-y-4 ml-5 text-lg">
                                {job.Accomplishments.map(
                                    (accomplishment, i) => (
                                        <li>{accomplishment}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    </article>
                </Link>
            ))}
        </>
    );
};

export default ExperienceCard;
