import React, { Component } from 'react';

import { Button } from '../interfaces/Button';
import { Checkbox } from '../interfaces/Checkbox';

import WindowsButton from '../components/WindowsButton';
import WindowsCheckbox from '../components/WindowsCheckbox';

import { GUIFactory } from '../interfaces/GUIFactory';

class WindowsFactory implements GUIFactory {
  createButton(): Button & React.Element {
    return <WindowsButton />;
  }

  createCheckbox(): Checkbox & React.Element {
    return <WindowsCheckbox />;
  }
}

export default WindowsFactory;
