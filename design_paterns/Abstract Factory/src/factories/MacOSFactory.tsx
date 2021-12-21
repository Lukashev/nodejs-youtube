import React, { Component } from 'react';
import MacOSButton from '../components/MacOSButton';
import MacOSCheckbox from '../components/MacOSCheckbox';

import { Button } from '../interfaces/Button';
import { Checkbox } from '../interfaces/Checkbox';

import { GUIFactory } from '../interfaces/GUIFactory';

class MacOSFactory implements GUIFactory {
  createButton(): Button & React.Element {
    return <MacOSButton />;
  }

  createCheckbox(): Checkbox & React.Element {
    return <MacOSCheckbox />;
  }
}

export default MacOSFactory;
