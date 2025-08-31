import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import OurSolution from '@/components/OurSolution';
import FindJobs from '@/components/FindJobs';
import HireWorkers from '@/components/HireWorkers';
import RentEquipment from '@/components/RentEquipment';
import GrowYourBusiness from '@/components/GrowYourBusiness';
import Team from '@/components/Team';
import FAQ from '@/components/FAQ';
import Membership from '@/components/Membership';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Header />
      <Hero />
      <Mission />
      <OurSolution />
      <FindJobs />
      <HireWorkers />
      <RentEquipment />
      <GrowYourBusiness />
      <Team />
      <FAQ />
      <Membership />
      <Footer />
    </main>
  );
}
