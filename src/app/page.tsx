import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { AboutUs } from "@/components/AboutUs";
import { ContactBanner } from "@/components/ContactBanner";

export default function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <FeaturedProjects />
        <ContactBanner /> {/* 2. Add the banner here */}
      </main>
      <Footer />
    </>
  );
}
