import React from 'react'
import Layout from '../components/layout'
import BookItem from '../components/bookItem'

const BookTemplate = (props) => {
    return (
        <Layout>
            <BookItem
                bookSummary={props.pageContext.summary}
                bookTitle={props.pageContext.title}
                authorName={props.pageContext.author.name}
            />
        </Layout>
    )
}

export default BookTemplate
