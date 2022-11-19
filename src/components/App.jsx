import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from './Navbar';
import Players from './Players';
import Home from './Home';
import Teams from './Teams';
import TeamPage from "./TeamPage";
import Player from "./Player";
import Team from "./Team";
import Article from "./Article";
import Articles from "./Articles";

export default function App () {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/players" element={<Players />} >
            <Route path=":playerId" element={<Player />} />
            {/* <Route path="/" element={<h3 className="center">Select A Player</h3>} /> */}
          </Route>
          <Route path="/teams" element={<Teams />} >
            <Route path=":teamId" element={<Team />} />
            {/* <Route path="*" element={<h3>Select A Team</h3>} /> */}
          </Route>
          <Route path="/:teamId" element={<TeamPage />} />
          <Route path="/:teamId/articles" element={<Articles />} >
            <Route path=":articleId" element={<Article />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}