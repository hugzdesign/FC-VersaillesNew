import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Billetterie.css'

const Billetterie = () => {
  const navigate = useNavigate()

  const handleReserveClick = () => {
    // Rediriger vers une page de réservation ou ouvrir un lien externe
    // Exemple: navigate('/reservation') ou window.open('https://...', '_blank')
    window.open('https://www.example.com/reservation', '_blank')
  }
  return (
    <div className="billetterie-page">
      <motion.section
        className="billetterie-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/assets/Billetterie/Photo billetterrie.png"
          alt="Billetterie"
          className="billetterie-hero-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <div className="billetterie-hero-content">
          <motion.img
            src="/assets/Billetterie/Texte Billetterie.png"
            alt="Billetterie"
            className="billetterie-title-image"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </motion.section>

      <section className="billetterie-content">
        <div className="billetterie-grid">
          {/* Next Match - côté gauche, pleine hauteur */}
          <motion.div
            className="billetterie-item billetterie-item-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="billetterie-image-container">
              <img
                src="/assets/Billetterie/Next match.png"
                alt="Next Match"
                className="billetterie-image"
                loading="lazy"
              />
              <div className="billetterie-overlay">
                <motion.button
                  className="billetterie-place-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReserveClick}
                >
                  <img
                    src="/assets/Billetterie/Bouton je prends ma place.png"
                    alt="Je prends ma place"
                    className="billetterie-place-button-image"
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Colonne droite */}
          <div className="billetterie-right-column">
            {/* Next Match - côté droit, en haut */}
            <motion.div
              className="billetterie-item billetterie-item-right-top"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="billetterie-image-container">
                <img
                  src="/assets/Billetterie/2X Next Match.png"
                  alt="Next Match"
                  className="billetterie-image"
                  loading="lazy"
                />
                <div className="billetterie-overlay">
                  <motion.button
                    className="billetterie-place-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleReserveClick}
                  >
                    <img
                      src="/assets/Billetterie/Bouton je prends ma place 3.png"
                      alt="Je prends ma place"
                      className="billetterie-place-button-image"
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Pack 2 matchs - côté droit, en bas */}
            <motion.div
              className="billetterie-item billetterie-item-right-bottom"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="billetterie-image-container">
                <img
                  src="/assets/Billetterie/Pack 2 matchs.png"
                  alt="Pack 2 matchs"
                  className="billetterie-image"
                  loading="lazy"
                />
                <div className="billetterie-overlay">
                  <motion.button
                    className="billetterie-place-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleReserveClick}
                  >
                    <img
                      src="/assets/Billetterie/Bouton je prends ma place 2.png"
                      alt="Je prends ma place"
                      className="billetterie-place-button-image"
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Billetterie
