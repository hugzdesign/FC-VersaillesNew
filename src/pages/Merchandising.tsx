import { motion } from 'framer-motion'
import './Merchandising.css'

const Merchandising = () => {
  const handleShopClick = () => {
    window.open('https://shop.fcversailles.fr', '_blank')
  }

  const products = [
    {
      id: 1,
      image: '/assets/Maillots drop/LC_FCVERSAILLES_14_770x_crop_center.jpg',
      title: 'Maillot Domicile',
    },
    {
      id: 2,
      image: '/assets/Maillots drop/LC_FCVERSAILLES_23_fd549d05-83a9-45a4-accb-73b9d3868b19_770x_crop_center.jpg.webp',
      title: 'Maillot Extérieur',
    },
    {
      id: 3,
      image: '/assets/Maillots drop/DSC03611_770x_crop_center.jpg.webp',
      title: 'Collection Lifestyle',
    },
    {
      id: 4,
      image: '/assets/Maillots drop/DSC03612.jpg.webp',
      title: 'Accessoires',
    },
    {
      id: 5,
      image: '/assets/Maillots drop/fc_v15540_copie_c5894914-70e2-4ae2-af9c-69b8e0f62ff0_770x_crop_center.jpg.webp',
      title: 'Équipement',
    },
  ]

  return (
    <div className="merchandising-page">
      <motion.section
        className="merchandising-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/assets/page d'accueil/Le Shop/Photo Le Shop.png"
          alt="Le Shop"
          className="merchandising-hero-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <div className="merchandising-hero-content">
          <motion.img
            src="/assets/page d'accueil/Le Shop/Texte Le Shop.png"
            alt="Le Shop"
            className="merchandising-title-image"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </motion.section>

      <section className="merchandising-products-showcase">
        <motion.div
          className="merchandising-products-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="merchandising-product-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="merchandising-product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="merchandising-product-image"
                  loading="lazy"
                />
                <div className="merchandising-product-overlay">
                  <h3 className="merchandising-product-title">{product.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="merchandising-shop-container">
        <motion.div
          className="merchandising-shop-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="merchandising-shop-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="merchandising-shop-title">Collection Officielle</h2>
            <p className="merchandising-shop-description">
              Découvrez notre boutique en ligne et trouvez les maillots, accessoires et produits exclusifs du FC Versailles.
            </p>
          </motion.div>

          <motion.button
            className="merchandising-shop-button"
            onClick={handleShopClick}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="merchandising-shop-button-text">Accéder à la boutique</span>
            <svg
              className="merchandising-shop-button-arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}

export default Merchandising

