import React from 'react'
import { Outlet } from 'react-router-dom'

import useTeamNames from '../hooks/useTeamNames'

import SideBar from './Siderbar';
import Loading from './Loading';

export default function Teams() {

  const {
    response: teams,
    loading,
  } = useTeamNames();

  if (loading === true) return <Loading />;

  return (
    <div className='container two-column'>
      <SideBar 
        title="Teams"
        list={teams}
      />

      <Outlet />
    </div>
  )
}
