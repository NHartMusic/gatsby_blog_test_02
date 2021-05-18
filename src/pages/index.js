import * as React from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BookItem from '../components/bookItem'

const LinkButton = styled.div`
  text-align: right;
  margin-bottom: 8px;

  a {
    padding: 8px;
    color: white;
    background: black;
    text-decoration: none;
    border-radius: 8px;
    transition: 0.2s;

    &:hover {
      border: 2px solid black;
      color: black;
      background: white;
    }
  }
`

const IndexPage = (props) => {
  console.log(props)
  return (
    <Layout>
      <Seo title="Home" />
      {props.data.allBook.edges.map( edge => (
        <BookItem 
          bookCover={edge.node.localImage.childImageSharp.fixed}
          key={edge.node.id}
          bookSummary={edge.node.summary}
          bookTitle={edge.node.title}
          authorName={edge.node.author.name}
        >
          <LinkButton>
            <Link to={`/book/${edge.node.id}`}>
              Join Conversation
            </Link>
          </LinkButton>
        </BookItem>
      ))}
    </Layout>
  )
}

export const query = graphql`
{
  allBook {
    edges {
      node {
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
  }
}
`

export default IndexPage
