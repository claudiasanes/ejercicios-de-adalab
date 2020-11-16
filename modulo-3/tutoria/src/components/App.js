import React from 'react';
import './App.css';
import ShowList from './ShowList';
import Search from './Search';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.state = {
      showList : [],
      inputValue : ''
    }
  }


  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=game')
      .then(response => response.json())
      .then(data => {
        this.setState({
          showList:data
        })
      })
  }

  handleChangeInput(inputValueFromChild) {
    //console.log('hola me ejecutan desde otro sitio')
    this.setState({
      inputValue: inputValueFromChild
    })
  }

  render() {
    return (
      <div className="App">
        <Search handleChangeInput={this.handleChangeInput} inputValue = {this.state.inputValue} />
        <ShowList showArray = {this.state.showList} />
      </div>
    );
  }
}

export default App;
