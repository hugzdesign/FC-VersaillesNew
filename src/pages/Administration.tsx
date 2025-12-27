import { motion } from 'framer-motion'
import './Administration.css'

const Administration = () => {
  return (
    <div className="administration-page">
      <motion.section
        className="administration-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="administration-hero-content">
          <motion.h1
            className="administration-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Administration
          </motion.h1>
          <motion.p
            className="administration-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            La structure qui fait vivre le club
          </motion.p>
        </div>
      </motion.section>

      <section className="administration-content">
        <div className="container">
          <motion.div
            className="administration-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="administration-text-content">
              <h2 className="administration-section-title">Organisation</h2>
              <p className="administration-section-text">
                L'administration du FC Versailles assure le bon fonctionnement 
                quotidien du club. De la gestion financière à la communication, 
                en passant par le développement commercial et les relations 
                institutionnelles, chaque service contribue à la construction 
                d'un club professionnel et structuré.
              </p>
              <p className="administration-section-text">
                L'équipe administrative travaille en étroite collaboration avec 
                le staff sportif pour créer les conditions optimales de 
                développement et de performance.
              </p>
            </div>
            <div className="administration-image-content">
              <img
                src="/assets/Autres photos/C'EST LA 𝐅𝐇𝐎𝐋𝐘𝐘𝐘𝐘 ! ❤️‍🔥Le FC Versailles et HOLY, la marque berlinoise de boissons natu.jpg"
                alt="Administration FC Versailles"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            className="administration-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="administration-card">
              <h3 className="administration-card-title">Direction Générale</h3>
              <p className="administration-card-text">
                Pilotage stratégique et opérationnel du club, vision à long terme 
                et développement du projet sportif.
              </p>
            </div>
            <div className="administration-card">
              <h3 className="administration-card-title">Communication</h3>
              <p className="administration-card-text">
                Relations presse, réseaux sociaux, contenu éditorial et image 
                de marque du FC Versailles.
              </p>
            </div>
            <div className="administration-card">
              <h3 className="administration-card-title">Développement</h3>
              <p className="administration-card-text">
                Partenariats, sponsoring, développement commercial et relations 
                avec les entreprises.
              </p>
            </div>
            <div className="administration-card">
              <h3 className="administration-card-title">Gestion</h3>
              <p className="administration-card-text">
                Administration, finances, ressources humaines et gestion 
                opérationnelle du club.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Administration






