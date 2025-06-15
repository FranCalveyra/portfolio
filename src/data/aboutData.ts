import { Code, Gamepad2, Heart, Lightbulb, Users } from 'lucide-react';
import MateIcon from '../components/icons/MateIcon';
import { calculateYears } from '../utils/yearsCalculator';
const age = calculateYears(new Date('2003-07-24'));
const coursingYears = calculateYears(new Date('2022-03-01')) + 1;
export const aboutData = {
  title: "About Me",
  paragraphs: [
    `Hello! I'm Francisco Calveyra, I'm ${age} years old, and I'm a Software Engineering student at Universidad Austral.`,
    `I'm currently coursing my ${coursingYears}th year of studies. I'm passionate about programming and video games, and I thrive on creating efficient and scalable systems.`,
    "While I specialize in backend development, I'm versatile enough to handle frontend work when needed. I've recently dived into mobile development, which I find quite interesting.",
    "I believe in writing clean, maintainable code and following best practices to deliver high-quality solutions.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while working on side projects."
  ],
  skills: [
    {
      icon: "Code",
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
      color: "text-blue-400"
    },
    {
      icon: "Lightbulb",
      title: "Problem Solving",
      description: "Finding creative solutions to complex challenges",
      color: "text-yellow-400"
    },
    {
      icon: "Users",
      title: "Team Player",
      description: "Collaborating effectively in diverse teams",
      color: "text-green-400"
    },
    {
      icon: "Heart",
      title: "Passionate",
      description: "Driven by curiosity and love for technology",
      color: "text-red-400"
    }
  ],
  funFacts: [
    {
      icon: "Mate",
      value: "1000+",
      label: "Mates",
      color: "text-green-400"
    },
    {
      icon: "Code",
      value: "30+",
      label: "Projects Completed",
      color: "text-green-400"
    },
    {
      icon: "Gamepad2",
      value: "10+",
      label: "Games Developed",
      color: "text-purple-400"
    }
  ]
};

export const iconComponents = {
  Code,
  Lightbulb,
  Users,
  Heart,
  Mate: MateIcon,
  Gamepad2,
}; 