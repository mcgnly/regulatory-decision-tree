import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <p>
      <Link className="breadcrumb-1" to="/">
        {" "}
        Home
      </Link>
    </p>
    <p>
      <Link className="breadcrumb-2" to="/BI/">
        {" "}
        BI.
      </Link>
    </p>
    <p>
      <Link className="fancy-button" to="/BIa/">
        B.I.a) Manufacture
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">
        B.I.b) Control of active substance
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">B.I.c) Container closure system</Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">B.I.d) Stability</Link>{" "}
    </p>{" "}
    <p>
      {" "}
      <Link className="fancy-button">
        B.I.e) Design space and post approval change management protocol
      </Link>{" "}
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
