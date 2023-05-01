
import './App.css';
import Button from './Button';
import EmailField from './EmailField';
import Button2 from './Button2';
import ButtonNumberSelector from './ButtonNumberSelector';
import Calculatrice from './Calculatrice';
import Shop from './Shop/Shop.js';
import Profile from './Profile/Profile';

import ListArticles from './List_articles/ListArticles.js';
import Tabs from './Tabs/Tabs.js';

function App() {

  const user = {
    firstname: 'Harvey',
    lastname: 'Kunkel',
    location: {
      country: 'United States',
      city: 'Nashua'
    },
    age: 43,
    picture: "HarveyPicture.jpg",
    interests: [
      'Cinematic FPV drone',
      'Hiking',
      'Music'
    ]
  };
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

      <div>
        <Tabs tabs={Tabs} />
      </div>

      <>
        <Profile user={user} />
        
        {/* Correction */}
        {/* <Profile {...user} /> */}
        
      </>
    </div>
    
  );
}


export default App;

