import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly max-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
                src="https://images.unsplash.com/photo-1507660392550-9aff6e04c7e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#36994c]/50">
                        little
                    </span>{" "}
                    about me
                </h4>
                <p className="text-base">
                    It is nice to meet you! I'm a software engineer. From a
                    young age, I've been drawn to the world of technology and
                    problem-solving. When I discovered computer programming, I
                    found the perfect outlet to combine these interests. To me,
                    software engineering is a form of digital artistry. Like a
                    painter, a software engineer has a unique canvas upon which
                    to express their vision and create something entirely new.
                </p>
                <p className="text-base">
                    As the world increasingly moves into the digital space,
                    software engineering is becoming one of the most important
                    and versatile mediums for creative expression. With a few
                    lines of code, a software engineer can build entire worlds,
                    and bring to life new industries and platforms that were
                    previously unimaginable.
                </p>
                <p className="text-base">
                    One of the things I find most exciting about software
                    engineering is the speed at which ideas can be transformed
                    into measurable realities. It's an incredibly malleable
                    medium, which allows for rapid iteration and
                    experimentation. The ability to bring a vision to life in a
                    matter of days is truly exhilarating, and I find it
                    incredibly satisfying to see the tangible results of my
                    work.
                </p>
                <p className="text-base">
                    I'm passionate about the potential of software engineering
                    to change the world, and I'm excited to be part of an
                    industry that is constantly evolving and pushing the
                    boundaries of what is possible. The challenges and
                    opportunities presented by this field are what continue to
                    motivate and inspire me every day. I would welcome the
                    opportunity to discuss your team's needs and learn more
                    about your organization's culture and goals.
                </p>
            </div>
        </motion.div>
    );
};

export default About;
