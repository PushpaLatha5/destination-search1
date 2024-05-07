import { React } from "react"
import "./Card.css"

export default function Card({placeDetails}) {

  const { img, text } = placeDetails

  return (
    <>
    <div className="card">
      <img src={img} alt="img" className="card-img" />
      <p className="para">{text}</p>
    </div>
    </>
  )
}
