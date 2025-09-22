
import NavBar from '@/components/ui/NavBar.tsx'
import Footer from '@/components/ui/Footer.tsx'
import { HeroSection } from "./HeroSection"
import { CTASection } from "./CTASection"



const Home = () => {
  return (
    <main className="w-full h-screen">
      <NavBar />
      <HeroSection />
      <CTASection />
      <Footer />

    </main>
  )
}

export default Home
