import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Globe, Server, Smartphone } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

// Helper function to get category icons
const getCategoryIcon = (category?: string) => {
  switch (category) {
    case 'Education & Student Services':
      return '🎓';
    case 'Hospitality & Real Estate':
      return '🏨';
    case 'Healthcare & Wellness':
      return '🏥';
    case 'Professional Services & SMEs':
      return '💼';
    default:
      return '💻';
  }
};

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="group relative overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 border border-border/20 hover:border-primary/30">
    {/* Animated Background Gradients */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
    
    {/* Floating Elements */}
    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>
    
    <div className="relative z-10">
      {/* Enhanced Icon Container */}
      <div className="mb-8 relative">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary via-primary-hover to-primary/80 text-white shadow-2xl group-hover:shadow-primary/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          <div className="transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
        {/* Icon Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-primary-hover opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 group-hover:scale-125"></div>
      </div>
      
      {/* Enhanced Typography */}
      <h3 className="mb-4 text-2xl font-bold text-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-8 text-base group-hover:text-foreground/80 transition-colors duration-300">
        {description}
      </p>
      
      {/* Enhanced CTA with Animation */}
      <div className="flex items-center text-primary font-semibold group-hover:translate-x-3 transition-all duration-300 cursor-pointer">
        <span className="text-sm tracking-wide">Learn more</span>
        <div className="ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
          <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
        </div>
      </div>
      
      {/* Progress Bar Animation */}
      <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-primary-hover rounded-full group-hover:w-full transition-all duration-700 delay-200"></div>
    </div>
    
    {/* Shimmer Effect */}
    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
  </div>
);

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  image?: string;
  category?: string;
};

