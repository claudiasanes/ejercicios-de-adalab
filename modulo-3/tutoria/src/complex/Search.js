import React from 'react';

const Search = (props) => {
  
  const filterValue = (evt) => {
    props.handleFilter(evt.target.value)
  }

  const filterRunning = () => {
    props.handleRunning()
  }

    return <div>
      <input type='text' onChange={filterValue} name='search' value={props.value}/>
      <input type='checkbox' onChange={filterRunning} name='running' value='isRunning' checked={props.isRunning}/>
    </div>
}

export default Search;