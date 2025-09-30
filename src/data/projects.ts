export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product catalog, cart, and checkout functionality.',
    image: '/images/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/username/ecommerce'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/images/projects/taskmanager.jpg',
    tags: ['TypeScript', 'Next.js', 'Firebase', 'Tailwind CSS'],
    demoUrl: 'https://example.com/taskmanager',
    githubUrl: 'https://github.com/username/taskmanager'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing creative work and professional experience.',
    image: '/images/projects/portfolio.jpg',
    tags: ['React', 'GSAP', 'Framer Motion', 'Tailwind CSS'],
    demoUrl: 'https://example.com/portfolio',
    githubUrl: 'https://github.com/username/portfolio'
  },
  {
    id: 4,
    title: 'Recipe Finder',
    description: 'Discover and save your favorite recipes with advanced filtering and search capabilities.',
    image: '/images/projects/recipe.jpg',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'Docker'],
    demoUrl: 'https://example.com/recipes',
    githubUrl: 'https://github.com/username/recipes'
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'Track your workouts, set goals, and monitor your fitness journey.',
    image: '/images/projects/fitness.jpg',
    tags: ['React Native', 'Redux', 'Firebase', 'Expo'],
    demoUrl: 'https://example.com/fitness',
    githubUrl: 'https://github.com/username/fitness-tracker'
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with 5-day forecast and location search.',
    image: '/images/projects/weather.jpg',
    tags: ['JavaScript', 'OpenWeather API', 'Chart.js', 'Bootstrap'],
    demoUrl: 'https://example.com/weather',
    githubUrl: 'https://github.com/username/weather-dashboard'
  }
];
