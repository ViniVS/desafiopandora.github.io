import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PlaneIcon from './PlaneIcon'

function PlaneSection({ dayLabel, daySubtitle }) {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const planeX = useTransform(scrollYProgress, [0, 1], ['78%', '18%'])
  const planeY = useTransform(scrollYProgress, [0, 1], ['8%', '68%'])
  const planeRotate = useTransform(scrollYProgress, [0, 1], [200, 166])
  const planeScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.4])

  const cloud1X = useTransform(scrollYProgress, [0, 1], ['-10%', '30%'])
  const cloud2X = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])
  const cloud3X = useTransform(scrollYProgress, [0, 1], ['-30%', '10%'])

  const groundOpacity = useTransform(scrollYProgress, [0.65, 0.85], [0, 1])
  const labelOpacity = useTransform(scrollYProgress, [0.78, 0.98], [0, 1])
  const labelY = useTransform(scrollYProgress, [0.78, 0.98], [40, 0])

  return (
    <section className="plane-section" ref={sectionRef}>
      <div className="plane-sticky">
        <motion.div className="cloud cloud-1" style={{ x: cloud1X }} aria-hidden="true" />
        <motion.div className="cloud cloud-2" style={{ x: cloud2X }} aria-hidden="true" />
        <motion.div className="cloud cloud-3" style={{ x: cloud3X }} aria-hidden="true" />

        <motion.div
          className="plane-wrap"
          style={{
            left: planeX,
            top: planeY,
            rotate: planeRotate,
            scale: planeScale,
          }}
        >
          <PlaneIcon className="plane-icon" />
        </motion.div>

        <motion.div className="ground" style={{ opacity: groundOpacity }} aria-hidden="true" />

        <motion.div className="landing-label" style={{ opacity: labelOpacity, y: labelY }}>
          <span className="landing-eyebrow">chegamos em Santos</span>
          <h2>{dayLabel}</h2>
          <p>{daySubtitle}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default PlaneSection
