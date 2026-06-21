import Navbar from './components/Navbar'
import Home from './pages/Home'
import CompetitionsEvents from './pages/CompetitionsEvents'
import UserJourney from './pages/UserJourney'
import WhatIsBotLeague from './pages/WhatIsBotLeague'
import CompetitionDisciplines from './pages/CompetitionDisciplines'

const App = () => {
  return (
    <div className="min-h-screen bg-page text-primary">
      <Navbar />
      <Home />
      <CompetitionsEvents />
      <UserJourney />
      <WhatIsBotLeague />
      <CompetitionDisciplines />
    </div>
  )
}

export default App
