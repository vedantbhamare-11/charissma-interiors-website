import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

// Mock data for your projects
const projectList = [
  {
    title: 'The Cornerstone',
    location: 'Gopalapuram, 6th Street',
    image: '/carousel1.jpg',
    status: 'Limited Availability',
  },
  {
    title: 'The Serenity',
    location: 'Anna Nagar, East',
    image: '/carousel2.jpg',
    status: 'Sold Out',
  },
  {
    title: 'Orchid Gardens',
    location: 'Velachery, Main Road',
    image: '/carousel3.jpg',
    status: 'Now Selling',
  },
  {
    title: 'The Pinnacle',
    location: 'Nungambakkam High Road',
    image: '/carousel4.jpg',
    status: 'Sold Out',
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="w-full bg-background py-24 sm:py-32">
      
      {/* Section Header (remains contained) */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-foreground">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Handpicked and crafted just for you.
          </p>
        </div>
      </div>

      {/* Full-width Carousel */}
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projectList.map((project, index) => (
            // Each item now takes up the full width
            <CarouselItem key={index} className="basis-full">
              <div className="p-3">
                <Card className="overflow-hidden border-none shadow-none">
                  <CardContent className="relative flex h-[70vh] items-center justify-center p-0">
                    <Image
                      src={project.image}
                      alt={`Exterior view of ${project.title}`}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    
                    {/* Project details as an overlay */}
                    <div className="absolute bottom-0 left-0 z-10 p-8 text-white md:p-12">
                      <div className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        project.status === 'Sold Out' 
                          ? 'bg-destructive text-destructive-foreground' 
                          : 'bg-primary text-primary-foreground'
                      }`}>
                        {project.status}
                      </div>
                      <h3 className="text-3xl font-bold md:text-4xl">{project.title}</h3>
                      <p className="mt-2 text-base text-white/80">{project.location}</p>
                      <Button variant="secondary" className="mt-6">
                        View Project Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 hidden sm:flex" />
        <CarouselNext className="right-4 hidden sm:flex" />
      </Carousel>
      
    </section>
  );
}
