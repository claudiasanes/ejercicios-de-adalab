import React from 'react';
import './App.css';

class Halfpage extends React.Component {
  render() {
    return <div className="half-page">{this.props.children}</div>;
  }
}

export default Halfpage;
