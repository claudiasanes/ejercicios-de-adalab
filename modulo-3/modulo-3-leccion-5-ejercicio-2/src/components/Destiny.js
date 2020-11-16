import React from 'react';

const city = ['Buenos Aires', 'Sydney', 'Praga', 'Boston', 'Tokio'];

const listenerSelect = (ev) => {
  alert(`Tu destino es viajer a ${ev.target.value}`);
};

const options = function (i) {
  return <option>{i}</option>;
};

const selectButton = (
  <select onChange={listenerSelect}>{city.map(options)}</select>
);

class Destiny extends React.Component {
  render() {
    return selectButton;
  }
}

export default Destiny;
