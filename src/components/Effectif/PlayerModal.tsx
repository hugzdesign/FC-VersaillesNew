import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './PlayerModal.css'

interface PlayerModalProps {
  isOpen: boolean
  onClose: () => void
  popupImage: string
  playerName: string
}

const PlayerModal = ({ isOpen, onClose, popupImage, playerName }: PlayerModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="player-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            className="player-modal-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="player-modal-close"
              onClick={onClose}
              aria-label="Fermer"
            >
              ×
            </button>
            <div className="player-modal-content">
              <img
                src={popupImage}
                alt={`${playerName} - Popup`}
                className="player-modal-image"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default PlayerModal

