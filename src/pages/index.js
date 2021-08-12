import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Converter from "../components/converter"

const IndexPage = () => (
  <Layout>
    <Seo title="Converter" />
    <div className="in-2-cols">
      <section>
        <h1>Arabic</h1>
      </section>
      <section>
        <h1>Roman</h1>
      </section>
    </div>
    <Converter />
  </Layout>
)

export default IndexPage
