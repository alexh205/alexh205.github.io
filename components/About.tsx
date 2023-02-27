import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="container mx-auto flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly md:justify-center items-center ">
            <h3 className="absolute top-[100px] sm:top-[90px] uppercase tracking-[20px] text-gray-400 text-lg md:text-xl lg:text-2xl">
                about
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="https://user-images.githubusercontent.com/95322089/221450218-ae0db517-2b46-4ec6-ab59-b425798b56ed.png"
                className="-mb-28 md:mb-0 flex-shrink-0 w-[160px] h-[160px] rounded-full object-cover md:rounded-lg md:w-[260px] md:h-[350px] xl:w-[450px] xl:h-[550px]"
            />
            <div className="space-y-6 px-0 md:px-10">
                <h4 className="text-3xl sm:text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#36994c]/50">
                        little
                    </span>{" "}
                    about me
                </h4>
                <p className="text-left text-xs sm:text-[16px]">
                    It is nice to meet you! I&apos;m a software engineer. From a
                    young age, I&apos;ve been drawn to the world of technology
                    and problem-solving. When I discovered computer programming,
                    I found the perfect outlet to combine these interests. To
                    me, software engineering is a form of digital artistry. Like
                    a painter, a software engineer has a unique canvas upon
                    which to express their vision and create something entirely
                    new. With a few lines of code, a software engineer can build
                    entire worlds, and bring to life new industries and
                    platforms that were previously unimaginable. One of the
                    things I find most exciting about software engineering is
                    the speed at which ideas can be transformed into measurable
                    realities. The challenges and opportunities presented by
                    this field are what continue to motivate and inspire me
                    every day. I would welcome the opportunity to discuss your
                    team&apos;s needs and learn more about your
                    organization&apos;s culture and goals.
                </p>
            </div>
        </motion.div>
    );
};

export default About;
