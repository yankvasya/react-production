import {useState} from "react";
import classes from './style.module.scss'

export const CountNum = () => {
    const [count, setCount] = useState(0)

    const clickHandler = () => setCount(() => count+1)

    return (
        <>
            <div>{count}</div>
            <button className={classes.button} onClick={clickHandler}>Up count</button>
        </>
    )
}