import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import pranavImage from "./../assets/images/mentors/Pranav Agarwal.jpg"
import deepanshuImage from "./../assets/images/mentors/Deepanshu Udhwani.jpeg"
import chitraImage from "./../assets/images/mentors/Chitra Singla.jpg"
import mukulImage from "./../assets/images/mentors/Mukul Kumar.png"
import rashikaImage from "./../assets/images/mentors/rashika qureshi.jpg"
import adityaImage from "./../assets/images/mentors/Aditya Sharma.jpg"

const SPEAKERS = [
  {
    name: "Pranav Agarwal",
    image: pranavImage,
    url: "https://www.linkedin.com/in/pranav-agarwal-579363166",
    title: "SDE at Headout",
  },
  {
    name: "Deepanshu Udhwani",
    image: deepanshuImage,
    url: "https://www.linkedin.com/in/deepanshu-udhwani/",
    title: "Software Developer at MakeMyTrip",
  },
  {
    name: "Chitra Singla",
    image: chitraImage,
    url: "https://www.linkedin.com/in/chitrasingla/",
    title: "Incoming SWE at Google'22, Mentor at Codess Cafe",
  },
  {
    name: "Mukul kumar ",
    image: mukulImage,
    url: "https://www.linkedin.com/in/mukulcode/",
    title: "Software Engineer at Amazon",
  },
  {
    name: "RASHIKA QURESHI ",
    image: rashikaImage,
    url: "https://www.linkedin.com/in/rashika-qureshi",
    title: "MTS at VMware",
  },
  {
    name: "Aditya Sharma",
    image: adityaImage,
    url: "https://www.linkedin.com/in/sharmaaditya570191",
    title: "Software Engineer at Cred",
  },
]

const SpeakerBox = ({ name, image, url, title }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <motion.div
        className="speaker-box"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <a href={url} target="_blank" rel="noreferrer">
          <div className="flex-all-center" style={{ flexDirection: "column" }}>
            <img className="speaker-img" src={image}></img>
            <h3 style={{ fontSize: 26 }}>{name}</h3>
            <p>{title}</p>
          </div>
        </a>
      </motion.div>
    </>
  )
}

const Speakers = () => {
  return (
    <section id="speakers">
      <div className="container">
        <h2>Speakers, Mentors and Judges</h2>
        <div className="speakers-grid">
          {SPEAKERS.map(({ name, image, url, title }, i) => {
            return (
              <SpeakerBox
                name={name}
                image={image}
                url={url}
                title={title}
                key={i}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Speakers
