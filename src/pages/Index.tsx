import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";

const Portfolio = lazy(() => import("@/components/Portfolio").then(m => ({ default: m.Portfolio })));
const Services = lazy(() => import("@/components/Services").then(m => ({ default: m.Services })));
const Courses = lazy(() => import("@/components/Courses").then(m => ({ default: m.Courses })));
const Reviews = lazy(() => import("@/components/Reviews").then(m => ({ default: m.Reviews })));

const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

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
