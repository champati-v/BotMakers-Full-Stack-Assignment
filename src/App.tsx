import Navbar from './components/Navbar'
import Home from './pages/Home'
import CompetitionsEvents from './pages/CompetitionsEvents'
import UserJourney from './pages/UserJourney'
import WhatIsBotLeague from './pages/WhatIsBotLeague'
import CompetitionDisciplines from './pages/CompetitionDisciplines'
import LeagueAdvantage from './pages/LeagueAdvantage'
import EcosystemSponsors from './pages/EcosystemSponsors'
import SiteFooter from './pages/SiteFooter'

const App = () => {
  return (
    <div className="min-h-screen bg-page text-primary">
      <Navbar />
      <Home />
      <CompetitionsEvents />
      <UserJourney />
      <WhatIsBotLeague />
      <CompetitionDisciplines />
      <LeagueAdvantage />
      <EcosystemSponsors />
      <SiteFooter />
    </div>
  )
}

export default App
