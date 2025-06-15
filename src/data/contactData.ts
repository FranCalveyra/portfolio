import { Github, Linkedin, MapPin } from 'lucide-react';

export const contactData = {
  title: "Get In Touch",
  subtitle: "Let's work together!",
  description: "I'm always interested in new opportunities, collaborations, and exciting projects. Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out!",
  contactDetails: [
    {
      icon: "https://skillicons.dev/icons?i=gmail",
      title: "Email",
      value: "franciscocalveyra24@gmail.com",
      href: "mailto:franciscocalveyra24@gmail.com"
    },
    {
      icon: "https://skillicons.dev/icons?i=linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/francisco-calveyra",
      href: "https://linkedin.com/in/francisco-calveyra"
    },
    {
      icon: "MapPin",
      title: "Location",
      value: "Buenos Aires, Argentina",
      color: "text-red-400"
    }
  ],
  socialsTitle: "Follow Me",
  socials: [
    {
      icon: "Github",
      href: "https://github.com/FranCalveyra"
    },
    {
      icon: "Linkedin",
      href: "https://linkedin.com/in/francisco-calveyra"
    },
  ],
  footerText: "&copy; 2024 Francisco Calveyra. Built with React & Tailwind CSS.",
  iconComponents: {
    Github,
    Linkedin,
    MapPin
  }
}; 