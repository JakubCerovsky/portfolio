import RoleView from "@/components/role-view";
import { gls, lego } from "@/lib/experience";

export default function FullStackPage() {
  return (
    <RoleView
      title="Full-Stack Developer"
      summary="I build meaningful products end to end, from the first idea to the final interaction."
      details="As someone who grew up with Minecraft and LEGO, I've always liked building things from start to finish: shaping the experience, designing the systems behind it, and making sure all the pieces work together."
      color="bg-[#d7e3c4]"
      tools={["TypeScript", "React", "C#", "Terraform", "AWS", "Docker"]}
      cvLink="/Fullstack_CV.pdf"
      experiences={[lego, gls]}
    />
  );
}
