import React, { Component } from 'react';
import styled from 'styled-components';
import { Checkbox } from '../interfaces/Checkbox';

interface Props {
  label?: string;
}

class MacOSCheckbox extends Component<Props> implements Checkbox {
  handleChange(): void {
    console.log('MacOSCheckbox clicked');
  }

  render(): JSX.Element {
    return (
      <StyledCheckbox onChange={this.handleChange}>
        <label>
          <input type="checkbox" />
          <span className="cbx">
            <svg width="12px" height="11px" viewBox="0 0 12 11">
              <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
            </svg>
          </span>
          <span>{this.props.label || 'Test'}</span>
        </label>
      </StyledCheckbox>
    );
  }
}

const StyledCheckbox = styled.div`

  .cbx {
    position: relative;
    display: block;
    float: left;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    background-color: #606062;
    background-image: linear-gradient(#474749, #606062);
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -1px 1px rgba(0,0,0,0.15);
    transition: all 0.15s ease;
  }

  .cbx svg {
    position: absolute;
    top: 3px;
    left: 3px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #fff;
    stroke-width: 2;
    stroke-dasharray: 17;
    stroke-dashoffset: 17;
    transform: translate3d(0, 0, 0);
  }

  .cbx + span {
    float: left;
    margin-left: 6px;
  }

  & {
    margin: auto;
    user-select: none;
  }

  & label {
    display: inline-block;
    margin: 10px;
    cursor: pointer;
  }

  & input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }

  & input[type="checkbox"]:checked + .cbx {
    background-color: #606062;
    background-image: linear-gradient(#255cd2, #1d52c1);
  }

  & input[type="checkbox"]:checked + .cbx svg {
    stroke-dashoffset: 0;
    transition: all 0.15s ease;
  }
`;

export default MacOSCheckbox;
