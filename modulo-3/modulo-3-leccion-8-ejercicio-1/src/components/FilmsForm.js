import React from 'react';

class FilmsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      languaje: '',
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(ev) {
    const target = ev.currentTarget;
    this.props.handleFormChange(target);
  }

  render() {
    return (
      <form>
        <h2>Films Form</h2>
        <label htmlFor="name">
          Nombre:
          <input
            id="name"
            type="text"
            name="name"
            placeholder="película"
            value={this.state.name}
            OnChange={this.handleFormChange}
          />
        </label>
        <label htmlFor="description">
          Descripción:
          <textarea
            id="description"
            name="description"
            placeholder="Escribe aquí la descripción de la película"
            value={this.state.description}
            onChange={this.handleFormChange}
          ></textarea>
        </label>
        <label htmlFor="language">
          {' '}
          Idioma:
          <select
            name="language"
            value={this.state.languaje}
            onChange={this.handleFormChange}
          >
            <option value="">...</option>
            <option value="Español">Español</option>
            <option value="Ingles">Ingles</option>
            <option value="Portugués">Portugués</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FilmsForm;
