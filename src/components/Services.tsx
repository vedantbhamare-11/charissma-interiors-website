import { Building, Gem, Armchair } from 'lucide-react';

const serviceList = [
  {
    icon: <Building className="h-10 w-10 text-foreground/80" />,
    title: 'Construction',
    description: 'State-of-the-art technology at every stage of development.',
  },
  {
    icon: <Gem className="h-10 w-10 text-foreground/80" />,
    title: 'Architecture',
    description: 'Intentional and timeless design choices at every level.',
  },
  {
    icon: <Armchair className="h-10 w-10 text-foreground/80" />,
    title: 'Interior Design',
    description: 'Bespoke creations and personalized spaces tailored to your tastes.',
  },
];

export function Services() {
  return (
    <section id="designs" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A tradition of trust and transparency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {serviceList.map((service) => (
            <div 
              key={service.title} 
              // Each service is now a "card" for better visual separation
              className="flex flex-col items-center rounded-xl bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              {service.icon}
              <h3 className="mt-6 text-base font-semibold uppercase tracking-wider text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 max-w-xs text-base text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
