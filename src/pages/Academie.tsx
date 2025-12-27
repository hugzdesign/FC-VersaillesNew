import { motion } from 'framer-motion'
import './Academie.css'

const Academie = () => {
  const images = [
    {
      id: 1,
      src: "/assets/Autres photos/On en veut encore. Au boulot. 😤6ème victoire en 8 matchs pour ce début de saison en @championna.jpg",
      title: "Notre Mission",
      subtitle: "Former les jeunes talents, en alliant excellence sportive et développement humain."
    },
    {
      id: 2,
      src: "/assets/Autres photos/À la maison. Ensemble. 💙🎞️ @thomasjobardphotos #UneSeuleÉquipe.jpg",
      title: "Formation Technique",
      subtitle: "Développement des compétences selon les meilleurs standards du football moderne."
    },
    {
      id: 3,
      src: "/assets/Autres photos/ON SERA TOUJOURS ENSEMBLE. 💙Malgré les conditions compliquées tout le monde a mis la main à la .jpg",
      title: "Suivi Personnalisé",
      subtitle: "Accompagnement adapté à chaque profil et objectifs de progression."
    },
    {
      id: 4,
      src: "/assets/Autres photos/The 𝐢𝐝𝐞𝐧𝐭𝐢𝐭𝐲 of FC Versailles. ⚜️'L'Élégant'This jersey reflects the heritage of FC Vers.jpg",
      title: "Formation Humaine",
      subtitle: "Développement des valeurs, de la discipline et de la maturité."
    }
  ]

  return (
    <div className="academie-page">
      <motion.section
        className="academie-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="academie-hero-content">
          <motion.h1
            className="academie-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            L'Académie
          </motion.h1>
          <motion.p
            className="academie-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Former les talents de demain
          </motion.p>
        </div>
      </motion.section>

      <section className="academie-content">
        <div className="container">
          <motion.div
            className="academie-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {images.map((image, index) => {
              const isLarge = index % 4 === 0 || index % 4 === 2
              const isWide = index % 4 === 3
              
              return (
                <motion.div
                  key={image.id}
                  className={`academie-card ${isLarge ? 'academie-card-large' : isWide ? 'academie-card-wide' : ''}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <div className="academie-card-image">
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                    />
                    <div className="academie-card-overlay">
                      <div className="academie-card-content">
                        <h2 className="academie-card-title">{image.title}</h2>
                        <p className="academie-card-subtitle">{image.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Academie
