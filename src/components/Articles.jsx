import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

import Sidebar from './Siderbar';
import Loading from './Loading';

import useTeamsArticles from '../hooks/useTeamsArticles'

export default function Articles() {
    const { teamId } = useParams()

    const {
        response: articles,
        loading,
    } = useTeamsArticles(teamId);

    if (loading === true) return <Loading />;


  return (
    <div className='container two-column'>
        <Sidebar 
            title="Articles"
            list={articles.map(articles => articles.title)}
        />

        <Outlet />
    </div>
  )
}
