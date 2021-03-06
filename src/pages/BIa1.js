import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="B.I.a.1" />
    <p>
      <Link className="breadcrumb" to="/">
        {" "}
        Home >
      </Link>
      <Link className="breadcrumb" to="/BI/">
        {" "}
        BI.>
      </Link>
      <Link className="breadcrumb" to="/BIa/">
        {" "}
        a.>
      </Link>
      <Link className="breadcrumb" to="/BIa1/">
        {" "}
        1.>
      </Link>
    </p>
    <h1>B.I.a.1 Quality Changes - Drug Substance</h1>
    <p>
      <Link className="fancy-button" to="/BIa1a/">
        B.I.a.1.a) The proposed manufacturer is part of the same pharmaceutical
        group as the currently approved manufacturer
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button" to="/">
        B.I.a.1.b) Introduction of a manufacturer of the active substance
        supported by an ASMF{" "}
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button" to="/">
        B.I.a.1.c) The proposed manufacturer uses a substantially different
        route of synthesis or manufacturing conditions, which may have a
        potential to change important quality characteristics of the active
        substance, such as qualitative and/or quantitative impurity profile
        requiring qualification, or physico-chemical properties impacting on
        bioavailability{" "}
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button" to="/">
        B.I.a.1.d) New manufacturer of material for which an assessment is
        required of viral safety and/or TSE risk{" "}
      </Link>{" "}
    </p>{" "}
    <p>
      {" "}
      <Link className="fancy-button" to="/">
        B.I.a.1.e) The change relates to a biological active substance or a
        starting material/reagent/intermediate used in the manufacture of a
        biological/immunological product{" "}
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button" to="/">
        B.I.a.1.f) Changes to quality control testing arrangements for the
        active substance-replacement or addition of a site where batch
        control/testing takes place{" "}
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button" to="/">
        B.I.a.1.g) Introduction of a new manufacturer of the active substance
        that is not supported by an ASMF and requires significant update to the
        relevant active substance section of the dossier{" "}
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button" to="/">
        B.I.a.1.h) Addition of an alternative sterilisation site for the active
        substance using a Ph.Eur. method{" "}
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button" to="/">
        B.I.a.1.i) Introduction of a new site of micronisation{" "}
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button" to="/">
        B.I.a.1.j) Changes to quality control testing arrangements for a
        biological active substance: replacement or addition of a site where
        batch control/testing including a
        biological/immunological/immunochemical method takes place{" "}
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button" to="/">
        B.I.a.1.k) New storage site of Master Cell Bank and/or Working Cell
        Banks{" "}
      </Link>{" "}
    </p>
    <p>
      {" "}
      <Link className="fancy-button" to="/">
        XXX
      </Link>{" "}
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
