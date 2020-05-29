import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./decision-tree.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Link to="/page-3/" className="breadcrumb">
      pg 3
    </Link>
    <h1>hi back</h1>
    <Link className="fancy-button">this is the text in the button</Link>
    <p className="condition">here is the condition</p>
    <p className="document">here is the document</p>
    <p className="procedure">here is the procedure</p>
  </Layout>
)

export default SecondPage
