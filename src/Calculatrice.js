import React, { useState } from "react";

function Calculatrice() {
    const [nombre1, setNombre1] = useState(0);
    const [nombre2, setNombre2] = useState(0);
    const [resultat, setResultat] = useState(0);
    const [operation, setOperation] = useState("+");

    const handleChangeNombre1 = (event) => {
        setNombre1(parseFloat(event.target.value));
    };

    const handleChangeNombre2 = (event) => {
        setNombre2(parseFloat(event.target.value));
    };

    const handleClickAddition = () => {
        setResultat(nombre1 + nombre2);
        setOperation("+");
    };

    const handleClickSoustraction = () => {
        setResultat(nombre1 - nombre2);
        setOperation("-");
    };

    return (
        <div>
            <h1>Calculatrice</h1>
            <label>
                Nombre 1 :
                <input type="number" class="m-3" value={nombre1} onChange={handleChangeNombre1} />
            </label>
            <br />
            <label>
                Nombre 2 :
                <input type="number" class="m-3" value={nombre2} onChange={handleChangeNombre2} />
            </label>
            <br />
            <button type="button" class="btn btn-danger m-2" onClick={handleClickAddition}>+</button>
            <button type="button" class="btn btn-warning" onClick={handleClickSoustraction}>-</button>
            <br />
            {nombre1} {operation} {nombre2} = {resultat}
        </div>
    );
}

export default Calculatrice;
