import React, { Component } from 'react';
import { Button } from '../interfaces/Button';
import styled from 'styled-components';

interface Props {
  label?: string;
}

class MacOSButton extends Component<Props> implements Button {
  handleClick(): void {
    alert('MacOSButton clicked');
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
  & {
    text-decoration: none;
    font-family:".LucidaGrandeUI", "Lucida Grande", "Lucida sans unicode";
    color: black;
    font-size: 11px;
    padding: 1px 7px;
    border:1px solid #9C9C9C;
    margin: 2px 2px;
    display: inline-block;
    background-image: -webkit-linear-gradient(
    #ffffff 0%, #F6F6F6 	30%, 
    #F3F3F3 45%, #EDEDED 	60%, 
    #eeeeee 100%);
    border-radius: 3px;
    cursor: default;
    box-shadow: 0px 0px 1px rgba(0,0,0,0.20);
  }
  &:active {
   border-color:#705ebb;
   background-image:-webkit-linear-gradient(
   #acc5e9 0%, 		#a3c0f2 18%, 
   #61a0ed 39%,		#55a3f2 70%, 
   #82c2f1 91.72%, 	#9AD2F2 100%); 
  box-shadow: 0px 0px 1px rgba(0,0,0,0.65);		
  }
  &.disabled {
  color: #999!important;
  background-image: -webkit-linear-gradient(#fbf8f8 0%, #f0f0f0 30%, #e3e3e3 45%, #d7d7d7 60%, #cbc9c9 100%);
}
`;

export default MacOSButton;
