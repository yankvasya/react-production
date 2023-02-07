import {useState} from "react";
import './style.scss'

export const CountNum = () => {
    const [count, setCount] = useState(0)

    const clickHandler = () => setCount(() => count+1)

    return (
        <>
            <div>{count}</div>
            <button onClick={clickHandler}>Up count</button>
        </>
    )
}