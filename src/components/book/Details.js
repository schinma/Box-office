import React from 'react'

const Details = ({publisher, publishedDate, pageCount, language}) => {
    return (
        <div>
            <p>Publisher : {publisher}</p>
            <p>Publish Date : {publishedDate}</p>
            <p>Language : {language}</p>
            <p>Page Count : {pageCount}</p>
        </div>
    )
}

export default Details
