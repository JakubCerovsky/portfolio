import { characteristics } from "@/lib/characteristics";
import RoleCard from "./role-card";

export default function InlineView({
  onHover,
}: {
  onHover: (hoveredRole: string | null) => void;
}) {
  return (
    <div className="relative flex items-center justify-evenly w-full mt-10 flex md:hidden">
      {characteristics.map((char) => (
        <RoleCard
          key={char.name}
          characteristic={char}
          size="md"
          onHover={onHover}
        />
      ))}
    </div>
  );
}
