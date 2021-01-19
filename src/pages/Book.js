import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { apiGET } from '../config';


const reducer = (prevState, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS': {
            return { isLoading : false, book: action.book , error: null };
        }
        case 'FETCH_FAILED' : {
            return { ...prevState, isLoading: false, error: action.error };
        }
        default: return prevState;
    }
}

const initialState = {
    book : null,
    isLoading: true,
    error: null
}

const Book = () => {

    const { id } = useParams();

    const [{ book, isLoading, error }, dispatch] = useReducer(reducer, initialState);

    useEffect( () => {

        let isMounted = true;

        apiGET(`/books/v1/volumes/${id}`)
        .then( result => {
            if (isMounted) {
                dispatch({type: 'FETCH_SUCCESS', book: result })
            }
        })
        .catch(err => {
            if (isMounted) {
                dispatch({type : 'FETCH_FAILED', error : err.message });
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
