import About from "@/components/home/About";
import DownloadApp from "@/components/home/DownloadApp";
import Feature from "@/components/home/Feature";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import HowWork from "@/components/home/HowWork";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Hero />
      <section id="about" >
        <About />
      </section>
      <section id="howWork" >
        <HowWork />
      </section>
      <section id="feature" >
        <Feature />
      </section>
      <DownloadApp />
      <Testimonials />
      <Footer />
    </div>
  );
}
