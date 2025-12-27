import { motion } from 'framer-motion'
import './Calendrier.css'

const Calendrier = () => {
  const matchs = [
    { date: '15 Jan', adversaire: 'Troyes', lieu: 'Domicile', heure: '20:00' },
    { date: '22 Jan', adversaire: 'Reims', lieu: 'Extérieur', heure: '18:00' },
    { date: '29 Jan', adversaire: 'Auxerre', lieu: 'Domicile', heure: '20:00' },
  ]

  return (
    <div className="calendrier-page">
      <motion.section
        className="calendrier-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="calendrier-hero-content">
          <motion.h1
            className="calendrier-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Calendrier
          </motion.h1>
          <motion.p
            className="calendrier-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Saison 2024-2025
          </motion.p>
        </div>
      </motion.section>

      <section className="calendrier-content">
        <div className="container">
          <motion.div
            className="calendrier-list"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {matchs.map((match, index) => (
              <motion.div
                key={index}
                className="calendrier-match"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="calendrier-date">{match.date}</div>
                <div className="calendrier-info">
                  <div className="calendrier-adversaire">FC Versailles vs {match.adversaire}</div>
                  <div className="calendrier-details">
                    <span className="calendrier-lieu">{match.lieu}</span>
                    <span className="calendrier-heure">{match.heure}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Calendrier






