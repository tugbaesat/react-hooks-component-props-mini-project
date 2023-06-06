import React from 'react'
import Article from './Article'

const ArticleList = ({ posts }) => {
  const articleDetails =  posts.map(post => {
    return <Article 
    key={post.id} 
    title={post.title}
    date={post.date}
    preview={post.preview}
    minutes={post.minutes}
    />
} )
    return (
    <main>
       {articleDetails}
    </main>
  )
}

export default ArticleList