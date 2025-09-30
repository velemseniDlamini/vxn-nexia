import { Code, Smartphone, Server, Globe, Zap, Shield, Layers, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Web Development',
    description:
      'Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.',
    icon: <Code className="h-8 w-8 text-primary" />,
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'API Integration',
    ],
  },
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile applications for iOS and Android using React Native and Flutter.',
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    features: [
      'iOS & Android',
      'Offline Functionality',
      'Push Notifications',
      'App Store Deployment',
    ],
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Cloud infrastructure setup, CI/CD pipelines, and DevOps practices to streamline your development process.',
    icon: <Server className="h-8 w-8 text-primary" />,
    features: [
      'AWS/GCP/Azure',
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'Infrastructure as Code',
    ],
  },
  {
    title: 'UI/UX Design',
    description:
      'Beautiful and intuitive user interfaces that provide exceptional user experiences.',
    icon: <Layers className="h-8 w-8 text-primary" />,
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'UI/UX Audits',
      'Design Systems',
    ],
  },
  {
    title: 'Domain & Hosting',
    description:
      'Domain registration, web hosting, and email solutions to get your business online quickly.',
    icon: <Globe className="h-8 w-8 text-primary" />,
    features: [
      'Domain Registration',
      'Web Hosting',
      'SSL Certificates',
      'Email Hosting',
    ],
  },
  {
    title: 'IT Consulting',
    description:
      'Expert advice and guidance to help you make the right technology decisions for your business.',
    icon: <Settings className="h-8 w-8 text-primary" />,
    features: [
      'Technology Stack',
      'System Architecture',
      'Performance Optimization',
      'Security Audits',
    ],
  },
];

export const Services = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              We offer a comprehensive range of IT services to help your business thrive in the
              digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="group flex h-full flex-col transition-all hover:shadow-lg">
                <CardHeader className="flex flex-row items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4 text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Zap className="mr-2 h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary/5 p-8 text-center md:p-12">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to discuss your project?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Get in touch with our team to discuss how we can help you achieve your business
                goals with our IT solutions.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg">Get a Free Consultation</Button>
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
