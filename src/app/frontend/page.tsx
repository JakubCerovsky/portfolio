import RoleView from "@/components/role-view";

export default function FrontendPage() {
  return (
    <RoleView
      number="03"
      title="Frontend development"
      eyebrow="Interface craft"
      summary="I turn ideas into clear, lively interfaces that feel good to use and hold up under real-world pressure."
      details="I care about the small things that make a digital experience feel considered: rhythm, motion, accessibility, responsive behavior, and the quiet confidence of a well-made component."
      color="bg-[#cfdfd5]"
      tools={["React", "Tailwind CSS", "TypeScript", "C#", "Motion", "Accessibility"]}
      cvLink="/cv"
      experiences={[
        {
          title: "Freelance Web Developer",
          company: "Apartamenty Dolina Stranzyska",
          startDate: "2023 Dec",
          endDate: "2024 Apr",
          description: "Following Figma design provided by a client from Poland to create a fully responsive React Web Page was a great way to better understand ReactJS as well as improve my skills with stakeholder communication.",
          type: "remote",
          location: "Krakow, Poland",
          link: "https://apartamentydolinastrazyska.pl/"
        }
      ]}
    />
  );
}
