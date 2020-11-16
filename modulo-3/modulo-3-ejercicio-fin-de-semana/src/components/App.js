import React from 'react';
import getDataFromApi from '../services/getDataFromApi';
import Filter from './Filter';
import ShowList from './ShowList';
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    (this.handleChangeInput = this.handleChangeInput).bind(this);
    this.state = {
      shows: [],
      searchShow: '',
      inputValue: '',
    };
  }

  componentDidMount() {
    getDataFromApi().then((data) => {
      this.setState({ shows: data });
    });
  }

  handleChangeInput(inputValueFromChild) {
    this.setState({
      inputValue: inputValueFromChild,
    });
  }

  render() {
    return (
      <div className="App">
        <Filter
          inputValue={this.state.inputValue}
          handleChangeInput={this.handleChangeInput}
        />
        <ShowList shows={this.state.shows} />
      </div>
    );
  }
}

export default App;
