"use client";

import Link from "next/link";
import { ArrowUpRight, FileUser, MonitorSmartphone, RobotArm, Workflow } from "lucide-react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import { PixelAvatar } from "./pixel-avatar";
import { Characteristic } from "./landing";
import RoleCard from "./role-card";

const characteristics: Characteristic[] = [
  {
    name: "Full-Stack Developer",
    icon: <Workflow size={32} />,
    color: "bg-[#d7e3c4]",
    hoverText: "I build thoughtful products from end to end.",
    href: "/full-stack",
  },
  {
    name: "Robotics and AI",
    icon: <RobotArm size={32} />,
    color: "bg-[#e6d6c5]",
    hoverText: "I like making intelligent systems feel human.",
    href: "/robotics-ai",
  },
  {
    name: "Frontend Developer",
    icon: <MonitorSmartphone size={32} />,
    color: "bg-[#cfdfd5]",
    hoverText: "I turn ideas into clear, lively interfaces.",
    href: "/frontend",
  },
];

type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  type: "full-time" | "part-time" | "contract" | "remote" | "freelance" | "internship" | "project" | "bachelor's thesis" | "master's thesis" | "phd thesis" | "research" | "volunteer" | "other";
  location: string;
  link?: string;
};

type RoleViewProps = {
  title: string;
  summary: string;
  details: string;
  color: string;
  cvLink: string;
  experiences: Experience[];
  tools: string[];
};

/**
* ==============   Styles   ================
*/

const container: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: "#f1f5ed",
}

const nav: React.CSSProperties = {
  background: "#f5f5f5",
  borderBottom: "1px solid #eeeeee",
  height: 50,
}

const tabsStyles: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontWeight: 500,
  fontSize: 14,
}

const tabsContainer: React.CSSProperties = {
  ...tabsStyles,
  display: "flex",
  width: "100%",
}

const tab: React.CSSProperties = {
  ...tabsStyles,
  padding: "0 16px",
  width: "100%",
  position: "relative",
  background: "white",
  cursor: "pointer",
  height: 50,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
  minWidth: 0,
  userSelect: "none",
  color: "var(--black)",
  borderRight: "2px solid #ddd",
}

