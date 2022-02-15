import React, { useRef, useEffect } from "react"

import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"

export default function Themes() {
  const themeRef = useRef()
  useEffect(() => {
    gsap.from(themeRef.current, {
      y: "200px",
      opacity: 0,
      duration: 1.2,
    })
  }, [])

  return (
    <section ref={themeRef} id="themes" className="themes">
      <h1>Themes</h1>
      <div className="themes__container">
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/0.png"
          className="themes__image"
          alt="h41 hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/1.png"
          className="themes__image"
          alt="h41 hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/2.png"
          className="themes__image"
          alt="h41 hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/3.png"
          className="themes__image"
          alt="h41 hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/4.png"
          className="themes__image"
          alt="h41 hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/5.png"
          className="themes__image"
          alt="h41 hack for inclusion"
        />
        <StaticImage
          placeholder="tracedSVG"
          src="./../assets/images/6.png"
          className="themes__image"
          alt="h41 hack for inclusion"
        />
      </div>
    </section>
  )
}
