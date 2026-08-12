import { motion } from 'framer-motion'
import InstagramIcon from './InstagramIcon'

function instagramHandle(url) {
  return `@${url.replace(/\/$/, '').split('/').pop()}`
}

function AgendaTimeline({ day, showHeading = true }) {
  return (
    <section className="timeline-section">
      {showHeading && (
        <motion.div
          className="agenda-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
        >
          <span className="agenda-eyebrow">agenda do dia</span>
          <h2>{day.label}</h2>
          <p>{day.subtitle}</p>
        </motion.div>
      )}

      <ol className="timeline">
        {day.items.map((item, index) => {
          const showTime = index === 0 || day.items[index - 1].time !== item.time
          const isLast = index === day.items.length - 1

          return (
            <motion.li
              key={item.title}
              className="timeline-row"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
            >
              <div className="timeline-time">{showTime ? item.time : ''}</div>

              <div className="timeline-track">
                <span className="timeline-dot">{item.icon}</span>
                {!isLast && <span className="timeline-line" />}
              </div>

              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {item.instagram && (
                  <a
                    className="timeline-instagram"
                    href={item.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="timeline-instagram-icon" />
                    {instagramHandle(item.instagram)}
                  </a>
                )}
              </div>
            </motion.li>
          )
        })}
      </ol>
    </section>
  )
}

export default AgendaTimeline