const underline: React.CSSProperties = {
  position: "absolute",
  bottom: -2,
  left: 0,
  right: 0,
  height: 2,
  background: "#e75c43",
}
const iconContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
}
export default function RoleView({
  title,
  summary,
  details,
  color,
  tools,
  cvLink,
  experiences
}: RoleViewProps) {


  const reduceMotion = useReducedMotion();
  const visibleCharacteristics = characteristics.filter(
    (char) => char.name !== title,
  );
  const [eyeOffset, setEyeOffset] = useState({
    x: 0,
    y: 0,
  });
  const [selectedTab, setSelectedTab] = useState(experiences[0] || null);


  const faceRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // let idleTimer: ReturnType<typeof setTimeout> | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (!faceRef.current || reduceMotion) return;

      // if (idleTimer) {
      //   clearTimeout(idleTimer);
      // }
      const rect = faceRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.sqrt(
        deltaX * deltaX + deltaY * deltaY
      );

      const maxMovement = 4;
      const maxDistance = 300;

      const movement =
        Math.min(distance / maxDistance, 1) *
        maxMovement;

      setEyeOffset({
        x: Math.cos(angle) * movement,
        y: Math.sin(angle) * movement,
      });

      // idleTimer = setTimeout(() => {
      //   setEyeOffset({ x: 0, y: 0 });
      //   idleTimer = null;
      // }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [reduceMotion]);

  return (
    <main className="flex min-h-full w-full flex-col justify-between px-4 py-2 sm:px-20 sm:py-4">
      <section className="flex w-full items-center justify-between">

        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 text-sm text-[#405b4e] transition-colors hover:text-[#e75c43]"
        >
          <PixelAvatar
            ref={faceRef}
            eyeX={eyeOffset.x}
            eyeY={eyeOffset.y}
            className="w-[140px] h-auto line-none z-10"
          />
        </Link>

        <div className="flex gap-4">
          <RoleCard characteristic={{
            name: "CV",
            icon: <FileUser />,
            href: cvLink,
            color: "#ffffff",
            hoverText: "This is my CV"
          }} size="md" onHover={() => { }} />
          {visibleCharacteristics.map((char) => (
            <RoleCard
              key={char.name}
              characteristic={char}
              size="md"
              onHover={() => { }}
            />
          ))}
        </div>

      </section>

      <section className={`mt-4 flex flex-col min-h-fit md:flex-row sm:items-center sm:justify-between`}>
        <div className={`flex flex-col min-w-[50%]  h-full ${color} gap-2 p-8 sm:p-14`}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#405b4e]">
            Role Experience
          </p>
          <h1 className="mt-2 max-w-3xl font-serif text-2xl leading-[0.9] text-[#17352c] sm:text-4xl">
            {title}
            <span className="text-[#e75c43] text-5xl">.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#405b4e] sm:leading-9">
            {summary}
          </p>
        </div>
        {experiences.length > 0 && (
          <div style={container} className="min-h-fit h-full min-w-[50%] flex flex-col">
            <nav style={nav}>
              <ul style={tabsContainer}>
                {experiences.map((experience, index) => (
                  <motion.li
                    key={index}
                    initial={false}
                    animate={{
                      backgroundColor:
                        experience === selectedTab ? "#eee" : "#eee0",
                    }}
                    style={tab}
                    className="text-lg"
                    onClick={() => setSelectedTab(experience)}
                  >
                    {experience.company}
                    {experience === selectedTab ? (
                      <motion.div
                        style={underline}
                        layoutId="underline"
                        id="underline"
                      />
                    ) : null}
                  </motion.li>
                ))}
              </ul>
            </nav>
            <main style={iconContainer}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab ? selectedTab.title : "empty"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-fit p-4 flex flex-col lg:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div className="flex lg:flex-col flex-row-reverse w-full lg:w-1/5 gap-2 items-center lg:items-start justify-end lg:justify-center">
                    <p className="text-sm text-[#52685d]">{selectedTab?.startDate}</p>
                    <div className="text-lg w-3 h-[2px] bg-[#e75c43]" />
                    <p className="text-sm text-[#52685d]">{selectedTab?.endDate}</p>
                  </div>
                  <div className="flex flex-col w-full gap-1">
                    <div className="flex items-start lg:gap-3 lg:flex-row flex-col lg:items-center lg:justify-start">
                      <h3 className="text-2xl font-bold m-0 text-[#17352c]">{selectedTab?.title}</h3>
                      <div className="text-lg w-2 h-2 rounded-full bg-[#e75c43] hidden lg:flex" />
                      <p className="text-md uppercase text-[#405b4e]">{selectedTab?.type}</p>
                    </div>
                    <p className="text-sm text-[#52685d]">{selectedTab?.location}</p>
                    <p className="text-md text-[#405b4e]">{selectedTab?.description}</p>
                    {selectedTab?.link && (
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
            </main>
          </div>)}

      </section>

      <section className="flex flex-wrap lg:justify-around border-b border-[#17352c]/15 py-14 items-center sm:py-10 px-4">
        <p className="text-xl font-semibold uppercase tracking-[0.18em] text-[#e75c43]">
          How I work
        </p>
        <p className="max-w-2xl text-lg leading-8 text-[#52685d]">
          {details}
        </p>
      </section>

      <section className="bottom-0 flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span key={tool} className="border border-[#17352c]/20 px-3 py-2 text-xs text-[#405b4e]">
              {tool}
            </span>
          ))}
        </div>
        <Link
          href="mailto:jacobcerovsky@gmail.com"
          className="inline-flex w-fit items-center gap-2 border-b border-[#17352c]/30 pb-1 text-sm font-medium text-[#17352c] hover:border-[#e75c43] hover:text-[#e75c43]"
        >
          Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );


}
