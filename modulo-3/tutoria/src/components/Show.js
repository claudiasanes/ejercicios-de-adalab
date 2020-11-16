import React from 'react';

const Show = (props) => {
  return(
    <article>
      <h1>{props.showObj.name}</h1>
      <img src={props.showObj.image.medium} alt={props.showObj.name}/>
    </article>
  )
}

export default Show