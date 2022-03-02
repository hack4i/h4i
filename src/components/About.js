import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { about } from "./../assets/data/main-data.json"

export default function About() {
  return (
    <section className="about">
      <h1 className="about__heading">{about.heading}</h1>
      <div className="about__card">
        <div className="about__card__image">
          <StaticImage
            src="./../assets/images/about/hackathon.png"
            alt="h4i hack4inclusion hackathon"
          />
        </div>
        <div key={about.data[0].subheading} className="about__card__content">
          <h1>{about.data[0].subheading}</h1>
          <p>{about.data[0].detail}</p>
        </div>
      </div>
      <div className="about__card about__card__second">
        <div
          key={about.data[1].subheading}
          className="about__card__content about__card__content__second"
        >
          <h1>{about.data[1].subheading}</h1>
          <p>{about.data[1].detail}</p>
        </div>
        <div className="about__card__image about__card__image__second">
          <StaticImage
            src="./../assets/images/about/bootcamp.png"
            alt="h4i hack4inclusion hackathon"
          />
        </div>
      </div>
      <div className="about__card">
        <div className="about__card__image">
          <StaticImage
            src="./../assets/images/about/conference.png"
            alt="h4i hack4inclusion hackathon"
          />
        </div>
        <div key={about.data[2].subheading} className="about__card__content">
          <h1>{about.data[2].subheading}</h1>
          <p>{about.data[2].detail}</p>
        </div>
      </div>
    </section>
  )
}
