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
                    <span className="underline decoration-[#F7AB0A]/50">
                        little
                    </span>{" "}
                    about me
                </h4>
                <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. At imperdiet dui accumsan sit amet nulla. Fames ac
                    turpis egestas integer eget aliquet. Duis convallis
                    convallis tellus id interdum velit laoreet id. Tristique
                    risus nec feugiat in fermentum. Viverra justo nec ultrices
                    dui. Quisque sagittis purus sit amet volutpat consequat
                    mauris nunc. Mauris nunc congue nisi vitae. Nunc non blandit
                    massa enim nec dui nunc mattis. Sit amet tellus cras
                    adipiscing enim eu. Risus nullam eget felis eget.
                    Pellentesque habitant morbi tristique senectus et. Orci
                    nulla pellentesque dignissim enim sit amet. Sit amet tellus
                    cras adipiscing enim eu turpis egestas. Lectus proin nibh
                    nisl condimentum. Risus feugiat in ante metus dictum at. Nec
                    nam aliquam sem et tortor consequat. Et pharetra pharetra
                    massa massa. Eu nisl nunc mi ipsum faucibus vitae aliquet
                    nec. Id ornare arcu odio ut sem nulla. Duis ultricies lacus
                    sed turpis. Sed adipiscing diam donec adipiscing tristique
                    risus nec feugiat in. Amet est placerat in egestas erat
                    imperdiet. Egestas maecenas pharetra convallis posuere morbi
                    leo urna molestie. Et egestas quis ipsum suspendisse
                    ultrices gravida.
                </p>
            </div>
        </motion.div>
    );
};

export default About;
