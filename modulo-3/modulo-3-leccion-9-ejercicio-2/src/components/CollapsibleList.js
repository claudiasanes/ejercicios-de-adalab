import React from 'react';
import data from '../data/data.json';
import Collapsible from './Collapsible';

class CollapsibleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: data,
    };
  }
  render() {
    const collapsibleItems = this.state.palettes.map((item) => {
      return (
        <Collapsible key={item.name} name={item.name} source={item.from} />
      );
    });
    return <ul>{collapsibleItems}</ul>;
  }
}

export default CollapsibleList;
