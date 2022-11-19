import React from 'react'
import { Outlet, useLocation, useSearchParams } from 'react-router-dom'

import SideBar from './Siderbar';
import Loading from './Loading';

import usePlayerNames from '../hooks/usePlayerNames';

export default function Players() {
  const location = useLocation();
  const [searchParams] = useSearchParams(location);

  const team = searchParams.get('teamId')

  const {
    response: names,
    loading,
  } = usePlayerNames(team)

  if (loading === true) return <Loading />;


  return (
    <div className='container two-column'>
      <SideBar
        title="Players"
        list={names}
      />

      <Outlet />
    </div>
  )
}
