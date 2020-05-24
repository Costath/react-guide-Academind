import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Thales', age: 28},
      { name: 'Lethicia', age: 29},
      { name: 'Elisa', age: 4}
    ]
  };

  switchNameHandler = () => {
    // console.log('was clicked');
    // DON'T DO THIS WAY  this.state.persons[0].name = 'Thales Daniel';

    this.setState({
      persons: [
        { name: 'Thales Daniel', age: 27},
        { name: 'Lethicia', age: 28},
        { name: 'Elisa', age: 3}
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbies: ing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app!'));
  }
}

export default App;
