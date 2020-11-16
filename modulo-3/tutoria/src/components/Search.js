import React from 'react';

const Search = (props) => {
  console.log(props)
  
  const getInputValue = (evt) => {
    props.handleChangeInput(evt.target.value)
  }


  return(
    <input onChange={getInputValue} type="text" name="search" value={props.inputValue}/>

  )
}

export default Search;