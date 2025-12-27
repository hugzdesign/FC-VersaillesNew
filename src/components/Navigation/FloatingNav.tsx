import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './FloatingNav.css'

interface NavItem {
  label: string
  path: string
  imageSrc?: string
}

const navItems: NavItem[] = [
  { label: 'Le club', path: '/club', imageSrc: '/assets/Header/texte Le Club.png' },
  { label: 'Effectif', path: '/effectif', imageSrc: '/assets/Header/texte Effectif.png' },
  { label: 'Le staff', path: '/staff', imageSrc: '/assets/Header/texte Le Staff.png' },
  { label: 'National 1', path: '/national1', imageSrc: '/assets/Header/texte National 1.png' },
  { label: 'Billetterie', path: '/billetterie', imageSrc: '/assets/Header/texte Billetterie.png' },
  { label: 'Le shop', path: '/merchandising', imageSrc: '/assets/Header/texte Le Shop.png' },
  { label: 'Les partenariats', path: '/partenariats', imageSrc: '/assets/Header/texte Les Partenariats.png' },
  { label: 'Association', path: '/academie', imageSrc: '/assets/Header/texte Association.png' },
]

const FloatingNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Ne pas afficher sur les pages Effectif, Joueur, Club, Staff, National 1, Billetterie et Merchandising
  if (location.pathname === '/effectif' || location.pathname.startsWith('/joueur/') || location.pathname.startsWith('/club') || location.pathname.startsWith('/staff') || location.pathname.startsWith('/national1') || location.pathname.startsWith('/billetterie') || location.pathname.startsWith('/merchandising')) {
    return null
  }

  const handleNavigate = (path: string) => {
    navigate(path)
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.nav
      className="floating-nav"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="floating-nav-container">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path || 
            (item.path === '/club' && location.pathname.startsWith('/club')) ||
            (item.path === '/effectif' && (location.pathname.startsWith('/effectif') || location.pathname.startsWith('/joueur'))) ||
            (item.path === '/staff' && location.pathname.startsWith('/staff')) ||
            (item.path === '/national1' && location.pathname.startsWith('/national1')) ||
            (item.path === '/billetterie' && location.pathname.startsWith('/billetterie')) ||
            (item.path === '/merchandising' && location.pathname.startsWith('/merchandising')) ||
            (item.path === '/partenariats' && location.pathname.startsWith('/partenariats')) ||
            (item.path === '/academie' && location.pathname.startsWith('/academie'))

          return (
            <motion.button
              key={item.path}
              className={`floating-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => handleNavigate(item.path)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              whileHover={{ opacity: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.imageSrc ? (
                <img 
                  src={item.imageSrc} 
                  alt={item.label}
                  className="floating-nav-image"
                />
              ) : (
                <span className="floating-nav-label">{item.label}</span>
              )}
              {isActive && (
                <motion.div
                  className="floating-nav-indicator"
                  layoutId="floatingNavIndicator"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}

export default FloatingNav

