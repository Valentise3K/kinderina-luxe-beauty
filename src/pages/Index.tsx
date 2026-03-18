import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";

const Portfolio = lazy(() => import("@/components/Portfolio"));
const Services = lazy(() => import("@/components/Services"));
const Courses = lazy(() => import("@/components/Courses"));
const Reviews = lazy(() => import("@/components/Reviews"));

const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
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
