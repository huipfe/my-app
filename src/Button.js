import React, {useState} from 'react'

const Button = () => {

const [count, setCount] = useState(0);




    const handleClick = () => {
        setCount(count +1);
    };

return (
        <>
        <p>Compteur {count}</p>
            <button class="btn btn-primary" onClick={handleClick}>Clique ici</button>
        </>
    )
}

export default Button