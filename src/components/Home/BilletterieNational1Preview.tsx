import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './BilletterieNational1Preview.css'

interface BilletterieNational1PreviewProps {
  onNavigateBilletterie: () => void
  onNavigateNational1: () => void
}

const BilletterieNational1Preview = ({ onNavigateBilletterie, onNavigateNational1 }: BilletterieNational1PreviewProps) => {
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
      className="billetterie-national1-preview"
      style={{ opacity, y }}
    >
      <div className="billetterie-national1-container">
        <motion.div
          className="billetterie-national1-item national1-item"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2 }}
          onClick={onNavigateNational1}
        >
          <div className="billetterie-national1-image">
            <img
              src="/assets/page d'accueil/National 1/Photo National 1.png"
              alt="National 1 FC Versailles"
              loading="lazy"
            />
          </div>
          <div className="billetterie-national1-text">
            <motion.img
              src="/assets/page d'accueil/National 1/Texte National1.png"
              alt="National 1"
              className="billetterie-national1-title-image"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="billetterie-national1-item billetterie-item"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, delay: 0.2 }}
          onClick={onNavigateBilletterie}
        >
          <div className="billetterie-national1-image">
            <img
              src="/assets/page d'accueil/Billetterie/Photo Billetterie.png"
              alt="Billetterie FC Versailles"
              loading="lazy"
            />
          </div>
          <div className="billetterie-national1-text">
            <motion.img
              src="/assets/page d'accueil/Billetterie/Texte Billetterie.png"
              alt="Billetterie"
              className="billetterie-national1-title-image"
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

export default BilletterieNational1Preview

