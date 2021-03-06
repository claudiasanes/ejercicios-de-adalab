import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    // siempre que tengamos una función manejadora debemos poner esta línea con el bing y el this en el constructor
    this.handleInboxClick = this.handleInboxClick.bind(this);
    this.handleTrashClick = this.handleTrashClick.bind(this);
    this.handleFilterText = this.handleFilterText.bind(this);
  }

  handleInboxClick(ev) {
    ev.preventDefault();
    console.log('El elemento clickado es', ev.currentTarget);
  }

  handleTrashClick(ev) {
    ev.preventDefault();
    console.log('El elemento clickado es', ev.currentTarget);
  }

  handleFilterText(ev) {
    this.props.pepino(ev.currentTarget.value);
  }

  renderLogo() {
    return (
      <div>
        <h1 className="title">
          <span className="fas fa-envelope-open-text"></span>
          Gmail
        </h1>
      </div>
    );
  }

  renderForm() {
    return (
      <form className="text-align-right">
        <button
          className="form__btn"
          id="inbox"
          onClick={this.handleInboxClick}
        >
          <span className="fas fa-inbox"></span>
          Recibidos
        </button>
        <button
          className="form__btn"
          id="trash"
          onClick={this.handleTrashClick}
        >
          <span className="fas fa-trash"></span>
          Papelera
        </button>
        <input
          className="form__input-text"
          type="text"
          placeholder="Buscar un correo"
          onChange={this.handleFilterText}
        />
      </form>
    );
  }

  render() {
    return (
      <header className="col2 mb-1">
        {this.renderLogo()}
        {this.renderForm()}
      </header>
    );
  }
}

export default Header;

// esto es lo mismo que estamos haciendo en el evento de arriba si estuviéramos usando JS normal

// const button = document.querySelector('.form_btn');

// function handleInboxClick(ev) {
//   ev.preventDefault();
//   console.log('Me han clickado');
// }

// button.addEventListener('click', handleInboxClick)
