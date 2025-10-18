import { Users, Award, Globe, Code2, Shield, Clock, Lightbulb, HeadphonesIcon, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const stats = [
  { id: 1, name: 'Projects Completed', value: 20, suffix: '+', icon: TrendingUp },
  { id: 2, name: 'Satisfied Clients', value: 18, suffix: '+', icon: Users },
  { id: 3, name: 'Years of Experience', value: 3, suffix: '', icon: Clock },
  { id: 4, name: 'Team Members', value: 8, suffix: '+', icon: Award },
];

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span id={`counter-${end}`} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const values = [
  {
    name: 'Innovation',
    description:
      'We embrace creativity and are constantly exploring new ideas and technologies to deliver cutting-edge solutions.',
    icon: Code2,
  },
  {
    name: 'Excellence',
    description:
      'We are committed to delivering the highest quality work and exceeding our clients expectations.',
    icon: Award,
  },
  {
    name: 'Collaboration',
    description:
      'We believe in the power of teamwork and work closely with our clients to achieve their goals.',
    icon: Users,
  },
  {
    name: 'Global Mindset',
    description:
      'We think globally and design solutions that work across different markets and cultures.',
    icon: Globe,
  },
];

export const About = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20 md:py-28">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary mb-8 animate-fade-in-up">
              🚀 About VXN-Nexia
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-fade-in-up delay-200">
              Innovative IT Solutions
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground animate-fade-in-up delay-400">
              We are a dynamic team of passionate developers, designers, and IT professionals dedicated to
              delivering exceptional digital solutions that transform businesses and drive sustainable growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-600">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" className="backdrop-blur-sm" asChild>
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-primary-hover mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Founded in <span className="font-semibold text-primary">2022</span>, VXN-Nexia started as a small team of developers with a shared
                    vision of creating meaningful digital experiences. Today, we've grown into a
                    full-service IT company serving clients across various industries.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Our journey has been marked by continuous learning, innovation, and a commitment to
                    excellence. We take pride in our ability to understand our clients' unique challenges
                    and deliver tailored solutions that drive real business results.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    What sets us apart is our <span className="font-semibold text-primary">people-first approach</span>. We believe that great technology is
                    built by great teams, and we invest in our people to ensure we deliver the best
                    possible outcomes for our clients.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 backdrop-blur-sm border border-border/50">
                  <div className="h-full w-full rounded-xl bg-card/80 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center">
                          <Code2 className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Innovation First</h3>
                      <p className="text-muted-foreground">
                        Pushing boundaries with cutting-edge technology solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="relative container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Our Impact in Numbers
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Delivering measurable results and building lasting partnerships
            </p>
          </div>
          
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const delayClass = index === 0 ? 'delay-200' : index === 1 ? 'delay-400' : index === 2 ? 'delay-600' : 'delay-800';
                return (
                <div key={stat.id} className={`group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm p-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-border/50 animate-fade-in-up ${delayClass}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-hover text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-8 w-8" />
                    </div>
                    <p className="text-5xl font-bold tracking-tight text-primary sm:text-6xl group-hover:scale-105 transition-transform duration-300">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-3 text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {stat.name}
                    </p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="relative container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary mb-8 animate-fade-in-up">
              💎 Our Core Values
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in-up delay-200">
              Our Values
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-400">
              These principles guide everything we do at VXN-Nexia and shape our commitment to excellence
            </p>
          </div>

          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value, index) => {
              const delayClass = index === 0 ? 'delay-200' : index === 1 ? 'delay-400' : index === 2 ? 'delay-600' : 'delay-800';
              return (
                <div key={value.name} className={`group relative overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-border/20 hover:border-primary/30 animate-fade-in-up ${delayClass}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 flex items-center">
                      <div className="mr-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-hover text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <value.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {value.name}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground/80 transition-colors duration-300">
                      {value.description}
                    </p>
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-primary-hover rounded-full group-hover:w-full transition-all duration-700 delay-200"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="relative container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="inline-flex items-center rounded-full bg-secondary/10 px-6 py-2 text-sm font-medium text-secondary mb-8 animate-fade-in-up">
              🚀 Our Process
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in-up delay-200">
              Our Approach
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-400">
              How we deliver exceptional results for every project through our proven methodology
            </p>
          </div>

          <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Lightbulb, title: 'Discovery & Planning', description: 'We start by understanding your business goals, challenges, and requirements to create a tailored solution strategy.', step: '01' },
              { icon: Code2, title: 'Design & Development', description: 'Our team creates user-friendly designs and develops robust, scalable solutions using the latest technologies.', step: '02' },
              { icon: Shield, title: 'Testing & Quality', description: 'Rigorous testing ensures your solution is secure, reliable, and performs optimally across all platforms.', step: '03' },
              { icon: HeadphonesIcon, title: 'Launch & Support', description: 'We provide seamless deployment and ongoing support to ensure your solution continues to deliver value.', step: '04' }
            ].map((approach, index) => {
              const delayClass = `delay-${(index + 2) * 200}`;
              return (
                <div key={approach.title} className={`group relative overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm p-8 text-center shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 border border-border/20 hover:border-primary/30 animate-fade-in-up ${delayClass}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-primary-hover text-white rounded-2xl flex items-center justify-center font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {approach.step}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 relative">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary via-primary-hover to-primary/80 text-white shadow-2xl group-hover:shadow-primary/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <approach.icon className="h-10 w-10" />
                      </div>
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-primary-hover opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 group-hover:scale-125"></div>
                    </div>
                    
                    <h3 className="mb-4 text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {approach.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">
                      {approach.description}
                    </p>
                    
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-primary-hover rounded-full group-hover:w-full transition-all duration-700 delay-200"></div>
                  </div>
                  
                  {/* Connecting Line for Desktop */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="relative container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary mb-8 animate-fade-in-up">
              ⭐ Why Choose Us
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in-up delay-200">
              Why Choose VXN-Nexia?
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-400">
              What makes us the right partner for your digital transformation journey
            </p>
          </div>

          <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
            {[
              { icon: Clock, title: 'Fast Delivery', description: 'We understand the importance of time-to-market. Our agile development process ensures rapid delivery without compromising quality.', gradient: 'from-blue-500 to-blue-600' },
              { icon: Shield, title: 'Proven Security', description: 'Security is built into every solution we create. We follow industry best practices to protect your data and users.', gradient: 'from-green-500 to-green-600' },
              { icon: HeadphonesIcon, title: '24/7 Support', description: 'Our dedicated support team is available around the clock to ensure your systems run smoothly and efficiently.', gradient: 'from-purple-500 to-purple-600' },
              { icon: Award, title: 'Quality Guarantee', description: 'We stand behind our work with comprehensive warranties and ongoing maintenance to ensure your satisfaction.', gradient: 'from-orange-500 to-orange-600' }
            ].map((feature, index) => {
              const delayClass = `delay-${(index + 2) * 200}`;
              return (
                <div key={feature.title} className={`group relative overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-border/20 hover:border-primary/30 animate-fade-in-up ${delayClass}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
                  
                  <div className="relative z-10 flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <feature.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground/80 transition-colors duration-300">
                        {feature.description}
                      </p>
                      <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-primary-hover rounded-full group-hover:w-full transition-all duration-700 delay-200"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 md:p-12">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ready to Transform Your Business?
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Let's discuss how we can help you achieve your digital goals with our innovative IT solutions.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Get Started Today</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/projects">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
