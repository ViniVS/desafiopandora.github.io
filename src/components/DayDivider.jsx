import { motion } from 'framer-motion'

function DayDivider({ text }) {
  return (
    <motion.div
      className="day-divider"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.7 }}
    >
      <span className="day-divider-line" aria-hidden="true" />
      <span className="day-divider-text">{text}</span>
      <span className="day-divider-line" aria-hidden="true" />
    </motion.div>
  )
}

export default DayDivider
