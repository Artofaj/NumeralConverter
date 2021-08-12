import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Converter from "../components/converter"

const IndexPage = () => (
  <Layout>
    <Seo title="Converter" />
    <section id="cheatsheet">
      <h1>Cheatsheet</h1>
      <table>
        <tbody>
          <tr>
            <th>Symbol</th>
            <td>I</td>
            <td>V</td>
            <td>X</td>
            <td>L</td>
            <td>C</td>
            <td>D</td>
            <td>M</td>
          </tr>
          <tr>
            <th>Value</th>
            <td>1</td>
            <td>5</td>
            <td>10</td>
            <td>50</td>
            <td>100</td>
            <td>500</td>
            <td>1000</td>
          </tr>
        </tbody>
      </table>
    </section>
    <Converter />
    <section>
      <h1>Arabic Numerals</h1>
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
      <h1>Roman Numerals</h1>
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
