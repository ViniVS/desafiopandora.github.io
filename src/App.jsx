import Hero from './components/Hero'
import Messages from './components/Messages'
import PlaneSection from './components/PlaneSection'
import AgendaTimeline from './components/AgendaTimeline'
import DayDivider from './components/DayDivider'
import Footer from './components/Footer'
import { saturday, sunday } from './data/agenda'
import './App.css'

function App() {
  return (
    <>
      <Hero />
      <Messages />
      <PlaneSection dayLabel={saturday.label} daySubtitle={saturday.subtitle} />
      <AgendaTimeline day={saturday} />
      <DayDivider text="No dia seguinte" />
      <AgendaTimeline day={sunday} />
      <Footer />
    </>
  )
}

export default App
