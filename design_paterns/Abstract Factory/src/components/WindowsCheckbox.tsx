import React, { Component } from 'react';
import styled from 'styled-components';
import { Checkbox } from '../interfaces/Checkbox';

interface Props {
  label?: string;
}

class WindowsCheckbox extends Component<Props> implements Checkbox {
  handleChange(): void {
    console.log('WindowsCheckbox clicked');
  }

  render(): JSX.Element {
    return (
      <StyledCheckbox>
        <fieldset className="checkbox-switch">
          <legend className="legend-left">{this.props.label || 'Test'}</legend>
          <input type="checkbox" id="c" onChange={this.handleChange} />
          <label
            title="Turn Bluetooth on/off"
            className="checkbox-right"
            htmlFor="c"
          ></label>
        </fieldset>
      </StyledCheckbox>
    );
  }
}

const StyledCheckbox = styled.div`
& {
  width: fit-content;
}
.checkbox-switch input[type="checkbox"] {
  width: 0;
  height: 0;
  position: absolute;
  top: -9999px;
  right: -9999px;
  overflow: hidden;
}
*, *:after, *:before {
  box-sizing: border-box;
}
.checkbox-switch {
  margin: 0;
  padding: 0;
  border: 0;
  margin-bottom: 2.2652rem;
}
.checkbox-switch:after {
  content: "";
  display: table;
  clear: both;
}
.checkbox-switch .checkbox-right {
  float: right;
}
.checkbox-switch legend {
  margin: 0;
  padding: 0;
  display: block;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.3rem;
  margin-bottom: 1.618rem;
}
.checkbox-switch legend.legend-left {
  margin: 0 1.618rem 0 0;
  float: left;
}
.checkbox-switch input[type="checkbox"] + label {
  user-select: none;
  line-height: 1.3rem;
}
.checkbox-switch input[type="checkbox"] + label:before {
  width: 2.3rem;
  height: 1.3rem;
  font-family: Arial, sans-serif;
  display: inline-block;
  content: '•';
  transition: all 0.2s ease;
  text-align: left;
  font-size: 2.25rem;
  line-height: 1rem;
  float: left;
  overflow: hidden;
  color: black;
  border: 0.1949902505rem solid black;
  border-radius: 0.65rem;
  margin: auto 0;
}
@media screen and (min-width: 25rem) {
  .checkbox-switch input[type="checkbox"] + label:before {
    margin-right: 0.5rem;
 }
}
.checkbox-switch input[type="checkbox"] + label:after {
  display: none;
}
@media screen and (min-width: 25rem) {
  .checkbox-switch input[type="checkbox"] + label:after {
    content: 'Off';
    width: 1.75rem;
    display: inline-block;
 }
}
.checkbox-switch input[type="checkbox"]:checked + label:before {
  border-color: #00ac64;
  background: #00ac64;
  text-align: right;
  color: white;
}
.checkbox-switch input[type="checkbox"]:checked + label:after {
  content: 'On';
}
.checkbox-switch input[type="checkbox"] + label:active:before, .checkbox-switch input[type="checkbox"]:checked + label:active:before {
  border-color: #808b8d;
  background: #808b8d;
  color: white;
}
:root {
  font-size: 16px;
  line-height: 1.618;
  font-family: Open sans, sans-serif;
  color: black;
}
@media screen and (min-width: 25rem) {
  :root {
    font-size: 18px;
 }
}
body {
  max-width: 25rem;
  margin: 3rem auto;
}
fieldset {
  margin: 0;
  padding: 0;
  border: 0;
  padding: 1rem;
}
fieldset legend {
  margin: 0;
  padding: 0;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 300;
  display: block;
}
a {
  text-decoration: none;
  font-weight: 500;
  color: inherit;
  transition: all 0.2s ease;
}
a:hover {
  text-decoration: underline;
  color: #00ac64;
}
`;

export default WindowsCheckbox;
