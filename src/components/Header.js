import React, { useState, useRef, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

import { navItems } from "./../assets/data/main-data.json"

import gsap from "gsap"
import useWindowWidth from "react-hook-use-window-width"

export default function Header() {
  const headerRef = useRef()
  const [width, setWidth] = useState(useWindowWidth())
  const [navStatus, setNavStatus] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
      if (window.innerWidth < 900) {
        document
          .getElementById("navMenu")
          .classList.add("header__navbar__mobile")
      } else {
        document
          .getElementById("navMenu")
          .classList.remove("header__navbar__mobile")
      }
    })
    gsap.from(headerRef.current, {
      y: "-60px",
      duration: 0.5,
      opacity: 0,
    })
    if (window.innerWidth < 900) {
      document.getElementById("navMenu").classList.add("header__navbar__mobile")
    }
  }, [navStatus])

  const renderIcon = () => {
    if (width <= 900) {
      return navStatus === true ? (
        <AiOutlineClose
          className="header__icon"
          onClick={() => setNavStatus(!navStatus)}
        />
      ) : (
        <AiOutlineMenu
          className="header__icon"
          onClick={() => setNavStatus(!navStatus)}
        />
      )
    } else return null
  }

  return (
    <header ref={headerRef} className="header">
      <div className="header__logo">
        <StaticImage
          className="header__image"
          src="./../assets/images/SVG/h4i_logo.svg"
          alt="hack for inclusion"
          placeholder="tracedSVG"
        />
      </div>

      {renderIcon()}
      <div
        id="navMenu"
        className={`header__navbar ${
          width < 900 ? (navStatus ? "nav__active" : "") : ""
        }`}
      >
        {navItems.map(navItem => (
          <a key={navItem.name} href={navItem.link} className="header__nav">
            {navItem.name}
          </a>
        ))}
      </div>
    </header>
  )
}
