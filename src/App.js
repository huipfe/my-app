import logo from './logo.svg';
import './App.css';
import Button from './Button';
import EmailField from './EmailField';
import Button2 from './Button2';
import ButtonNumberSelector from './ButtonNumberSelector';
import Calculatrice from './Calculatrice';
import Shop from './Shop/Shop.js';

import ListArticles from './List_articles/ListArticles.js';


function App() {
  return (
    <div className="App">

      <section class="m-5 p-3">
        <ListArticles/>
      </section>

      <div class="m-5 p-3"><Button /></div>

      <div class="m-5 p-3"><EmailField /></div>

      <div class="m-5 p-3"><Button2 /></div>

      <div class="m-5 p-3"><ButtonNumberSelector /></div>

      <div class="m-5 p-3"><Calculatrice /></div>

      {/* Section Shop */}
      <section class="m-5 p-3">
        <Shop />
      </section>

    </div>
    
  );
}


export default App;

