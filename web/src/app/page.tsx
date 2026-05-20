import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { ArticlesSection } from "@/components/ArticlesSection";
import { Contact, SiteFooter } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <ArticlesSection />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
