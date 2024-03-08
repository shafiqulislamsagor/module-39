import { useState } from "react"

export default function Rounter(){
    const [count, counterFunction] = useState(0);
    function PlusCount(){
        const newCount = count + 1;
        counterFunction(newCount)
    }
    const MinusCount = () =>{
        const newCount = !count?count + 0: count - 1;
        counterFunction(newCount);
    }
    return(
        <div style={{border:'2px solid gray',borderRadius:'16px',padding:'20px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={PlusCount}>Plus</button>
            <button onClick={MinusCount}>Minus</button>
        </div>
    )
}