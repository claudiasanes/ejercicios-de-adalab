import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState, props) => {
      let nextColor = prevState.color === 'red' ? 'blue' : 'red';

      return {
        color: nextColor,
      };
    });
  }
  render() {
    return (
      <div
        className={`square ${this.state.color}`}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Square;
