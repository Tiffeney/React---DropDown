import React, { Component } from 'react';
import DropDown from './components/Dropdown/Dropdown'

let cars = ["Ford", "Toyota", "Mazda", "BMW", "Mercedes"]
// Step 2 line 5

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <DropDown cars={cars}/>
            {/* Line 12 Step 1 */}
        </header>
      </div>
    );
  }
}

export default App;
