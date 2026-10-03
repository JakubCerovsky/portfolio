"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
    FiArrowDownRight,
    FiArrowUpRight,
    FiCheck,
    FiCopy,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";

const email = "hello@jamiepark.design";

const projects = [
    {
        number: "01",
        name: "Open House",
        type: "Digital product · 2025",
        description: "A calmer way to find a place to call home.",
        image:
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
        alt: "Sunlit contemporary living room with sculptural furniture",
        color: "bg-[#d7e3c4]",
    },
    {
        number: "02",
        name: "Soft Form",
        type: "Brand identity · 2024",
        description: "A new visual language for everyday objects.",
        image:
            "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1400&q=85",
        alt: "Minimal sculptural chair in a warm, sunlit interior",
        color: "bg-[#e6d6c5]",
    },
    {
        number: "03",
        name: "Common Ground",
        type: "Editorial · 2024",
        description: "Stories and recipes from the people who grow our food.",
        image:
            "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=85",
        alt: "Fresh seasonal produce arranged on a green surface",
        color: "bg-[#cfdfd5]",
    },
];

export default function PortfolioHome() {
    const reduceMotion = useReducedMotion();
    const [copied, setCopied] = useState(false);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            window.location.href = `mailto:${email}`;
        }
    }

    return (
        <>
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
                <header className="flex min-h-[82px] items-center justify-between border-b border-[#17352c]/15">
                    <a href="#top" className="group flex items-center gap-3" aria-label="Jamie Park, home">
                        <span className="grid size-10 place-items-center bg-[#17352c] font-serif text-lg italic text-[#f1f5ed] transition-transform group-hover:-rotate-6">
                            J
                        </span>
                        <span className="text-xs font-semibold uppercase leading-tight tracking-[0.12em]">
                            Jamie Park
                            <span className="mt-1 block font-normal tracking-[0.06em] text-[#5e7468]">
                                Designer & developer
                            </span>
                        </span>
                    </a>
                    <nav className="hidden items-center gap-8 text-sm text-[#405b4e] sm:flex" aria-label="Main navigation">
                        <a className="transition-colors hover:text-[#e75c43]" href="#work">Work</a>
                        <a className="transition-colors hover:text-[#e75c43]" href="#about">About</a>
                        <a className="transition-colors hover:text-[#e75c43]" href="#contact">Contact</a>
                    </nav>
                    <a
                        className="inline-flex h-10 items-center gap-2 bg-[#e75c43] px-4 text-sm font-medium text-white transition-colors hover:bg-[#c94934]"
                        href="#contact"
                    >
                        Let&apos;s talk <FiArrowUpRight aria-hidden="true" size={16} />
                    </a>
                </header>

                <main id="top">
                    <section className="grid items-center gap-10 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:min-h-[660px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-14">
                        <motion.div
                            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            <p className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.19em] text-[#5e7468]">
                                <span className="h-px w-8 bg-[#e75c43]" /> Independent designer & developer
                            </p>
                            <h1 className="max-w-[800px] font-serif text-[clamp(3.7rem,8vw,7.5rem)] leading-[0.89] text-[#17352c]">
                                Making room for <span className="italic text-[#e75c43]">good</span> ideas.
                            </h1>
                            <div className="mt-8 flex max-w-xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                                <p className="max-w-[330px] text-base leading-7 text-[#52685d] sm:text-[17px]">
                                    I&apos;m Jamie, a designer and developer shaping bright ideas into thoughtful digital experiences.
                                </p>
                                <a
                                    href="#work"
                                    className="inline-flex w-fit shrink-0 items-center gap-2 border-b border-[#17352c]/35 pb-2 text-sm font-medium text-[#17352c] transition-colors hover:border-[#e75c43] hover:text-[#e75c43]"
                                >
                                    Explore selected work <FiArrowDownRight aria-hidden="true" size={17} />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
                            className="relative mx-auto w-full max-w-[470px] lg:mr-0"
                        >
                            <div className="absolute -bottom-4 -left-4 top-4 w-3/4 bg-[#d7e783]" />
                            <div className="relative aspect-[4/4.35] overflow-hidden bg-[#c6d6b4]">
                                <Image
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1100&q=90"
                                    alt="Portrait of Jamie Park"
                                    fill
                                    priority
                                    unoptimized
                                    sizes="(max-width: 1024px) 90vw, 40vw"
                                    className="object-cover object-[center_38%]"
                                />
                                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#17352c]/75 to-transparent px-5 pb-5 pt-16 text-white">
                                    <span className="font-serif text-2xl italic">Curious by nature.</span>
                                    <span className="text-[10px] uppercase tracking-[0.16em]">Brooklyn, NY</span>
                                </div>
                            </div>
                            <p className="relative mt-5 text-right text-[10px] uppercase tracking-[0.16em] text-[#5e7468]">
                                A little bit of structure, a little bit of surprise.
                            </p>
                        </motion.div>
                    </section>

                    <div className="grid grid-cols-2 border-y border-[#17352c]/15 py-5 sm:grid-cols-4">
                        <div className="border-r border-[#17352c]/15 pr-3 sm:px-5">
                            <p className="text-[10px] uppercase tracking-[0.16em] text-[#718276]">Currently</p>
                            <p className="mt-2 text-sm font-medium">Available for select projects</p>
                        </div>
                        <div className="border-r-0 pl-4 sm:border-r sm:border-[#17352c]/15 sm:px-5">
                            <p className="text-[10px] uppercase tracking-[0.16em] text-[#718276]">Experience</p>
                            <p className="mt-2 text-sm font-medium">8 years making things</p>
                        </div>
                        <div className="mt-5 border-r border-[#17352c]/15 pr-3 sm:mt-0 sm:px-5">
                            <p className="text-[10px] uppercase tracking-[0.16em] text-[#718276]">Based in</p>
                            <p className="mt-2 text-sm font-medium">Brooklyn, New York</p>
                        </div>
                        <div className="mt-5 pl-4 sm:mt-0 sm:px-5">
                            <p className="text-[10px] uppercase tracking-[0.16em] text-[#718276]">Focus</p>
                            <p className="mt-2 text-sm font-medium">Design, code, good questions</p>
                        </div>
                    </div>

                    <section id="work" className="scroll-mt-10 pb-8 pt-24 sm:pt-32">
                        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.19em] text-[#e75c43]">A few recent favorites</p>
                                <h2 className="font-serif text-5xl leading-none sm:text-6xl">Selected work<span className="text-[#e75c43]">.</span></h2>
                            </div>
                            <p className="max-w-[300px] text-sm leading-6 text-[#5e7468]">
                                A mix of identities, interfaces, and small details made to matter.
                            </p>
                        </div>
                        <div className="grid gap-x-7 gap-y-12 md:grid-cols-2">
                            {projects.map((project, index) => (
                                <motion.article
                                    key={project.number}
                                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.18 }}
                                    transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                                    className="group"
                                >
                                    <div className={`relative aspect-[1.25/1] overflow-hidden ${project.color}`}>
                                        <Image
                                            src={project.image}
                                            alt={project.alt}
                                            fill
                                            unoptimized
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                                        />
                                        <span className="absolute left-4 top-4 bg-[#f1f5ed] px-3 py-2 font-mono text-xs text-[#17352c]">
                                            {project.number} / 03
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#17352c]/20 py-4">
                                        <div>
                                            <h3 className="font-serif text-3xl">{project.name}</h3>
                                            <p className="mt-1 text-sm text-[#5e7468]">{project.description}</p>
                                        </div>
                                        <span className="pt-2 text-[10px] uppercase tracking-[0.12em] text-[#718276]">{project.type}</span>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </section>

                    <section id="about" className="scroll-mt-10 grid gap-10 border-t border-[#17352c]/15 py-24 sm:py-32 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                        <div>
                            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.19em] text-[#e75c43]">The person behind the pixels</p>
                            <h2 className="max-w-sm font-serif text-5xl leading-[0.98] sm:text-6xl">Good work starts with paying attention.</h2>
                        </div>
                        <div className="max-w-2xl">
                            <p className="text-xl leading-8 text-[#405b4e] sm:text-2xl sm:leading-9">
                                I partner with kind, ambitious people to turn complicated things into clear, useful, and quietly joyful experiences.
                            </p>
                            <p className="mt-6 max-w-xl leading-7 text-[#5e7468]">
                                From first sketch to final detail, I like staying close to the whole process. That means asking better questions, making things with care, and leaving room for a happy accident along the way.
                            </p>
                            <div className="mt-9 flex flex-wrap gap-2">
                                {["Art direction", "Product design", "Creative development", "Prototyping", "A good cup of tea"].map((skill) => (
                                    <span key={skill} className="border border-[#17352c]/20 px-3 py-2 text-xs text-[#405b4e]">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <section id="contact" className="scroll-mt-10 bg-[#d7e783]">
                <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:px-14 lg:py-24">
                    <div>
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.19em] text-[#405b4e]">Have a good one in mind?</p>
                        <h2 className="max-w-3xl font-serif text-6xl leading-[0.9] text-[#17352c] sm:text-7xl lg:text-8xl">Let&apos;s make it real.</h2>
                        <a className="mt-6 inline-flex items-center gap-2 border-b border-[#17352c]/40 pb-1 text-lg text-[#17352c] hover:border-[#e75c43] hover:text-[#e75c43]" href={`mailto:${email}`}>
                            {email} <FiArrowUpRight aria-hidden="true" size={18} />
                        </a>
                    </div>
                    <Button onClick={copyEmail} variant="outline" size="lg" className="h-11 w-fit rounded-none border-[#17352c]/35 bg-transparent px-4 text-[#17352c] hover:bg-[#17352c] hover:text-white">
                        {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                        {copied ? "Email copied" : "Copy email"}
                    </Button>
                </div>
            </section>

            <footer className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-7 text-xs text-[#5e7468] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14">
                <span>© 2026 Jamie Park. Made with care in Brooklyn.</span>
                <div className="flex gap-5">
                    <a className="hover:text-[#e75c43]" href="mailto:hello@jamiepark.design">Email</a>
                    <a className="hover:text-[#e75c43]" href="#top">Back to top ↑</a>
                </div>
            </footer>
        </>
    );
}