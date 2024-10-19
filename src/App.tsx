import React, {useState} from 'react';
import './App.css';
import {Input} from "./components/input/Input";
import {Button} from "./components/button/Button";
import styled from "styled-components";

function App() {
    const [title, setTitle] = useState('')

    const changeTitle = (newTitle: string) => {
        setTitle(newTitle)
    }

    const addSymbol = (number: string) => {
        setTitle(title + number)
    }

    return (
        <StyledApp>
            <Input title={title} changeTitle={changeTitle}/>
            <Buttons>
                <Button addSymbol={addSymbol} title={'1'}/>
                <Button addSymbol={addSymbol} title={'2'}/>
                <Button addSymbol={addSymbol} title={'3'}/>
                <Button addSymbol={addSymbol} title={'4'}/>
                <Button addSymbol={addSymbol} title={'5'}/>
                <Button addSymbol={addSymbol} title={'6'}/>
                <Button addSymbol={addSymbol} title={'7'}/>
                <Button addSymbol={addSymbol} title={'8'}/>
                <Button addSymbol={addSymbol} title={'9'}/>
                <Button addSymbol={addSymbol} title={'0'}/>
                <Button addSymbol={addSymbol} title={'+'}/>
                <Button addSymbol={addSymbol} title={'-'}/>
                <Button addSymbol={addSymbol} title={'*'}/>
                <Button addSymbol={addSymbol} title={'/'}/>
                <Button addSymbol={addSymbol} title={'='}/>
                <Button addSymbol={addSymbol} title={'<='}/>
            </Buttons>
        </StyledApp>
    );
}

const Buttons = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 3px;
  flex-wrap: wrap;
  width: 144px;
`

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App;
