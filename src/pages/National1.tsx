import { useState } from 'react'
import { motion } from 'framer-motion'
import PlayerModal from '../components/Effectif/PlayerModal'
import ResultatsModal from '../components/National1/ResultatsModal'
import './National1.css'

const National1 = () => {
  const [isCalendrierModalOpen, setIsCalendrierModalOpen] = useState(false)
  const [isClassementModalOpen, setIsClassementModalOpen] = useState(false)
  const [isResultatsModalOpen, setIsResultatsModalOpen] = useState(false)

  const handleCalendrierClick = () => {
    setIsCalendrierModalOpen(true)
  }

  const handleCloseCalendrierModal = () => {
    setIsCalendrierModalOpen(false)
  }

  const handleClassementClick = () => {
    setIsClassementModalOpen(true)
  }

  const handleCloseClassementModal = () => {
    setIsClassementModalOpen(false)
  }

  const handleResultatsClick = () => {
    setIsResultatsModalOpen(true)
  }

  const handleCloseResultatsModal = () => {
    setIsResultatsModalOpen(false)
  }

  return (
    <div className="national1-page">
      <motion.section
        className="national1-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/assets/National 1/Photo National 1.png"
          alt="National 1"
          className="national1-hero-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <div className="national1-hero-content">
          <motion.img
            src="/assets/National 1/Texte National 1.png"
            alt="National 1"
            className="national1-title-image"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </motion.section>

      <section className="national1-sections">
        <div className="national1-sections-grid">
          {/* Classement - gauche, pleine hauteur (2 lignes) */}
          <motion.div
            className="national1-section-item national1-section-classement"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={handleClassementClick}
            style={{ cursor: 'pointer' }}
          >
            <div className="national1-section-image-container">
              <img
                src="/assets/National 1/Photo Classement.png"
                alt="Classement"
                className="national1-section-image"
                loading="lazy"
              />
              <div className="national1-section-text-overlay">
                <img
                  src="/assets/National 1/Texte Classement.png"
                  alt="Classement - Texte"
                  className="national1-section-text"
                />
              </div>
            </div>
          </motion.div>

          {/* Résultats - droite, moitié haute */}
          <motion.div
            className="national1-section-item national1-section-resultats"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={handleResultatsClick}
            style={{ cursor: 'pointer' }}
          >
            <div className="national1-section-image-container">
              <img
                src="/assets/National 1/Photo Résultats.png"
                alt="Résultats"
                className="national1-section-image"
                loading="lazy"
              />
              <div className="national1-section-text-overlay">
                <img
                  src="/assets/National 1/Texte Résultats.png"
                  alt="Résultats - Texte"
                  className="national1-section-text"
                />
              </div>
            </div>
          </motion.div>

          {/* Calendrier - droite, moitié basse */}
          <motion.div
            className="national1-section-item national1-section-calendrier"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={handleCalendrierClick}
            style={{ cursor: 'pointer' }}
          >
            <div className="national1-section-image-container">
              <img
                src="/assets/National 1/Photo Calendrier.png"
                alt="Calendrier"
                className="national1-section-image"
                loading="lazy"
              />
              <div className="national1-section-text-overlay">
                <img
                  src="/assets/National 1/Texte Calendrier.png"
                  alt="Calendrier - Texte"
                  className="national1-section-text"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PlayerModal
        isOpen={isCalendrierModalOpen}
        onClose={handleCloseCalendrierModal}
        popupImage="/assets/National 1/Calendrier National 1.jpg"
        playerName="Calendrier National 1"
      />

      <PlayerModal
        isOpen={isClassementModalOpen}
        onClose={handleCloseClassementModal}
        popupImage="/assets/National 1/Classement National 1.png"
        playerName="Classement National 1"
      />

      <ResultatsModal
        isOpen={isResultatsModalOpen}
        onClose={handleCloseResultatsModal}
        images={[
          '/assets/National 1/Résultats vs Le Puy Foot Game 14.png',
          '/assets/National 1/Résultats vs Orléans Game 15.png'
        ]}
        title="Résultats"
      />
    </div>
  )
}

export default National1





