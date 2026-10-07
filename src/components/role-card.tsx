import { Characteristic } from "@/lib/characteristics";
import { motion } from "motion/react";
import Link from "next/link";
import { cloneElement, isValidElement, type ReactElement } from "react";

type RoleCardProps = {
  characteristic: Characteristic;
  size?: "sm" | "md" | "lg";
  isBlank?: boolean;
  onHover: (hoveredRole: string | null) => void;
  onHoverStateChange?: (isHovered: boolean) => void;
};

export default function RoleCard({
  characteristic,
  size = "lg",
  isBlank = false,
  onHover,
  onHoverStateChange,
}: RoleCardProps) {
  const sizeMap = {
    sm: 18,
    md: 24,
    lg: 32,
  } as const;

  const paddingMap = {
    sm: "p-4",
    md: "p-4",
    lg: "p-8",
  } as const;

  const iconSize = sizeMap[size];
  const paddingClass = paddingMap[size];

  return (
    <Link
      href={characteristic.href}
      target={isBlank ? "_blank" : undefined}
      rel={isBlank ? "noopener noreferrer" : undefined}
      className="pointer-events-auto rounded-full"
    >
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
          ${paddingClass}
          flex
          items-center
          justify-center
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
          ? cloneElement(
              characteristic.icon as ReactElement<{ size?: number }>,
              { size: iconSize },
            )
          : characteristic.icon}
      </motion.div>
    </Link>
  );
}
