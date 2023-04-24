import React, { useState } from 'react'

const Button2 = () => {
    const [count, setCount] = useState(1)
    return (
        <div className="App">
            <h1>{count}</h1>
            <button type="button" class="btn btn-primary btn-lg" onClick={() => { setCount(42) }}>Button more</button>
        </div>
    )
}
export default Button2

