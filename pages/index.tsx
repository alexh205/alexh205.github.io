import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#36994c]/80">
            <Head>
                <title>Alex&apos;s Portfolio</title>
            </Head>
            <Header />
            <section id="hero" className="snap-start">
                <Hero />
            </section>
            <section
                id="about"
                className="snap-center flex items-center justify-center">
                <About />
            </section>

            <section id="experience" className="snap-center">
                <Experience />
            </section>
            <section id="skills" className="snap-start">
                <Skills />
            </section>
            <section id="projects" className="snap-start">
                <Projects />
            </section>
            <section id="contact" className="snap-start">
                <ContactMe />
            </section>
            <footer className="flex flex-row items-center sticky bottom-[10px] justify-between">
                <Link href="#hero" className=" ml-3">
                    <div className="flex flex-col items-center justify-center cursor-pointer filter grayscale hover:grayscale-0 opacity-30 hover:opacity-80">
                        <img
                            src="https://images.unsplash.com/photo-1625006100410-6bee55152de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt=""
                            className="rounded-full mb-[2px] h-7 w-7 md:h-8 md:w-8"
                        />
                        <p className="text-[10px] md:text-xs ">
                            Back to the top
                        </p>
                    </div>
                </Link>
                <div className="lg:mr-[50%] mr-5 text-sm sticky lg:flex flex-col items-center justify-center">
                    <div className="opacity-40 text-gray-300 flex flex-row font-bold text-xs">
                        <p className="text-gray-400 font-normal">ⓒ</p> Alex Hunt
                    </div>
                    <div className="text-gray-400 opacity-40 text-xs">
                        All Rights Reserved
                    </div>
                </div>
            </footer>
        </div>
    );
}
