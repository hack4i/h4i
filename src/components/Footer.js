import React, { useRef, useEffect } from "react"
import Layout from "./Layout"
import gsap from "gsap"

export default function Footer() {
  const contactRef = useRef()

  const q = gsap.utils.selector(contactRef)
  const tl = useRef()
  useEffect(() => {
    tl.current = gsap
      .timeline()
      .from(q(".contact__message"), {
        x: "-200px",
        opacity: 0,
        duration: 1.2,
      })
      .from(q(".contact__form"), {
        x: "200px",
        opacity: 0,
        duration: 1.2,
        delay: -1,
      })
  }, [])

  return (
    <section ref={contactRef} id="contact" className="contact">
      <div className="contact__message">
        <p>For any further queries drop a Message, or reach out to us below!</p>

        <span>hey@h4i.tech</span>

        <a
          className="contact__code"
          href="https://devfolio.co/code-of-conduct"
          target="_blank"
        >
          Code of Conduct
        </a>
        <p className="contact__copy">&copy; 2022 H4I</p>
      </div>
    </section>
  )
}
