import { motion } from 'framer-motion'
import './Classement.css'

const Classement = () => {
  const classement = [
    { position: 1, equipe: 'FC Versailles', points: 45, matchs: 18, victoires: 14, nuls: 3, defaites: 1 },
    { position: 2, equipe: 'Équipe B', points: 42, matchs: 18, victoires: 13, nuls: 3, defaites: 2 },
    { position: 3, equipe: 'Équipe C', points: 38, matchs: 18, victoires: 11, nuls: 5, defaites: 2 },
  ]

  return (
    <div className="classement-page">
      <motion.section
        className="classement-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="classement-hero-content">
          <motion.h1
            className="classement-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Classement
          </motion.h1>
          <motion.p
            className="classement-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Championnat National 1
          </motion.p>
        </div>
      </motion.section>

      <section className="classement-content">
        <div className="container">
          <motion.div
            className="classement-table"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="classement-header">
              <div className="classement-header-cell">Pos</div>
              <div className="classement-header-cell">Équipe</div>
              <div className="classement-header-cell">Pts</div>
              <div className="classement-header-cell">J</div>
              <div className="classement-header-cell">V</div>
              <div className="classement-header-cell">N</div>
              <div className="classement-header-cell">D</div>
            </div>
            {classement.map((equipe, index) => (
              <motion.div
                key={equipe.position}
                className={`classement-row ${equipe.position === 1 ? 'classement-row-first' : ''}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="classement-cell">{equipe.position}</div>
                <div className="classement-cell classement-cell-equipe">{equipe.equipe}</div>
                <div className="classement-cell classement-cell-points">{equipe.points}</div>
                <div className="classement-cell">{equipe.matchs}</div>
                <div className="classement-cell">{equipe.victoires}</div>
                <div className="classement-cell">{equipe.nuls}</div>
                <div className="classement-cell">{equipe.defaites}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Classement






