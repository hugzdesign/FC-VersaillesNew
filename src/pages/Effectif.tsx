import { motion } from 'framer-motion'
import FeaturedPlayers from '../components/Effectif/FeaturedPlayers'
import './Effectif.css'

const Effectif = () => {
  return (
    <div className="effectif-page">
      <motion.section
        className="effectif-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/assets/Effectif/2texte effectif couv.png"
          alt="L'Effectif"
          className="effectif-title-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.section>

      <FeaturedPlayers />
    </div>
  )
}

export default Effectif

