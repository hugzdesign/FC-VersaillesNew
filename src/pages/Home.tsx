import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSection from '../components/Home/HeroSection'
import ClubPreview from '../components/Home/ClubPreview'
import EffectifStaffPreview from '../components/Home/EffectifStaffPreview'
import AcademiePreview from '../components/Home/AcademiePreview'
import MerchandisingPreview from '../components/Home/MerchandisingPreview'
import PartenariatsPreview from '../components/Home/PartenariatsPreview'
import BilletterieNational1Preview from '../components/Home/BilletterieNational1Preview'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    document.body.style.overflow = 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div ref={containerRef} className="home-page">
      <HeroSection />
      <ClubPreview onNavigate={() => navigate('/club')} />
      <EffectifStaffPreview 
        onNavigateEffectif={() => navigate('/effectif')}
        onNavigateStaff={() => navigate('/staff')}
      />
      <BilletterieNational1Preview 
        onNavigateBilletterie={() => navigate('/billetterie')}
        onNavigateNational1={() => navigate('/national1')}
      />
      <MerchandisingPreview onNavigate={() => navigate('/merchandising')} />
      <PartenariatsPreview onNavigate={() => navigate('/partenariats')} />
      <AcademiePreview onNavigate={() => navigate('/academie')} />
    </div>
  )
}

export default Home

