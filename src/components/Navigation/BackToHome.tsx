import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './BackToHome.css'

const BackToHome = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Ne pas afficher sur la page d'accueil
  if (location.pathname === '/') {
    return null
  }

  return (
    <motion.button
      className="back-to-home"
      onClick={() => navigate('/')}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img 
        src="/assets/bouton accueil.png" 
        alt="Retour à l'accueil" 
        className="back-to-home-image"
      />
    </motion.button>
  )
}

export default BackToHome





