import React from 'react'
import { Link } from 'react-router-dom';
import useTeamNames from '../hooks/useTeamNames';

import TeamLogo from './TeamLogo'

export default function Home() {
  const {loading, response: teamsNames} = useTeamNames();

  if (loading) return null;

  return (
    <div className="container">
      <h1 className='large-header'>Hash History Basketball League</h1>
      <h3 className='header text-center'>Select a team</h3>

      <div className='home-grid '>
        {teamsNames.map(id => (
          <Link key={id} to={`/${id}`}>
            <TeamLogo id={id} width='125px'/>
          </Link>
        ))}
      </div>
    </div>

  )
}
