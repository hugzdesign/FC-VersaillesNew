import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './EffectifStaffPreview.css'

interface EffectifStaffPreviewProps {
  onNavigateEffectif: () => void
  onNavigateStaff: () => void
}

const EffectifStaffPreview = ({ onNavigateEffectif, onNavigateStaff }: EffectifStaffPreviewProps) => {
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
      className="effectif-staff-preview"
      style={{ opacity, y }}
    >
      <div className="effectif-staff-container">
        <motion.div
          className="effectif-staff-item effectif-item"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2 }}
          onClick={onNavigateEffectif}
        >
          <div className="effectif-staff-image">
            <img
              src="/assets/page d'accueil/L'effectif/2Photo Effectif.png"
              alt="Effectif FC Versailles"
              loading="lazy"
            />
          </div>
          <div className="effectif-staff-text">
            <motion.img
              src="/assets/page d'accueil/L'effectif/2Texte Effectif.png"
              alt="L'Effectif"
              className="effectif-staff-title-image"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="effectif-staff-item staff-item"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, delay: 0.2 }}
          onClick={onNavigateStaff}
        >
          <div className="effectif-staff-image">
            <img
              src="/assets/page d'accueil/Staff/Photo Staff.png"
              alt="Staff FC Versailles"
              loading="lazy"
            />
          </div>
          <div className="effectif-staff-text">
            <motion.img
              src="/assets/page d'accueil/Staff/Texte Staff.png"
              alt="Le Staff"
              className="effectif-staff-title-image"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default EffectifStaffPreview




