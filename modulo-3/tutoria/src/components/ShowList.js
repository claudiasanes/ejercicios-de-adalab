import React from 'react';
import Show from './Show';

const ShowList = (props) => {
  console.log(props);
  
  const showsRendered = props.showArray
    .map(singleShow => {
      return <li key={singleShow.show.id}>
        <Show showObj = {singleShow.show}/>
      </li>
    })


 
  return(
    <ul>
      {showsRendered}
    </ul>
  )
}

export default ShowList
