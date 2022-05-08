import React from "react"
import prize_first_front from "./../assets/images/prizes/prizes_cards_1.jpg"
import prize_second_front from "./../assets/images/prizes/prizes_cards_2.jpg"
import prize_third_front from "./../assets/images/prizes/prizes_cards_3.jpg"
import prize_blockchain from "./../assets/images/prizes/prizes_cards_blockchain.jpg"
import prize_design from "./../assets/images/prizes/prizes_cards_design.jpg"
import prize_fresher from "./../assets/images/prizes/prizes_cards_fresher.jpg"
import prize_best from "./../assets/images/prizes/prizes_cards_IIITA.jpg"
import prize_celo_front from "./../assets/images/prizes/prizes_cards_sponsors_celo.jpg"
import prize_celo_back from "./../assets/images/prizes/prizes_cards_sponsors_celo_back.jpg"
import prize_filecoin_front from "./../assets/images/prizes/prizes_cards_sponsors_filecoin.jpg"
import prize_filecoin_back from "./../assets/images/prizes/prizes_cards_sponsors_filecoin_back.jpg"
import prize_polygon_front from "./../assets/images/prizes/prizes_cards_sponsors_polygon.jpg"
import prize_polygon_back from "./../assets/images/prizes/prizes_cards_sponsors_polygon_back.jpg"
import prize_tezos_front from "./../assets/images/prizes/prizes_cards_sponsors_tezos.jpg"
import prize_tezos_back from "./../assets/images/prizes/prizes_cards_sponsors_tezos_back.jpg"

const PRIZES = [
  {
    front: prize_first_front,
    back: prize_first_front,
    href: "",
  },
  {
    front: prize_second_front,
    back: prize_second_front,
    href: "",
  },
  {
    front: prize_third_front,
    back: prize_third_front,
    href: "",
  },
  {
    front: prize_blockchain,
    back: prize_blockchain,
    href: "",
  },
  {
    front: prize_design,
    back: prize_design,
    href: "",
  },
  {
    front: prize_fresher,
    back: prize_fresher,
    href: "",
  },
  {
    front: prize_best,
    back: prize_best,
    href: "",
  },
  {
    front: prize_celo_front,
    back: prize_celo_back,
    href: "https://celo.org/",
  },
  {
    front: prize_filecoin_front,
    back: prize_filecoin_back,
    href: "https://filecoin.io/",
  },
  {
    front: prize_polygon_front,
    back: prize_polygon_back,
    href: "https://polygon.technology/",
  },
  {
    front: prize_tezos_front,
    back: prize_tezos_back,
    href: "https://tezos.com/",
  },
]

const prizeBox = prize => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={prize.front} />
        </div>
        <div className="flip-card-back">
          <a href={prize.href}>
            <img src={prize.back} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Prizes() {
  return (
    <>
      <section id="prizes" className="accent">
        <div className="container">
          <h2>Prizes</h2>

          <div className="prizes-grid">
            <div className="prizes-primary">{PRIZES.map(prizeBox)}</div>

            <div className="prizes-inner">
              <div className="prizes-secondary"></div>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  )
}
