import Bot from "@/app/Bot.png"
import Layers from "@/app/Layers.png"
import UI from "@/app/UI.png"
import { StaticImageData } from "next/image";

export type Role =
  | "Full-Stack Developer"
  | "Robotics and AI"
  | "Frontend Developer";

export type Characteristic = {
  name: Role;
  icon: StaticImageData;
  color: string;
  hoverText: string;
  href: string;
};

export const characteristics: Characteristic[] = [
  {
    name: "Full-Stack Developer",
    icon: Layers,
    color: "bg-[#d7e3c4]",
    hoverText: "I build meaningful products from end to end.",
    href: "/full-stack",
  },
  {
    name: "Robotics and AI",
    icon: Bot,
    color: "bg-[#e6d6c5]",
    hoverText: "I give machines a purpose.",
    href: "/robotics-ai",
  },
  {
    name: "Frontend Developer",
    icon: UI,
    color: "bg-[#cfdfd5]",
    hoverText: "I turn ideas into friendly user interfaces.",
    href: "/frontend",
  },
];
