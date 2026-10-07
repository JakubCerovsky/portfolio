import RoleView from "@/components/role-view";

export default function RoboticsAiPage() {
  return (
    <RoleView
      title="Robotics and AI"
      summary="I enjoy working hands-on with robotics and intelligent systems, understanding how software interacts with the physical product and making sure what I build works beyond the screen."
      details="I approach robotics by understanding systems from the ground up... from sensors and perception to control, safety, and deployment. I value prototyping, testing, and understanding why something works rather than simply making it work."
      color="bg-[#e6d6c5]"
      tools={[
        "Python",
        "C++",
        "Computer Vision",
        "Embedded AI",
        "TensorFlow",
        "Prototyping",
        "Functional Safety",
      ]}
      cvLink="/Robotics_CV.pdf"
      experiences={[
        {
          title: "Robotics Software Engineer",
          company: "DTU Robotics",
          description:
            "Developed software for a mobile robot competing in a multi-challenge robotics track. Implemented line-following and junction detection in Python using an 8-element reflectance sensor and  reusable robot functionality including servo control. Worked with Raspberry Pi, MQTT, SSH, and Git. The final robot placed 4th out of 15 teams.",
          type: "project",
          location: "Copenhagen, Denmark",
        },
        {
          title: "Robotics Safety Engineer",
          company: "DTU Safety",
          description:
            "Performed a risk and functional-safety assessment of an autonomous agricultural robot, covering mechanical, navigation, perception, control-system, and human-interaction hazards. Applied ISO 12100, ISO 13849-1, and ISO 25119 principles to hazard identification, risk estimation, and risk reduction for autonomous operation.",
          type: "project",
          location: "Copenhagen, Denmark",
        },
        {
          title: "Embedded Machine Learning Engineer",
          company: "DTU Embedded AI",
          description:
            "Developed an embedded computer-vision and machine-learning system for real-time hand-sign recognition on a resource-constrained XIAO ESP32-S3 Sense microcontroller. Built a Python/TensorFlow training pipeline and optimized and quantized a Convolutional Neural Network for embedded deployment.",
          type: "project",
          location: "Copenhagen, Denmark",
        },
      ]}
    />
  );
}
