import logo from './logo.svg';
import './App.css';
import Button from './Button';
import EmailField from './EmailField';
import Button2 from './Button2';
import ButtonNumberSelector from './ButtonNumberSelector';
import Calculatrice from './Calculatrice';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <div class="m-5 p-3"><Button /></div>

      <div class="m-5 p-3"><EmailField /></div>

      <div class="m-5 p-3"><Button2 /></div>

      <div class="m-5 p-3"><ButtonNumberSelector /></div>

      <div class="m-5 p-3"><Calculatrice /></div>
    </div>
    
  );
}


export default App;

