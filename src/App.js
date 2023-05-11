
import './App.css';
import Button from './Button';
import EmailField from './EmailField';
import Button2 from './Button2';
import ButtonNumberSelector from './ButtonNumberSelector';
import Calculatrice from './Calculatrice';
import Shop from './Shop/Shop.js';

import Profile from './Profile/Profile';
import HarveyPicture from './Profile/HarveyPicture.jpg'

import ListArticles from './List_articles/ListArticles.js';

import Tabs from './Tabs/Tabs.js';


// import StyledComponents from './Styled/StyledComponents';

import Modal from './Styled/StyledComponents';
import styled from 'styled-components';
import Landscape from './Styled/canards_de_bain.png';
import { ThemeProvider } from 'styled-components';
import theme from './Styled/theme';



function App() {
  const Button = styled.button`
  border: 0;
  border-radius: 6px;
  padding: 1rem 2rem;
  color: ${theme.modalTextColor};
  background: ${theme.buttonColor};
  font-weight: bold;
  text-transform: uppercase;
`;

  const GhostButton = styled(Button)`
  background: none;
  color: ${props => props.theme.fontColor};
`;
  const Image = styled.img`
  display: block;
  width: 80%;
  height: auto;
  border-radius: 6px;
  margin: 1rem auto;
`;


  const user = {
    firstname: 'Harvey',
    lastname: 'Kunkel',
    location: {
      country: 'United States',
      city: 'Nashua'
    },
    age: 43,
    picture: HarveyPicture,
    interests: [
      'Cinematic FPV drone',
      'Hiking',
      'Music'
    ]
  };

  <GhostButton>Fermer</GhostButton>
  const modalActions = <Button>Ok</Button>;


  return (
    <ThemeProvider theme={theme}>
    <div className="App">

      {/* <section class="m-5 p-3">
        <ListArticles/>
      </section>

      <div class="m-5 p-3"><Button /></div>

      <div class="m-5 p-3"><EmailField /></div>

      <div class="m-5 p-3"><Button2 /></div>

      <div class="m-5 p-3"><ButtonNumberSelector /></div>

      <div class="m-5 p-3"><Calculatrice /></div>


      <section class="m-5 p-3">
        <Shop />
      </section> 

      <div>
        <Tabs tabs={Tabs} />
      </div> */}

      <>
        {/* <Profile user={user} /> */}
        
        {/* Correction */}
        {/* <Profile {...user} /> */}


      {/* <StyledComponents/> */}
        <Modal
          title="Je suis un titre"
          actions={modalActions}
        >
          <Image src={Landscape} alt="landscape" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie justo et nunc dictum, non fermentum mi ultricies. Nunc malesuada hendrerit fermentum. Donec congue, lacus id tincidunt pharetra, risus arcu molestie sem, rhoncus suscipit nisl tellus a nulla. Sed quis ante porttitor, tempus libero sed, elementum risus.
        </Modal>
      </>
    </div>
    </ThemeProvider>
  );
}


export default App;

