import RoleView from "@/components/role-view";

export default function RoboticsAiPage() {
  return (
    <RoleView
      title="Robotics and AI"
      summary="I like making intelligent systems feel human, legible, and genuinely useful in the real world."
      details="The best technical work creates a sense of possibility without asking people to understand every layer underneath. I focus on clear behavior, thoughtful feedback, and interfaces that earn trust."
      color="bg-[#e6d6c5]"
      tools={["Python", "Computer vision", "Prototyping", "Interaction design"]}
      cvLink="/cv"
      experiences={[
        {
          title: "Robotics and AI Engineer",
          company: "Innovation Labs",
          startDate: "2018-01-01",
          endDate: "2020-12-31",
          description: "Developed autonomous robotic systems and AI algorithms for industrial applications.",
          type: "full-time",
          location: "Boston, MA"
        }
      ]}
    />
  );
}
