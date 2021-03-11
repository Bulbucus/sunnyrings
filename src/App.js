
import Produto from './hook/Produto/Produto';

import Home from './components/Home/Home';
import InoxRing from './components/InoxRing/InoxRing';

import './App.scss';

function App() {

  return (
    <>
    <Home></Home>
    <Produto title="Anel em Inox">
      <InoxRing></InoxRing>
    </Produto>
    </>
  );
}

export default App;
