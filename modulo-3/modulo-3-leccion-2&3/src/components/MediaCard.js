import React from 'react';
import image from '../image.jpg';

// ----- ejercicio 3 de la lección 3

const MediaCard = (props) => {
  return (
    <div className="card">
      <header className="card-header">
        <div className="img-container">
          <img src={props.img} className="img" alt="image" />
        </div>
        <div>
          <p className="card-tittle">{props.name}</p>
          <p className="card-date">{props.date}</p>
        </div>
      </header>
      <main className="card-main">
        <p className="card-text">{props.text}</p>
      </main>
      <footer className="card-footer">
        <span>Leer más...</span>
        <span>
          {props.likes}
          <i class="fas fa-heart"></i>
        </span>
      </footer>
    </div>
  );
};

// ----- ejercicio 2 de la lección 3

// class MediaCard extends React.Component {
//   render() {
//     return (
//       <div className="card">
//         <header className="card-header">
//           <div className="img-container">
//             <img src={this.props.img} className="img" alt="image" />
//           </div>
//           <div>
//             <p className="card-tittle">{this.props.name}</p>
//             <p className="card-date">{this.props.date}</p>
//           </div>
//         </header>
//         <main className="card-main">
//           <p className="card-text">{this.props.text}</p>
//         </main>
//         <footer className="card-footer">
//           <span>Leer más...</span>
//           <span>
//             {this.props.likes}
//             <i class="fas fa-heart"></i>
//           </span>
//         </footer>
//       </div>
//     );
//   }
// }

// ----- ejercicios de la lección 2 y ejercicio 1 de la lacción 3

// class MediaCard extends React.Component {
//   render() {
//     return (
//       <div className="card">
//         <header className="card-header">
//           <div className="img-container">
//             <img src={image} className="img" alt="image" />
//           </div>
//           <div>
//             <p className="card-tittle">Claudia Santaella</p>
//             <p className="card-date">Domingo 19 de julio de 2020</p>
//           </div>
//         </header>
//         <main className="card-main">
//           <p className="card-text">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum...
//         </p>
//         </main>
//         <footer className="card-footer">
//           <span>Leer más...</span>
//           <span>
//             37<i class="fas fa-heart"></i>
//           </span>
//         </footer>
//       </div>
//     );
//   }
// }

export default MediaCard;
