import React from 'react'
import BookCard from './BookCard'
import IMG_NOT_FOUND from '../../img/not-found.png';
import { FlexGrid } from '../styled';

const BookGrid = ({ data }) => {
    return (
        <FlexGrid>
            {data.map((book) => {
                 return (<BookCard 
                    key={book.id} 
                    id={book.id} 
                    title={book.volumeInfo.title} 
                    image={book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : IMG_NOT_FOUND}
                    summary={book.volumeInfo.description}
                    authors={book.volumeInfo.authors}
                />)
            })}
        </FlexGrid>
    );
}

export default BookGrid
