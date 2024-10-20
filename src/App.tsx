import React, {useState} from 'react';
import './App.css';
import {Input} from "./components/input/Input";
import {Button} from "./components/button/Button";
import styled from "styled-components";

function App() {
    const [title, setTitle] = useState<string>('')
    const [arr, setArr] = useState<string[]>([])
    const [mathOper, setMathOper] = useState<string[]>([])

    const changeTitle = (newTitle: string) => {
        setTitle(newTitle)
    }

    const addSymbol = (number: string) => {
        title === '' && ['-', '+', '*', '/'].includes(number)
        setTitle(title + number)
    }

    const showResult = () => {
        console.log(title.split('').filter(n => ![0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(n))))

    }

    return (
        <StyledApp>
            <Input title={title} changeTitle={changeTitle}/>
            <Buttons>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => <Button key={n} addSymbol={addSymbol} title={`${n}`}/>)}
                <Button addSymbol={addSymbol} title={'+'}/>
                <Button addSymbol={addSymbol} title={'-'}/>
                <Button addSymbol={addSymbol} title={'*'}/>
                <Button addSymbol={addSymbol} title={'/'}/>
                <Button addSymbol={showResult} title={'='}/>
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
