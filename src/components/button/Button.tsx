import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    title: string
    addSymbol: (number: string) => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <StyledButton onClick={()=>props.addSymbol(props.title)}>
            {props.title}
        </StyledButton>
    );
};

const StyledButton = styled.button`
  background-color: #4b4545;
  color: white;
  font-weight: bold;
  width: 33px;
  height: 33px;
  flex-grow: 1;
`