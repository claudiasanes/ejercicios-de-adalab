import React from 'react';

// constante global que contiene los números
const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    // estado que maneja los numeros elegidos en nuestro componente
    // su valor inicial serán los números de la constante global en elementos li
    this.state = {
      numbersListItems: numbers.map((n) => <li key={n}>{n}</li>),
    };
    this.filterNumberListItems = this.filterNumberListItems.bind(this);
  }

  // función que se encarga de filtrar los números (constante global) para coger sólo aquellos
  // mayores al número introducido en el input y luego actualizar el estado de numbersListItems
  filterNumberListItems = (ev) => {
    const target = ev.target;
    // convierte número tipo string en número
    const number = parseInt(target.value);
    // array que contiene JSX con los elementos de numbers
    // ⚠️ No te olvides de ponerle el key: como los números son únicos (de momento)
    // los voy a utilizar de key
    const numbersFiltered = numbers
      // solo aparecerán los núeros dentro del array que sean mayores que número que yo haya puesto en el value del input
      .filter((n) => n > number)
      .map((n) => {
        return <li key={n}>{n}</li>;
      });

    // xxxxx.filter((n) => {
    //   if (!checked) {
    //     return true;
    //   } else {
    //     return n % 2 === 0
    //   }
    // })
    // actualizar valor del estado numbersListItems
    this.setState({ numbersListItems: numbersFiltered });
  };

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Introduce un número:
            <input type="text" onChange={this.filterNumberListItems} />
          </label>
          {/* <label>
            Filtro pares:
            <input
              type="checkbox"
              id="pairs"
              value="pairs"
              onChange={this.filterNumberListItems}
              checked
            />
          </label> */}
        </form>
        <ul>{this.state.numbersListItems}</ul>
      </div>
    );
  }
}

export default App;

// SOLUCIÓN CONCHA

import React from 'react';

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: numbers,
      filterNumber: '',
      isChecked: false,
    };
    this.handleFilterNumbersList = this.handleFilterNumbersList.bind(this);
    this.isClicked = this.isClicked.bind(this);
    this.inputNumber = React.createRef();
    this.checkEvenNumbers = React.createRef();
  }

  //Funciones manejadoras
  handleFilterNumbersList = (ev) => {
    this.setState({ filterNumber: ev.currentTarget.value });
  };

  isClicked = (ev) => {
    this.setState({ isChecked: ev.currentTarget.checked });
  };

  render() {
    const numbersLi = this.state.numbers
      .filter((number) => {
        const filterNumber = parseInt(this.state.filterNumber);
        // if (isNaN(filterNumber)) {
        //   return true;
        // } else {
        //   return number > parseInt(this.state.filterNumber);
        // }
        return isNaN(filterNumber)
          ? true
          : number > parseInt(this.state.filterNumber);
      })
      .filter((number) => {
        // if (this.state.isChecked === true) {
        //   return number % 2 === 0;
        // } else {
        //   return true;
        // }
        return this.state.isChecked === true ? number % 2 === 0 : true;
      })
      .map((n) => <li key={n}>{n}</li>);

    return (
      <div className="App">
        <form action="">
          <label htmlFor="">
            Escribe un número
            <input
              type="text"
              onChange={this.handleFilterNumbersList}
              ref={this.inputNumber}
            />
            Filtrar por pares:
            <input
              type="checkbox"
              onClick={this.isClicked}
              ref={this.checkEvenNumbers}
            />
          </label>
        </form>
        <ul>{numbersLi}</ul>
      </div>
    );
  }
}

export default App;
