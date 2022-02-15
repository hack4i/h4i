import React, { useRef, useEffect } from "react"

import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"

export default function Sponsors() {
  const sponsorRef = useRef()

  useEffect(() => {
    gsap.from(sponsorRef.current, {
      y: "200px",
      opacity: 0,
      duration: 1.2,
    })
  }, [])

  return (
    <section ref={sponsorRef} id="sponsors" className="sponsors">
      <h1>Past Event Partners</h1>
      <div class="sponsors__images">
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/ihl-logo.svg"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/hackplus.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/student branch ieee.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/iiita logo.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
      </div>
      <h1>Past Sponsors</h1>
      <div class="sponsors__images">
        <div class="sponsors__main_parent">
          <StaticImage
            placeholder="tracedSVG"
            src="./../assets/images/sponsors/crediwatch logo.png"
            className="sponsors__image sponsors__main"
            alt="h4i hack for inclusion"
          />
          <StaticImage
            placeholder="tracedSVG"
            src="./../assets/images/sponsors/PhonePe-Logo.svg"
            className="sponsors__image sponsors__main"
            alt="h4i hack for inclusion"
          />
          <StaticImage
            placeholder="tracedSVG"
            src="./../assets/images/sponsors/graph foundation logo.png"
            className="sponsors__image sponsors__main"
            alt="h4i hack for inclusion"
          />
        </div>
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/elastic.svg"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/twilio.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/scrum alliance.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/tomitribe.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/devfolio.svg"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/scaler logo.svg"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/gitlab logo.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/iiiot.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/influx.svg"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/auth0.svg"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/opensuse logo.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/balsamiq-logo-screen.svg"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/polygon.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/buildkite logo.svg"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/portis.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/tezos.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/Rstudio logo.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/redgate logo.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/GitHub_Logo.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/Celo2x.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/1 password.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/tech logo.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/digital ocean logo.svg"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/gen xyz logo.svg"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/jetbrains logo.svg"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/repl it.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/shashido logo.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/cto ai logo.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
      </div>
    </section>
  )
}
