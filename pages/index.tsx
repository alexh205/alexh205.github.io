import Head from "next/head";
import Image from "next/image";
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
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            <Head>
                <title>Alex's Portfolio</title>
            </Head>
            <Header />
            <section id="hero" className="snap-start">
                <Hero />
            </section>
            <section id="about" className="snap-center">
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
            <Link href="#hero">
                <footer className="sticky bottom-0 w-full cursor-pointer">
                    <div className="flex items-center justify-center ">
                        <img
                            src="https://images.unsplash.com/photo-1625006100410-6bee55152de7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt=""
                            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                        />
                    </div>
                </footer>
            </Link>
        </div>
    );
}
