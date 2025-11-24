import React from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WorksSection from "./components/WorksSection";
import ContactSection from "./components/ContactSection";
import VisitSection from "./components/VisitSection";
import Footer from "./components/Footer";
import ScrollButtons from "./components/ScrollButtons";
import TestimonialsSection from "./components/TestimonialsSection";
import FeedbackSection from "./components/FeedbackSection";

export default function App() {
  // ensure this matches topBarHeight + headerHeight from Header/TopBar
  const topOffset = 152; // px (40 + 112)

  return (
    <div style={{ paddingTop: topOffset }}>
      <TopBar />
      <Header />

      {/* The rest of the page */}
       <section id="home">
        <HeroSection />
      </section>

       <section id="about">
         <AboutSection />
      </section>

       <section id="services">
          <ServicesSection />
      </section>
     
      <section id="works">
           <WorksSection />
      </section>
     
 
      
      <section id="contact">
            <ContactSection />
      </section>

     <section id="test">
             <TestimonialsSection/>
      </section>

       <section id="feedback">
             <FeedbackSection/>
      </section>

     <section id="location">
             <VisitSection />
      </section>
      
      
      
      <Footer/>
      <ScrollButtons />
      {/* ... */}
    </div>
  );
}
