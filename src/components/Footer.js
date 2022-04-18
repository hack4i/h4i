import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import { BsTwitter, BsInstagram } from "react-icons/bs"
import { MdOutlineFacebook } from "react-icons/md"
import { FaLinkedinIn } from "react-icons/fa"
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
        <p>Contact us at : </p>

        <div className="contact__message__links">
          <h1>hey@h4i.tech</h1>
          <div className="social__links">
            <a href="https://twitter.com/hack4inclusion">
              <BsTwitter />
            </a>
            <a href="https://www.facebook.com/hack4inclusion/">
              <MdOutlineFacebook />
            </a>
            <a href="https://www.instagram.com/hack4inclusion/">
              <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/company/hack4inclusion">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="contact__bottom">
        <a
          className="contact__code"
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
        >
          Code of Conduct
        </a>
        <p className="contact__copy">&copy; 2022 H4I</p>
      </div>
    </section>
  )
}
