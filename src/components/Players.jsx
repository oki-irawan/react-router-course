import React from 'react'
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom'

import usePlayerNames from '../hooks/usePlayerNames';
import { slugify } from '../utils';

function CustomLink({ to, children}) {
  const location = useLocation();
  const playerId = location.pathname.split('/')[2];
  const match = playerId === to;

  const style = match === true ? {fontWeight: 900, color: 'var(--white)'} : {}

  return (
    <li>
      <Link 
        to={{
          pathname: to,
          search: location.search
        }} 
        style={{...style}}
      >
        {children}
      </Link>
    </li>
  )
}


function SideBar ({ title, list }) {
  return (
    <div>
      <h3 className='header'>
        {title}
      </h3>
      <ul className='sidebar-list'>
        {list.map((item) => (
          <CustomLink 
            key={item} 
            to={slugify(item)}
          >
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  )
}

export default function Players() {
  const location = useLocation();
  const [searchParams] = useSearchParams(location);

  const team = searchParams.get('teamId')

  const {
    response: names,
    loading,
  } = usePlayerNames(team)

  if (loading === true) return null;


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
