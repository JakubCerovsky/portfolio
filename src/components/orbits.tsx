import { useState } from "react";

import type { Characteristic } from "./landing";
import RoleCard from "./role-card";
import { OrbitingCircles } from "./ui/orbiting-circles";

export default function OrbitsView({ characteristics, onHover }: { characteristics: Characteristic[]; onHover: (hoveredRole: string | null) => void }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="hidden md:contents">
            <OrbitingCircles
                radius={280}
                duration={20}
                reverse={true}
            >
                <div className="w-[10px] h-[10px] bg-primary rounded-full" />
                <div className="w-[10px] h-[10px] bg-primary rounded-full" />
                <div className="w-[10px] h-[10px] bg-primary rounded-full" />
            </OrbitingCircles>
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