import React, { Component } from 'react';
import { render } from 'react-dom';
import MacOSFactory from './factories/MacOSFactory';
import WindowsFactory from './factories/WindowsFactory';
import { GUIFactory } from './interfaces/GUIFactory';

class App extends Component {
  windowsFactory: GUIFactory = null;
  macOSFactory: GUIFactory = null;

  constructor(props) {
    super(props);

    this.windowsFactory = new WindowsFactory();
    this.macOSFactory = new MacOSFactory();
  }

  render() {
    return (
      <div>
        {this.windowsFactory.createButton()}
        {this.windowsFactory.createCheckbox()}
        <hr />
        {this.macOSFactory.createButton()}
        {this.macOSFactory.createCheckbox()}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
