import React from 'react';
import styled from "styled-components";

type InputPropsType = {
    title: string
    changeTitle: (newTitle: string) => void
}

export const Input: React.FC<InputPropsType> = (props) => {
    return (
        <StyledInput value={props.title} onChange={(e) => {
            props.changeTitle(e.currentTarget.value)
        }} disabled/>
    );
};

const StyledInput = styled.input`
  border-radius: 3px;
  width: 130px;
`