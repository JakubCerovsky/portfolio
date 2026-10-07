import RoleView from "@/components/role-view";
import { gls, lego } from "@/lib/experience";

export default function FrontendPage() {
  return (
    <RoleView
      title="Frontend Developer"
      summary="I turn ideas into clear, lively interfaces that feel good and especially natural to use."
      details="I care about the small things that make a digital experience feel special. I like to put myself in the shoes of the user behind the screen, and actually develop something they can use without giving it a second thought."
      color="bg-[#cfdfd5]"
      tools={[
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Motion",
        "Chakra UI",
        "Responsive Design",
        "Accessibility",
        "Figma",
      ]}
      cvLink="/Frontend_CV.pdf"
      experiences={[
        {
          title: "Freelance Web Developer",
          company: "Apartamenty Dolina Stranzyska",
          date: { start: "2023 Dec", end: "2024 Apr" },
          description:
            "Following Figma design provided by a client from Poland to create a fully responsive React Web Page was a great way to better understand ReactJS as well as improve my skills with stakeholder communication.",
          type: "remote",
          location: "Krakow, Poland",
          link: "https://apartamentydolinastrazyska.pl/",
        },
        lego,
        gls,
      ]}
    />
  );
}
