import React from 'react';
import ShowItem from './ShowItem';

class ShowList extends React.Component {
  render() {
    // const { shows } = this.props;
    return (
      <ul className="show-list">
        {this.props.shows.map((show) => {
          return (
            <ShowItem
              key={show.show.id}
              id={show.show.id}
              image={show.show.image}
              name={show.show.name}
              score={show.score}
              status={show.show.status}
            />
          );
        })}
      </ul>
    );
  }
}

export default ShowList;
