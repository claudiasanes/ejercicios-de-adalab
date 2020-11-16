import React from 'react';
import './TextInput.scss';

class TextInput extends React.Component {
  render() {
    return (
      <textarea
        className="text"
        name=""
        id=""
        onChange={this.props.handleText}
        value={this.props.message}
      ></textarea>
    );
  }
}
export default TextInput;
