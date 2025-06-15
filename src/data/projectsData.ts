import { Globe, Smartphone, Gamepad2 } from 'lucide-react';

export const projectsData = {
  title: "Featured Projects",
  viewMoreLink: "https://github.com/FranCalveyra",
  techIcons: {
    'React': 'https://skillicons.dev/icons?i=react',
    'Node.js': 'https://skillicons.dev/icons?i=nodejs',
    'PostgreSQL': 'https://skillicons.dev/icons?i=postgresql',
    'Tailwind CSS': 'https://skillicons.dev/icons?i=tailwind',
    'TypeScript': 'https://skillicons.dev/icons?i=typescript',
    'Material-UI': 'https://skillicons.dev/icons?i=materialui',
    'Vite': 'https://skillicons.dev/icons?i=vite',
    'Java': 'https://skillicons.dev/icons?i=java',
    'Kotlin': 'https://skillicons.dev/icons?i=kotlin',
    'Spring': 'https://skillicons.dev/icons?i=spring',
    'Gradle': 'https://skillicons.dev/icons?i=gradle',
    'Firebase': 'https://skillicons.dev/icons?i=firebase',
    'Go': 'https://skillicons.dev/icons?i=go',
    'Rust': 'https://skillicons.dev/icons?i=rust',
    'Compose': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC97Z8BResg5dlPqczsRCFhP6zewWX0X0e7fVPG-G7PuUZwwZVsi9OPoqJYkgqT2h0FI95SsmWzVEgpt8b8HAqFiIxZ98TFtY4lE0b8UrtVJ2HrJebRwl6C9DslsQDl9KnBIrdHS6LtkY/s1600/jetpack+compose+icon_RGB.png',
    'Flutter': 'https://skillicons.dev/icons?i=flutter',
    'Dart': 'https://skillicons.dev/icons?i=dart',
    'J-Pro': 'https://avatars.githubusercontent.com/u/32846447?v=4',
    'JavaFX': 'https://www.qftest.com/blog/resources/JavaFX.png',
    'Markdown': 'https://skillicons.dev/icons?i=md',
    'Azure': 'https://skillicons.dev/icons?i=azure',
    'Nginx': 'https://skillicons.dev/icons?i=nginx',
    'Redis': 'https://skillicons.dev/icons?i=redis',
    'Scala': 'https://skillicons.dev/icons?i=scala',
    'Android Studio': 'https://skillicons.dev/icons?i=androidstudio',
    'XCode': 'https://upload.wikimedia.org/wikipedia/en/5/56/Xcode_14_icon.png',
  },
  projectCategories: [
    {
      title: 'Chess',
      description: 'A Java-based Chess Engine with a responsive JavaFX GUI. It supports variants like Capablanca Chess and Chess960, and was developed with a strong focus on applying SOLID principles for a clean and maintainable codebase.',
      technologies: ['Java', 'J-Pro', 'JavaFX', 'Kotlin', 'Markdown'],
      image: 'https://digital-game-technology-2021.imgix.net/media/Headers/dgt-electronic-plastic-chess-pieces.jpg?auto=format&crop=focalpoint&domain=digital-game-technology-2021.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=721&ixlib=php-3.3.1&q=82&w=1081',
      github: 'https://github.com/FranCalveyra/chess',
      live: 'https://chess-engine-lk8z.onrender.com/',
      icon: "Globe",
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Snippet-Searcher',
      description: 'A microservices-based system for managing custom LSP code snippets. It allows for uploading, editing, and execution with its own compiler and testing framework. Built with a robust and scalable architecture for handling complex code operations.',
      technologies: ['React', 'PostgreSQL', 'TypeScript', 'Java', 'Kotlin', 'Spring', 'Gradle', 'Azure', 'Redis', 'Nginx'],
      image: 'https://opensource.com/sites/default/files/lead-images/search_find_code_python_programming.png',
      github: 'https://github.com/Al-Fajor',
      live: 'https://francalveyra.github.io/portfolio',
      icon: "Globe",
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Portfolio',
      description: 'A modern, responsive portfolio website built to showcase my projects and skills. It features smooth animations, interactive components, and a clean design. The site is optimized for performance and accessibility, focusing on a great user experience.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: 'https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-736x414.webp',
      github: 'https://github.com/FranCalveyra/portfolio',
      live: 'https://francalveyra.github.io/portfolio',
      icon: "Globe",
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cinemapedia',
      description: 'A mobile app using TheMovieDB API for film discovery. It features movie searches, detailed metadata, and favorites management. Built with a clean architecture and Riverpod for state management, resulting in a responsive and scalable codebase.',
      technologies: ['Flutter', 'Dart', 'Android Studio', 'XCode'],
      image: 'https://images.adsttc.com/media/images/5f7d/fef2/63c0/170a/9100/0273/large_jpg/Jiangnan_Photography.jpg?1602092773',
      github: 'https://github.com/FranCalveyra/cinemapedia',
      live: 'https://francalveyra.github.io/portfolio',
      icon: "Smartphone",
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'PocketPedia',
      description: 'An Android Pokédex and team builder app for Pokémon fans. It provides real-time team composition, detailed stats via PokéAPI integration, and follows modern Android development practices, including a strong focus on visual design principles.',
      technologies: ['Kotlin', 'Compose', 'Gradle', 'Firebase'],
      image: 'https://alfabetajuega.com/hero/2019/09/pokemon-pokedex-pikachu.jpg?width=1200&aspect_ratio=16:9',
      github: 'https://github.com/FranCalveyra/pocketpedia',
      live: 'https://francalveyra.github.io/portfolio', // TODO: deploy PocketPedia once we finish coursing it
      icon: "Smartphone",
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Conc-Summary',
      description: 'A comprehensive collection of concurrent programming notes and examples, styled after the Rust documentation. It covers key concepts across multiple languages, with a focus on practical implementations and best practices for concurrency patterns.',
      technologies: ['Rust', 'Markdown', 'Scala', 'Kotlin'],
      image: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/rust-foundation-2.jpg',
      github: 'https://github.com/FranCalveyra/conc-summary',
      live: 'https://francalveyra.github.io/conc-summary',
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