import React from 'react'
import styled from 'styled-components'

const BookItemWrapper = styled.section`
    border: 1px solid #ddd;
    background: white;
    margin-bottom: 8px;
    padding: 8px;

    h2 {
        small {
            font-weight: normal;
            font-size: 15px;
            padding-left: 8px;
        }
    }
`

const BookItem = ({ authorName, bookTitle, bookSummary, children }) => {
    return (
        <BookItemWrapper>
            <h2>
                {bookTitle} <small>{authorName}</small>
            </h2> 
            <p>
                {bookSummary}
            </p>
            <div>
                {children}
            </div>
        </BookItemWrapper>
    )
}

export default BookItem
