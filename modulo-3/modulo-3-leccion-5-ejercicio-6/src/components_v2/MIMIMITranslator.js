import React from 'react';
import './MIMIMITranslator.scss';

class MIMIMITranslator extends React.Component {
  render() {
    return (
      <div className="container">
        <p className="translation">{this.props.mimimi}</p>
      </div>
    );
  }
}
export default MIMIMITranslator;
