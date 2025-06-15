import { Globe, Smartphone, Gamepad2 } from 'lucide-react';

export const projectsData = {
  title: "Featured Projects",
  viewMoreLink: "https://github.com",
  techIcons: {
    'React': 'https://skillicons.dev/icons?i=react',
    'Node.js': 'https://skillicons.dev/icons?i=nodejs',
    'PostgreSQL': 'https://skillicons.dev/icons?i=postgresql',
    'Stripe': 'https://skillicons.dev/icons?i=stripe',
    'Tailwind CSS': 'https://skillicons.dev/icons?i=tailwind',
    'Firebase': 'https://skillicons.dev/icons?i=firebase',
    'TypeScript': 'https://skillicons.dev/icons?i=typescript',
    'Material-UI': 'https://skillicons.dev/icons?i=materialui',
    'Unity': 'https://skillicons.dev/icons?i=unity',
    'C#': 'https://skillicons.dev/icons?i=cs',
    'Photoshop': 'https://skillicons.dev/icons?i=photoshop',
    'Audacity': 'https://skillicons.dev/icons?i=audacity',
    'Vue.js': 'https://skillicons.dev/icons?i=vue',
    'OpenWeather API': 'https://skillicons.dev/icons?i=api',
    'Chart.js': 'https://skillicons.dev/icons?i=js',
    'SCSS': 'https://skillicons.dev/icons?i=sass',
    'Next.js': 'https://skillicons.dev/icons?i=nextjs',
    'MongoDB': 'https://skillicons.dev/icons?i=mongodb',
    'D3.js': 'https://skillicons.dev/icons?i=d3',
    'Python': 'https://skillicons.dev/icons?i=python',
    'TensorFlow': 'https://skillicons.dev/icons?i=tensorflow',
    'Flask': 'https://skillicons.dev/icons?i=flask',
  },
  projectCategories: [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: "Globe",
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application built with React and Firebase. Real-time updates, team collaboration, and project tracking.',
      technologies: ['React', 'Firebase', 'TypeScript', 'Material-UI'],
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: "Smartphone",
      color: 'from-green-500 to-teal-500'
    },
    {
      title: '2D Platformer Game',
      description: 'An indie 2D platformer game developed in Unity with C#. Features custom physics, level editor, and engaging gameplay mechanics.',
      technologies: ['Unity', 'C#', 'Photoshop', 'Audacity'],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: "Gamepad2",
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Weather Forecast App',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'SCSS'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: "Globe",
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.',
      technologies: ['Next.js', 'MongoDB', 'D3.js', 'Node.js'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: "Smartphone",
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'AI Chat Bot',
      description: 'Intelligent chatbot with natural language processing, context awareness, and integration with popular messaging platforms.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: "Globe",
      color: 'from-red-500 to-pink-500'
    }
  ],
  iconComponents: {
    Globe,
    Smartphone,
    Gamepad2,
  },
}; 