import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import WhoWeAre from '@/components/WhoWeAre'
import Team from '@/components/Team'
import FAQ from '@/components/FAQ'
import Membership from '@/components/Membership'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <WhoWeAre />
      <Team />
      <FAQ />
      <Membership />
      <Footer />
    </main>
  )
} 