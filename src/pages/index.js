import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Variation Change Classification</h1>
    <p>Classify your variation</p>
    <p></p>
    <p>
      <Link className="fancy-button" to="/A/">
        A. Administrative changes
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button" to="/BI/">
        B.I. Quality changes - Drug Substance
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button" to="/BII/">
        B.II. Quality changes - Finished Product
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">
        B.III. Quality changes - CEP/TSE/monographs
      </Link>{" "}
    </p>
    <p>
      <Link className="fancy-button">
        B.IV. Quality changes - Medical Devices
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">
        B.V. Quality changes - Changes resulting from another regulatory
        procedure
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">
        C. Safety, Efficacy, Pharmacovigilence changes
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">D. PMF/VAMF</Link>{" "}
    </p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default IndexPage
