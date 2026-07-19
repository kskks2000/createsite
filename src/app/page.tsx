import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Services from "@/components/Services";
import Specialist from "@/components/Specialist";
import Statement from "@/components/Statement";

export default function Home() {
  return (
    <>
      <a
        href="#top-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-on-ink"
      >
        본문으로 건너뛰기
      </a>
      <Header />
      <main id="top-content" className="flex-1">
        <Hero />
        <About />
        <Services />
        <Statement />
        <Specialist />
        <Faq />
        <Location />
      </main>
      <Footer />
    </>
  );
}
