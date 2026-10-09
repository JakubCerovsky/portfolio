import { Characteristic } from "@/lib/characteristics";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

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
    sm: 20,
    md: 40,
    lg: 50,
  } as const;

  const paddingMap = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  } as const;

  const iconSize = sizeMap[size];
  const paddingClass = paddingMap[size];

  return (
    <Link
      href={characteristic.href}
      target={isBlank ? "_blank" : undefined}
      rel={isBlank ? "noopener noreferrer" : undefined}
      prefetch={isBlank ? false : undefined}
      aria-label={characteristic.name}
      className="group relative inline-flex pointer-events-auto rounded-full"
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
        <Image
          src={characteristic.icon}
          alt=""
          width={iconSize}
          height={iconSize}
          loading="eager"
          style={{ width: iconSize, height: iconSize }}
          className={`object-contain`}
        />
      </motion.div>
      <div
        role="tooltip"
        className="invisible absolute bottom-full left-1/2 z-50 -mb-1 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-sm font-normal opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100"
      >
        {!isBlank ? characteristic.name : "CV"}
      </div>
    </Link>
  );
}
