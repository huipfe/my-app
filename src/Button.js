import React, {useState} from 'react'
// import { PropTypes } from 'react';
const Button = () => {

const [count, setCount] = useState(0);




    const handleClick = () => {
        setCount(count +1);
    };

return (
    <div>
        <>
        <p>Compteur {count}</p>
            <button class="btn btn-primary" onClick={handleClick}>Clique ici</button>
        </>

        {/* <button type='button'>
            {count}
        </button> */}
    </div>
    )
}

// Button.prototype = {
//     count: PropTypes.number.isRequired,
//     setCount: PropTypes.func.isRequired
// };

export default Button