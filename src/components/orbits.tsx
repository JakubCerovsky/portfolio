import { useState } from "react";
import RoleCard from "./role-card";
import { OrbitingCircles } from "./ui/orbiting-circles";
import { characteristics } from "@/lib/characteristics";

export default function OrbitsView({
  onHover,
}: {
  onHover: (hoveredRole: string | null) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      <OrbitingCircles radius={280} duration={20} reverse={true}>
        <div className="w-[7px] h-[7px] bg-primary" />
        <div className="w-[7px] h-[7px] bg-primary" />
        <div className="w-[7px] h-[7px] bg-primary" />
        <div className="w-[7px] h-[7px] bg-primary" />
        <div className="w-[7px] h-[7px] bg-primary" />
      </OrbitingCircles>
      <OrbitingCircles
        radius={280}
        duration={20}
        speed={1}
        iconSize={104}
        className={isHovered ? "[animation-play-state:paused]" : ""}
      >
        {characteristics.map((char) => (
          <RoleCard
            key={char.name}
            characteristic={char}
            onHover={onHover}
            onHoverStateChange={setIsHovered}
          />
        ))}
      </OrbitingCircles>
    </div>
  );
}
