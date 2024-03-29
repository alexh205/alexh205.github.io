import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

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
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Footer />
    </div>
  );
}
