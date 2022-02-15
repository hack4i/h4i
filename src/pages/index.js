import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Themes from "../components/Themes"
import Footer from "../components/Footer"
import Sponsors from "../components/Sponsors"
import Seo from "./../components/Seo"

import "./../styles/main.css"

export default function Home() {
  return (
    <>
      <Seo lang="en" />
      <Layout>
        <Hero />
        <About />
        <Themes />
        <Sponsors />
        <Footer />
      </Layout>
    </>
  )
}
