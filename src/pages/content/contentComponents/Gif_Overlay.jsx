import React from 'react'

function Gif_Overlay({src, alt}) {
  return (
    //overlay to show gif in the center of the screen and in bigger size
    <div>
        <img src={src} alt={alt} className="w-96 "></img>
    </div>
  )
}

export default Gif_Overlay