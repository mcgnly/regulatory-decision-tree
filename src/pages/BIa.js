import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>B.I.a Quality Changes - Drug Substance - Manufacture</h1>
    <p>
      <Link className="fancy-button" to="/BIa1/">
        B.I.a.1 Change in the manufacturer of a starting material/
        reagent/intermediate used in the manufacturing process of the active
        substance or change in the manufacturer (including where relevant
        quality control testing sites) of the active substance, where no Ph.
        Eur. Certificate of Suitability is part of the approved dossier
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">
        B.I.a.2 Changes in the manufacturing process of the active substance{" "}
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">
        B.I.a.3 Change in batch size (including batch size ranges) of active
        substance or intermediate used in the manufacturing process of the
        active substance{" "}
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">
        B.I.a.4 Change to in-process tests or limits applied during the
        manufacture of the active substance{" "}
      </Link>{" "}
    </p>{" "}
    <p>
      {" "}
      <Link className="fancy-button">
        B.I.a.5 Changes to the active substance of a seasonal, pre- pandemic or
        pandemic vaccine against human influenza{" "}
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">XXX</Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">XXX</Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">XXX</Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button">XXX</Link>{" "}
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
