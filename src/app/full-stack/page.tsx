import RoleView from "@/components/role-view";

export default function FullStackPage() {
  return (
    <RoleView
      number="01"
      title="Full-Stack Developer"
      eyebrow="Product engineering"
      summary="I build thoughtful products from end to end, from the first useful question to the last polished interaction."
      details="I like working across the whole product: shaping the experience, designing the system behind it, and making sure the final result feels clear and dependable."
      color="bg-[#d7e3c4]"
      tools={["TypeScript", "React", "Next.js", "Node.js"]}
      cvLink="/cv"
      experiences={[
        {
          title: "Full-Stack Developer",
          company: "Tech Corp",
          startDate: "2020-01-01",
          endDate: "2023-12-31",
          description: "Developed and maintained web applications using React and Node.js.",
          type: "full-time",
          location: "San Francisco, CA"
        },
        {
          title: "Software Engineer",
          company: "Startup Inc.",
          startDate: "2018-01-01",
          endDate: "2019-12-31",
          description: "Worked on various full-stack projects, focusing on user experience and performance.",
          type: "full-time",
          location: "New York, NY"
        }
      ]}
    />
  );
}
