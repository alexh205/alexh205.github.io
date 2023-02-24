import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src="https://www.pngplay.com/wp-content/uploads/5/Merck-And-Co-Logo-Transparent-Background.png"
                alt=""
            />
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">
                    Quality Control Specialist
                </h4>
                <p className="font-bold text-2xl mt-1">Merck & Co.</p>
                <div className="flex space-x-2 my-2">
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/119_Excel_logo_logos-1024.png"
                        alt=""
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/119_Excel_logo_logos-1024.png"
                        alt=""
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/119_Excel_logo_logos-1024.png"
                        alt=""
                    />
                </div>
                <p className="uppercase py-5 text-gray-500">
                    {" "}
                    Started work ... - Ended ...
                </p>
                <ul className="list-dic space-y-4 ml-5 text-lg">
                    <li>Summary points Summary points</li>
                    <li>Summary points Summary points</li>
                    <li>Summary points Summary points</li>
                    <li>Summary points Summary points</li>
                    <li>Summary points Summary points</li>

                </ul>
            </div>
        </article>
    );
};

export default ExperienceCard;
