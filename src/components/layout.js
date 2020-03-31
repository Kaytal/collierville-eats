import React from "react"
import HeroHeader from "./heroHeader"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  return (
    <div className="site-wrapper">
      <HeroHeader/>
      <div className="content-wrapper">
        {children}
      </div>
      <footer className="site-footer">
        <p>&copy; 2020 Bearded Robots &bull; Crafted with <span role="img" aria-label="love">❤️</span> using <a href="https://gatsbyjs.org">GatsbyJS</a></p>
      </footer>
    </div>
  )
}