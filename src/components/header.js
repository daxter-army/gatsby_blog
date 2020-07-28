import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
  <header
    style={{
      background: `#1868ae`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p style={{
        marginTop: `10px`,
        fontSize: `20px`,
        color: `white`
      }}>
        {siteDescription}
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``
}

export default Header
