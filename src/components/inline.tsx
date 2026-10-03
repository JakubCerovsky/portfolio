import { useState } from "react";
import Link from "next/link";
import { Characteristic } from "./landing";
import { motion, useReducedMotion } from "motion/react";

export default function InlineView({ characteristics, onHover }: { characteristics: Characteristic[]; onHover: (hoveredRole: string | null) => void }) {
    const reduceMotion = useReducedMotion();

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative flex items-center justify-evenly w-full mt-10 flex md:hidden">

            {characteristics.map((char, index) => (
                <Link key={char.name} href={char.href} className="rounded-full">
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
        </div>
    );

};