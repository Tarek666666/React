import { useState } from "react";

export function Button({ setCount, title }) {
    const buttonStyle = {
        color: "red",
        backgroundColor: "lightblue",
        fontWeight: "bold",
        cursor: "pointer",
    };
    return (
        <div className='button'>
            <button onClick={setCount} style={buttonStyle}>{title}</button>
        </div>
    );
}

export function Count({ count }) {
    return (
        <div className='count'>
            <p>{count}</p>
        </div>
    );
}

export function Counter() {
    const [count, setCount] = useState(() => 0);
    const feedBack = count <= 10 ? "Keep counting ...." : "it's already higher than 10 !!!";
    const incrementOne = () => setCount((prevVal) => prevVal + 1);
    const decrementOne = () => setCount((prevVal) => prevVal - 1);

    return (
        <div className='counter'>
            <Button setCount={incrementOne} title={"Add One"} />
            <Button setCount={decrementOne} title={"Sub One"} />
            <Count count={count} />
            <p>{feedBack}</p>
        </div>
    );
}
