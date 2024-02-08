import { useState } from "react";

export const  CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);
    const counterIncrement = () => {
        setCounter(c => c+1);
        console.log('click' + counter)
    }
    return <>
        <h2>El valor del contador es {counter}</h2>
        <button onClick={() =>{
            counterIncrement()
        }}>Incremar</button>
    </>
}