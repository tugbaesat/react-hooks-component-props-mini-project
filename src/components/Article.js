import React from 'react'
import MinutesReading from './MinutesReading'

const Article = ({ title, date="January 1, 1970", preview, minutes }) => {
   

  return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <MinutesReading minutes={minutes}/>
        <p>{preview}</p>
    </article>
  )
}

export default Article