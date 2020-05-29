import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>B.I. Quality Changes - Drug Substance</h1>
    <p>
      <Link className="fancy-button" to="/">
        a) Manufacture
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">b) Control of active substance </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">c) Container closure system</Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">d) Stability</Link>{" "}
    </p>{" "}
    <p>
      {" "}
      <Link className="fancy-button">
        e) Design space and post approval change management protocol
      </Link>{" "}
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
