import React from 'react';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isCollapsibleOpen: false };

    this.handleCollapsibleClick = this.handleCollapsibleClick.bind(this);
  }
  handleCollapsibleClick = (ev) => {
    this.setState({ isCollapsibleOpen: !this.state.isCollapsibleOpen });
  };
  render() {
    return (
      <li onClick={this.handleCollapsibleClick}>
        <div>
          <h2>{this.props.name}</h2>
          <span>
            <i></i>
          </span>
        </div>
      </li>
    );
  }
}
