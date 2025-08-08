import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Project data can be extended or made dynamic
const projectList = [
  {
    title: "The Cornerstone",
    location: "Gopalapuram, 6th Street",
    image: "/carousel1.jpg",
    status: "Limited Availability",
  },
  {
    title: "The Serenity",
    location: "Anna Nagar, East",
    image: "/carousel2.jpg",
    status: "Sold Out",
  },
  {
    title: "Orchid Gardens",
    location: "Velachery, Main Road",
    image: "/carousel3.jpg",
    status: "Now Selling",
  },
  {
    title: "The Pinnacle",
    location: "Nungambakkam High Road",
    image: "/carousel4.jpg",
    status: "Sold Out",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="w-full bg-background py-16">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-6 px-4 text-center">
        <h2 className="text-2xl lg:text-3xl mt-10 font-bold uppercase tracking-widest text-foreground">
          Featured Projects
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Handpicked and crafted just for you.
        </p>
        <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-accent/70" />
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-3 sm:px-1">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {projectList.map((project, index) => (
              <CarouselItem
                key={index}
                className="group basis-full transition-transform duration-300 hover:scale-[1.01]"
              >
                <Card className="overflow-hidden rounded-none bg-card border border-border">
                  <CardContent className="relative flex h-[60vw] max-h-[600px] min-h-[300px] items-end p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 700px"
                      priority={index === 0}
                    />
                    {/* Bottom gradient overlay
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                    <div className="relative z-10 w-full p-8 flex flex-col gap-2 text-white">
                      <span
                        className={`mb-2 self-start rounded-full px-4 py-1 text-xs font-semibold
                          ${
                            project.status === "Sold Out"
                              ? "bg-destructive text-destructive-foreground"
                              : "bg-primary text-primary-foreground/90"
                          }
                        `}
                      >
                        {project.status}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold drop-shadow-sm">
                        {project.title}
                      </h3>
                      <p className="text-base md:text-lg text-white/80 drop-shadow-sm">
                        {project.location}
                      </p>
                    </div> */}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom large navigation buttons */}
          <CarouselPrevious
            className="
    !absolute !top-1/2 -translate-y-1/2 left-4
    !h-15 !w-15 !rounded-full !bg-white/70 !border-none !shadow-xl
    flex items-center justify-center
    transition
    hover:!bg-accent/80 hover:!text-accent-foreground
    focus-visible:!outline-none
    focus-visible:ring-4 focus-visible:ring-accent/60
    z-20
  "
          />
          <CarouselNext
            className="
    !absolute !top-1/2 -translate-y-1/2 right-4
    !h-15 !w-15 !rounded-full !bg-white/70 !border-none !shadow-xl
    flex items-center justify-center
    transition
    hover:!bg-accent/80 hover:!text-accent-foreground
    focus-visible:!outline-none
    focus-visible:ring-4 focus-visible:ring-accent/60
    z-20
  "
          />
        </Carousel>
      </div>
    </section>
  );
}
