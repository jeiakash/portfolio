import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Resume from "@/components/resume"
import Skills from "@/components/skills"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
