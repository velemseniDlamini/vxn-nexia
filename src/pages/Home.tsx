import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
    <div className="mt-4">
      <Button variant="link" className="p-0 group-hover:underline" asChild>
        <Link to="/services">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </div>
);

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

const ProjectCard = ({ title, description, tags }: ProjectCardProps) => (
  <div className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
    <div className="h-48 bg-muted/50">
      {/* Placeholder for project image */}
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Project Image
      </div>
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
      <Button variant="outline" className="w-full" asChild>
        <Link to="/projects">View Project</Link>
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

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with payment integration and inventory management.',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Mobile Task Manager',
      description: 'A productivity app to help teams collaborate and manage tasks on the go.',
      tags: ['React Native', 'Firebase'],
    },
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Innovative IT Solutions for Your Business
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              We help businesses transform their ideas into powerful digital experiences with custom
              software development and IT solutions.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer a wide range of IT services to help your business grow and succeed in the
              digital world.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Recent Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Take a look at some of our recent work and see how we've helped our clients succeed.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects" className="inline-flex items-center">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
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
