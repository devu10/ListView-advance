import React from 'react'
import man from "../assets/man.png"
import woman from "../assets/woman.png"

export const MaleAvatar = () => {
  return (
    <div><img src={man} alt="man image" width="50ps"/></div>
  )
}
export const FemaleAvatar = () => {
  return (
    <div><div><img src={woman} alt="woman image"width="50ps"/></div></div>
  )
}
