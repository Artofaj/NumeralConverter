import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Converter from "../components/converter"

const IndexPage = () => (
  <Layout>
    <Seo title="Converter" />
    <Converter />
    <section>
      <h1>
        Arabicae 
        <span className="mini-font"> (Arabic Numerals)</span>
      </h1>
      <p>
        Arabic numerals, also called Western Arabic numerals and Ghubār
        numerals, are the ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9. The term
        often implies a decimal number written using these digits (in particular
        when contrasted with Roman numerals). However, the term can also refer
        to the digits themselves, such as in the statement "octal numbers are
        written using Arabic numerals."
      </p>
    </section>
    <section>
      <h1>
        Latinae 
        <span className="mini-font"> (Roman Numerals)</span>
      </h1>
      <p>
        Roman numerals are a numeral system that originated in ancient Rome and
        remained the usual way of writing numbers throughout Europe well into
        the Late Middle Ages. Numbers in this system are represented by
        combinations of letters from the Latin alphabet. Modern usage employs
        seven symbols, each with a fixed integer value.
      </p>
    </section>
  </Layout>
)

export default IndexPage
