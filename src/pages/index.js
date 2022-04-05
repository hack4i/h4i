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
        <a
          id="mlh-trust-badge"
          style={{
            display: "block",
            maxWidth: 100,
            minWidth: 60,
            position: "fixed",
            right: 50,
            top: "10vh",
            width: "10%",
            zIndex: 10000,
          }}
          href="https://mlh.io/seasons/2022/events?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg"
            alt="Major League Hacking 2022 Hackathon Season"
            style={{ width: "100%" }}
          />
        </a>

        <Hero />
        <About />
        <Themes />
        <Sponsors />
        <Footer />
      </Layout>
    </>
  )
}
