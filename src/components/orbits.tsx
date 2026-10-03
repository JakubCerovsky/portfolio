import { useState } from "react";
import Link from "next/link";
import { Characteristic } from "./landing";
import { OrbitingCircles } from "./ui/orbiting-circles";
import { motion, useReducedMotion } from "motion/react";

export default function OrbitsView({ characteristics, onHover }: { characteristics: Characteristic[]; onHover: (hoveredRole: string | null) => void }) {
    const reduceMotion = useReducedMotion();

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="hidden md:contents">
        <OrbitingCircles
                radius={280}
                duration={20}
                reverse={true}
            >
                <div className="w-[10px] h-[10px] bg-primary rounded-full"/>
                <div className="w-[10px] h-[10px] bg-primary rounded-full"/>
                <div className="w-[10px] h-[10px] bg-primary rounded-full"/>
            </OrbitingCircles>
            {/* =========================
            ORBITING ROLE ICONS
        ========================== */}

            <OrbitingCircles
                radius={280}
                duration={20}
                speed={1}
                className={
                    isHovered
                        ? "[animation-play-state:paused]"
                        : ""
                }
            >
                {characteristics.map((char, index) => (
                    <Link key={char.name} href={char.href} className="pointer-events-auto rounded-full">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        whileHover={{
                            scale: 1.1,
                        }}
                        transition={{
                            delay: reduceMotion
                                ? 0
                                : index * 0.2,

                            scale: {
                                duration: 0.2,
                            },
                        }}
                        className={`
                ${char.color}
                flex
                items-center
                justify-center
                p-8
                rounded-full
                shadow-lg
                cursor-pointer
                pointer-events-auto
              `}
                        onMouseEnter={() => {
                            onHover(char.hoverText);
                            setIsHovered(true);
                        }}
                        onMouseLeave={() => {
                            onHover(null);
                            setIsHovered(false);
                        }}
                    >
                        {char.icon}
                    </motion.div>
                    </Link>
                ))}
            </OrbitingCircles>

        </div>
    );

};