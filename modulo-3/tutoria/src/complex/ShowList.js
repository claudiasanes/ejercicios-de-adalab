import React from 'react';
import Show from './Show';


const ShowList = (props) => {
  
   const renderShows = props.shows
    .filter(show => !props.isRunning || (props.isRunning && show.status === 'Running'))
    .filter(show => show.name.includes(props.filteredShow))
    .map(show => {
    return <li key={show.id}>
      <Show singleShow={show}/>
    </li>
   })

   console.log(props)

    return (
      <ul className="show-list">
        {renderShows}
      </ul>
    );
}

export default ShowList;