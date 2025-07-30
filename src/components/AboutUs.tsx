import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const aboutImages = [
  {
    src: "/about1.jpg",
    alt: "Charissma: Site at work",
  },
  {
    src: "/about2.jpg",
    alt: "Charissma: Finished interior design",
  },
  {
    src: "/about3.jpg",
    alt: "Charissma: Team planning",
  },
  {
    src: "/about4.jpg",
    alt: "Charissma: Premium residence project",
  },
];

export function AboutUs() {
  return (
    <section id="about" className="bg-background py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 mt-8 items-center gap-x-12 gap-y-16 lg:grid-cols-2">
          {/* Column 1: Carousel */}
          <div className="h-96 w-full flex items-center overflow-hidden rounded-xl">
            <Carousel
              opts={{ align: "center", loop: true }}
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent>
                {aboutImages.map((image, idx) => (
                  <CarouselItem key={idx} className="basis-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="h-96 w-full object-cover rounded-xl transition-all duration-500"
                      priority={idx === 0}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 hidden !bg-white/80 !text-foreground shadow-md hover:!bg-accent/60 hover:!text-accent-foreground" />
              <CarouselNext className="right-4 hidden !bg-white/80 !text-foreground shadow-md hover:!bg-accent/60 hover:!text-accent-foreground" />
            </Carousel>
          </div>

          {/* Column 2: Text Content */}
          <div className="text-left">
            <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-widest text-foreground">
              About Charissma
            </h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Our Expertise
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  We specialize in commercial and residential construction
                  projects, including new construction, renovations, and
                  interiors. Our team has extensive experience and knowledge in
                  the industry, allowing us to provide our clients with
                  top-notch services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Our Process
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  We follow a rigorous process for every project we undertake,
                  from initial consultation to final inspection. Our team works
                  closely with our clients to ensure that their vision is
                  realized and that the project is completed on time and within
                  budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
