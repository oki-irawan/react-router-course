import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom"

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


function Routes() {
  return useRoutes([
    { path: '/', element: <Home /> },
    { 
      path: '/players', 
      element: <Players />,
      children: [
        { path: ':playerId', element: <Player /> },
        { path: '', element: <div className="sidebar-instruction">Select A Player</div> },
      ]
    },
    { 
      path: '/teams', 
      element: <Teams />,
      children: [
        { path: ':teamId', element: <Team /> },
        { path: '', element: <div className="sidebar-instruction">Select A Team</div> },
      ]
    },
    { path: '/:teamId', element: <TeamPage /> },
    { 
      path: '/:teamId/articles',
      element: <Articles />, 
      children: [
        { path: ':articleId', element: <Article /> },
        { path: '', element: <div className="sidebar-instruction">Select An Article</div> },
      ] 
    },
  ]);
}

export default function App () {
  return (
    <Router>
      <div>
        <Navbar />
        <React.Suspense fallback={<Loading />}>
          <Routes />
        </React.Suspense>
      </div>
    </Router>
  )
}