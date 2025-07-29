import Image from 'next/image';

export function AboutUs() {
  return (
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-16 lg:grid-cols-2">
          
          {/* Column 1: Illustrative Image */}
          <div className="h-96 w-full overflow-hidden rounded-xl">
            <Image
              src="/about-image.jpg" // NOTE: Add a relevant image to your /public folder
              alt="A minimalist and elegant interior design sketch"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Column 2: Text Content */}
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Skyline
            </h2>
            
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Our Expertise
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  We specialize in commercial and residential construction projects, including new construction, renovations, and interiors. Our team has extensive experience and knowledge in the industry, allowing us to provide our clients with top-notch services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Our Process
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  We follow a rigorous process for every project we undertake, from initial consultation to final inspection. Our team works closely with our clients to ensure that their vision is realized and that the project is completed on time and within budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
