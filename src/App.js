import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({ // In non-component classes, you can use the React Hook 'useState' as many times as you want
    persons: [
      { name: 'Thales', age: 28},
      { name: 'Lethicia', age: 29},
      { name: 'Elisa', age: 4}
    ]
  });

  const [ otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);
  
  const switchNameHandler = () => {
    // console.log('was clicked');
    // DON'T DO THIS WAY  setPersonsState.persons[0].name = 'Thales Daniel';
  
    setPersonsState({
      persons: [
        { name: 'Thales Daniel', age: 27},
        { name: 'Lethicia', age: 28},
        { name: 'Elisa', age: 3}
      ]
    })
  };

    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My hobbies: ing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app!'));
}

export default App;