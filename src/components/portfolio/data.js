import INPOLICY_1 from "../../Asset/inpolicy-1.webp";
import INPOLICY_2 from "../../Asset/inpolicy-2.webp";
import INPOLICY_3 from "../../Asset/inpolicy-3.webp";
import INPOLICY_4 from "../../Asset/inpolicy-4.webp";
import NUTRILAB_1 from "../../Asset/nutrilab-1.webp";
import ANON_1 from "../../Asset/anon-1.webp";
import ANON_2 from "../../Asset/anon-2.webp";
import ANON_3 from "../../Asset/anon-3.webp";
import ANON_4 from "../../Asset/anon-4.webp";
import ANON_5 from "../../Asset/anon-5.webp";
import ANON_6 from "../../Asset/anon-6.webp";
import ANON_7 from "../../Asset/anon-7.webp";
import ANON_8 from "../../Asset/anon-8.webp";
import ANON_9 from "../../Asset/anon-9.webp";
import ANON_10 from "../../Asset/anon-10.webp";
import ANON_11 from "../../Asset/anon-11.webp";
import ANON_12 from "../../Asset/anon-12.webp";
import ANON_13 from "../../Asset/anon-13.webp";
import ANON_14 from "../../Asset/anon-14.webp";

const data = [
  {
    id: 0,
    category: "Enterprise SaaS",
    title: "InPolicy — AI Policy Management Platform",
    description:
      "Multi-tenant AI compliance platform that checks communications against company policy before they're sent. I work across the stack and own security and enterprise readiness: tenant isolation, least-privilege cloud infrastructure, and SOC 2 readiness.",
    stack: ["Next.js 15", "NestJS", "Python", "FastAPI", "GCP", "Terraform"],
    github: "",
    demo: "https://inpolicy.ai",
    images: [INPOLICY_1, INPOLICY_2, INPOLICY_3, INPOLICY_4],
  },
  {
    id: 1,
    category: "AI Mobile App",
    title: "NutriLab — AI Nutrition & Food Analysis",
    description:
      "AI-driven nutrition app with real-time food scanning and chat. Reduced scan latency from 30s to 3–4s. Built with React Native, Expo, and OpenAI API.",
    stack: ["React Native", "Expo", "TypeScript", "OpenAI API", "Firebase"],
    github: "",
    demo: "https://nutrilab.tech",
    images: [NUTRILAB_1],
  },
  {
    id: 2,
    category: "Real-time App",
    title: "Anonymous Chat — Real-time WebRTC Chat Platform",
    description:
      "Real-time anonymous chat platform built with WebRTC and WebSockets. 99.5%+ uptime, 600+ active users. Led agile sprints that improved feature velocity and system stability.",
    stack: ["React", "Next.js", "Firebase", "WebSockets", "MongoDB"],
    github: "https://github.com/world-wide-techies/annon_chat",
    demo: "https://annon-chat.vercel.app",
    images: [
      ANON_1, ANON_2, ANON_3, ANON_4, ANON_5, ANON_6, ANON_7,
      ANON_8, ANON_9, ANON_10, ANON_11, ANON_12, ANON_13, ANON_14,
    ],
  },
];

export { data };
