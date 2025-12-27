import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './SectionPreview.css'

interface PartenariatsPreviewProps {
  onNavigate: () => void
}

const PartenariatsPreview = ({ onNavigate }: PartenariatsPreviewProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50])

  return (
    <motion.section
      ref={sectionRef}
      className="section-preview partenariats-preview"
      style={{ opacity, y }}
      onClick={onNavigate}
    >
      <div className="section-preview-content">
        <motion.div
          className="section-preview-image"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="/assets/page d'accueil/Les Partenariats/Photo Les Partenariats.png"
            alt="Les Partenariats FC Versailles"
            loading="lazy"
          />
        </motion.div>
        <div className="section-preview-text">
          <motion.img
            src="/assets/page d'accueil/Les Partenariats/Texte Les Partenariats.png"
            alt="Les Partenariats"
            className="section-preview-title-image partenariats-preview-title-image"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </motion.section>
  )
}

export default PartenariatsPreview




