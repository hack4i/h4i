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
      <h1>Event Partners</h1>
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
          src="./../assets/images/sponsors/iiita logo.png"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/sponsors/mlh-logo-color.svg"
          className="sponsors__image"
          alt="h4i hack for inclusion"
        />
      </div>
      <h1>Sponsors</h1>
      <div class="sponsors__images">
        <div class="sponsors__main_parent sponsors__row">
          <a href="https://www.figma.com/" target="_blank">
            <StaticImage
              placeholder="tracedSVG"
              src="./../assets/images/sponsors/figma.png"
              className="sponsors__image sponsors__main"
              alt="h4i hack for inclusion"
            />
          </a>
        </div>

        <div className="sponsors__row">
          <a href="https://devfolio.co/" target="_blank">
            <StaticImage
              placeholder="tracedSVG"
              src="./../assets/images/sponsors/devfolio.png"
              className="sponsors__image sponsors__main"
              alt="h4i hack for inclusion"
            />
          </a>
          <a href="https://polygon.technology/" target="_blank">
            <StaticImage
              placeholder="tracedSVG"
              src="./../assets/images/sponsors/polygon.png"
              className="sponsors__image"
              alt="h4i hack for inclusion"
            />
          </a>
        </div>
        <div className="sponsors__row">
          <a href="https://tezos.com" target="_blank">
            <StaticImage
              placeholder="tracedSVG"
              src="./../assets/images/sponsors/tezos.png"
              className="sponsors__image"
              alt="h4i hack for inclusion"
            />
          </a>
          <a href="https://celo.org " target="_blank">
            <StaticImage
              placeholder="tracedSVG"
              src="./../assets/images/sponsors/Celo2x.png"
              className="sponsors__image"
              alt="h4i hack for inclusion"
            />
          </a>
          <a href="https://filecoin.io " target="_blank">
            <StaticImage
              placeholder="tracedSVG"
              src="./../assets/images/sponsors/filecoin.png"
              className="sponsors__image"
              alt="h4i hack for inclusion"
            />
          </a>
        </div>
        <div className="sponsors__row">
          <a href="https://about.gitlab.com/" target="_blank">
            <StaticImage
              placeholder="tracedSVG"
              src="./../assets/images/sponsors/gitlab logo.png"
              className="sponsors__image"
              alt="h4i hack for inclusion"
            />
          </a>
          <a href="https://www.opensuse.org/" target="_blank">
            <StaticImage
              placeholder="tracedSVG"
              src="./../assets/images/sponsors/opensuse logo.png"
              className="sponsors__image"
              alt="h4i hack for inclusion"
            />
          </a>
          <a href="https://coil.com/" target="_blank">
            <StaticImage
              placeholder="tracedSVG"
              src="./../assets/images/sponsors/coil-logo-black.png"
              className="sponsors__image"
              alt="h4i hack for inclusion"
            />
          </a>
        </div>
        <div className="sponsors__row">
          <a href="https://www.appsignal.com/" target="_blank">
            <StaticImage
              placeholder="tracedSVG"
              src="./../assets/images/sponsors/appSignal.png"
              className="sponsors__image"
              alt="h4i hack for inclusion"
            />
          </a>
          <a href="https://balsamiq.com/" target="_blank">
            <StaticImage
              placeholder="tracedSVG"
              src="./../assets/images/sponsors/balsamiq-logo-screen.svg"
              className="sponsors__image"
              alt="h4i hack for inclusion"
            />
          </a>
          <a href="rstudio.com" target="_blank">
            <StaticImage
              placeholder="tracedSVG"
              src="./../assets/images/sponsors/Rstudio logo.png"
              className="sponsors__image"
              alt="h4i hack for inclusion"
            />
          </a>
        </div>
        <div className="sponsors__row">
          <a href="https://www.red-gate.com/" target="_blank">
            <StaticImage
              placeholder="tracedSVG"
              src="./../assets/images/sponsors/redgate logo.png"
              className="sponsors__image"
              alt="h4i hack for inclusion"
            />
          </a>
          <a href="https://fossunited.org/" target="_blank">
            <StaticImage
              placeholder="tracedSVG"
              src="./../assets/images/sponsors/foss-united.png"
              className="sponsors__image"
              alt="h4i hack for inclusion"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
