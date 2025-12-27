import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { joueurs } from '../data/joueurs'
import './Joueur.css'

const Joueur = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const joueur = joueurs.find(j => j.id === id)

  if (!joueur) {
    return (
      <div className="joueur-page">
        <div className="container">
          <p>Joueur non trouvé</p>
          <button onClick={() => navigate('/effectif')}>Retour à l'effectif</button>
        </div>
      </div>
    )
  }

  return (
    <div className="joueur-page">
      <motion.section
        className="joueur-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="joueur-hero-background">
          <img src={joueur.photo} alt={`${joueur.prenom} ${joueur.nom}`} />
          <div className="joueur-hero-overlay" />
        </div>
        
        <div className="container">
          <motion.button
            className="joueur-back-button"
            onClick={() => navigate('/effectif')}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ x: -5 }}
          >
            ← Retour
          </motion.button>

          <div className="joueur-hero-content">
            <motion.div
              className="joueur-hero-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img src={joueur.photo} alt={`${joueur.prenom} ${joueur.nom}`} />
            </motion.div>

            <motion.div
              className="joueur-hero-info"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="joueur-number-large">{joueur.numero}</div>
              <h1 className="joueur-name-large">
                {joueur.prenom} <span className="joueur-name-last">{joueur.nom}</span>
              </h1>
              <p className="joueur-poste-large">{joueur.poste}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="joueur-details">
        <div className="container">
          <div className="joueur-details-grid">
            <motion.div
              className="joueur-details-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="joueur-details-title">Informations</h2>
              <div className="joueur-details-list">
                {joueur.age && (
                  <div className="joueur-detail-item">
                    <span className="detail-label">Âge</span>
                    <span className="detail-value">{joueur.age} ans</span>
                  </div>
                )}
                {joueur.nationalite && (
                  <div className="joueur-detail-item">
                    <span className="detail-label">Nationalité</span>
                    <span className="detail-value">{joueur.nationalite}</span>
                  </div>
                )}
                {joueur.arrivee && (
                  <div className="joueur-detail-item">
                    <span className="detail-label">Arrivée</span>
                    <span className="detail-value">{joueur.arrivee}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {joueur.parcours && joueur.parcours.length > 0 && (
              <motion.div
                className="joueur-details-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h2 className="joueur-details-title">Parcours</h2>
                <div className="joueur-parcours">
                  {joueur.parcours.map((club, index) => (
                    <div key={index} className="parcours-item">
                      <div className="parcours-dot" />
                      <span>{club}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {joueur.statistiques && (
              <motion.div
                className="joueur-details-card joueur-stats-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <h2 className="joueur-details-title">Statistiques</h2>
                <div className="joueur-stats-grid">
                  {joueur.statistiques.matchs !== undefined && (
                    <div className="stat-item">
                      <div className="stat-value">{joueur.statistiques.matchs}</div>
                      <div className="stat-label">Matchs</div>
                    </div>
                  )}
                  {joueur.statistiques.buts !== undefined && (
                    <div className="stat-item">
                      <div className="stat-value">{joueur.statistiques.buts}</div>
                      <div className="stat-label">Buts</div>
                    </div>
                  )}
                  {joueur.statistiques.passes !== undefined && (
                    <div className="stat-item">
                      <div className="stat-value">{joueur.statistiques.passes}</div>
                      <div className="stat-label">Passes</div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Joueur






