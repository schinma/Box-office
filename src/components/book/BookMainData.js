import React from 'react'
import IMG_PLACEHOLDER from '../../img/not-found.png'

const BookMainData = ({title, subtitle, summary, image}) => {
    return (
        <div>
           <img src={image || IMG_PLACEHOLDER} alt='book-cover'/>
           <div>
               <h1>{title}</h1>
               <h2>{subtitle || ''}</h2>
               <p>{summary}</p>
           </div>
        </div>
    )
}

export default BookMainData
