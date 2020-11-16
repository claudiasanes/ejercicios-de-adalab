import React, { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(20);
  const handleAge = () => {
    setAge(age + 1);
  };

  return (
    <div className="App">
      <p>Hoy tengo {age} años de edad</p>
      <button type="button" onClick={handleAge}>
        Hazme + vieja
      </button>
    </div>
  );
}

export default App;
