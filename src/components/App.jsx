import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from './Navbar';
import Loading from "./Loading";

const Players = React.lazy(() => import( './Players'));
const Home = React.lazy(() => import( './Home'));
const Teams = React.lazy(() => import( './Teams'));
const TeamPage = React.lazy(() => import( "./TeamPage"));
const Player = React.lazy(() => import( "./Player"));
const Team = React.lazy(() => import( "./Team"));
const Article = React.lazy(() => import( "./Article"));
const Articles = React.lazy(() => import( "./Articles"));

export default function App () {
  return (
    <Router>
      <div>
        <Navbar />
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/players" element={<Players />} >
              <Route path=":playerId" element={<Player />} />
              <Route 
                path="" 
                element={<div className="sidebar-instruction">Select A Player</div>} 
              />
            </Route>
            <Route path="/teams" element={<Teams />} >
              <Route path=":teamId" element={<Team />} />
              <Route 
                path="" 
                element={<div className="sidebar-instruction">Select A Team</div>} 
              />
            </Route>
            <Route path="/:teamId" element={<TeamPage />} />
            <Route path="/:teamId/articles" element={<Articles />} >
              <Route path=":articleId" element={<Article />} />
            </Route>
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  )
}