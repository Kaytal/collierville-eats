import React, { useState } from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const Posts = ({edges, category}) => {
  let posts
  if(category === 'All' || category === null) {
    posts = edges
  } else {
    posts = edges.filter(edge => edge.node.frontmatter.category === category)
  }
  return posts.map(edge => <PostLink key={edge.node.id} post={edge.node} />)
}

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader/>
      <h2>Restaurants &darr;</h2>
      <div className="button-row">
        <button onClick={() => setSelectedCategory('Local')} className="button -primary">Local</button>
        <button onClick={() => setSelectedCategory('Regional Chain')} className="button -primary">Regional Chain</button>
        <button onClick={() => setSelectedCategory('National Chain')} className="button -primary">National Chain</button>
        <button onClick={() => setSelectedCategory('All')} className="button -primary">All</button>
      </div>
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            category
          }
        }
      }
    }
  }
`