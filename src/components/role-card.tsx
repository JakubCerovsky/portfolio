import { motion } from "motion/react";
import Link from "next/link";
import { cloneElement, isValidElement, type ReactElement } from "react";

import type { Characteristic } from "./landing";

type RoleCardProps = {
    characteristic: Characteristic;
    size?: 'sm' | 'md' | 'lg';
    onHover: (hoveredRole: string | null) => void;
    onHoverStateChange?: (isHovered: boolean) => void;
};

export default function RoleCard({
    characteristic,
    size = 'lg',
    onHover,
    onHoverStateChange,
}: RoleCardProps) {
    const sizeMap = {
        sm: 18,
        md: 24,
        lg: 32,
    } as const;

    const iconSize = sizeMap[size];

    return (
        <Link href={characteristic.href} className="pointer-events-auto rounded-full">
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
                    scale: {
                        duration: 0.2,
                    },
                }}
                className={`
          ${characteristic.color}
          flex
          items-center
          justify-center
          p-${size === 'lg' ? '8' : '4'}
          rounded-full
          shadow-lg
          cursor-pointer
          pointer-events-auto
        `}
                onMouseEnter={() => {
                    onHover(characteristic.hoverText);
                    onHoverStateChange?.(true);
                }}
                onMouseLeave={() => {
                    onHover(null);
                    onHoverStateChange?.(false);
                }}
            >
                {isValidElement(characteristic.icon)
                    ? cloneElement(characteristic.icon as ReactElement<{ size?: number }>, { size: iconSize })
                    : characteristic.icon}
            </motion.div>
        </Link>
    );
}
