import IMG1 from "../../Asset/drag.gif";
import IMG3 from "../../Asset/Techreads.gif";
import IMG4 from "../../Asset/shopzone.gif";
import INPOLICY_1 from "../../Asset/inpolicy-1.png";
import INPOLICY_2 from "../../Asset/inpolicy-2.png";
import INPOLICY_3 from "../../Asset/inpolicy-3.png";
import INPOLICY_4 from "../../Asset/inpolicy-4.png";
import NUTRILAB_1 from "../../Asset/nutrilab-1.png";
import ANON_1 from "../../Asset/anon-1.png";
import ANON_2 from "../../Asset/anon-2.png";
import ANON_3 from "../../Asset/anon-3.png";
import ANON_4 from "../../Asset/anon-4.png";
import ANON_5 from "../../Asset/anon-5.png";
import ANON_6 from "../../Asset/anon-6.png";
import ANON_7 from "../../Asset/anon-7.png";
import ANON_8 from "../../Asset/anon-8.png";
import ANON_9 from "../../Asset/anon-9.png";
import ANON_10 from "../../Asset/anon-10.png";
import ANON_11 from "../../Asset/anon-11.png";
import ANON_12 from "../../Asset/anon-12.png";
import ANON_13 from "../../Asset/anon-13.png";
import ANON_14 from "../../Asset/anon-14.png";

const data = [
  {
    id: 0,
    category: "Enterprise SaaS",
    title: "InPolicy — AI Policy Management Platform",
    description:
      "Multi-tenant enterprise SaaS with AI-powered violation detection, streaming pipelines, and security-hardened auth. Built across Next.js 15, NestJS, and Python/FastAPI on GCP.",
    stack: ["Next.js 15", "NestJS", "Python", "FastAPI", "GCP", "Terraform"],
    github: "https://github.com/Remi-dee",
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
    category: "Fintech",
    title: "FXKARASHELL — Blockchain P2P Forex Exchange",
    description:
      "P2P forex trading platform with open banking integration (Truelayer, Mono), secure escrow wallet, and real-time trade APIs.",
    stack: ["React", "Next.js", "NestJS", "MongoDB", "Truelayer", "Mono API"],
    github: "https://github.com/Remi-dee",
    demo: "",
    images: [IMG4],
  },
  {
    id: 3,
    category: "Recruitment Platform",
    title: "Talentyard — Recruitment & Talent Management",
    description:
      "Full-stack recruitment platform with live support and onboarding flows. Achieved 4.8/5 user rating.",
    stack: ["React", "Next.js", "Firebase", "MongoDB", "WebSockets"],
    github: "https://github.com/Remi-dee",
    demo: "",
    images: [IMG3],
  },
  {
    id: 4,
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
  {
    id: 5,
    category: "Productivity",
    title: "Trello-Lite — Task Management App",
    description:
      "Lightweight Trello clone with drag-and-drop task organisation and persistent board state.",
    stack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Remi-dee/trellolite",
    demo: "https://trello-lite-remi.vercel.app/",
    images: [IMG1],
  },
];

export { data };
