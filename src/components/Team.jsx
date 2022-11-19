import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'

import Loading from './Loading';
import TeamLogo from './TeamLogo';

import useTeam from '../hooks/useTeam';

export default function Team() {
    const { teamId } = useParams();

    const {
        response: team,
        loading,
    } = useTeam(teamId);

    let body;

    if (loading === true ) {
      body = <Loading />;
    } else if (team === null) {
      body = <Navigate to='/teams' />
    } else {
        body = (
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
        )
    }

  return (
    <div className='panel'>
        {body}
    </div>
  )
}
