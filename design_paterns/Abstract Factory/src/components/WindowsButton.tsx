import React, { Component } from 'react';
import { Button } from '../interfaces/Button';
import styled from 'styled-components';

interface Props {
  label?: string;
}

class WindowsButton extends Component<Props> implements Button {
  handleClick(): void {
    alert('WindowsButton clicked');
  }

  render(): JSX.Element {
    return (
      <StyledButton onClick={this.handleClick}>
        <span>
          <span>{this.props.label || 'Submit'}</span>
        </span>
      </StyledButton>
    );
  }
}

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;   

  & span {
    display: block;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    border: 1px solid #999;
    padding: 0;
    background: #F0F0F0;
    background: -moz-linear-gradient(top,  #F0F0F0 50%, #D4D4D4 50%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(50%,#F0F0F0), color-stop(50%,#D4D4D4));
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#F0F0F0', endColorstr='#D4D4D4',GradientType=0 );
  }

  & span span {
    border: 1px solid #fff;
    padding: 10px;
  }
`;

export default WindowsButton;
