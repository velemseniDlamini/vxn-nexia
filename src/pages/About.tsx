import { Users, Award, Globe, Code2, Shield, Clock, Lightbulb, HeadphonesIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';


const stats = [
  { id: 1, name: 'Projects completed', value: '50+' },
  { id: 2, name: 'Satisfied clients', value: '40+' },
  { id: 3, name: 'Years of experience', value: '5+' },
  { id: 4, name: 'Team members', value: '10+' },
];

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
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About VXN IT Solutions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              We are a team of passionate developers, designers, and IT professionals dedicated to
              delivering exceptional digital solutions that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
            <div className="mt-6 space-y-6 text-muted-foreground">
              <p>
                Founded in 2020, VXN IT Solutions started as a small team of developers with a shared
                vision of creating meaningful digital experiences. Today, we've grown into a
                full-service IT company serving clients across various industries.
              </p>
              <p>
                Our journey has been marked by continuous learning, innovation, and a commitment to
                excellence. We take pride in our ability to understand our clients' unique challenges
                and deliver tailored solutions that drive real business results.
              </p>
              <p>
                What sets us apart is our people-first approach. We believe that great technology is
                built by great teams, and we invest in our people to ensure we deliver the best
                possible outcomes for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These principles guide everything we do at VXN IT Solutions
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <Card key={value.name} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{value.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Approach</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              How we deliver exceptional results for every project
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Discovery & Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We start by understanding your business goals, challenges, and requirements to create a tailored solution strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Design & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Our team creates user-friendly designs and develops robust, scalable solutions using the latest technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Testing & Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Rigorous testing ensures your solution is secure, reliable, and performs optimally across all platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <HeadphonesIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Launch & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We provide seamless deployment and ongoing support to ensure your solution continues to deliver value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose VXN-Nexia?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              What makes us the right partner for your digital transformation
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Fast Delivery</h3>
                <p className="mt-2 text-muted-foreground">
                  We understand the importance of time-to-market. Our agile development process ensures rapid delivery without compromising quality.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Proven Security</h3>
                <p className="mt-2 text-muted-foreground">
                  Security is built into every solution we create. We follow industry best practices to protect your data and users.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                <HeadphonesIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">24/7 Support</h3>
                <p className="mt-2 text-muted-foreground">
                  Our dedicated support team is available around the clock to ensure your systems run smoothly and efficiently.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Quality Guarantee</h3>
                <p className="mt-2 text-muted-foreground">
                  We stand behind our work with comprehensive warranties and ongoing maintenance to ensure your satisfaction.
                </p>
              </div>
            </div>
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
