import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading';

import useArticle from '../hooks/useArticle';


export default function Article() {
  const { teamId, articleId } = useParams();
  
  const { 
    response: article,
    loading
  } = useArticle({teamId, articleId})

  if (loading === true) return <Loading />;


  return (
    <div className='panel'>
        <article className='article'>
            <h1 className='header'>{article.title}</h1>
            <p>{article.body}</p>
        </article>
    </div>
  )
}
