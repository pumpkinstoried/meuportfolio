import Navbar from '@/components/NavBar'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About' 
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-20"> {/* pt-20 para compensar o header fixo */}
        <Hero />
        <div id="tech">
          <TechStack />
        </div>
        <div id="projetos">
          <Portfolio />
        </div>
        <div id="sobre">
          <About />
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  )
}