import About from "@/components/About";
import Hero from "../components/Hero";
import Services from "../components/Services"
import ContactUs from "../components/ContactUs";

// app/page.js
export default function Home() {
  return (
    
      <div>
      <Hero />
      <About/>
      <Services/>
      <ContactUs />
      </div>
  
  );
}