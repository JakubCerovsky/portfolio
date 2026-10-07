"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";

import { useEyeTracking } from "@/hooks/use-eye-tracking";
import { PixelAvatar } from "./pixel-avatar";
import { TypingAnimation } from "./ui/typing-animation";
import OrbitsView from "./orbits";
import InlineView from "./inline";

const initialTextOptions = [
  "Hey, I'm Jakub!",
  "Are you interested in what I do?",
];

export default function Landing() {
  const reduceMotion = useReducedMotion();

  const [hoveredRole, setHoveredRole] = useState<string | null>(null);
  const [textOptions, setTextOptions] = useState(initialTextOptions);

  const faceRef = useRef<SVGSVGElement>(null);
  const eyeOffset = useEyeTracking(faceRef, reduceMotion);

  const handleOnHover = (role: string | null) => {
    setHoveredRole(role);
    if (role) {
      setTextOptions(["Looking for something else?"]);
    }
  };

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
                transitionOnChange
                startOnView={true}
                showCursor={false}
              />
            </div>
          </motion.div>
        </div>

        <InlineView onHover={handleOnHover} />
        <OrbitsView onHover={handleOnHover} />
      </div>
    </div>
  );
}
