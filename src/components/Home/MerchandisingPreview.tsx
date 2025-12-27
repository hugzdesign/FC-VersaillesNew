import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './SectionPreview.css'

interface MerchandisingPreviewProps {
  onNavigate: () => void
}

const MerchandisingPreview = ({ onNavigate }: MerchandisingPreviewProps) => {
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
      className="section-preview merchandising-preview"
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
            src="/assets/page d'accueil/Le Shop/Photo Le Shop.png"
            alt="Le Shop FC Versailles"
            loading="lazy"
          />
        </motion.div>
        <div className="section-preview-text">
          <motion.img
            src="/assets/page d'accueil/Le Shop/Texte Le Shop.png"
            alt="Le Shop"
            className="section-preview-title-image shop-preview-title-image"
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

export default MerchandisingPreview


