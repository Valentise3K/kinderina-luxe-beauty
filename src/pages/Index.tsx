import { lazy, Suspense, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { scrollToHashOnLoad } from "@/lib/scroll-to-section";

const Portfolio = lazy(() => import("@/components/Portfolio"));
const Services = lazy(() => import("@/components/Services"));
const Courses = lazy(() => import("@/components/Courses"));
const Reviews = lazy(() => import("@/components/Reviews"));

const FAQ = lazy(() => import("@/components/FAQ"));
const Locations = lazy(() => import("@/components/Locations"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  useEffect(() => {
    scrollToHashOnLoad();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Suspense fallback={null}>
          <Portfolio />
          <Services />
          <Courses />
          <Reviews />
          
          <FAQ />
          <Locations />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Index;
