"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  MonitorSmartphone,
  RobotArm,
  Workflow,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import { PixelAvatar } from "./pixel-avatar";
import { TypingAnimation } from "./ui/typing-animation";
import OrbitsView from "./orbits";
import InlineView from "./inline";

export type Characteristic = {
  number: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  hoverText: string;
  href: string;
};

const characteristics: Characteristic[] = [
  {
    number: "01",
    name: "Full-Stack Developer",
    icon: <Workflow size={32} />,
    color: "bg-[#d7e3c4]",
    hoverText: "I build thoughtful products from end to end.",
    href: "/full-stack",
  },
  {
    number: "02",
    name: "Robotics and AI",
    icon: <RobotArm size={32} />,
    color: "bg-[#e6d6c5]",
    hoverText: "I like making intelligent systems feel human.",
    href: "/robotics-ai",
  },
  {
    number: "03",
    name: "Frontend Developer",
    icon: <MonitorSmartphone size={32} />,
    color: "bg-[#cfdfd5]",
    hoverText: "I turn ideas into clear, lively interfaces.",
    href: "/frontend",
  },
];

const initialTextOptions = [
  "Hey, I'm Jakub!",
  "Are you interested in what I do?",
];

export default function Landing() {
  const reduceMotion = useReducedMotion();


  const [hoveredRole, setHoveredRole] = useState<string | null>(null);
  const [textOptions, setTextOptions] = useState(initialTextOptions);
  const [eyeOffset, setEyeOffset] = useState({
    x: 0,
    y: 0,
  });

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

  const handleOnHover = (role: string | null) => {
    setHoveredRole(role);
    if (role) {
      setTextOptions(["Looking for something else?"]);
    }
  }

  return (
    <div
      className="
        relative
        h-full
        w-full
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          relative
          h-full
          w-full
          flex
          md:flex-row
          flex-col
          items-center
          justify-center
        "
      >

        <div className="flex flex-col items-center mt-[-50px] justify-center z-10">
          {/* =========================
            FACE
          ========================== */}
          <h1 className="text-2xl font-bold">JAKUB</h1>
          <PixelAvatar
            ref={faceRef}
            eyeX={eyeOffset.x}
            eyeY={eyeOffset.y}
            className="w-[140px] h-auto line-none z-10"
          />

          {/* =========================
            SPEECH BUBBLE
          ========================== */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                  opacity: 0,
                  scale: 0.9,
                  y: 10,
                }
            }
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="
            z-20
          "
          >
            {/* Bubble */}
            <div
              className="
              relative
              bg-white
              border
              border-black/10
              px-7
              py-5
              shadow-xl
              z-20
            "
            >
              <TypingAnimation
                words={hoveredRole ? [hoveredRole] : textOptions}
                typeSpeed={120}
                deleteSpeed={50}
                pauseDelay={0}
                // loop={Boolean(hoveredRole)}
                transitionOnChange
                startOnView={true}
                showCursor={false}
              />
            </div>
          </motion.div>
        </div>

        <InlineView characteristics={characteristics} onHover={handleOnHover} />
        <OrbitsView characteristics={characteristics} onHover={handleOnHover} />
      </div>
    </div>
  );
}