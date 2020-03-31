import React, { useState } from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Post from "../components/post"

const Posts = ({edges, category}) => {
  let posts
  if(category === 'All' || category === null) {
    posts = edges.filter(edge => edge.node.frontmatter.title)
  } else {
    posts = edges.filter(edge => edge.node.frontmatter.title && edge.node.frontmatter.category === category)
  }
  return posts.map(edge => <Post key={edge.node.id} post={edge.node} />)
}

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const buttons = ['All', 'Local', 'Regional Chain', 'National Chain'].map( key => {
    return <button onClick={() => setSelectedCategory(key)} className={`button -primary ${key === selectedCategory ? 'active' : ''}`}>{key}</button>
  })

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="button-row">
        {buttons}
      </div>
      <h2>Restaurants:</h2>
      <div className="grids">
        <Posts edges={edges} category={selectedCategory} />
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          frontmatter {
            title
            phone
            tags
            category
            website
            services
          }
        }
      }
    }
  }
`