import { motion } from 'framer-motion'

const messages = [
  { text: 'Minha Yas', variant: 'lead' },
  { text: 'Eu estou muito animado em te ter aqui' },
  { text: 'Preparei uma agenda com muito carinho' },
  { text: 'Ficaremos juntos em todo momento' },
  { text: 'Até pra cagar' },
  { text: 'KKKKKKK', variant: 'laugh' },
]

function MessageLine({ text, variant }) {
  return (
    <motion.p
      className={`message-line${variant ? ` message-line-${variant}` : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {text}
    </motion.p>
  )
}

function Messages() {
  return (
    <section className="messages">
      {messages.map((message) => (
        <MessageLine key={message.text} text={message.text} variant={message.variant} />
      ))}
    </section>
  )
}

export default Messages
