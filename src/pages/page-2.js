import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>regulatory thing A</h1>
    <p>here is the rule</p>
    <Link to="/page-3/">pg 3</Link>
  </Layout>
)

export default SecondPage
