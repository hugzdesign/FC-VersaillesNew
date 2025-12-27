import { useState } from 'react'
import { motion } from 'framer-motion'
import PlayerModal from './PlayerModal'
import './FeaturedPlayers.css'

interface FeaturedPlayer {
  photo: string
  texte: string
  name: string
  id: string
  popupImage?: string
}

const featuredPlayers: FeaturedPlayer[] = [
  {
    photo: '/assets/Effectif/Photo Hugo Barbet.png',
    texte: '/assets/Effectif/Texte Hugo Barbet.png',
    name: 'Hugo Barbet',
    id: 'hugo-barbet'
  },
  {
    photo: '/assets/Effectif/Photo Nathan Yavorsky.png',
    texte: '/assets/Effectif/Texte Nathan Yavorsky.png',
    name: 'Nathan Yavorsky',
    id: 'nathan-yavorsky'
  },
  {
    photo: '/assets/Effectif/Photo Sebastien Rénot.png',
    texte: '/assets/Effectif/Texte Sebastien Rénot.png',
    name: 'Sébastien Renot',
    id: 'sebastien-renot'
  },
  {
    photo: '/assets/Effectif/Photo Jeremi Santini.png',
    texte: '/assets/Effectif/Texte Jeremi Santini.png',
    name: 'Jérémie Santini',
    id: 'jeremi-santini'
  },
  {
    photo: '/assets/Effectif/Photo Yannick Mbone.png',
    texte: '/assets/Effectif/Texte Yannick Mbone.png',
    name: 'Yannick Mbone',
    id: 'yannick-mbone'
  },
  {
    photo: '/assets/Effectif/Photo Raphael Calvet.png',
    texte: '/assets/Effectif/Texte Raphael Calvet.png',
    name: 'Raphaël Calvet',
    id: 'raphael-calvet'
  },
  {
    photo: '/assets/Effectif/Photo Kurtis Chadet.png',
    texte: '/assets/Effectif/Texte Kurtis Chadet.png',
    name: 'Kurtis Chadet',
    id: 'kurtis-chadet'
  },
  {
    photo: '/assets/Effectif/Photo Mathias Fischer.png',
    texte: '/assets/Effectif/Texte Mathias Fischer.png',
    name: 'Mathias Fischer',
    id: 'mathias-fischer'
  },
  {
    photo: '/assets/Effectif/Photo Bilal Cissé.png',
    texte: '/assets/Effectif/Texte Bilal Cissé.png',
    name: 'Bilal Cissé',
    id: 'bilal-cisse'
  },
  {
    photo: '/assets/Effectif/Photo Djamal Moussadek.png',
    texte: '/assets/Effectif/Texte Djamal Moussadek.png',
    name: 'Djamal Moussadek',
    id: 'djamal-moussadek'
  },
  {
    photo: '/assets/Effectif/Photo Ryan Tchato.png',
    texte: '/assets/Effectif/Texte Ryan Tchato.png',
    name: 'Ryan Tchato',
    id: 'ryan-tchato'
  },
  {
    photo: '/assets/Effectif/Photo Deen Adehoumi.png',
    texte: '/assets/Effectif/Texte Deen Adehoumi.png',
    name: 'Deen Adehoumi',
    id: 'deen-adehoumi'
  },
  {
    photo: '/assets/Effectif/Photo Ali Ouchen.png',
    texte: '/assets/Effectif/Texte Ali Ouchen.png',
    name: 'Ali Ouchen',
    id: 'ali-ouchen'
  },
  {
    photo: '/assets/Effectif/Photo Odilon Kouassi.png',
    texte: '/assets/Effectif/Texte Odilon Kouassi.png',
    name: 'Odilon Kouassi',
    id: 'odilon-kouassi'
  },
  {
    photo: '/assets/Effectif/Photo Soumaila Traoré.png',
    texte: '/assets/Effectif/Texte Soumaila Traoré.png',
    name: 'Soumaila Traoré',
    id: 'soumaila-traore'
  },
  {
    photo: '/assets/Effectif/Photo Romain Basque.png',
    texte: '/assets/Effectif/Texte Romain Basque.png',
    name: 'Romain Basque',
    id: 'romain-basque',
    popupImage: '/assets/Effectif/Pop Up Romain Basque.png'
  },
  {
    photo: '/assets/Effectif/Photo Tom Renaud.png',
    texte: '/assets/Effectif/Texte Tom Renaud.png',
    name: 'Tom Renaud',
    id: 'tom-renaud'
  },
  {
    photo: '/assets/Effectif/Photo Jawed Kalai.png',
    texte: '/assets/Effectif/Texte Jawed Kalai.png',
    name: 'Jawed Kalai',
    id: 'jawed-kalai'
  },
  {
    photo: '/assets/Effectif/Photo Patrick Koffi.png',
    texte: '/assets/Effectif/Texte Patrick Koffi.png',
    name: 'Patrick Koffi',
    id: 'patrick-koffi'
  },
  {
    photo: '/assets/Effectif/Photo Shelton Guillaume.png',
    texte: '/assets/Effectif/Texte Shelton Guillaume.png',
    name: 'Shelton Guillaume',
    id: 'shelton-guillaume'
  },
  {
    photo: '/assets/Effectif/Photo Ibrahima Doucouré.png',
    texte: '/assets/Effectif/Texte Ibrahima Doucouré.png',
    name: 'Ibrahima Doucouré',
    id: 'ibrahima-doucoure'
  },
  {
    photo: '/assets/Effectif/Photo Samir Ben Brahim.png',
    texte: '/assets/Effectif/Texte Samir Ben Brahim.png',
    name: 'Samir Ben Brahim',
    id: 'samir-ben-brahim'
  },
  {
    photo: '/assets/Effectif/Photo Yohan Zemoura.png',
    texte: '/assets/Effectif/Texte Yohan Zemoura.png',
    name: 'Yohan Zemoura',
    id: 'yohan-zemoura'
  },
  {
    photo: '/assets/Effectif/Photo Cedric Odzoumo.png',
    texte: '/assets/Effectif/Texte Cedric Odzoumo.png',
    name: 'Cedric Odzoumo',
    id: 'odzoumo'
  }
]

const FeaturedPlayers = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<FeaturedPlayer | null>(null)

  const handlePlayerClick = (player: FeaturedPlayer) => {
    if (player.popupImage) {
      setSelectedPlayer(player)
    }
  }

  const handleCloseModal = () => {
    setSelectedPlayer(null)
  }

  return (
    <>
      <section className="featured-players-section">
        <div className="featured-players-container">
          {featuredPlayers.map((player, index) => (
            <motion.div
              key={player.name}
              className="featured-player-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handlePlayerClick(player)}
            >
              <div className="featured-player-image-container">
                <img
                  src={player.photo}
                  alt={player.name}
                  className="featured-player-photo"
                  loading="lazy"
                />
                <div className="featured-player-text-overlay">
                  <img
                    src={player.texte}
                    alt={`${player.name} - Texte`}
                    className="featured-player-text"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {selectedPlayer && (
        <PlayerModal
          isOpen={!!selectedPlayer}
          onClose={handleCloseModal}
          popupImage={selectedPlayer.popupImage!}
          playerName={selectedPlayer.name}
        />
      )}
    </>
  )
}

export default FeaturedPlayers

