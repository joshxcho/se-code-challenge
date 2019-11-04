import React from 'react'

const DisplayComic = ({image, alt, title, value}) => (
  <img className={value} src={image} alt={title} title={alt} ></img>
)

export default DisplayComic