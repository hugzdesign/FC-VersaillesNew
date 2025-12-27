import { motion } from 'framer-motion'
import './Club.css'

const Club = () => {
  return (
    <div className="club-page">
      <motion.section
        className="club-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/assets/Club/Photo Club.png"
          alt="Le Club"
          className="club-hero-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <div className="club-hero-content">
          <motion.img
            src="/assets/Club/Texte Club.png"
            alt="Le Club"
            className="club-title-image"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </motion.section>

      <section className="club-sections">
        <div className="club-sections-grid">
          {/* Histoire du club - gauche, pleine hauteur (2 lignes) */}
          <motion.div
            className="club-section-item club-section-histoire"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="club-section-image-container">
              <img
                src="/assets/Club/Photo Histoire du club.png"
                alt="Histoire du club"
                className="club-section-image"
                loading="lazy"
              />
              <div className="club-section-text-overlay">
                <img
                  src="/assets/Club/Texte Histoire du club.png"
                  alt="Histoire du club - Texte"
                  className="club-section-text"
                />
              </div>
            </div>
          </motion.div>

          {/* À propos de nous - droite, moitié haute */}
          <motion.div
            className="club-section-item club-section-apropos"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="club-section-image-container">
              <img
                src="/assets/Club/Photo à propos de nous.png"
                alt="À propos de nous"
                className="club-section-image"
                loading="lazy"
              />
              <div className="club-section-text-overlay">
                <img
                  src="/assets/Club/Texte À propos de nous.png"
                  alt="À propos de nous - Texte"
                  className="club-section-text"
                />
              </div>
            </div>
          </motion.div>

          {/* Pôle formation - droite, moitié basse */}
          <motion.div
            className="club-section-item club-section-formation"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="club-section-image-container">
              <img
                src="/assets/Club/Photo Pole Formation.png"
                alt="Pôle formation"
                className="club-section-image"
                loading="lazy"
              />
              <div className="club-section-text-overlay">
                <img
                  src="/assets/Club/Texte Pole Formation.png"
                  alt="Pôle formation - Texte"
                  className="club-section-text"
                />
              </div>
            </div>
          </motion.div>

          {/* Infrastructure - gauche, en dessous de Histoire */}
          <motion.div
            className="club-section-item club-section-infrastructure"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="club-section-image-container">
              <img
                src="/assets/Club/Photo Infrastructure.png"
                alt="Infrastructure"
                className="club-section-image"
                loading="lazy"
              />
              <div className="club-section-text-overlay">
                <img
                  src="/assets/Club/Texte Infrastructures.png"
                  alt="Infrastructure - Texte"
                  className="club-section-text"
                />
              </div>
            </div>
          </motion.div>

          {/* Organigramme - pleine largeur en bas */}
          <motion.div
            className="club-section-item club-section-organigramme"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="club-section-image-container">
              <img
                src="/assets/Club/Photo Organigramme.png"
                alt="Organigramme technique"
                className="club-section-image"
                loading="lazy"
              />
              <div className="club-section-text-overlay">
                <img
                  src="/assets/Club/Texte Organigramme technique.png"
                  alt="Organigramme technique - Texte"
                  className="club-section-text"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Club
