import React from 'react';

const Show = (props) => {
    return (
      <article className="show">
       {props.singleShow.name}
      </article>
    );
}

export default Show;