import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>OOPS...</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>Click on the Header to go to Main Page</p>
  </Layout>
)

export default NotFoundPage
