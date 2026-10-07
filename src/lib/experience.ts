export type Experience = {
  title: string;
  company: string;
  date?: {
    start: string;
    end: string;
  };
  description: string;
  type:
    | "full-time"
    | "part-time"
    | "contract"
    | "remote"
    | "freelance"
    | "internship"
    | "project"
    | "bachelor's project"
    | "master's project"
    | "phd project"
    | "research"
    | "volunteer"
    | "other";
  location: string;
  link?: string;
};

export const lego: Experience = {
  title: "Student Software Engineer",
  company: "The LEGO Group",
  date: { start: "2021 Aug", end: "Present" },
  description:
    "Develop and maintain production software across frontend, backend, and edge systems using TypeScript, React, AWS, and Terraform. Introduced network-condition simulation into end-to-end testing of physical edge devices, improving robustness under unreliable network conditions across global production sites. Automated parts of the API development workflow and contributed to internal frontend applications.",
  type: "part-time",
  location: "Billund, Denmark",
};

export const gls: Experience = {
  title: "Software Engineer",
  company: "GLS Group",
  date: { start: "2025 Mar", end: "2025 Dec" },
  description:
    "Developed an EV charging optimization platform for GLS Denmark as part of a three-person engineering team. Built a single-page application for managing and visualizing optimized charging schedules and integrated it with a distributed backend using electricity-price APIs, MongoDB, and microservices.",
  type: "bachelor's project",
  location: "Kolding, Denmark",
};
