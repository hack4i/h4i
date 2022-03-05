import React, { useRef, useState } from "react"
import Header from "./Header"

import { LocomotiveScrollProvider } from "react-locomotive-scroll"

export default function Layout({ children }) {
  const containerRef = useRef()
  return (
    <>
      {/* <LocomotiveScrollProvider
        options={{
          smooth: true,
          direction: "vertical",
          // ... all available Locomotive Scroll instance options
        }}
        containerRef={containerRef}
      > */}
      {/* <Scene /> */}
      <Header />
      {/* <main data-scroll-container ref={containerRef} className="main"> */}
      {children}
      {/* </main> */}
      {/* </LocomotiveScrollProvider> */}
    </>
  )
}
