import { motion } from 'framer-motion'
import { Joueur } from '../../data/joueurs'
import './JoueurCard.css'

interface JoueurCardProps {
  joueur: Joueur
  onClick: () => void
}

const JoueurCard = ({ joueur, onClick }: JoueurCardProps) => {
  return (
    <motion.div
      className="joueur-card"
      onClick={onClick}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <div className="joueur-card-image-container">
        <img
          src={joueur.photo}
          alt={`${joueur.prenom} ${joueur.nom}`}
          className="joueur-card-image"
          loading="lazy"
        />
        <div className="joueur-card-overlay">
          <div className="joueur-card-number">{joueur.numero}</div>
        </div>
        <div className="joueur-card-text-overlay">
          <div className="joueur-card-text-content">
            <h3 className="joueur-card-name-overlay">
              {joueur.prenom} {joueur.nom}
            </h3>
            <p className="joueur-card-poste-overlay">{joueur.poste}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default JoueurCard

