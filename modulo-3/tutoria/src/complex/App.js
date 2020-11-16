import React from 'react';
import ShowList from './ShowList';
import Search from './Search';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleRunning = this.handleRunning.bind(this);
    this.state = {
      showList: [],
      searchValue : '',
      isRunning : false
    }
  }

  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=game')
    .then(result => result.json())
    .then(shows => {
      shows.forEach(singleShow => {
        const myObj = {
          name: singleShow.show.name,
          id: singleShow.show.id,
          status: singleShow.show.status
        } 
        this.setState(prevState => {
          return {
            showList: [...prevState.showList, myObj]
          }
        });
      })
    })
  }

  handleFilter(value) {
    this.setState({searchValue:value})
  }

  handleRunning() {
    this.setState(prevState => {
      return {
        isRunning: !prevState.isRunning
      }
    })
  }

  render() {
    console.log(this.state.isRunning)
    return (
      <div className="App">
        <Search handleRunning = {this.handleRunning} 
                handleFilter = {this.handleFilter} 
                value={this.state.searchValue} 
                isRunning={this.state.isRunning}
        />
        <ShowList isRunning={this.state.isRunning} 
                  shows={this.state.showList} 
                  filteredShow = {this.state.searchValue}
        />
      </div>
    );
  }
}

export default App;
