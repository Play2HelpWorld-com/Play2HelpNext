import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import GameSection from "@/components/Games/gameSection";

export const metadata: Metadata = {
  title: "Play2Help | Play for Free Donation",
  description: "This is built by Moyasi",
  // other metadata
};

export default function Home() {
  return (
    <main className="mx-auto max-w-[95rem] px-4 md:px-8 xl:px-1">
      <Hero />
      <Feature />
      <About />
      <GameSection />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      {/* <Brands /> */}
      {/* <Pricing /> */}
      <Contact />
      <Blog />
    </main>
  );
}
