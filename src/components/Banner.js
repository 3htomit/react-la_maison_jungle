import React from "react"
import '../styles/Banner.css';
import logo from '../assets/logo.png'

function Banner() {
  const title = "La Maison Jungle!"
  const text = "Ici achetez toutes les plantes dont vous avez toujours rêvé"
  const emojis = " 🌵🌱🎍"
  return (
      <div className="lmj-banner">
        <div className="lmj-title">
          <img src={logo} alt="La Maison Jungle logo" className="lmj-logo" />
          <h1>{title.toUpperCase()}</h1>
        </div>
        <p>{text + emojis}</p>
      </div>
  )
}

export default Banner
