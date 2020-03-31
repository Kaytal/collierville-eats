import React from "react"

const Post = ({ post }) => (
  <article class="card ">
    <header>
      <h2 className="post-title">
        {post.frontmatter.title}
        <br />
        <small>{post.frontmatter.phone}</small>
      </h2>
      <div class="post-meta">Food: {post.frontmatter.tags}</div>
      <div class="post-meta">Services: {post.frontmatter.services}</div>
      {post.frontmatter.website &&
        <div style={{textAlign: "center"}}>
          <a href={post.frontmatter.website} rel="noopener noreferrer" target="_blank">Website</a>
        </div>
      }
      <button className="button -primary button--small">{post.frontmatter.category}</button>
    </header>
  </article>
)
export default Post