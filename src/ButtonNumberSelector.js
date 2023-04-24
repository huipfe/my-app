
import React, { useState } from "react";

function ButtonNumberSelector() {
    const [number, setNumber] = useState(0);

    function increment() {
        setNumber(number + 1);
    }

    function decrement() {
        setNumber(number - 1);
    }

    return (
        <div>
            <button type="button" class="btn btn-secondary btn-lg" onClick={decrement}>-</button>
            <span class="m-3 fs-1">{number}</span>
            <button type="button" class="btn btn-warning btn-lg" onClick={increment}>+</button>
        </div>
    );
}

export default ButtonNumberSelector;


