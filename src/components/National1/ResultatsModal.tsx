import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ResultatsModal.css'

interface ResultatsModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  title: string
}

const ResultatsModal = ({ isOpen, onClose, images, title }: ResultatsModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === 'ArrowLeft') {
        handlePrevious()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('keydown', handleArrowKeys)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleArrowKeys)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, handlePrevious, handleNext, onClose])

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0) // Reset to first image when modal opens
    }
  }, [isOpen])

  if (!images || images.length === 0) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="resultats-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            className="resultats-modal-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="resultats-modal-close"
              onClick={onClose}
              aria-label="Fermer"
            >
              ×
            </button>

            {images.length > 1 && (
              <>
                <button
                  className="resultats-modal-arrow resultats-modal-arrow-left"
                  onClick={handlePrevious}
                  aria-label="Image précédente"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  className="resultats-modal-arrow resultats-modal-arrow-right"
                  onClick={handleNext}
                  aria-label="Image suivante"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </>
            )}

            <div className="resultats-modal-content">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`${title} - Image ${currentIndex + 1}`}
                  className="resultats-modal-image"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              
              {images.length > 1 && (
                <div className="resultats-modal-indicators">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`resultats-modal-indicator ${
                        index === currentIndex ? 'active' : ''
                      }`}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Aller à l'image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ResultatsModal

