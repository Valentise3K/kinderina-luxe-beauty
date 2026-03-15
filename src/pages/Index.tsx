import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
// import { BeforeAfter } from "@/components/BeforeAfter";
import { Services } from "@/components/Services";
import { Courses } from "@/components/Courses";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
// import { MobileBookingCTA } from "@/components/MobileBookingCTA";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        {/* <BeforeAfter /> */}
        <Services />
        <Courses />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      {/* <MobileBookingCTA /> */}
    </>
  );
};

export default Index;
