import type { ReactNode } from "react";
import { MonitorSmartphone, Bot, Layers3 } from "lucide-react";

export type Role =
  | "Full-Stack Developer"
  | "Robotics and AI"
  | "Frontend Developer";

export type Characteristic = {
  name: Role;
  icon: ReactNode;
  color: string;
  hoverText: string;
  href: string;
};

export const characteristics: Characteristic[] = [
  {
    name: "Full-Stack Developer",
    icon: <Layers3 />,
    color: "bg-[#d7e3c4]",
    hoverText: "I build meaningful products from end to end.",
    href: "/full-stack",
  },
  {
    name: "Robotics and AI",
    icon: <Bot size={32} />,
    color: "bg-[#e6d6c5]",
    hoverText: "I give machines a purpose.",
    href: "/robotics-ai",
  },
  {
    name: "Frontend Developer",
    icon: <MonitorSmartphone size={32} />,
    color: "bg-[#cfdfd5]",
    hoverText: "I turn ideas into friendly user interfaces.",
    href: "/frontend",
  },
];
