import React, { useState } from 'react';

const createInitialState = () => {
    const age = new Date().getFullYear() - 1992;
    return age;
};

const App = () => {
  const [name, setName] = useState('Jermaine');
  const [age, setAge] = useState(createInitialState());

  const handleClick = () => {
    setName((prevName) => prevName + 'o');
    setName((prevName) => prevName + 'o');

    console.log(name); 
  };

  const handleBirthday = () => {
    setAge((prevAge) => prevAge + 1);
  };

  return (
    <div className="App">
      <h1>React Hooks Exercise Starter</h1>
      <p>My name is {name}</p>
      <p>My age is {age}</p>
      <button onClick={handleClick}>Add &apos;o&apos;</button>
      <button onClick={handleBirthday}>Celebrate Birthday</button>
    </div>
  );
};

export default App;
