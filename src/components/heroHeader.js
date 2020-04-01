import React from "react"
import { StaticQuery, graphql } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <header className="hero-header">
        <img className="hero-img" alt="Collierville, TN" src={'/assets/ColliervilleTN.jpg'} />
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.description}</p>
          <p>The list is constantly being updated/changed. Please check back periodically.</p>
        </div>
      </header>
    )}
  />
)