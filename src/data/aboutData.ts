import { Code, Coffee, Gamepad2, Heart, Lightbulb, Users } from 'lucide-react';

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "Hello! I'm John, a passionate software engineer with a love for creating innovative solutions and beautiful user experiences. My journey in tech started with curiosity and has evolved into a career dedicated to crafting meaningful software.",
    "I specialize in full-stack development with expertise in modern web technologies, mobile applications, and game development. I believe in writing clean, maintainable code and following best practices to deliver high-quality solutions.",
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
      icon: "Coffee",
      value: "500+",
      label: "Cups of Coffee",
      color: "text-amber-400"
    },
    {
      icon: "Code",
      value: "50+",
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
  Coffee,
  Gamepad2,
}; 