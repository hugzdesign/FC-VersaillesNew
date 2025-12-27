import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './HeroSection.css'

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play peut être bloqué, on gère silencieusement
      })
    }
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default HeroSection

