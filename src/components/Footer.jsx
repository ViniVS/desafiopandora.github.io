import { motion } from 'framer-motion'

function Footer() {
  return (
    <motion.section
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
    >
      <span className="footer-icon">🌊</span>
      <h2>Vem passar meu aniversário comigo?</h2>
      <p>Te espero em Santos.</p>
    </motion.section>
  )
}

export default Footer
