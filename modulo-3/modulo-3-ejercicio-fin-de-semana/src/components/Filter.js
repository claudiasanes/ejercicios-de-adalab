import React from 'react';

class Filter extends React.Component {
  render() {
    const getInputValue = (evt) => {
      this.props.handleChangeInput(evt.target.value);
    };
    return (
      <form>
        <label htmlFor="search">Search for a show</label>
        <input
          type="text"
          id="search"
          placeholder="The Simpsons"
          value={this.props.inputValue}
          onChange={getInputValue}
        />
        <label htmlFor="running-filter">
          <input type="checkbox" id="running-filter" checked />
          Show only currently running shows
        </label>
      </form>
    );
  }
}

export default Filter;
