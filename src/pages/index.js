import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Converter from "../components/converter"

const IndexPage = () => (
  <Layout>
    <Seo title="Converter" />
    <Converter />
  </Layout>
)

export default IndexPage
