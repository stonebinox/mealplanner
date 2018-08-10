import React, { Component } from 'react';
import { Meal } from './Meal.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Meal Planner</h1>
        <Meal />
      </div>
    );
  }
}

export default App;
