import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
const name = "Moureno Surinato";
const nim = "535250078"

export default function Home() {
  return (
    <>
    <div className="nama-nim">
      <h1>{name}</h1>
      <p>{nim}</p>
    </div>
      <Header />
      <Hero />
      <main>
        <MenuSection />
        <About />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
