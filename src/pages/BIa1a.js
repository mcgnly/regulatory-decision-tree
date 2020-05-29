import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="B.I.a.1.a" />
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
      <Link className="breadcrumb" to="/BIa1a/">
        {" "}
        a.
      </Link>
    </p>
    <p>
      {" "}
      <h3>
        B.I.a.1.a) The proposed manufacturer is part of the same pharmaceutical
        group as the currently approved manufacturer{" "}
      </h3>{" "}
    </p>
    <p className="procedure">Type IAIN</p>
    <p>
      {" "}
      <h2>Conditions</h2>
    </p>
    <p className="condition">
      <p>
        {" "}
        1. For starting materials and reagents the specifications (including in
        process controls, methods of analysis of all materials), are identical
        to those already approved. For intermediates and active substances the
        specifications (including in process controls, methods of analysis of
        all materials), method of preparation (including batch size) and
        detailed route of synthesis are identical to those already approved.{" "}
      </p>
      <p>
        2. The active substance is not a biological/immunological substance or
        sterile.{" "}
      </p>
      <p>
        3. Where materials of human or animal origin are used in the process,
        the manufacturer does not use any new supplier for which assessment is
        required of viral safety or of compliance with the current Note for
        Guidance on Minimising the Risk of Transmitting Animal Spongiform
        Encephalopathy Agents via Human and Veterinary Medicinal Products.
      </p>
    </p>
    <p>
      {" "}
      <h2>Documents</h2>
    </p>
    <p className="document">
      <p>
        {" "}
        1. Amendment of the relevant section(s) of the dossier (presented in the
        EU-CTD format or NTA volume 6B format for veterinary products, as
        appropriate), if applicable.{" "}
      </p>
      <p>
        2. A declaration from the marketing authorisation holder or the ASMF
        holder, where applicable, that the synthetic route (or in case of herbal
        medicinal products, where appropriate the method of preparation,
        geographical source, production of herbal drug and manufacturing route)
        quality control procedures and specifications of the active substance
        and of the starting material/reagent/intermediate in the manufacturing
        process of the active substance (if applicable) are the same as those
        already approved.{" "}
      </p>
      <p>
        3. Either a TSE Ph. Eur. Certificate of Suitability for any new source
        of material or, where applicable, documentary evidence that the specific
        source of the TSE risk material has previously been assessed by the
        competent authority and shown to comply with the current Note for
        Guidance on Minimising the Risk of Transmitting Animal Spongiform
        Encephalopathy Agents via Human and Veterinary Medicinal Products. The
        information should include the following: Name of manufacturer, species
        and tissues from which the material is a derivative, country of origin
        of the source animals, its use and previous acceptance. For the
        Centralised Procedure, this information should be included in an updated
        TSE table A (and B, if relevant).{" "}
      </p>
      <p>
        4. Batch analysis data (in a comparative tabular format) for at least
        two batches (minimum pilot scale) of the active substance from the
        current and proposed manufacturers/sites.{" "}
      </p>
      <p>
        5. The variation application form should clearly outline the ‘present’
        and ‘proposed’ manufacturers as listed in section 2.5 of the application
        form for marketing authorisation.
      </p>
      <p>
        6. A declaration by the Qualified Person (QP) of each of the
        manufacturing authorisation holders listed in the application where the
        active substance is used as a starting material and a declaration by the
        Qualified Person (QP) of each of the manufacturing authorisation holders
        listed in the application as responsible for batch release. These
        declarations should state that the active substance manufacturer(s)
        referred to in the application operate in compliance with the detailed
        guidelines on good manufacturing practice for starting materials. A
        single declaration may be acceptable under certain circumstances — see
        the note under variation No B.II.b.1.{" "}
      </p>
      <p>
        7. Where relevant, a commitment of the manufacturer of the active
        substance to inform the MA holder of any changes to the manufacturing
        process, specifications and test procedures of the active substance.{" "}
      </p>
    </p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
