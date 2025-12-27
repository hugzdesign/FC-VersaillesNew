import { motion } from 'framer-motion'
import './Staff.css'

const Staff = () => {
  return (
    <div className="staff-page">
      <motion.section
        className="staff-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/assets/Le Staff/Photo Staff.png"
          alt="Le Staff"
          className="staff-hero-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <div className="staff-hero-content">
          <motion.img
            src="/assets/Le Staff/Texte Staff.png"
            alt="Le Staff"
            className="staff-title-image"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </motion.section>

      <section className="staff-featured-section">
        <div className="staff-featured-container">
          <motion.div
            className="staff-featured-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="staff-featured-image-container">
              <img
                src="/assets/Le Staff/Photo Jordan Gonzalez.png"
                alt="Jordan Gonzalez"
                className="staff-featured-photo"
                loading="lazy"
              />
              <div className="staff-featured-text-overlay">
                <img
                  src="/assets/Le Staff/Texte Jordan Gonzalez.png"
                  alt="Jordan Gonzalez - Texte"
                  className="staff-featured-text"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="staff-featured-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="staff-featured-image-container">
              <img
                src="/assets/Le Staff/Photo Marcelo Collazos.png"
                alt="Marcelo Collazos"
                className="staff-featured-photo"
                loading="lazy"
              />
              <div className="staff-featured-text-overlay">
                <img
                  src="/assets/Le Staff/Texte Marcelo Collazos.png"
                  alt="Marcelo Collazos - Texte"
                  className="staff-featured-text"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="staff-featured-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="staff-featured-image-container">
              <img
                src="/assets/Le Staff/Photo Randy Fondelot.png"
                alt="Randy Fondelot"
                className="staff-featured-photo"
                loading="lazy"
              />
              <div className="staff-featured-text-overlay">
                <img
                  src="/assets/Le Staff/Texte Randy Fondelot.png"
                  alt="Randy Fondelot - Texte"
                  className="staff-featured-text"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="staff-featured-section">
        <div className="staff-featured-container">
          <motion.div
            className="staff-featured-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="staff-featured-image-container">
              <img
                src="/assets/Le Staff/Photo Charles Itandje.png"
                alt="Charles Itandje"
                className="staff-featured-photo"
                loading="lazy"
              />
              <div className="staff-featured-text-overlay">
                <img
                  src="/assets/Le Staff/Texte Charles Itandje.png"
                  alt="Charles Itandje - Texte"
                  className="staff-featured-text"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="staff-featured-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="staff-featured-image-container">
              <img
                src="/assets/Le Staff/Photo Paul Margotteau.png"
                alt="Paul Margotteau"
                className="staff-featured-photo"
                loading="lazy"
              />
              <div className="staff-featured-text-overlay">
                <img
                  src="/assets/Le Staff/Texte Paul Margotteau.png"
                  alt="Paul Margotteau - Texte"
                  className="staff-featured-text"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="staff-featured-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="staff-featured-image-container">
              <img
                src="/assets/Le Staff/Photo Nicolas Ficheux.png"
                alt="Nicolas Ficheux"
                className="staff-featured-photo"
                loading="lazy"
              />
              <div className="staff-featured-text-overlay">
                <img
                  src="/assets/Le Staff/Texte Nicolas Ficheux.png"
                  alt="Nicolas Ficheux - Texte"
                  className="staff-featured-text"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="staff-featured-section">
        <div className="staff-featured-container">
          <motion.div
            className="staff-featured-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="staff-featured-image-container">
              <img
                src="/assets/Le Staff/Photo Mathieu Feigean.png"
                alt="Mathieu Feigean"
                className="staff-featured-photo"
                loading="lazy"
              />
              <div className="staff-featured-text-overlay">
                <img
                  src="/assets/Le Staff/Texte Mathieu Feigean.png"
                  alt="Mathieu Feigean - Texte"
                  className="staff-featured-text"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="staff-featured-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="staff-featured-image-container">
              <img
                src="/assets/Le Staff/Photo Médéric Jumeau.png"
                alt="Médéric Jumeau"
                className="staff-featured-photo"
                loading="lazy"
              />
              <div className="staff-featured-text-overlay">
                <img
                  src="/assets/Le Staff/Texte Médéric Jumeau.png"
                  alt="Médéric Jumeau - Texte"
                  className="staff-featured-text"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="staff-featured-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="staff-featured-image-container">
              <img
                src="/assets/Le Staff/Photo Lucas Pesqueux.png"
                alt="Lucas Pesqueux"
                className="staff-featured-photo"
                loading="lazy"
              />
              <div className="staff-featured-text-overlay">
                <img
                  src="/assets/Le Staff/Texte Lucas Pesqueux.png"
                  alt="Lucas Pesqueux - Texte"
                  className="staff-featured-text"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="staff-featured-section">
        <div className="staff-featured-container">
          <motion.div
            className="staff-featured-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="staff-featured-image-container">
              <img
                src="/assets/Le Staff/Photo Marc Mohamed.png"
                alt="Marc Mohamed"
                className="staff-featured-photo"
                loading="lazy"
              />
              <div className="staff-featured-text-overlay">
                <img
                  src="/assets/Le Staff/Texte Marc Mohamed.png"
                  alt="Marc Mohamed - Texte"
                  className="staff-featured-text"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="staff-featured-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <div className="staff-featured-image-container">
              <img
                src="/assets/Le Staff/Photo Aymeric Houdart.png"
                alt="Aymeric Houdart"
                className="staff-featured-photo"
                loading="lazy"
              />
              <div className="staff-featured-text-overlay">
                <img
                  src="/assets/Le Staff/Texte Aymeric Houdart.png"
                  alt="Aymeric Houdart - Texte"
                  className="staff-featured-text"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="staff-featured-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="staff-featured-image-container">
              <img
                src="/assets/Le Staff/Photo Nordine Aiteur.png"
                alt="Nordine Aiteur"
                className="staff-featured-photo"
                loading="lazy"
              />
              <div className="staff-featured-text-overlay">
                <img
                  src="/assets/Le Staff/Texte Nordine Aiteur.png"
                  alt="Nordine Aiteur - Texte"
                  className="staff-featured-text"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Staff
