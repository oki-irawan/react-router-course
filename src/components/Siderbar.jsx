
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { slugify } from '../utils';

function CustomLink({ to, children}) {
    const location = useLocation();
    const split = location.pathname.split('/');
    const match = split[split.length - 1] === to;
  
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

export default function SideBar ({ title, list }) {
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