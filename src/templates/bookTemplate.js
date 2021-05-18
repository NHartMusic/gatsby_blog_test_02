import React from 'react'
import Layout from '../components/layout'
import BookItem from '../components/bookItem'
import {graphql} from 'gatsby'

const BookTemplate = (props) => {
    console.log(props.data)
    return (
        <Layout>
            <BookItem
                bookCover={props.data.book.localImage.childImageSharp.fixed}
                bookSummary={props.data.book.summary}
                bookTitle={props.data.book.title}
                authorName={props.data.book.author.name}
            />
        </Layout>
    )
}

export const query = graphql`
    query BookQuery($bookId: String!) {
        book(id: {eq: $bookId}) {
            title
            localImage {
                childImageSharp {
                    fixed(width: 200) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            summary
            id
            author {
                name
            }
        }   
    }
`

export default BookTemplate
