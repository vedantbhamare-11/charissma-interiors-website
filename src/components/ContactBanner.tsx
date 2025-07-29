export function ContactBanner() {
  return (
    <section 
      id="contact" 
      // Use theme colors for a consistent look
      className="bg-muted py-20 sm:py-24"
    >
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-center text-center">
          {/* Decorative line using the border theme color */}
          <div className="w-24 flex-shrink-0 border-t-2 border-border" />
          <h2 className="mx-6 text-3xl font-bold uppercase tracking-wider text-foreground md:text-4xl">
            Contact Us
          </h2>
          <div className="w-24 flex-shrink-0 border-t-2 border-border" />
        </div>
      </div>
    </section>
  );
}
