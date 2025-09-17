
import NavBar from '@/Components/UI/NavBar.tsx'
import Footer from '@/Components/UI/Footer.tsx'
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
