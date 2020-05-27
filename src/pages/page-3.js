import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>regulatory thing B</h1>
    <p>here is the rule</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
