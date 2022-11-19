import React from 'react'
import { Outlet } from 'react-router-dom'

import useTeamNames from '../hooks/useTeamNames'

import SideBar from './Siderbar'


export default function Teams() {

  const {
    response: teams,
    loading,
  } = useTeamNames();

  if (loading === true) return null;

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
