"use client";

import Link from "next/link";
import { ArrowUpRight, FileUser } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { PixelAvatar } from "./pixel-avatar";
import RoleCard from "./role-card";
import { TypingAnimation } from "./ui/typing-animation";
import { Experience } from "@/lib/experience";
import { characteristics, Role } from "@/lib/characteristics";
import { useEyeTracking } from "@/hooks/use-eye-tracking";

type RoleViewProps = {
  title: Role;
  summary: string;
  details: string;
  color: string;
  cvLink: string;
  experiences: Experience[];
  tools: string[];
};

export default function RoleView({
  title,
  summary,
  details,
  color,
  tools,
  cvLink,
  experiences,
}: RoleViewProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const visibleCharacteristics = characteristics.filter(
    (char) => char.name !== title,
  );
  const [selectedTab, setSelectedTab] = useState<Experience>(experiences[0]);

  const faceRef = useRef<SVGSVGElement>(null);
  const eyeOffset = useEyeTracking(faceRef, reduceMotion);

  return (
    <main className="flex min-h-full w-full flex-col justify-between px-4 py-2 md:px-12 lg:px-20 md:py-4">
      <section className="flex w-full items-center justify-between">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 text-sm text-[#405b4e] transition-colors hover:text-[#e75c43]"
        >
          <PixelAvatar
            ref={faceRef}
            eyeX={eyeOffset.x}
            eyeY={eyeOffset.y}
            className="h-auto w-[95px] sm:w-[110px] md:w-[130px] line-none z-10"
          />
        </Link>
        <TypingAnimation className="text-2xl font-bold hidden md:block">
          Jakub Cerovsky
        </TypingAnimation>
        <div className="flex gap-4">
          <RoleCard
            characteristic={{
              name: title,
              icon: <FileUser />,
              href: cvLink,
              color: "bg-[#fafafa]",
              hoverText: "This is my CV.",
            }}
            isBlank
            size="md"
            onHover={() => {}}
          />
          {visibleCharacteristics.map((char) => (
            <RoleCard
              key={char.name}
              characteristic={char}
              size="md"
              onHover={() => {}}
            />
          ))}
        </div>
      </section>

      <section className="mt-4 flex min-h-fit flex-col sm:items-center sm:justify-between md:items-stretch md:flex-row">
        <div
          className={`flex h-full min-w-[50%] flex-col gap-2 p-8 sm:p-14 ${color}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#405b4e]">
            Role Experience
          </p>
          <h1 className="mt-2 max-w-3xl text-2xl font-bold leading-[0.9] text-[#17352c] sm:text-4xl">
            {title}
            <span className="text-5xl text-[#e75c43] ml-2">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#405b4e] sm:leading-9">
            {summary}
          </p>
        </div>

        {experiences.length > 0 && (
          <div className="flex min-h-fit min-w-0 flex-col justify-between bg-[#f1f5ed] border-b border-[#17352c]/15">
            <nav className="border-b border-[#eee] bg-[#f5f5f5]">
              <ul className="m-0 flex w-full list-none items-stretch p-0 text-sm font-medium">
                {experiences.map((experience, index) => (
                  <motion.li
                    key={`${experience.company}-${index}`}
                    initial={false}
                    className={`relative flex min-h-[50px] min-w-0 flex-1 cursor-pointer select-none items-center justify-between border-r-2 border-[#ddd] lg:text-lg text-[var(--black)] transition-colors duration-200 ${
                      experience === selectedTab
                        ? "bg-[#eee]"
                        : "bg-transparent"
                    }
                     sm:text-sm px-4 md:text-base`}
                    onClick={() => setSelectedTab(experience)}
                  >
                    {experience.company}
                    {experience.title === selectedTab.title ? (
                      <motion.div
                        layoutId="underline"
                        id="underline"
                        className="absolute inset-x-0 bottom-[-2px] h-[2px] bg-[#e75c43]"
                      />
                    ) : null}
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="flex min-w-0 flex-1 items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedTab.company}-${selectedTab.title}`}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-fit w-full min-w-0 flex-col gap-4 p-4 sm:items-center sm:justify-between lg:flex-row"
                >
                  {selectedTab.date ? (
                    <div className="flex w-full flex-row-reverse items-center justify-end gap-2 lg:w-1/5 lg:flex-col lg:items-start lg:justify-center">
                      <p className="text-sm text-[#52685d]">
                        {selectedTab.date.start}
                      </p>
                      <div className="h-[2px] w-3 bg-[#e75c43] text-lg" />
                      <p className="text-sm text-[#52685d]">
                        {selectedTab.date.end}
                      </p>
                    </div>
                  ) : null}

                  <div className="flex w-full min-w-0 flex-col gap-1">
                    <div className="flex flex-col items-start lg:flex-row lg:items-center lg:justify-start lg:gap-3">
                      <h3 className="m-0 text-2xl font-bold text-[#17352c]">
                        {selectedTab.title}
                      </h3>
                      <div className="hidden h-[5px] w-[5px] bg-[#e75c43] lg:flex" />
                      <p className="text-md uppercase text-[#405b4e]">
                        {selectedTab.type}
                      </p>
                    </div>
                    <p className="text-sm text-[#52685d]">
                      {selectedTab.location}
                    </p>
                    <p className="break-words text-md text-[#405b4e]">
                      {selectedTab?.description}
                    </p>
                    {selectedTab.link && (
                      <Link
                        href={selectedTab.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md text-[#e75c43] hover:underline"
                      >
                        Check it out!
                      </Link>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </section>

      <section className="flex flex-wrap items-center px-4 py-14 sm:py-10 lg:justify-around">
        <p className="text-xl font-semibold uppercase tracking-[0.18em] text-[#e75c43] mb-4 lg:mb-0">
          How I work
        </p>
        <p className="max-w-2xl text-lg leading-8 text-[#52685d]">{details}</p>
      </section>

      <section className="bottom-0 flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between border-t border-[#17352c]/15">
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="border border-[#17352c]/20 px-3 py-2 text-sm font-medium text-[#405b4e]"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://github.com/JakubCerovsky"
            target="_blank"
            className="inline-flex w-fit items-center gap-2 border-b border-[#17352c]/30 pb-1 text-sm font-medium text-[#17352c] hover:border-[#e75c43] hover:text-[#e75c43]"
          >
            GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/j-cerovsky/"
            target="_blank"
            className="inline-flex w-fit items-center gap-2 border-b border-[#17352c]/30 pb-1 text-sm font-medium text-[#17352c] hover:border-[#e75c43] hover:text-[#e75c43]"
          >
            LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
