import React, { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(20);
  const handleAge = () => {
    setAge(age + 1);
  };

  const [presents, setPresents] = useState(20);
  const handlePresents = () => {
    setPresents(presents + 1);
  };

  return (
    <div className="App">
      <p>Hoy tengo {age} años de edad</p>
      <button type="button" onClick={handleAge}>
        Hazme + vieja
      </button>
      <p>Hoy tengo {presents} regalos</p>
      <button type="button" onClick={handlePresents}>
        Dame + regalos
      </button>
    </div>
  );
}

export default App;
