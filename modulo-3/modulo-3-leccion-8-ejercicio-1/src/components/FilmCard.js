import React from 'react';

class FilmCard extends React.Component {
  render() {
    return (
      <div className="film-card">
        <h3>Título de la película:</h3>
        <p>{this.props.name}</p>
        <h3>Descripción:</h3>
        <p>{this.props.description}</p>
        <h3>Idioma:</h3>
        <p>{this.props.language}</p>
      </div>
    );
  }
}
FilmCard.defaultProps = {
  name: 'Film name.',
  description: 'Film description.',
  language: 'Film language.',
};
export default FilmCard;
