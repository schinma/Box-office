import React from 'react'

const Authors = ({authors}) => {
    return (
        <div>
           <ul>
            {
               authors.map((author, index) => {
                   return (<li key={index}>{author}</li>);
               })
            }
           </ul>
        </div>
    )
}

export default Authors
