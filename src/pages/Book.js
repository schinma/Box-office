import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGET } from '../config';

const Book = () => {

    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect( () => {
        apiGET(`/books/v1/volumes/${id}`)
        .then( result => {
            setBook(result);
            console.log(book);
        });
    }, 
    [id]);

    return (
        <div>
            book
        </div>
    )
}

export default Book
