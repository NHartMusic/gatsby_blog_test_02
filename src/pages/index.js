import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = (props) => {
  console.log(props)
  return (
    <Layout>
      <Seo title="Home" />
      {props.data.allBook.edges.map( edge => (
        <div key={edge.node.id}>
          <div>
            <h2>
              {edge.node.title} - <small>{edge.node.author.name}</small>
            </h2>
          </div>
          <div>
            {edge.node.summary}
          </div>
          <Link to={`/book/${edge.node.id}`}>
            Join Conversation
          </Link>
        </div>
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
