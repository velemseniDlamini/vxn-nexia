import { Users, Award, Globe, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
};

const team: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: '',
    social: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Jane Smith',
    role: 'Lead Developer',
    image: '',
    social: {
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Mike Johnson',
    role: 'UI/UX Designer',
    image: '',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
];

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

      {/* Team */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Meet the talented individuals behind VXN IT Solutions
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden text-center">
                <div className="h-48 bg-muted/50 flex items-center justify-center">
                  <span className="text-muted-foreground">Team Member Photo</span>
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-4">
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-muted-foreground hover:text-foreground"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-foreground"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-muted-foreground hover:text-foreground"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary/5 p-8 text-center md:p-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Want to join our team?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We're always looking for talented individuals to join our growing team.
            </p>
            <div className="mt-8">
              <Button size="lg">View Open Positions</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
