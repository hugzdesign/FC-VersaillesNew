import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Club from './pages/Club'
import Effectif from './pages/Effectif'
import Joueur from './pages/Joueur'
import Staff from './pages/Staff'
import Academie from './pages/Academie'
import Merchandising from './pages/Merchandising'
import Partenariats from './pages/Partenariats'
import National1 from './pages/National1'
import Billetterie from './pages/Billetterie'
import BackToHome from './components/Navigation/BackToHome'
import TopLogo from './components/Navigation/TopLogo'
import FloatingNav from './components/Navigation/FloatingNav'

function AppRoutes() {
  const location = useLocation()

  return (
    <>
      <TopLogo />
      <BackToHome />
      <FloatingNav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/club" element={<Club />} />
          <Route path="/effectif" element={<Effectif />} />
          <Route path="/joueur/:id" element={<Joueur />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/academie" element={<Academie />} />
          <Route path="/merchandising" element={<Merchandising />} />
          <Route path="/partenariats" element={<Partenariats />} />
          <Route path="/national1" element={<National1 />} />
          <Route path="/billetterie" element={<Billetterie />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App

