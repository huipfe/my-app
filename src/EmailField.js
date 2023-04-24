import React from 'react';

function EmailField() {
    return (
        <div>
            <label htmlFor="email">Adresse e-mail :</label>
            <input type="email" id="email" name="email" required />
        </div>
    );
}

export default EmailField;

