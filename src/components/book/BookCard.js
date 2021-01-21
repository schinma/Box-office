import React from 'react'
import { Link } from 'react-router-dom';
import { SearchCard } from '../styled';

const BookCard = ({id, title, image, summary, authors}) => {

    const summaryText = summary ? summary.split(' ').slice(0, 20).join(' ') : "No description";
    return (
        <SearchCard>
            <div className="img-wrapper">
                <img src={image} alt="book-cover"/>
            </div>
            <h1>{title}</h1>
            <h2>{authors ? authors.map((author) => `${author} `): "No author"}</h2>
            <p>{summaryText}...</p>
            <div className='btns'>
                <Link to={`/book/${id}`}>Read more</Link>
                <button type="button">Fav</button>
            </div>
        </SearchCard>
    )
}

export default BookCard
