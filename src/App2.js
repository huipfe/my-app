import './App.css';
function App2() {
    const liste = [
        'Croquettes pour le chat',
        'Sacs aspirateur',
        'Poupées',
        'Le dernier Action-Man pour le neveu'
    ];

    return (
        <div className="App">
            <h1>Courses</h1>
            <ul>
                {liste.map(item => <li>{item}</li>)}
            </ul>
        </div>
    );
}

export default App2;