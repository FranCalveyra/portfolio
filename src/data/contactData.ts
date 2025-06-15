import { Github, Linkedin, Twitter, MapPin } from 'lucide-react';

export const contactData = {
  title: "Get In Touch",
  subtitle: "Let's work together!",
  description: "I'm always interested in new opportunities, collaborations, and exciting projects. Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out!",
  contactDetails: [
    {
      icon: "https://skillicons.dev/icons?i=gmail",
      title: "Email",
      value: "john@example.com",
      href: "mailto:john@example.com"
    },
    {
      icon: "https://skillicons.dev/icons?i=linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/johndoe",
      href: "https://linkedin.com/in/johndoe"
    },
    {
      icon: "MapPin",
      title: "Location",
      value: "San Francisco, CA",
      color: "text-red-400"
    }
  ],
  socialsTitle: "Follow Me",
  socials: [
    {
      icon: "Github",
      href: "https://github.com"
    },
    {
      icon: "Linkedin",
      href: "https://linkedin.com"
    },
    {
      icon: "Twitter",
      href: "https://twitter.com"
    }
  ],
  footerText: "&copy; 2024 John Doe. Built with React & Tailwind CSS.",
  iconComponents: {
    Github,
    Linkedin,
    Twitter,
    MapPin
  }
}; 