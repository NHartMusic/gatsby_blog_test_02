import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const BookItemWrapper = styled.section`
    border: 1px solid #ddd;
    background: white;
    margin-bottom: 8px;
    padding: 10px;
    display: flex;
    align-items: center;

    h2 {
        small {
            font-weight: normal;
            font-size: 15px;
            padding-left: 8px;
        }
    }
`

const BookItemImageWrapper = styled.div`
    max-width: 200px;

    img {
        max-width: 200px;
    }
`

const BookItemContentWrapper = styled.div`
    flex-grow: 1;
    padding: 15px;
`

const BookItem = ({ authorName, bookTitle, bookSummary, bookCover, children }) => {
    return (
        <BookItemWrapper>
            <BookItemImageWrapper>
                <Img fixed={bookCover} />
            </BookItemImageWrapper>
            <BookItemContentWrapper>
                <h2>
                    {bookTitle} <small>{authorName}</small>
                </h2> 
                <p>
                    {bookSummary}
                </p>
                <div>
                    {children}
                </div>
            </BookItemContentWrapper>
        </BookItemWrapper>
    )
}

export default BookItem
