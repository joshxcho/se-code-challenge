import React from 'react'

const DisplayComic = ({image, alt, title}) => (
  <img className="latestImage" src={image} alt={title} title={alt} ></img>
)

export default DisplayComic