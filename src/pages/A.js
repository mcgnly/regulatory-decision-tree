import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <p>
      <Link className="breadcrumb" to="/">
        {" "}
        Home >
      </Link>
    </p>
    <h1>A. Administrative Changes</h1>
    <p>
      <Link className="fancy-button" to="/">
        A. Administrative changes
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">
        B.I. Quality changes - Drug Substance
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">
        B.II. Quality changes - Finished Product
      </Link>{" "}
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
