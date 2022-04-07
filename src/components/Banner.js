import React from "react"

function Banner() {
  const title = "🌿 La Maison Jungle!"
  const text = "Ici achetez toutes les plantes dont vous avez toujours rêvé"
  const emojis = " 🌵🌱🎍"
  return (
    <React.Fragment>
      <h1>{title.toUpperCase()}</h1>
      <p>{text + emojis}</p>
    </React.Fragment>
  )
}

export default Banner
