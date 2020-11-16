import React from 'react';

const defaultImg = 'https://dummyimage.com/215x300/000/fff.png&text=';

class ShowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`show-info show-${this.props.id}`}>
        <img
          src={this.props.image ? this.props.image.medium : defaultImg}
          className="show-image"
          alt={this.props.name}
        />
        <h2 className="show-title">{this.props.name}</h2>
        <span className="show-score">{this.props.score}</span>
        <span className="show-status">{this.props.status}</span>
      </div>
    );
  }
}

export default ShowItem;
