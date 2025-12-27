import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './SectionPreview.css'

interface BilletteriePreviewProps {
  onNavigate: () => void
}

const BilletteriePreview = ({ onNavigate }: BilletteriePreviewProps) => {
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
      className="section-preview billetterie-preview"
      style={{ opacity, y }}
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
            src="/assets/Autres photos/ON SERA TOUJOURS ENSEMBLE. 💙Malgré les conditions compliquées tout le monde a mis la main à la .jpg"
            alt="Billetterie FC Versailles"
            loading="lazy"
          />
        </motion.div>
        <div className="section-preview-text">
          <motion.h2
            className="section-preview-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            Billetterie
          </motion.h2>
          <motion.p
            className="section-preview-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Réservez. Vivez. Partagez.
          </motion.p>
          <motion.button
            className="section-preview-button"
            onClick={onNavigate}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Réserver
            <span className="button-arrow">→</span>
          </motion.button>
        </div>
      </div>
    </motion.section>
  )
}

export default BilletteriePreview






