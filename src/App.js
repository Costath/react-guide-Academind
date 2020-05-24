import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Thales', age: 28},
      { name: 'Lethicia', age: 29},
      { name: 'Elisa', age: 4}
    ],
    otherState: 'some other value'
  }
  
  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DON'T DO THIS WAY  setthis.state.persons[0].name = 'Thales Daniel';
  
    this.setState({
      persons: [
        { name: newName, age: 27},
        { name: 'Lethicia', age: 28},
        { name: 'Elisa', age: 3}
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler('Thales Daniel')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, 'Thales Costa')} >My hobbies: ing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;