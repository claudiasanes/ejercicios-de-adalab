import React from 'react';
import TextInput from './TextInput';
import MIMIMITranslator from './MIMIMITranslator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      mimimi: '',
    };
    this.handleText = this.handleText.bind(this);
  }
  handleText(event) {
    const userMsg = event.currentTarget.value;
    const traducction = userMsg.replace(/[aeiou]/gi, 'i');

    this.setState({
      message: userMsg,
      mimimi: traducction,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="text_wrapper">
          <h1 className="title">Tiquis Miquis</h1>
          <TextInput
            handleText={this.handleText}
            message={this.state.message}
          />
        </div>
        <MIMIMITranslator mimimi={this.state.mimimi} />
      </div>
    );
  }
}

export default App;