const ProjectCard = ({ title, description, tags, demoUrl, image, category }: ProjectCardProps) => (
  <div className="group overflow-hidden rounded-xl bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-border/50">
    <div className="relative h-48 overflow-hidden">
      {image ? (
        <>
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden h-full w-full bg-gradient-to-br from-primary/20 to-secondary/20" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className="text-center">
              <div className="text-4xl mb-2">{getCategoryIcon(category)}</div>
              <div className="text-sm font-medium text-muted-foreground">Demo Preview</div>
            </div>
          </div>
        </>
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">{getCategoryIcon(category)}</div>
            <div className="text-sm font-medium text-muted-foreground">Demo Preview</div>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-6">
      <div className="mb-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <Button variant="outline" size="sm" asChild>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          View Live Demo <ArrowRight className="ml-1 h-3 w-3" />
        </a>
      </Button>
    </div>
  </div>
);

export const Home = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Hosting & Support',
      description: 'Reliable hosting solutions and ongoing maintenance.',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Domain Services',
      description: 'Domain registration and management made easy.',
    },
  ];

  const projectCategories = [
    {
      category: 'Education & Student Services',
      description: 'Websites and apps for schools, tutoring centers, and student accommodation',
      projects: [
        {
          title: 'Student Accommodation Portal',
          description: 'Complete booking system with application forms, virtual tours, and payment integration.',
          tags: ['React', 'Booking System', 'Payments'],
          demoUrl: '#',
          image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop&crop=center',
          category: 'Education & Student Services',
        },
        {
          title: 'Private School Website',
          description: 'Modern school website with admissions portal, events calendar, and parent communication.',
          tags: ['Next.js', 'CMS', 'Mobile App'],
          demoUrl: '#',
          image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop&crop=center',
          category: 'Education & Student Services',
        },
      ],
    },
    {
      category: 'Hospitality & Real Estate',
      description: 'Online presence for guesthouses, hotels, and property management',
      projects: [
        {
          title: 'Boutique Guesthouse',
          description: 'Elegant website with online booking, virtual tours, and WhatsApp integration.',
          tags: ['Booking System', 'Virtual Tours', 'WhatsApp'],
          demoUrl: '#',
          image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop&crop=center',
          category: 'Hospitality & Real Estate',
        },
        {
          title: 'Real Estate Agency',
          description: 'Property showcase with advanced search, virtual tours, and lead generation.',
          tags: ['Property Search', 'Lead Gen', 'Mobile'],
          demoUrl: '#',
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center',
          category: 'Hospitality & Real Estate',
        },
      ],
    },
    {
      category: 'Healthcare & Wellness',
      description: 'Professional websites for clinics, gyms, and wellness centers',
      projects: [
        {
          title: 'Medical Clinic Portal',
          description: 'Professional clinic website with appointment booking and patient portal.',
          tags: ['Appointment System', 'Patient Portal', 'HIPAA'],
          demoUrl: '#',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center',
          category: 'Healthcare & Wellness',
        },
        {
          title: 'Fitness Studio App',
          description: 'Mobile app for class booking, progress tracking, and member communication.',
          tags: ['Mobile App', 'Booking', 'Progress Tracking'],
          demoUrl: '#',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
          category: 'Healthcare & Wellness',
        },
      ],
    },
    {
      category: 'Professional Services & SMEs',
      description: 'Lead generation websites for consultants and service providers',
      projects: [
        {
          title: 'Law Firm Website',
          description: 'Professional website with case studies, consultation booking, and client portal.',
          tags: ['Lead Generation', 'Consultation Booking', 'CRM'],
          demoUrl: '#',
          image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&crop=center',
          category: 'Professional Services & SMEs',
        },
        {
          title: 'Plumbing Service Portal',
          description: 'Service website with quote requests, emergency booking, and customer reviews.',
          tags: ['Quote System', 'Emergency Booking', 'Reviews'],
          demoUrl: '#',
          image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&crop=center',
          category: 'Professional Services & SMEs',
        },
      ],
    },
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 border-0 min-h-[70vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/30 rounded-full blur-xl animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-secondary/25 rounded-full blur-2xl animate-bounce delay-700"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/6 w-16 h-16 border-2 border-primary/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-12 h-12 border-2 border-secondary/40 rotate-12 animate-bounce delay-300"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-pattern bg-repeat"></div>
        </div>
        
        <div className="relative container px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Animated Badge */}
              <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary mb-8 animate-fade-in-up delay-200 backdrop-blur-sm">
                🚀 Welcome to VXN-Nexia
              </div>
              
              {/* Animated Main Heading */}
              <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up delay-300">
                <span className="block bg-gradient-to-r from-primary via-primary-hover to-secondary bg-clip-text text-transparent animate-gradient-x">
                  Innovative IT Solutions
                </span>
                <span className="block mt-2 animate-fade-in-up delay-500">
                  for Your Business
                </span>
              </h1>
              
              {/* Animated Paragraph */}
              <p className="mb-10 text-xl text-muted-foreground leading-relaxed animate-fade-in-up delay-700">
                We help businesses transform their ideas into powerful digital experiences with custom
                software development and cutting-edge IT solutions that drive growth and innovation.
              </p>
              
              {/* Animated Buttons */}
              <div className="flex flex-col items-center lg:items-start justify-center gap-4 sm:flex-row animate-fade-in-up delay-900">
                <Button size="lg" className="shadow-2xl hover:shadow-primary/25 transition-all duration-300 animate-pulse-glow" asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    Get Started <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="backdrop-blur-sm hover:bg-primary/10 transition-all duration-300" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Animated Code Illustration */}
            <div className="relative animate-fade-in-up delay-1000">
              {/* Code Editor Window */}
              <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/50 overflow-hidden h-[400px]">
                {/* Window Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-muted/50 border-b border-border/50">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-muted-foreground font-mono">app.tsx</div>
                  <div className="w-16"></div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm leading-relaxed bg-gradient-to-br from-card to-card/50">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">1</span>
                      <span className="text-blue-400 typing-animation-1">import</span>
                      <span className="text-foreground typing-animation-1"> React </span>
                      <span className="text-blue-400 typing-animation-1">from</span>
                      <span className="text-green-400 typing-animation-1"> 'react';</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">2</span>
                      <span className="text-blue-400 typing-animation-2">import</span>
                      <span className="text-foreground typing-animation-2"> {'{ useState }'} </span>
                      <span className="text-blue-400 typing-animation-2">from</span>
                      <span className="text-green-400 typing-animation-2"> 'react';</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">3</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">4</span>
                      <span className="text-blue-400 typing-animation-3">function</span>
                      <span className="text-yellow-400 typing-animation-3"> App</span>
                      <span className="text-foreground typing-animation-3">() {'{'}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">5</span>
                      <span className="ml-4 text-blue-400 typing-animation-4">const</span>
                      <span className="text-foreground typing-animation-4"> [count, setCount] = </span>
                      <span className="text-yellow-400 typing-animation-4">{'useState'}</span>
                      <span className="text-foreground typing-animation-4">(</span>
                      <span className="text-orange-400 typing-animation-4">0</span>
                      <span className="text-foreground typing-animation-4">);</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">6</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">7</span>
                      <span className="ml-4 text-blue-400 typing-animation-5">return</span>
                      <span className="text-foreground typing-animation-5"> (</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">8</span>
                      <span className="ml-8 text-red-400 typing-animation-6">&lt;div</span>
                      <span className="text-blue-400 typing-animation-6"> className</span>
                      <span className="text-foreground typing-animation-6">=</span>
                      <span className="text-green-400 typing-animation-6">"app"</span>
                      <span className="text-red-400 typing-animation-6">&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">9</span>
                      <span className="ml-12 text-red-400 typing-animation-7">&lt;h1&gt;</span>
                      <span className="text-foreground typing-animation-7">VXN-Nexia Solutions</span>
                      <span className="text-red-400 typing-animation-7">&lt;/h1&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">10</span>
                      <span className="ml-12 text-red-400 typing-animation-8">&lt;button</span>
                      <span className="text-blue-400 typing-animation-8"> onClick</span>
                      <span className="text-foreground typing-animation-8">=</span>
                      <span className="text-yellow-400 typing-animation-8">{'{'} () =&gt; setCount(count + 1) {'}'}</span>
                      <span className="text-red-400 typing-animation-8">&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">11</span>
                      <span className="ml-16 text-foreground typing-animation-9">Count: {'{'} count {'}'}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">12</span>
                      <span className="ml-12 text-red-400 typing-animation-10">&lt;/button&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">13</span>
                      <span className="ml-8 text-red-400 typing-animation-11">&lt;/div&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">14</span>
                      <span className="ml-4 text-foreground typing-animation-12">);</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-4">15</span>
                      <span className="text-foreground typing-animation-13">{'}'}</span>
                    </div>
                  </div>
                  
                  {/* Cursor */}
                  <div className="inline-block w-2 h-5 bg-primary animate-pulse ml-1 cursor-blink"></div>
                </div>
              </div>

              {/* Floating Code Elements */}
              <div className="absolute -top-4 -right-4 bg-primary/10 backdrop-blur-sm rounded-lg p-3 animate-float-1">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary/10 backdrop-blur-sm rounded-lg p-3 animate-float-2">
                <span className="text-xs font-mono text-secondary">&lt;/&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="relative container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              ✨ What We Offer
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We offer a comprehensive range of IT services designed to help your business grow and succeed in the digital world.
            </p>
          </div>

          <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const delayClass = `delay-${(index + 1) * 200}`;
              return (
                <div key={index} className={`animate-fade-in-up ${delayClass}`}>
                  <Link to="/services" className="block group/link">
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300" asChild>
              <Link to="/services" className="inline-flex items-center">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Live Demo Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our portfolio organized by industry sectors to see how we help businesses succeed.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {projectCategories.map((category, categoryIndex) => (
              <Button
                key={categoryIndex}
                variant="outline"
                size="sm"
                onClick={() => {
                  const element = document.getElementById(`category-${categoryIndex}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                {category.category}
              </Button>
            ))}
          </div>

          <div className="mt-16 space-y-16">
            {projectCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} id={`category-${categoryIndex}`}>
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                  <p className="mt-2 text-muted-foreground">{category.description}</p>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  {category.projects.map((project, projectIndex) => (
                    <ProjectCard
                      key={projectIndex}
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      demoUrl={project.demoUrl}
                      image={project.image}
                      category={project.category}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects" className="inline-flex items-center">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary/5 p-8 text-center md:p-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your business goals with our IT solutions.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link to="/contact" className="inline-flex items-center">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
