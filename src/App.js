import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button class="btn btn-primary">Clique ici</button>
        <button type="button" class="btn btn-primary btn-lg">Button</button>
      </header>
      {/* <ul>
        <li>Paris</li>
        <li>Montpellier</li>
        <li>Bordeaux</li>
        <li>Lyon</li>
      </ul> */}
    </div>
    
  );
}


export default App;

