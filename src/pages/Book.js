import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGET } from '../config';

const Book = () => {

    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect( () => {

        let isMounted = true;

        apiGET(`/books/v1/volumes/${id}`)
        .then( result => {
            if (isMounted) {
                setBook(result);
                setIsLoading(false);
            }
        })
        .catch(err => {
            if (isMounted) {
                setError(err.message);
                setIsLoading(false);
            }
        });
        return () => {
            isMounted = false;
        }
    }, 
    [id]);

    if (isLoading) {
        return (
            <div>
                Data is being loaded
            </div>
        );
    }

    if (error) {
        return (
            <div>
                Error occured : {error};
            </div>
        )
    }
    
    return (
        <div>
            book :
        </div>
    )
}


export default Book
