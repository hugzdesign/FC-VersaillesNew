import { motion } from 'framer-motion'
import './Partenariats.css'

const Partenariats = () => {
  return (
    <div className="partenariats-page">
      <motion.section
        className="partenariats-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="partenariats-hero-content">
          <motion.h1
            className="partenariats-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Les Partenariats
          </motion.h1>
          <motion.p
            className="partenariats-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ensemble pour l'excellence
          </motion.p>
        </div>
      </motion.section>

      <section className="partenariats-content">
        <div className="container">
          <motion.div
            className="partenariats-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="partenariats-text">
              Les partenariats du FC Versailles sont au cœur de notre développement. 
              Ensemble, nous construisons un projet ambitieux et durable.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Partenariats





