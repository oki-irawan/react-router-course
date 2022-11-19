import React from 'react'
import { useParams, Link } from 'react-router-dom'

import useTeam from '../hooks/useTeam';
import TeamLogo from './TeamLogo';

export default function Team() {
    const { teamId } = useParams();

    const {
        response: team,
        loading,
    } = useTeam(teamId);

    if (loading === true) return null;

    if (!team) return null;


  return (
    <div className='panel'>
        <div style={{width: '100%'}}> 
            <TeamLogo id={team.id} className='center' />
            <h1 className='medium-header'>{team.name}</h1>
            <ul className='info-list row'>
                <li>Est.<div>{team.established}</div></li>
                <li>Manager.<div>{team.manager}</div></li> 
                <li>Coach<div>{team.coach}</div></li>
                <li>Record<div>{team.wins}-{team.losses}</div></li>
            </ul>

            <Link
            className='center btn-main'
                to={`/${teamId}`}
            >
                {team.name} Team Page
            </Link>
        </div>
    </div>
  )
}
