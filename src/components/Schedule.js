import React, { useState } from "react"

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1)

  const SCHEDULE = [
    {
      name: "Day 1",
      value: [
        {
          time: "04:00 PM",
          label: `Opening Ceremony`,
        },
        {
          time: "05:00 PM",
          label: `Moralis Workshop`,
        },
        {
          time: "05:00 PM",
          label: `Hacking Starts`,
        },
        {
          time: "08:00 PM",
          label: `Game Night / Meme contest`,
        },
      ],
    },
    {
      name: "Day 2",
      value: [
        {
          time: "11:00 AM",
          label: "Figma Workshop",
        },
        {
          time: "02:00 PM",
          label: "Mid Session Evaluation",
        },
        {
          time: "08:00 PM",
          label: "Game Night / Meme contest",
        },
      ],
    },
    {
      name: "Day 3",
      value: [
        {
          time: "11:00 AM",
          label: "Final Evaluation",
        },
        {
          time: "2:00 PM",
          label: "Top 10 Presentation",
        },
        {
          time: "TBD",
          label: "Result declaration",
        },
      ],
    },
  ]

  return (
    <>
      <section id="schedule">
        <div className="container">
          <h2>Schedule</h2>

          <div className="day-tabs">
            {SCHEDULE.map(({ name }, i) =>
              i + 1 === activeDay ? (
                <button
                  className="tab active"
                  onClick={() => {
                    setActiveDay(i + 1)
                  }}
                  key={i}
                >
                  <span>{name}</span>
                </button>
              ) : (
                <button
                  className="tab"
                  onClick={() => {
                    setActiveDay(i + 1)
                  }}
                  key={i}
                >
                  <span>{name}</span>
                </button>
              )
            )}
          </div>

          <ul className="agenda">
            {SCHEDULE[activeDay - 1].value.map(
              ({ time, label, speakers }, index) => (
                <li className="agenda-item" key={index}>
                  <div className="time">{time}</div>
                  <div className="event">
                    {label}
                    {speakers && (
                      <>
                        <ol>
                          {speakers.map((spk, i) => {
                            return <li key={i}>{spk}</li>
                          })}
                        </ol>
                      </>
                    )}
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </section>{" "}
    </>
  )
}
