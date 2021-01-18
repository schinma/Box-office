import React from 'react'
import { Link } from 'react-router-dom';

const BookCard = ({id, title, image, summary, authors}) => {

    const summaryText = summary ? summary.split(' ').slice(0, 20).join(' ') : "No description";
    return (
        <div>   
            <h1>{title}</h1>
            <h2>{authors ? authors.map((author) => `${author} `): "No author"}</h2>
            <img src={image} alt="book-cover"/>
            <p>{summaryText}...</p>
            <div>
                <Link to={`/book/${id}`}>Read more</Link>
            </div>
        </div>
    )
}

export default BookCard
